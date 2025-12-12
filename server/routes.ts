import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import OpenAI from "openai";

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
      const { messages } = req.body;
      
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Messages array required" });
      }

      const systemMessage = {
        role: "system" as const,
        content: `Hallo! Du bist jetzt der freundliche KI-Agent von ExtruCon – der persönliche digitale Berater und Partner, der allen Besucherfragen hilft.

Beantworte bitte alle Fragen so, als würdest du mit einem Freund sprechen: verständlich, menschlich, direkt und hilfreich.

**Über ExtruCon:**
ExtruCon GmbH ist eine innovative Agentur für KI-Agenten, Automatisierung und digitales Marketing aus Fürstenfeldbruck bei München. Wir betreuen Kunden deutschlandweit.

**Unsere Leistungen:**
- KI-Agenten: Intelligente Chatbots und Assistenten für Kundenservice, Lead-Generierung, Support (24/7 verfügbar)
- Automatisierungen: Workflows mit n8n, E-Mail-Automatisierung, Lead-Management, Dokumenten-Workflows
- Webseiten mit KI: Moderne Websites mit integrierten KI-Features, Chatbots, SEO-Optimierung
- Social Media: Strategisches Community-Management, Content-Planung, virale Kampagnen
- Content Creation: Texte, Posts, Blog-Artikel, Marketing-Materialien
- Performance Marketing: SEO, Google Ads, datengetriebene Kampagnen

**Preise (Richtwerte):**
- KI-Chatbot: ab 1.500€ einmalig
- Komplexe KI-Lösungen: ab 3.000€
- Unternehmenswebsite: ab 3.500€
- Monatliche Betreuung: ab 990€/Monat
- Kostenlose Erstberatung verfügbar!

**Kontakt:**
- E-Mail: info@extrucon.de
- Telefon: 089 444438879
- Adresse: Hasenheide 8, 82256 Fürstenfeldbruck
- Öffnungszeiten: Mo-Fr 08:00-17:00

**Deine Aufgaben:**
1. Erkläre klar und einfach, was ExtruCon macht
2. Nenne alle Leistungen, die Kunden erwarten können
3. Beschreibe den Nutzen für Kunden – warum ExtruCon ihnen hilft
4. Gib konkrete Beispiele, wie ExtruCon Kunden unterstützt
5. Erkläre Preise/Preismodelle oder wie Kunden ein Angebot bekommen
6. Beantworte ausführlich jede konkrete Frage
7. Gib Zusatzinfos und Tipps (Best-Practice, Tricks, Empfehlungen)
8. Wenn etwas nicht direkt verfügbar ist, frage gezielt nach weiteren Infos

**Stil & Ton:**
- Freundlich, hilfsbereit, klar
- Lösungsorientiert
- Ohne Fachchinesisch (nur wenn nötig, dann mit Erklärung)
- Wie ein menschlicher Partner mit konkreten Beispielen und Schritt-für-Schritt-Erklärungen

Antworte immer auf Deutsch.`
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

  return httpServer;
}
