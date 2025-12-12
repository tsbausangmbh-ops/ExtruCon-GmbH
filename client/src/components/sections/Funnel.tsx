import { motion } from "framer-motion";
import funnelImg from "@assets/generated_images/futuristic_digital_marketing_funnel.png";
import { MapPin, Search, Users, TrendingUp, Target, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Funnel() {
  return (
    <section className="py-12 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            Das <span className="text-gradient">Extrucon Erfolgssystem</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Wir verwandeln unsichtbare Webseiten in Kundenmagneten. Unser SEO- und Geo-basiertes Funnel-System
            löst Ihr Problem fehlender Sichtbarkeit und generiert qualifizierte Anfragen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                alt="Digital Marketing Funnel" 
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

          {/* Text/Steps Side */}
          <div className="space-y-8">
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
                    <h3 className="text-xl font-bold text-white mb-2">1. Lokale Dominanz (Geo-System)</h3>
                    <p className="text-gray-400">
                      Wir analysieren Ihren Standort und Ihre Zielregion. Durch Geo-Targeting stellen wir sicher, 
                      dass Sie genau dort gefunden werden, wo Ihre Kunden suchen – direkt vor Ihrer Haustür oder global.
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
                    <h3 className="text-xl font-bold text-white mb-2">2. Zielgruppen-Filter (Content)</h3>
                    <p className="text-gray-400">
                      Nicht jeder Besucher ist ein Kunde. Unser Content-Funnel filtert Interessenten durch 
                      hochwertige Inhalte und psychologische Trigger, sodass nur qualifizierte Leads übrig bleiben.
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
                    <h3 className="text-xl font-bold text-white mb-2">3. Automatisierter Abschluss</h3>
                    <p className="text-gray-400">
                      Das finale Stück des Trichters: Ihre Webseite konvertiert Besucher automatisch in zahlende Kunden 
                      oder vereinbart Termine – unterstützt durch unsere KI-Bots.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
