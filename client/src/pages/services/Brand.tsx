import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Fingerprint, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import brandImg from "@assets/generated_images/abstract_digital_brand_identity_construction.png";

export default function Brand() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={brandImg} alt="Markenaufbau" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Fingerprint className="w-12 h-12 text-amber-400" />
                <span className="text-amber-400 font-semibold">Leistung</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
                Markenaufbau & Brand Identity
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Entwicklung unverwechselbarer Markenidentitäten, die Vertrauen schaffen, 
                im Gedächtnis bleiben und Ihr Unternehmen von der Konkurrenz abheben.
              </p>
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black" data-testid="button-contact-brand">
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
                { title: "Markenanalyse", desc: "Tiefgehende Analyse Ihrer aktuellen Positionierung und des Wettbewerbsumfelds." },
                { title: "Markenstrategie", desc: "Entwicklung einer klaren Positionierung und Markenbotschaft." },
                { title: "Logo & Visuelles Design", desc: "Erstellung eines einzigartigen Logos und visueller Gestaltungsrichtlinien." },
                { title: "Corporate Design", desc: "Vollständiges Erscheinungsbild inkl. Farben, Typografie und Bildsprache." },
                { title: "Brand Guidelines", desc: "Dokumentation aller Markenelemente für konsistente Anwendung." },
                { title: "Marken-Relaunch", desc: "Modernisierung bestehender Marken für die digitale Zukunft." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-card/30 border border-white/5"
                >
                  <Check className="w-8 h-8 text-amber-400 mb-4" />
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
                  "Einzigartige Markenidentität, die sich vom Wettbewerb abhebt",
                  "Konsistentes Erscheinungsbild über alle Kanäle hinweg",
                  "Stärkere Kundenbindung durch emotionale Markenerlebnisse",
                  "Höhere Wiedererkennbarkeit und Markenbekanntheit",
                  "Professionelle Außenwirkung für mehr Vertrauen"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-card/30">
                    <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-amber-900/20 to-orange-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-display text-white mb-4">Bereit für Ihre starke Marke?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam eine Marke entwickeln, die Ihre Werte verkörpert und Ihre Zielgruppe begeistert.
            </p>
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-black" data-testid="button-cta-brand">
              Jetzt Projekt starten <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
