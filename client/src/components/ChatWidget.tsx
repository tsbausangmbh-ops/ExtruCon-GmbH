import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, Loader2, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

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
        body: JSON.stringify({ messages: [...messages, userMessage], language }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessages(prev => [...prev, { role: "assistant", content: data.message }]);
      } else {
        setMessages(prev => [...prev, { role: "assistant", content: t.chatbotPage?.errorMsg || "Es ist ein Fehler aufgetreten." }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: "assistant", content: t.chatbotPage?.connectionError || "Verbindungsfehler." }]);
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
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-4 z-50 w-[500px] max-w-[calc(100vw-2rem)] bg-background/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-primary to-secondary p-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">ExtruCon AI</h3>
                  <p className="text-white/70 text-sm">{t.hero?.available || "24/7 verfügbar"}</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
                data-testid="button-close-chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-[550px] overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="text-center py-8">
                  <Bot className="w-12 h-12 text-primary/50 mx-auto mb-3" />
                  <p className="text-gray-400 text-sm">
                    {t.chatbot?.welcome || "Hallo! Wie kann ich Ihnen helfen?"}
                  </p>
                </div>
              )}

              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-xl text-base ${
                      message.role === "user"
                        ? "bg-primary text-background rounded-br-sm"
                        : "bg-white/10 text-white rounded-bl-sm"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-3 rounded-xl rounded-bl-sm">
                    <Loader2 className="w-4 h-4 text-gray-400 animate-spin" />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-white/10">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t.chatbot?.placeholder || "Ihre Frage..."}
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-base placeholder:text-gray-500 focus:outline-none focus:border-primary/50"
                  disabled={isLoading}
                  data-testid="input-chat-widget"
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="px-4 py-3 bg-primary text-background rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
                  data-testid="button-send-widget"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-32 right-4 z-50 flex items-center gap-3">
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-green-500/20 backdrop-blur-md border border-green-400/30 rounded-full px-5 py-3 text-base text-white shadow-lg"
          >
            <span className="font-semibold">{t.chatbot?.bubble || "Fragen? KI-Bot hilft!"}</span>
          </motion.div>
        )}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform ring-4 ring-primary/30"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          data-testid="button-chat-widget"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="w-9 h-9 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <MessageCircle className="w-9 h-9 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
}
