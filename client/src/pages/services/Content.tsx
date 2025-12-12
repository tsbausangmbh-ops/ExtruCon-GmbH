import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { PenTool, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import contentImg from "@assets/generated_images/abstract_content_creation_visualization.png";

export default function Content() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={contentImg} alt="Content Creation" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <PenTool className="w-12 h-12 text-pink-400" />
                <span className="text-pink-400 font-semibold">Leistung</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
                Texting & Postings
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Zielgruppengenaue Texte und kreative Social Media Posts, die Interaktion 
                fördern, Ihre Botschaft transportieren und verkaufen.
              </p>
              <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white" data-testid="button-contact-content">
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
                { title: "Social Media Posts", desc: "Kreative, aufmerksamkeitsstarke Posts für alle Plattformen." },
                { title: "Werbetexte", desc: "Überzeugende Copy für Anzeigen, Landing Pages und Kampagnen." },
                { title: "Blog-Artikel", desc: "SEO-optimierte Fachartikel, die Expertise demonstrieren." },
                { title: "Newsletter", desc: "Ansprechende E-Mail-Texte mit hohen Öffnungs- und Klickraten." },
                { title: "Website-Texte", desc: "Verkaufsstarke Texte für Ihre gesamte Online-Präsenz." },
                { title: "Content-Strategie", desc: "Redaktionspläne und Themenkonzepte für kontinuierlichen Output." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-card/30 border border-white/5"
                >
                  <Check className="w-8 h-8 text-pink-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vorteile */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-display text-white mb-8">Ihre Vorteile</h2>
              <div className="space-y-4 text-left">
                {[
                  "Professionelle Texte, die Ihre Zielgruppe ansprechen",
                  "Konsistente Markenstimme über alle Kanäle",
                  "Höhere Engagement-Raten durch relevanten Content",
                  "Zeitersparnis durch externe Content-Produktion",
                  "SEO-optimierte Inhalte für bessere Sichtbarkeit"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-card/30">
                    <Check className="w-5 h-5 text-pink-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-pink-900/20 to-purple-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-display text-white mb-4">Bereit für Content, der wirkt?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns Inhalte erstellen, die Ihre Zielgruppe begeistern und zum Handeln bewegen.
            </p>
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white" data-testid="button-cta-content">
              Jetzt Projekt starten <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
