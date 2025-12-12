import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Globe, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import webImg from "@assets/generated_images/holographic_creative_interface.png";

export default function Web() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={webImg} alt="Web Entwicklung" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-12 h-12 text-blue-400" />
                <span className="text-blue-400 font-semibold">Leistung</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
                Web & Digitale Plattformen
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Hochleistungsfähige, visuell beeindruckende Websites und Web-Apps 
                für das moderne Web – responsiv, schnell und benutzerfreundlich.
              </p>
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white" data-testid="button-contact-web">
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
                { title: "Corporate Websites", desc: "Professionelle Unternehmenswebsites mit modernem Design." },
                { title: "E-Commerce & Shops", desc: "Leistungsstarke Online-Shops für Ihr digitales Geschäft." },
                { title: "Landing Pages", desc: "Konversionsoptimierte Seiten für Kampagnen und Produkte." },
                { title: "Web-Applikationen", desc: "Komplexe Web-Apps mit individueller Funktionalität." },
                { title: "CMS & Blog-Systeme", desc: "Einfach zu pflegende Content-Management-Lösungen." },
                { title: "Wartung & Support", desc: "Laufende Betreuung, Updates und technischer Support." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-card/30 border border-white/5"
                >
                  <Check className="w-8 h-8 text-blue-400 mb-4" />
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
              {["React", "Next.js", "TypeScript", "Node.js", "WordPress", "Shopify", "Webflow", "Tailwind CSS"].map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-6 py-3 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300"
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
                  "Moderne, responsive Designs für alle Geräte",
                  "Schnelle Ladezeiten für bessere User Experience",
                  "SEO-optimierte Struktur für mehr Sichtbarkeit",
                  "Barrierefreie Gestaltung nach WCAG-Standards",
                  "Sichere und wartungsfreundliche Technologien"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-card/30">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-display text-white mb-4">Bereit für Ihre neue Website?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns eine digitale Präsenz schaffen, die Ihre Kunden begeistert.
            </p>
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white" data-testid="button-cta-web">
              Jetzt Projekt starten <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
