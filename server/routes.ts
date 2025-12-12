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
        content: `Du bist der KI-Assistent von ExtruCon GmbH, einer Agentur für KI-Agenten, Automatisierung und digitales Marketing aus Fürstenfeldbruck bei München. 

Deine Aufgaben:
- Beantworte Fragen zu unseren Leistungen: KI-Agenten, Automatisierungen (n8n), Webseiten mit KI, Social Media, Content Creation, Marketing
- Hilf Interessenten bei der Auswahl der richtigen Lösung
- Erkläre komplexe KI-Themen einfach und verständlich
- Leite bei konkretem Interesse an Kontakt weiter: info@extrucon.de oder 089 444438879

Sei freundlich, professionell und hilfreich. Antworte auf Deutsch.`
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
