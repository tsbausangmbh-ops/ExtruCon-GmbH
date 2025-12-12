import { AlertTriangle, SearchX, TrendingDown, ArrowDown, Clock, Users, Brain } from "lucide-react";
import { motion } from "framer-motion";

export function Problem() {
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
              Kennen Sie diese <span className="text-red-500">Herausforderungen?</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Die meisten Unternehmen kämpfen mit denselben Problemen – 
              und verschwenden dabei wertvolle Zeit und Ressourcen.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            {
              icon: Clock,
              title: "Zeitfresser Routineaufgaben",
              problem: "Das Problem:",
              desc: "80% Ihrer Arbeitszeit fließt in wiederkehrende Aufgaben: E-Mails beantworten, Daten eingeben, Reports erstellen.",
              solution: "Die Lösung: KI-Agenten automatisieren diese Aufgaben – 24/7, ohne Fehler.",
              delay: 0
            },
            {
              icon: Users,
              title: "Leads gehen verloren",
              problem: "Das Problem:",
              desc: "Kundenanfragen werden zu spät beantwortet. Interessenten springen ab, weil niemand sofort reagiert.",
              solution: "Die Lösung: Chatbots qualifizieren Leads sofort und buchen automatisch Termine.",
              delay: 0.1
            },
            {
              icon: TrendingDown,
              title: "Marketing ohne Ergebnis",
              problem: "Das Problem:",
              desc: "Sie investieren in Werbung, aber die Conversion-Rate bleibt niedrig. Der ROI ist unklar.",
              solution: "Die Lösung: Datengetriebenes Marketing mit KI-Analyse zeigt, was wirklich funktioniert.",
              delay: 0.2
            }
          ].map((item, i) => (
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
          {[
            {
              icon: SearchX,
              title: "Unsichtbar bei Google",
              problem: "Das Problem:",
              desc: "Ihre Website existiert, aber lokale Kunden aus München, Fürstenfeldbruck und Bayern finden Sie nicht. Konkurrenten ranken vor Ihnen – regional und deutschlandweit.",
              solution: "Die Lösung: Local SEO & Geo-Targeting mit KI-gestützter Content-Strategie für maximale regionale Sichtbarkeit.",
              delay: 0.3
            },
            {
              icon: Brain,
              title: "Keine Zeit für Innovation",
              problem: "Das Problem:",
              desc: "Das Tagesgeschäft frisst alle Kapazitäten. Für strategische Projekte bleibt keine Zeit.",
              solution: "Die Lösung: Automatisierung schafft Freiräume für echte Wertschöpfung.",
              delay: 0.4
            },
            {
              icon: AlertTriangle,
              title: "Veraltete Prozesse",
              problem: "Das Problem:",
              desc: "Manuelle Prozesse sind fehleranfällig und skalieren nicht. Wachstum wird zur Belastung.",
              solution: "Die Lösung: n8n-Workflows verbinden Ihre Tools und automatisieren Prozesse.",
              delay: 0.5
            }
          ].map((item, i) => (
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
                <p className="text-lg font-medium text-white">Bereit für die Lösung?</p>
                <ArrowDown className="w-8 h-8 text-primary animate-bounce" />
            </motion.div>
        </div>
      </div>
    </section>
  );
}
