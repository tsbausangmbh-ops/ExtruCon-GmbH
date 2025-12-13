import { motion } from "framer-motion";
import { Lightbulb, Target, Rocket, Users, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function About() {
  const { t } = useLanguage();

  const timeline = [
    {
      icon: Lightbulb,
      title: t.aboutSection.vision.title,
      description: t.aboutSection.vision.desc,
      color: "text-yellow-400"
    },
    {
      icon: Target,
      title: t.aboutSection.strategy.title,
      description: t.aboutSection.strategy.desc,
      color: "text-cyan-400"
    },
    {
      icon: Rocket,
      title: t.aboutSection.execution.title,
      description: t.aboutSection.execution.desc,
      color: "text-purple-400"
    },
    {
      icon: CheckCircle,
      title: t.aboutSection.success.title,
      description: t.aboutSection.success.desc,
      color: "text-emerald-400"
    }
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            {t.aboutSection.badge}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
            {t.aboutSection.title}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.aboutSection.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {timeline.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="p-6 rounded-xl bg-card/30 border border-white/5 h-full">
                <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 ${step.color}`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <div className="text-xs text-gray-500 mb-2">{t.aboutSection.step} {i + 1}</div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
              {i < timeline.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-white/10" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">{t.aboutSection.whyUs}</h3>
            <ul className="space-y-3">
              {t.aboutSection.reasons.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/10">
            <h4 className="font-bold text-white mb-3">ExtruCon GmbH</h4>
            <p className="text-gray-400 text-sm mb-4">
              Hasenheide 8<br />
              82256 Fürstenfeldbruck<br />
              HRB 18623 · Amtsgericht München
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs">Marketing</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs">{t.nav.kiAgents}</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs">{t.nav.websitesKI}</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs">{t.nav.socialMedia}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
