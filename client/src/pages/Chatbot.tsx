import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessages(prev => [...prev, { role: "assistant", content: data.message }]);
      } else {
        setMessages(prev => [...prev, { role: "assistant", content: "Entschuldigung, ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut." }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: "assistant", content: "Verbindungsfehler. Bitte überprüfen Sie Ihre Internetverbindung." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <SEOHead 
        title="KI-Assistent | ExtruCon GmbH – Fragen Sie unseren Bot"
        description="Sprechen Sie mit unserem KI-Assistenten über KI-Agenten, Automatisierung und digitales Marketing. Kostenlos und unverbindlich."
        keywords="KI Chatbot, ExtruCon Bot, KI Beratung, Automatisierung Beratung"
      />
      <Navbar />
      
      <main className="flex-1 pt-20 flex flex-col">
        <section className="py-8 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Live-Demo: KI-Assistent
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              Testen Sie unseren <span className="text-gradient">KI-Assistenten</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto mb-6">
              Erleben Sie live, wie ein intelligenter KI-Agent funktioniert. Dieser Bot ist ein Beispiel dafür, 
              was wir für Ihr Unternehmen entwickeln können – individuell angepasst an Ihre Branche und Bedürfnisse.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-left">
                <div className="text-primary font-bold mb-1">Sofortige Antworten</div>
                <p className="text-gray-400 text-sm">24/7 verfügbar, beantwortet Kundenfragen in Sekunden statt Stunden.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-left">
                <div className="text-primary font-bold mb-1">Lernfähig</div>
                <p className="text-gray-400 text-sm">Kann auf Ihre Produkte, Services und FAQs trainiert werden.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-left">
                <div className="text-primary font-bold mb-1">Entlastung für Ihr Team</div>
                <p className="text-gray-400 text-sm">Übernimmt wiederkehrende Anfragen – Ihr Team fokussiert auf Wichtiges.</p>
              </div>
            </div>
            
            <p className="text-sm text-gray-500">
              Stellen Sie Fragen zu unseren Leistungen: KI-Agenten, Automatisierungen, Webseiten mit KI, Marketing & mehr.
            </p>
          </div>
        </section>

        <div className="flex-1 container mx-auto px-4 py-6 flex flex-col max-w-3xl">
          <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-4 mb-4 overflow-hidden flex flex-col min-h-[400px]">
            <div className="flex-1 overflow-y-auto space-y-4 pr-2">
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Bot className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Willkommen!</h3>
                  <p className="text-gray-400 text-sm max-w-sm">
                    Stellen Sie mir eine Frage zu unseren Leistungen: KI-Agenten, Automatisierungen, Webseiten mit KI und mehr.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4 justify-center">
                    {["Was sind KI-Agenten?", "Wie funktioniert Automatisierung?", "Was kostet eine Website?"].map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => setInput(suggestion)}
                        className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-white/10 transition-colors"
                        data-testid={`suggestion-${suggestion.slice(0, 10)}`}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.role === "assistant" && (
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-primary" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.role === "user"
                          ? "bg-primary text-background rounded-br-md"
                          : "bg-white/10 text-white rounded-bl-md"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                    {message.role === "user" && (
                      <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-secondary" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3 justify-start"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-white/10 p-3 rounded-2xl rounded-bl-md">
                    <Loader2 className="w-5 h-5 text-gray-400 animate-spin" />
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ihre Frage eingeben..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
              disabled={isLoading}
              data-testid="input-chat"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || isLoading}
              className="px-4 py-3 bg-primary text-background rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              data-testid="button-send"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
