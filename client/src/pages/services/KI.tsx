import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Bot, Check, ArrowRight, CheckCircle } from "lucide-react";
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
            <img src={aiImg} alt="KI Agentur Fürstenfeldbruck - Künstliche Intelligenz und Automatisierung" className="w-full h-full object-cover opacity-20" />
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
                <span className="text-cyan-400 font-semibold">KI Agentur Fürstenfeldbruck</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
                KI & Automatisierung für Unternehmen in München
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Maßgeschneiderte KI-Lösungen, Chatbots und intelligente Automatisierungs-Workflows 
                für Unternehmen in Fürstenfeldbruck, München und ganz Bayern. Sparen Sie Zeit und Kosten 
                durch modernste Künstliche Intelligenz.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-black" data-testid="button-contact-ki">
                  Kostenlose KI-Beratung <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Leistungsumfang */}
        <section className="py-16 bg-card/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-display text-white mb-4 text-center">Unsere KI-Leistungen</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Von intelligenten Chatbots bis zur kompletten Prozessautomatisierung – wir bringen KI in Ihr Unternehmen.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "KI-Chatbots & Assistenten", desc: "Intelligente Chatbots für Kundenservice, Beratung und Vertrieb – 24/7 verfügbar für Ihre Kunden in München." },
                { title: "Workflow-Automatisierung", desc: "Automatisierung wiederkehrender Aufgaben mit n8n, Make und Zapier. Sparen Sie bis zu 80% Zeit." },
                { title: "KI-Content-Erstellung", desc: "KI-gestützte Texte, Bilder und Videos für Ihr Marketing – schneller und kosteneffizienter." },
                { title: "Datenanalyse & Insights", desc: "KI-basierte Auswertungen Ihrer Geschäftsdaten für bessere Entscheidungen." },
                { title: "Personalisierung", desc: "Individuelle Kundenerlebnisse durch intelligente Algorithmen und Machine Learning." },
                { title: "Integration & APIs", desc: "Nahtlose Einbindung von KI in Ihre bestehenden Systeme und Software." }
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
            <h2 className="text-3xl font-bold font-display text-white mb-12 text-center">KI-Technologien die wir einsetzen</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {["OpenAI / GPT-4", "Claude AI", "Google Gemini", "Midjourney", "DALL-E", "n8n", "Make", "Zapier", "Custom APIs"].map((tech, i) => (
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
              <h2 className="text-3xl font-bold font-display text-white mb-8">Vorteile von KI für Ihr Unternehmen</h2>
              <div className="space-y-4 text-left">
                {[
                  "24/7 Verfügbarkeit durch automatisierte Kundenbetreuung",
                  "Bis zu 80% Zeitersparnis bei wiederkehrenden Aufgaben",
                  "Skalierbare Prozesse ohne zusätzliche Personalkosten",
                  "Bessere Kundenerlebnisse durch schnelle Reaktionszeiten",
                  "Datenbasierte Entscheidungen für mehr Geschäftserfolg"
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

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-display text-white mb-8 text-center">
              Häufige Fragen zu KI & Automatisierung
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { 
                  q: "Was kostet ein KI-Chatbot für mein Unternehmen?", 
                  a: "Ein einfacher Chatbot startet ab 1.500€ einmalig. Komplexere KI-Lösungen mit individueller Anpassung beginnen bei 3.000€. Wir beraten Sie kostenlos zu den Möglichkeiten." 
                },
                { 
                  q: "Brauche ich technisches Wissen für KI-Tools?", 
                  a: "Nein! Wir übernehmen die komplette technische Umsetzung und schulen Ihr Team. Sie erhalten eine benutzerfreundliche Lösung, die einfach zu bedienen ist." 
                },
                { 
                  q: "Wie schnell ist ein KI-Projekt umgesetzt?",
                  a: "Einfache Chatbots sind in 1-2 Wochen einsatzbereit. Komplexere Automatisierungen benötigen 4-8 Wochen je nach Umfang." 
                },
                { 
                  q: "Ist KI auch für kleine Unternehmen sinnvoll?",
                  a: "Absolut! Gerade kleine Unternehmen profitieren von Automatisierung, da sie Zeit für das Kerngeschäft freisetzt. Wir haben Lösungen für jedes Budget." 
                }
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-card/30 border border-white/5"
                >
                  <h3 className="text-lg font-bold text-white mb-2 flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    {faq.q}
                  </h3>
                  <p className="text-gray-400 ml-7">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-display text-white mb-4">Bereit für die KI-Revolution in Ihrem Unternehmen?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre Prozesse mit KI optimieren. Kostenlose Erstberatung für Unternehmen aus Fürstenfeldbruck und München.
            </p>
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-black" data-testid="button-cta-ki">
              Jetzt KI-Projekt starten <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
