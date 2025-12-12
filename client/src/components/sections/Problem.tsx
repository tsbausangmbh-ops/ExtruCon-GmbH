import { AlertTriangle, SearchX, TrendingDown, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export function Problem() {
  return (
    <section className="py-12 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
              Kennen Sie diese <span className="text-red-500">Probleme?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Viele Unternehmen haben großartige Produkte, aber sie scheitern an der digitalen Sichtbarkeit.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: SearchX,
              title: "Unsichtbar bei Google",
              desc: "Ihre Webseite ist vorhanden, aber potenzielle Kunden finden Sie nicht, weil Sie im Suchranking untergehen.",
              delay: 0
            },
            {
              icon: TrendingDown,
              title: "Besucher ohne Umsatz",
              desc: "Sie haben Traffic auf der Seite, aber niemand ruft an oder kauft. Das 'Fenstergucker-Phänomen'.",
              delay: 0.2
            },
            {
              icon: AlertTriangle,
              title: "Marketing-Geld verbrennen",
              desc: "Sie schalten Werbung auf Social Media, aber die Kosten explodieren ohne nennenswerte Ergebnisse.",
              delay: 0.4
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-red-500/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-red-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
                <item.icon className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-col items-center gap-4"
            >
                <p className="text-lg font-medium text-white">Wir haben die Lösung entwickelt.</p>
                <ArrowDown className="w-8 h-8 text-primary animate-bounce" />
            </motion.div>
        </div>
      </div>
    </section>
  );
}
