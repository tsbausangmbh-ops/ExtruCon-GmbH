import { memo } from "react";
import { AlertTriangle, SearchX, TrendingDown, ArrowDown, Clock, Users, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

export const Problem = memo(function Problem() {
  const { t } = useLanguage();

  const problemsRow1 = [
    { icon: Clock, ...t.problemSection.routine, delay: 0 },
    { icon: Users, ...t.problemSection.leads, delay: 0.1 },
    { icon: TrendingDown, ...t.problemSection.marketing, delay: 0.2 },
  ];

  const problemsRow2 = [
    { icon: SearchX, ...t.problemSection.google, delay: 0.3 },
    { icon: Brain, ...t.problemSection.innovation, delay: 0.4 },
    { icon: AlertTriangle, ...t.problemSection.processes, delay: 0.5 },
  ];

  return (
    <section className="py-12 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              {t.problemSection.title} <span className="text-red-500">{t.problemSection.titleHighlight}</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {t.problemSection.subtitle}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {problemsRow1.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-red-500/30 transition-colors group"
            >
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                <item.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
              <p className="text-sm text-red-400 font-medium mb-1">{item.problem}</p>
              <p className="text-gray-400 text-sm mb-3">{item.desc}</p>
              <p className="text-sm text-primary font-medium">{item.solution}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problemsRow2.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-red-500/30 transition-colors group"
            >
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                <item.icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
              <p className="text-sm text-red-400 font-medium mb-1">{item.problem}</p>
              <p className="text-gray-400 text-sm mb-3">{item.desc}</p>
              <p className="text-sm text-primary font-medium">{item.solution}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-col items-center gap-4"
            >
                <p className="text-lg font-medium text-white">{t.problemSection.ready}</p>
                <ArrowDown className="w-8 h-8 text-primary animate-bounce" />
            </motion.div>
        </div>
      </div>
    </section>
  );
});
