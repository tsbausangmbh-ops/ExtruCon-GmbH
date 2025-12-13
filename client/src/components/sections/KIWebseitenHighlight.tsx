import { motion } from "framer-motion";
import { Globe, Sparkles, ArrowRight, CheckCircle, Bot, MessageSquare } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function KIWebseitenHighlight() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gradient-to-b from-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Unser Hauptprodukt
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              KI-Webseiten mit NLP-Chatbots
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              Moderne Websites mit integrierten KI-Features, die Ihre Kunden verstehen und Probleme automatisch lösen. 
              24/7 verfügbar, ohne Personalkosten.
            </p>
            
            <div className="space-y-3 mb-8">
              {[
                "NLP-Chatbot versteht natürliche Sprache",
                "Automatische Terminbuchung & Lead-Qualifizierung",
                "SEO-optimiert für bessere Google-Rankings",
                "95% der Anfragen automatisch beantwortet"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="/webseiten-ki"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-background font-bold rounded-lg hover:bg-secondary/90 transition-colors"
              data-testid="link-ki-webseiten-home"
            >
              Mehr erfahren <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-white font-medium">ExtruCon KI-Bot</p>
                  <p className="text-gray-500 text-sm">Online</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-white/10 rounded-lg rounded-bl-sm p-3 max-w-[80%]">
                  <p className="text-gray-300 text-sm">Hallo! Wie kann ich Ihnen helfen?</p>
                </div>
                <div className="bg-primary/20 rounded-lg rounded-br-sm p-3 max-w-[80%] ml-auto">
                  <p className="text-gray-300 text-sm">Ich brauche morgen einen Termin für mein Dach.</p>
                </div>
                <div className="bg-white/10 rounded-lg rounded-bl-sm p-3 max-w-[85%]">
                  <p className="text-gray-300 text-sm">Ich habe morgen um 10:00 und 14:00 Uhr freie Termine. Welcher passt Ihnen besser?</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Ihre Nachricht..." 
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-gray-500"
                    disabled
                  />
                  <button className="px-3 py-2 bg-secondary rounded-lg">
                    <MessageSquare className="w-4 h-4 text-background" />
                  </button>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2">
              <span className="text-green-400 text-sm font-medium">24/7 verfügbar</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
