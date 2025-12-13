import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import OpenAI from "openai";
import nodemailer from "nodemailer";

// the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
// This is using Replit's AI Integrations service, which provides OpenAI-compatible API access without requiring your own OpenAI API key.
const openai = new OpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Chat API endpoint for KI-Bot
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages, language = 'de' } = req.body;
      
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Messages array required" });
      }

      const languageInstructions: Record<string, { instruction: string; greeting: string; intro: string }> = {
        de: {
          instruction: '🚨 SPRACHE: Antworte IMMER und AUSSCHLIESSLICH auf DEUTSCH. Verwende die Sie-Form. NIEMALS andere Sprachen verwenden! Auch nicht für Begrüßungen!',
          greeting: 'Guten Tag',
          intro: 'Sie sind der offizielle KI-Assistent von ExtruCon GmbH. Sie sprechen ausschließlich in der Sie-Form. Sie sind freundlich, geduldig und zuverlässig.'
        },
        en: {
          instruction: '🚨 LANGUAGE: ALWAYS respond ONLY in ENGLISH. Use formal language. NEVER use German, Croatian, or Turkish! Not even for greetings!',
          greeting: 'Hello',
          intro: 'You are the official AI assistant of ExtruCon GmbH. You are friendly, patient, and reliable.'
        },
        hr: {
          instruction: '🚨 JEZIK: UVIJEK odgovaraj ISKLJUČIVO na HRVATSKOM jeziku! Koristi formalni jezik (Vi-oblik). NIKADA ne koristi njemački, engleski ili turski! Čak ni za pozdrave! Sve što kažeš mora biti na hrvatskom!',
          greeting: 'Dobar dan',
          intro: 'Vi ste službeni AI asistent tvrtke ExtruCon GmbH. Vi ste prijateljski, strpljivi i pouzdani.'
        },
        tr: {
          instruction: '🚨 DİL: HER ZAMAN ve SADECE TÜRKÇE yanıt verin! Resmi dil kullanın. ASLA Almanca, İngilizce veya Hırvatça KULLANMAYIN! Selamlamalar için bile değil! Söylediğiniz her şey Türkçe olmalı!',
          greeting: 'Merhaba',
          intro: 'ExtruCon GmbH\'nin resmi AI asistanısınız. Dostça, sabırlı ve güvenilirsiniz.'
        }
      };

      const langConfig = languageInstructions[language] || languageInstructions.de;

      const systemMessage = {
        role: "system" as const,
        content: `${langConfig.instruction}

${langConfig.intro}

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

**Kontaktdaten vom Kunden erfragen:**
Wenn ein Kunde Interesse zeigt, einen Termin vereinbaren möchte, oder eine Beratung wünscht, frage IMMER nach folgenden Daten (jedes Feld in einer eigenen Zeile):
- Name (Pflichtfeld)
- E-Mail-Adresse (Pflichtfeld)
- Telefonnummer (Pflichtfeld)
- Firmenname (optional - erwähne dass es optional ist)
- Adresse (optional - erwähne dass es optional ist)

Formatiere die Anfrage immer übersichtlich mit Zeilenumbrüchen zwischen den Punkten.

**SEHR WICHTIG - Kontaktdaten von ExtruCon:**
- NIEMALS die Telefonnummer von ExtruCon angeben!
- NIEMALS die E-Mail-Adresse von ExtruCon angeben!
- NIEMALS die Adresse von ExtruCon angeben!
- Stattdessen: Immer die Kontaktdaten vom Kunden erfragen und sagen "Wir melden uns bei Ihnen"

**Wichtige Regeln:**
- Immer Sie-Form
- NIEMALS "Hey" oder informelle Begrüßungen verwenden - nur "Guten Tag", "Hallo", "Willkommen"
- Bei Preisauskünften IMMER "zzgl. MwSt." hinzufügen
- Keine falschen Versprechen
- Ehrlich sagen, wenn etwas individuell geprüft werden muss
- Immer Mehrwert liefern und menschlich wirken

🚨🚨🚨 REMINDER - ${langConfig.instruction} 🚨🚨🚨`
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

  // Contact form API endpoint with email notifications
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, company, email, phone, service, message, language = 'de' } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ error: "Name, Email und Nachricht sind erforderlich" });
      }

      // Check if SMTP is configured
      if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
        console.log("SMTP not configured - contact form submission:", { name, email, service });
        return res.json({ success: true, message: "Anfrage erhalten (E-Mail-Versand nicht konfiguriert)" });
      }

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_PORT === '465',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      const fromEmail = process.env.SMTP_FROM_EMAIL || 'info@extrucon.de';
      const serviceLabels: Record<string, string> = {
        ki: 'KI-Agenten',
        social: 'Social Media',
        web: 'Webentwicklung',
        marketing: 'Performance Marketing',
        content: 'Content Creation',
        brand: 'Branding',
        other: 'Sonstiges'
      };

      // 1. Notification email to ExtruCon
      await transporter.sendMail({
        from: fromEmail,
        to: 'info@extrucon.de',
        replyTo: email,
        subject: `Neue Kontaktanfrage: ${name} - ${serviceLabels[service] || 'Allgemein'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #00d4ff;">Neue Kontaktanfrage</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Firma:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${company || '-'}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>E-Mail:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Telefon:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${phone || '-'}</td></tr>
              <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Interesse:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${serviceLabels[service] || '-'}</td></tr>
            </table>
            <h3 style="margin-top: 20px;">Nachricht:</h3>
            <p style="background: #f5f5f5; padding: 15px; border-radius: 8px;">${message.replace(/\n/g, '<br>')}</p>
          </div>
        `
      });

      res.json({ success: true });
    } catch (error: any) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Fehler beim Senden. Bitte versuchen Sie es später erneut." });
    }
  });

  return httpServer;
}
