import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Share2, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import socialImg from "@assets/generated_images/digital_social_connection_abstract_art.png";

export default function SocialMedia() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={socialImg} alt="Social Media" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Share2 className="w-12 h-12 text-purple-400" />
                <span className="text-purple-400 font-semibold">Leistung</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
                Social Media Marketing
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Strategisches Community-Management und virale Kampagnen, um Ihr Publikum 
                auf Instagram, TikTok, LinkedIn, Facebook und mehr zu binden.
              </p>
              <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white" data-testid="button-contact-social">
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
                { title: "Social Media Strategie", desc: "Individuelle Strategie basierend auf Ihren Zielen und Ihrer Zielgruppe." },
                { title: "Content-Erstellung", desc: "Kreative Posts, Stories, Reels und Videos für alle Plattformen." },
                { title: "Community Management", desc: "Aktive Betreuung Ihrer Community mit zeitnahen Antworten." },
                { title: "Influencer Marketing", desc: "Identifikation und Kooperation mit passenden Influencern." },
                { title: "Paid Social Ads", desc: "Zielgerichtete Werbekampagnen für maximale Reichweite." },
                { title: "Reporting & Analytics", desc: "Regelmäßige Berichte zu Performance und Wachstum." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-card/30 border border-white/5"
                >
                  <Check className="w-8 h-8 text-purple-400 mb-4" />
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
            <h2 className="text-3xl font-bold font-display text-white mb-12 text-center">Unsere Plattformen</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {["Instagram", "TikTok", "LinkedIn", "Facebook", "YouTube", "X (Twitter)", "Pinterest"].map((platform, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-6 py-3 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300"
                >
                  {platform}
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
                  "Professionelle Präsenz auf allen relevanten Plattformen",
                  "Wachsende Community und höhere Engagement-Raten",
                  "Mehr Reichweite und Sichtbarkeit für Ihre Marke",
                  "Direkter Draht zu Ihrer Zielgruppe",
                  "Messbare Ergebnisse und transparente Erfolge"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-card/30">
                    <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-display text-white mb-4">Bereit für Social Media Erfolg?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns Ihre Social Media Präsenz auf das nächste Level bringen.
            </p>
            <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white" data-testid="button-cta-social">
              Jetzt Projekt starten <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
