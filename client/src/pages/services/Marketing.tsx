import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { TrendingUp, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import marketingImg from "@assets/generated_images/abstract_performance_marketing_growth.png";

export default function Marketing() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={marketingImg} alt="Performance Marketing" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-12 h-12 text-orange-400" />
                <span className="text-orange-400 font-semibold">Leistung</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
                Performance Marketing
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Datengetriebene Kampagnen und SEO-Strategien für messbares Wachstum, 
                maximale Sichtbarkeit und echte Geschäftsergebnisse.
              </p>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-black" data-testid="button-contact-marketing">
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
                { title: "Google Ads", desc: "Suchmaschinen- und Display-Kampagnen für gezielte Reichweite." },
                { title: "Meta Ads", desc: "Facebook und Instagram Werbung für Ihre Zielgruppe." },
                { title: "SEO-Optimierung", desc: "Nachhaltige Suchmaschinenoptimierung für organisches Wachstum." },
                { title: "Conversion-Optimierung", desc: "A/B-Tests und Optimierung für höhere Konversionsraten." },
                { title: "Analytics & Tracking", desc: "Präzises Tracking und datenbasierte Entscheidungen." },
                { title: "Retargeting", desc: "Interessenten erneut ansprechen und zu Kunden konvertieren." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-card/30 border border-white/5"
                >
                  <Check className="w-8 h-8 text-orange-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Plattformen */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-display text-white mb-12 text-center">Unsere Kanäle</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {["Google Ads", "Meta Ads", "LinkedIn Ads", "TikTok Ads", "Google SEO", "YouTube Ads", "Microsoft Ads"].map((channel, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-6 py-3 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300"
                >
                  {channel}
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
                  "Messbare Ergebnisse und transparente ROI-Berechnung",
                  "Gezielte Ansprache Ihrer idealen Kunden",
                  "Kontinuierliche Optimierung für maximale Effizienz",
                  "Mehr qualifizierte Leads und Anfragen",
                  "Skalierbare Kampagnen für nachhaltiges Wachstum"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-card/30">
                    <Check className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-orange-900/20 to-red-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-display text-white mb-4">Bereit für messbares Wachstum?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns datengetriebene Kampagnen starten, die echte Ergebnisse liefern.
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-black" data-testid="button-cta-marketing">
              Jetzt Projekt starten <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
