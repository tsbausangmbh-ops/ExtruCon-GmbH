import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Share2, Check, ArrowRight, CheckCircle } from "lucide-react";
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
            <img src={socialImg} alt="Social Media Agentur Fürstenfeldbruck München" className="w-full h-full object-cover opacity-20" />
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
                <span className="text-purple-400 font-semibold">Social Media Agentur Deutschlandweit</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
                Social Media Marketing deutschlandweit
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Strategisches Community-Management, virale Kampagnen und professionelle Content-Erstellung. 
                Wir machen Ihr Unternehmen auf Instagram, TikTok, LinkedIn und Facebook sichtbar.
              </p>
              <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white" data-testid="button-contact-social">
                Kostenlose Social Media Analyse <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Leistungsumfang */}
        <section className="py-10 bg-card/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-display text-white mb-4 text-center">Social Media Leistungen</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Full-Service Social Media Marketing für Unternehmen deutschlandweit.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Social Media Strategie", desc: "Individuelle Strategie basierend auf Ihren Zielen und Ihrer Zielgruppe – deutschlandweit." },
                { title: "Content-Produktion", desc: "Kreative Posts, Stories, Reels und Videos – professionell produziert für maximale Reichweite." },
                { title: "Community Management", desc: "Aktive Betreuung Ihrer Community mit zeitnahen Antworten und Engagement-Steigerung." },
                { title: "Influencer Marketing", desc: "Kooperation mit passenden Influencern aus Bayern für authentische Reichweite." },
                { title: "Paid Social Ads", desc: "Zielgerichtete Werbekampagnen auf Meta, TikTok und LinkedIn für mehr Leads." },
                { title: "Reporting & Analytics", desc: "Monatliche Berichte zu Performance, Reichweite und Wachstum Ihrer Kanäle." }
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
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-display text-white mb-12 text-center">Plattformen die wir betreuen</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {["Instagram", "TikTok", "LinkedIn", "Facebook", "YouTube", "X (Twitter)", "Pinterest", "Google Business"].map((platform, i) => (
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
        <section className="py-10 bg-card/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-display text-white mb-8">Ihre Vorteile mit uns als Social Media Agentur</h2>
              <div className="space-y-4 text-left">
                {[
                  "Professionelle Präsenz auf allen relevanten Plattformen",
                  "Wachsende Community und höhere Engagement-Raten",
                  "Mehr Reichweite und Sichtbarkeit für Ihre Marke",
                  "Direkter Draht zu Ihrer lokalen Zielgruppe",
                  "Messbare Ergebnisse und transparente monatliche Reports"
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

        {/* FAQ Section */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-display text-white mb-8 text-center">
              Häufige Fragen zu Social Media Marketing
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                { 
                  q: "Was kostet Social Media Marketing in München?", 
                  a: "Unsere Pakete starten ab 790€/Monat für die Betreuung eines Kanals. Komplette Multi-Channel-Strategien mit Content-Produktion beginnen bei 1.490€/Monat." 
                },
                { 
                  q: "Wie oft sollte man auf Social Media posten?", 
                  a: "Das hängt von der Plattform ab. Für Instagram empfehlen wir 3-5 Posts pro Woche plus tägliche Stories. Bei LinkedIn reichen 2-3 qualitative Posts pro Woche." 
                },
                { 
                  q: "Welche Plattform ist für mein Unternehmen am besten?",
                  a: "Das analysieren wir in einem kostenlosen Erstgespräch. B2B-Unternehmen profitieren oft von LinkedIn, lokale Dienstleister von Instagram und Google Business." 
                },
                { 
                  q: "Erstellt ihr auch den Content für uns?",
                  a: "Ja! Wir übernehmen die komplette Content-Produktion: Texte, Grafiken, Fotos und Videos. Auf Wunsch auch mit Vor-Ort-Shootings in München und Umgebung." 
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
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    {faq.q}
                  </h3>
                  <p className="text-gray-400 ml-7">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-display text-white mb-4">Bereit für Social Media Erfolg?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns Ihre Social Media Präsenz auf das nächste Level bringen. Kostenlose Erstanalyse!
            </p>
            <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-white" data-testid="button-cta-social">
              Jetzt Social Media Beratung starten <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
