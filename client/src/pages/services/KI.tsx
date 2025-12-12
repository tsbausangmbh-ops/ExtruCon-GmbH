import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Bot, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import aiImg from "@assets/generated_images/glowing_neural_network_brain.png";

export default function KI() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={aiImg} alt="KI & Automatisierung" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Bot className="w-12 h-12 text-cyan-400" />
                <span className="text-cyan-400 font-semibold">Leistung</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
                KI & Automatisierung
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Maßgeschneiderte KI-Bots und intelligente Automatisierungs-Workflows 
                zur Optimierung Ihrer Geschäftsprozesse – rund um die Uhr.
              </p>
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-black" data-testid="button-contact-ki">
                Kostenlose Beratung <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Leistungsumfang */}
        <section className="py-16 bg-card/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-display text-white mb-12 text-center">Was wir für Sie tun</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Chatbots & Assistenten", desc: "Intelligente Chatbots für Kundenservice, Beratung und Vertrieb." },
                { title: "Workflow-Automatisierung", desc: "Automatisierung wiederkehrender Aufgaben und Prozesse." },
                { title: "KI-Content-Erstellung", desc: "KI-gestützte Texte, Bilder und Videos für Ihr Marketing." },
                { title: "Datenanalyse & Insights", desc: "KI-basierte Auswertungen für bessere Geschäftsentscheidungen." },
                { title: "Personalisierung", desc: "Individuelle Kundenerlebnisse durch intelligente Algorithmen." },
                { title: "Integration & APIs", desc: "Nahtlose Einbindung von KI in Ihre bestehenden Systeme." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-card/30 border border-white/5"
                >
                  <Check className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologien */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-display text-white mb-12 text-center">Unsere Technologien</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {["OpenAI / GPT", "Claude AI", "Google Gemini", "Midjourney", "n8n", "Make", "Zapier", "Custom APIs"].map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-6 py-3 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vorteile */}
        <section className="py-16 bg-card/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-display text-white mb-8">Ihre Vorteile</h2>
              <div className="space-y-4 text-left">
                {[
                  "24/7 Verfügbarkeit durch automatisierte Systeme",
                  "Massive Zeitersparnis bei wiederkehrenden Aufgaben",
                  "Skalierbare Prozesse ohne zusätzliche Personalkosten",
                  "Bessere Kundenerlebnisse durch schnelle Reaktionszeiten",
                  "Datenbasierte Entscheidungen für mehr Erfolg"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-card/30">
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-display text-white mb-4">Bereit für die KI-Revolution?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre Prozesse mit KI optimieren und automatisieren.
            </p>
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-black" data-testid="button-cta-ki">
              Jetzt Projekt starten <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
