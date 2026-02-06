import { motion } from "framer-motion";
import funnelImg from "@assets/generated_images/futuristic_digital_marketing_funnel.webp";
import { MapPin, Search, Users, TrendingUp, Target, Zap, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n";

export function Funnel() {
  const { t } = useLanguage();

  return (
    <section id="funnel" className="py-8 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-6">
          <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            {t.funnelSection.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
            {t.funnelSection.title} <span className="text-gradient">{t.funnelSection.titleHighlight}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            {t.funnelSection.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center mb-10">
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
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              
              <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full px-8 text-center">
                 <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-full py-2 px-4 inline-flex items-center gap-2 text-cyan-400">
                    <Search className="w-4 h-4" /> <span className="text-sm font-bold">{t.funnelSection.funnelLabels.seo}</span>
                 </div>
              </div>
              <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-full px-8 text-center">
                 <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-full py-2 px-4 inline-flex items-center gap-2 text-purple-400">
                    <Target className="w-4 h-4" /> <span className="text-sm font-bold">{t.funnelSection.funnelLabels.geo}</span>
                 </div>
              </div>
              <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-full px-8 text-center">
                 <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-full py-2 px-4 inline-flex items-center gap-2 text-emerald-400">
                    <TrendingUp className="w-4 h-4" /> <span className="text-sm font-bold">{t.funnelSection.funnelLabels.conversion}</span>
                 </div>
              </div>
            </div>
          </motion.div>

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
                    <h3 className="text-xl font-bold text-white mb-2">{t.funnelSection.step1.title}</h3>
                    <p className="text-gray-400">{t.funnelSection.step1.desc}</p>
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
                    <h3 className="text-xl font-bold text-white mb-2">{t.funnelSection.step2.title}</h3>
                    <p className="text-gray-400">{t.funnelSection.step2.desc}</p>
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
                    <h3 className="text-xl font-bold text-white mb-2">{t.funnelSection.step3.title}</h3>
                    <p className="text-gray-400">{t.funnelSection.step3.desc}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-6 text-center">
            {t.funnelSection.whyTrust}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.funnelSection.trust.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-card/30 border border-white/5 text-center"
              >
                {i === 0 && <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />}
                {i === 1 && <TrendingUp className="w-10 h-10 text-primary mx-auto mb-4" />}
                {i === 2 && <Users className="w-10 h-10 text-primary mx-auto mb-4" />}
                {i === 3 && <Zap className="w-10 h-10 text-primary mx-auto mb-4" />}
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-6 text-center">
            {t.funnelSection.faqTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {t.funnelSection.faqs.map((faq, i) => (
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
