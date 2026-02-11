import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import OpenAI from "openai";
let _calendarModule: typeof import("./lib/googleCalendar") | null = null;
async function getCalendarModule() {
  if (!_calendarModule) {
    _calendarModule = await import("./lib/googleCalendar");
  }
  return _calendarModule;
}
import { sendContactEmail } from "./lib/email";
import { SITEMAP_XML, ROBOTS_TXT } from "./seoFiles";
import { isCrawler, getStaticPages, handleCrawlerRequest, handleVisitorSSR, recachePrerenderPages } from "./lib/prerender";

const openai = new OpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Serve sitemap.xml explicitly before catch-all routes
  app.get("/sitemap.xml", (_req, res) => {
    res.set("Content-Type", "application/xml");
    res.send(SITEMAP_XML);
  });

  // Serve robots.txt explicitly
  app.get("/robots.txt", (_req, res) => {
    res.set("Content-Type", "text/plain");
    res.send(ROBOTS_TXT);
  });

  const STATIC_PAGES = getStaticPages();

  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.query.lang) {
      const cleanUrl = req.path === '/' ? '/' : req.path.replace(/\/$/, '') + '/';
      return res.redirect(301, cleanUrl);
    }
    next();
  });

  app.use(async (req: Request, res: Response, next: NextFunction) => {
    const userAgent = req.headers['user-agent'] || '';
    const reqPath = req.path;

    if (req.method !== 'GET' || !STATIC_PAGES[reqPath]) {
      return next();
    }

    if (isCrawler(userAgent)) {
      try {
        const { html, source } = await handleCrawlerRequest(reqPath);

        if (html) {
          res.set('Content-Type', 'text/html');
          res.set('X-SSR-Source', source);
          return res.send(html);
        }
      } catch (error: any) {
        console.error(`[SSR] Error handling crawler request for ${reqPath}:`, error.message);
      }
    } else {
      try {
        const result = handleVisitorSSR(reqPath);

        if (result) {
          res.set('Content-Type', 'text/html');
          res.set('X-SSR-Source', result.source);
          return res.send(result.html);
        }
      } catch (error: any) {
        console.error(`[SSR] Error handling visitor SSR for ${reqPath}:`, error.message);
      }
    }

    next();
  });

  let lastRecacheTime = 0;
  const RECACHE_COOLDOWN = 5 * 60 * 1000;

  app.post("/api/prerender/recache", async (req: Request, res: Response) => {
    const authHeader = req.headers['x-prerender-recache-key'];
    const expectedKey = process.env.PRERENDER_TOKEN;

    if (!expectedKey || authHeader !== expectedKey) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const now = Date.now();
    if (now - lastRecacheTime < RECACHE_COOLDOWN) {
      const remainingSec = Math.ceil((RECACHE_COOLDOWN - (now - lastRecacheTime)) / 1000);
      return res.status(429).json({
        error: "Rate limited",
        message: `Please wait ${remainingSec}s before next recache`,
      });
    }

    lastRecacheTime = now;

    try {
      const result = await recachePrerenderPages();
      res.json({
        message: "Cache refresh initiated",
        ...result,
      });
    } catch (error: any) {
      console.error("[Prerender-Cache] Error:", error);
      res.status(500).json({ error: "Cache refresh failed", details: error.message });
    }
  });

  // Chat API endpoint for KI-Bot
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages, language = 'de' } = req.body;
      
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Messages array required" });
      }

      const languageInstructions: Record<string, string> = {
        de: 'SPRACHE: Antworte IMMER auf Deutsch. Verwende die Sie-Form. Keine andere Sprache verwenden!',
        en: 'LANGUAGE: ALWAYS respond in English. Use formal language. Do NOT use any other language!',
        hr: 'JEZIK: UVIJEK odgovaraj na hrvatskom jeziku. Koristi formalni jezik. NE koristi druge jezike!',
        tr: 'DİL: HER ZAMAN Türkçe yanıt verin. Kesinlikle başka bir dil kullanmayın! Hırvatça, Almanca veya İngilizce KULLANMAYIN. Sadece Türkçe!'
      };

      const languageInstruction = languageInstructions[language] || languageInstructions.de;

      const systemMessage = {
        role: "system" as const,
        content: `Sie sind der offizielle KI-Assistent von ExtruCon / You are the official AI assistant of ExtruCon.
Sie sprechen ausschließlich in der Sie-Form.
Sie sind kein kalter Roboter, sondern ein freundlicher, geduldiger und zuverlässiger digitaler Ansprechpartner, der Besucher ehrlich berät – so, als würden Sie einem guten Bekannten helfen.

**Über ExtruCon GmbH:**
ExtruCon ist eine Agentur für digitales Marketing, KI-Automatisierung und modernes Webdesign aus Fürstenfeldbruck bei München. Das Unternehmen automatisiert Routineaufgaben, damit Sie sich auf Ihr Kerngeschäft konzentrieren können. Typische Vorteile: bis zu 80% Zeitersparnis, 24/7-Verfügbarkeit, fehlerfreie Abläufe und Skalierbarkeit ohne zusätzlichen Personalaufwand.

**Kernangebote:**

1. KI-Agenten – Intelligente Assistenten für verschiedene Aufgaben:
   - Kundenservice-Agent: 24/7-Support und FAQ-Automatisierung
   - Analyse-Agent: Automatische Auswertungen und Reports
   - Automatisierungs-Agent: Workflow-Automatisierungen mit über 500 Integrationen
   - Content-Agent: Texte und Posts im Unternehmensstil
   - E-Mail-Agent: Automatische Verarbeitung von E-Mails
   - Termin-Agent: Terminplanung und Buchung
   - E-Commerce-Agent: Kaufberatung und Bestelltracking
   - Dokumenten-Agent: Datenextraktion aus PDFs

2. Automatisierungen – ExtruCon verbindet Ihre bestehenden Tools:
   - E-Mail-Versand, Lead-Management, Dokumenten-Workflows
   - E-Commerce-Prozesse, Terminplanung, Daten-Synchronisation
   - Reporting und komplexe Prozess-Workflows
   - Basiert auf n8n mit über 500 Integrationen

3. Webseiten mit KI-Features:
   - Chatbots, automatische Content-Erstellung, Bild-Optimierung
   - KI-SEO-Analyse, Personalisierung, intelligente Analytics
   - Ladezeiten unter 2 Sekunden, höhere Conversion-Rates
   - Responsive Design, integrierter KI-Chatbot, SEO-Optimierung

**Weitere Leistungen:**
- Branding/Markenaufbau
- Texting & Social-Media-Posts
- Social-Media-Management
- Performance-Marketing
- Hoch performante Web-Apps

**Technologie-Stack:**
- OpenAI GPT-4 und Claude AI für natürliche Dialoge
- LangChain für Modell-Verknüpfung
- Vektor-Datenbanken für kontextbezogene Antworten
- n8n-Workflows zur No-Code-Automatisierung
- React/Next.js, WordPress, Webflow, Tailwind CSS, Vercel

**ExtruCon-Erfolgssystem (3 Stufen):**
1. Lokale Dominanz durch Geo-SEO (Top-Platzierungen bei Google)
2. Qualifizierte Leads durch Content-Strategie
3. Automatisierte Conversion mittels KI-Chatbots

**Arbeitsprozess (4 Phasen):**
1. Vision – Ziele verstehen
2. Strategie – Konzept entwickeln
3. Umsetzung – Technisch realisieren
4. Erfolg – Optimieren und messen

**Warum ExtruCon?**
- Deutschlandweite Expertise aus Fürstenfeldbruck
- Messbare Ergebnisse (transparente KPIs, monatliches Reporting)
- Persönliche Betreuung mit festen Ansprechpartnern
- Erste Resultate nach 4-6 Wochen
- Über 50 erfolgreich umgesetzte Projekte

**Sprache & Ton:**
- Immer sehr einfaches, klares Deutsch
- Keine Fachbegriffe – oder nur mit einfacher Erklärung
- Kurze Sätze, Schritt-für-Schritt erklären
- Ruhig, freundlich, verständnisvoll, lösungsorientiert

**PREISE (alle Preise zzgl. MwSt.):**

1. KI-Agenten:
   - Starter: ab 990€ einmalig + ab 50€/Monat (1 KI-Agent, Grundfunktionen, E-Mail-Support)
   - Business: ab 2.490€ einmalig + ab 99€/Monat (bis zu 3 Agenten, Erweiterte Integrationen, Prioritäts-Support)
   - Enterprise: Individuell auf Anfrage (Unbegrenzte Agenten, Komplexe Workflows, Dedizierter Support)
   - Einfacher Chatbot: ab 1.500€ einmalig
   - Komplexere KI-Lösungen: ab 3.000€ einmalig
   - Laufende Kosten pro Agent: 50-200€/Monat (je nach Nutzung)

2. Automatisierungen:
   - Einfache Automatisierungen: ab 500€
   - Komplexere Workflows (mehrere Systeme): ab 1.500€

3. Webseiten:
   - Landing Page: ab 1.500€
   - Blog/Content-Plattform: ab 2.500€
   - Unternehmenswebsite: ab 3.500€
   - E-Commerce Shop: ab 5.000€
   - Komplexe E-Commerce-Lösungen: ab 7.000€
   - Hosting & Wartung: ab 49€/Monat

4. Marketing-Pakete:
   - Marketing-Pakete: ab 990€/Monat
   - Social Media (1 Kanal): ab 790€/Monat
   - Multi-Channel Social Media: ab 1.490€/Monat
   - SEO-Optimierung: ab 990€/Monat

WICHTIG: Bei jeder Preisauskunft immer "zzgl. MwSt." (plus Mehrwertsteuer) erwähnen!

**Kontakt:**
- E-Mail: info@extrucon.de
- Telefon: 089 444438879
- Adresse: Hasenheide 8, 82256 Fürstenfeldbruck

**Wichtige Regeln:**
- Immer Sie-Form
- NIEMALS "Hey" oder informelle Begrüßungen verwenden - nur "Guten Tag", "Hallo", "Willkommen"
- Bei Preisauskünften IMMER "zzgl. MwSt." hinzufügen
- Keine falschen Versprechen
- Ehrlich sagen, wenn etwas individuell geprüft werden muss
- Immer Mehrwert liefern und menschlich wirken

Am Ende freundlich anbieten: „Wenn Sie möchten, fasse ich Ihnen alles kurz zusammen oder erkläre Ihnen den nächsten Schritt ganz in Ruhe." / At the end, kindly offer: "If you like, I can summarize everything briefly or explain the next step in detail."

**WICHTIG / IMPORTANT:** ${languageInstruction}`
      };

      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [systemMessage, ...messages],
        max_completion_tokens: 1024,
      });

      const assistantMessage = response.choices[0]?.message?.content || "Entschuldigung, ich konnte keine Antwort generieren.";
      
      res.json({ message: assistantMessage });
    } catch (error: any) {
      console.error("Chat API error:", error);
      res.status(500).json({ error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut." });
    }
  });

  // Calendar API - Get available time slots for a specific date
  app.get("/api/calendar/slots", async (req, res) => {
    try {
      const { date } = req.query;
      
      if (!date || typeof date !== 'string') {
        return res.status(400).json({ error: "Date parameter required (YYYY-MM-DD)" });
      }

      const requestedDate = new Date(date);
      const day = requestedDate.getDay();
      
      // Check if weekend
      if (day === 0 || day === 6) {
        return res.json({ 
          slots: [], 
          message: "Wochenende - Geschlossen (Sa & So)",
          businessHours: "Mo-Fr 08:00-17:00"
        });
      }

      // Get events for this date
      const startOfDay = new Date(requestedDate);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(requestedDate);
      endOfDay.setHours(23, 59, 59, 999);

      const cal = await getCalendarModule();
      const events = await cal.listEvents('primary', startOfDay.toISOString(), endOfDay.toISOString());
      const availableSlots = cal.getAvailableSlots(requestedDate, events);

      res.json({ 
        slots: availableSlots,
        businessHours: "Mo-Fr 08:00-17:00",
        date: date
      });
    } catch (error: any) {
      console.error("Calendar slots error:", error);
      res.status(500).json({ error: "Kalender konnte nicht geladen werden." });
    }
  });

  // Calendar API - Book an appointment
  app.post("/api/calendar/book", async (req, res) => {
    try {
      const { date, time, name, email, phone, message } = req.body;
      
      if (!date || !time || !name || !email) {
        return res.status(400).json({ error: "Datum, Uhrzeit, Name und E-Mail sind erforderlich." });
      }

      // Validate time format is allowed (HH:00 between 08 and 16)
      const allowedTimes = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];
      if (!allowedTimes.includes(time)) {
        return res.status(400).json({ 
          error: "Ungültige Uhrzeit. Termine nur zur vollen Stunde zwischen 08:00 und 16:00." 
        });
      }

      // Validate date format (YYYY-MM-DD)
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (!dateRegex.test(date)) {
        return res.status(400).json({ error: "Ungültiges Datumsformat." });
      }

      // Check if weekend
      const requestedDate = new Date(date + 'T12:00:00');
      const day = requestedDate.getDay();
      if (day === 0 || day === 6) {
        return res.status(400).json({ 
          error: "Termine nur Mo-Fr möglich. Wochenende geschlossen." 
        });
      }

      // Re-check for conflicts before booking
      const hour = parseInt(time.split(':')[0]);
      const slotStartBerlin = `${date}T${time}:00`;
      const slotEndBerlin = `${date}T${(hour + 1).toString().padStart(2, '0')}:00:00`;

      // Get existing events to check for conflicts
      const startOfDay = new Date(date + 'T00:00:00+01:00');
      const endOfDay = new Date(date + 'T23:59:59+01:00');
      const cal = await getCalendarModule();
      const existingEvents = await cal.listEvents('primary', startOfDay.toISOString(), endOfDay.toISOString());
      
      // Check if slot is already booked (including 2-hour buffer)
      const slotStart = new Date(slotStartBerlin + '+01:00');
      const slotEnd = new Date(slotEndBerlin + '+01:00');
      
      const hasConflict = existingEvents.some(event => {
        const startStr = event.start?.dateTime || event.start?.date;
        const endStr = event.end?.dateTime || event.end?.date;
        if (!startStr || !endStr) return false;
        const eventStart = new Date(startStr);
        const eventEnd = new Date(endStr);
        
        // Add 2-hour buffer before and after each event
        const bufferStart = new Date(eventStart.getTime() - 2 * 60 * 60 * 1000);
        const bufferEnd = new Date(eventEnd.getTime() + 2 * 60 * 60 * 1000);
        
        return slotStart < bufferEnd && slotEnd > bufferStart;
      });

      if (hasConflict) {
        // Get 3 alternative suggestions
        const alternatives = cal.getAlternativeSlots(requestedDate, existingEvents, 3);
        
        return res.status(409).json({ 
          error: "Dieser Termin ist leider nicht mehr verfügbar.",
          alternatives: alternatives,
          message: "Hier sind 3 alternative Termine:"
        });
      }

      // Create the event
      const description = `
Terminbuchung über Website

Name: ${name}
E-Mail: ${email}
${phone ? `Telefon: ${phone}` : ''}
${message ? `Nachricht: ${message}` : ''}
      `.trim();

      const event = await cal.createEvent(
        'primary',
        `Beratungsgespräch: ${name}`,
        description,
        slotStartBerlin,
        slotEndBerlin,
        email
      );

      res.json({ 
        success: true, 
        message: "Termin erfolgreich gebucht!",
        eventId: event.id,
        start: event.start,
        end: event.end
      });
    } catch (error: any) {
      console.error("Calendar booking error:", error);
      res.status(500).json({ error: "Termin konnte nicht gebucht werden. Bitte versuchen Sie es erneut." });
    }
  });

  // Contact form API endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, company, phone, service, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: "Name, E-Mail und Nachricht sind erforderlich." });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." });
      }

      const success = await sendContactEmail({ name, email, company, phone, service, message });

      if (success) {
        res.json({ success: true, message: "Ihre Nachricht wurde erfolgreich gesendet!" });
      } else {
        res.status(500).json({ error: "E-Mail konnte nicht gesendet werden. Bitte versuchen Sie es später erneut." });
      }
    } catch (error: any) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut." });
    }
  });

  return httpServer;
}
