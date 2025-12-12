import { motion } from "framer-motion";
import funnelImg from "@assets/generated_images/futuristic_digital_marketing_funnel.png";
import { MapPin, Search, Users, TrendingUp, Target, Zap, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Funnel() {
  return (
    <section id="funnel" className="py-8 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with SEO H2 */}
        <div className="text-center mb-6">
          <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Bewährtes System
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Das <span className="text-gradient">ExtruCon Erfolgssystem</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Wir verwandeln unsichtbare Webseiten in Kundenmagneten. Unser SEO- und Geo-basiertes 
            Funnel-System löst Ihr Problem fehlender Sichtbarkeit – deutschlandweit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center mb-10">
          {/* Visual Funnel Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl glass-card">
              <img 
                src={funnelImg} 
                alt="Digital Marketing Funnel - SEO und Geo-Targeting System" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              
              {/* Overlay Labels on the Image */}
              <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full px-8 text-center">
                 <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-full py-2 px-4 inline-flex items-center gap-2 text-cyan-400">
                    <Search className="w-4 h-4" /> <span className="text-sm font-bold">SEO & Traffic</span>
                 </div>
              </div>
              <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-full px-8 text-center">
                 <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-full py-2 px-4 inline-flex items-center gap-2 text-purple-400">
                    <Target className="w-4 h-4" /> <span className="text-sm font-bold">Geo-Targeting</span>
                 </div>
              </div>
              <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-full px-8 text-center">
                 <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-full py-2 px-4 inline-flex items-center gap-2 text-emerald-400">
                    <TrendingUp className="w-4 h-4" /> <span className="text-sm font-bold">Conversion & Sales</span>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Text/Steps Side with H3 Subheadings */}
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-white/5 border-l-4 border-l-cyan-500 border-y-0 border-r-0 rounded-r-lg p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-cyan-500/20 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">1. Lokale Dominanz durch Geo-SEO</h3>
                    <p className="text-gray-400">
                      Wir analysieren Ihren Standort und Ihre Zielregion in ganz Deutschland. 
                      Durch lokales SEO und Geo-Targeting stellen wir sicher, dass Sie bei Google Maps 
                      und der lokalen Suche ganz oben erscheinen.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-white/5 border-l-4 border-l-purple-500 border-y-0 border-r-0 rounded-r-lg p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-purple-500/20 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">2. Qualifizierte Leads durch Content-Strategie</h3>
                    <p className="text-gray-400">
                      Nicht jeder Besucher ist ein Kunde. Unser Content-Funnel filtert Interessenten durch 
                      hochwertige, SEO-optimierte Inhalte, sodass nur qualifizierte Leads übrig bleiben.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="bg-white/5 border-l-4 border-l-emerald-500 border-y-0 border-r-0 rounded-r-lg p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-emerald-500/20 p-3 rounded-lg">
                    <Zap className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">3. Automatisierte Conversion mit KI</h3>
                    <p className="text-gray-400">
                      Das finale Stück des Trichters: Ihre Webseite konvertiert Besucher automatisch in zahlende Kunden 
                      oder vereinbart Termine – unterstützt durch unsere intelligenten KI-Chatbots und Automatisierungen.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Additional SEO Content Section */}
        <div className="mt-10">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-6 text-center">
            Warum Unternehmen uns vertrauen
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Deutschlandweite Expertise", desc: "Wir betreuen Kunden in ganz Deutschland", icon: MapPin },
              { title: "Messbare Ergebnisse", desc: "Transparente KPIs und monatliche Reportings", icon: TrendingUp },
              { title: "Persönliche Betreuung", desc: "Direkter Ansprechpartner, keine Call-Center", icon: Users },
              { title: "Schnelle Umsetzung", desc: "Erste Ergebnisse oft schon nach 4-6 Wochen", icon: Zap }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-card/30 border border-white/5 text-center"
              >
                <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section for SEO */}
        <div className="mt-10">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-6 text-center">
            Häufige Fragen zu digitalem Marketing
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { 
                q: "Wie schnell sehe ich Ergebnisse mit SEO?", 
                a: "Erste Verbesserungen zeigen sich oft nach 4-8 Wochen. Für nachhaltige Top-Rankings planen wir 3-6 Monate ein." 
              },
              { 
                q: "Arbeitet ihr deutschlandweit?", 
                a: "Ja! Unser Sitz ist in Fürstenfeldbruck bei München, aber wir betreuen Kunden in ganz Deutschland – remote und vor Ort." 
              },
              { 
                q: "Was kostet eine Marketing-Agentur?",
                a: "Unsere Pakete starten ab 990€/Monat. Für eine individuelle Beratung und ein maßgeschneidertes Angebot kontaktieren Sie uns kostenlos." 
              },
              { 
                q: "Bietet ihr auch Einzelleistungen an?",
                a: "Ja, ob nur Social Media, nur Webdesign oder nur SEO – wir schneiden unsere Leistungen auf Ihre Bedürfnisse zu. Oft entfalten kombinierte Strategien aber die größte Wirkung." 
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
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-gray-400 ml-7">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
