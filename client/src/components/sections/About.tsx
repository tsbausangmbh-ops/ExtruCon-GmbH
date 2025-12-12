import { motion } from "framer-motion";
import { Lightbulb, Target, Rocket, Users, CheckCircle } from "lucide-react";

export function About() {
  const timeline = [
    {
      icon: Lightbulb,
      title: "Die Vision",
      description: "Wir verstehen Ihre Ziele und entwickeln eine maßgeschneiderte Strategie für Ihren digitalen Erfolg.",
      color: "text-yellow-400"
    },
    {
      icon: Target,
      title: "Die Strategie",
      description: "Basierend auf Daten und Erfahrung erstellen wir einen klaren Fahrplan mit messbaren Meilensteinen.",
      color: "text-cyan-400"
    },
    {
      icon: Rocket,
      title: "Die Umsetzung",
      description: "Unser Team setzt die Strategie professionell um – von KI-Automatisierung bis zum fertigen Webauftritt.",
      color: "text-purple-400"
    },
    {
      icon: CheckCircle,
      title: "Der Erfolg",
      description: "Kontinuierliche Optimierung und transparentes Reporting sichern nachhaltige Ergebnisse.",
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
            Über uns
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
            Von der Vision zur Umsetzung
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            ExtruCon GmbH ist Ihr Partner für digitales Marketing und KI-Automatisierung. 
            Wir begleiten Sie auf dem gesamten Weg – von der ersten Idee bis zum messbaren Erfolg.
          </p>
        </motion.div>

        {/* Timeline */}
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
                <div className="text-xs text-gray-500 mb-2">Schritt {i + 1}</div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
              {i < timeline.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-white/10" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Warum ExtruCon?</h3>
            <ul className="space-y-3">
              {[
                "Deutschlandweiter Service aus Fürstenfeldbruck",
                "Modernste KI-Technologien für effiziente Lösungen",
                "Transparente Preise und messbare Ergebnisse",
                "Persönliche Betreuung durch feste Ansprechpartner",
                "Über 50 erfolgreich umgesetzte Projekte"
              ].map((item, i) => (
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
              <span className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs">KI & Automatisierung</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs">Webentwicklung</span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs">Social Media</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
