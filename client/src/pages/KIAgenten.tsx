import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Bot, Zap, MessageSquare, BarChart3, Clock, Shield, Sparkles, ArrowRight, CheckCircle, Brain, Workflow, Users } from "lucide-react";

const agents = [
  {
    icon: MessageSquare,
    title: "Kundenservice-Agent",
    description: "Automatisierte Beantwortung von Kundenanfragen rund um die Uhr. Der Agent versteht Kontext und leitet komplexe Fälle an Mitarbeiter weiter.",
    features: ["24/7 verfügbar", "Mehrsprachig", "Lernfähig", "CRM-Integration"],
    color: "from-cyan-500/20 to-cyan-500/5"
  },
  {
    icon: BarChart3,
    title: "Analyse-Agent",
    description: "Automatische Auswertung von Marketing-Daten, Erstellung von Reports und Handlungsempfehlungen basierend auf KI-Analyse.",
    features: ["Echtzeit-Daten", "Automatische Reports", "Trend-Erkennung", "ROI-Tracking"],
    color: "from-purple-500/20 to-purple-500/5"
  },
  {
    icon: Workflow,
    title: "Automatisierungs-Agent",
    description: "Verbindet Ihre Tools und automatisiert Workflows – von Lead-Erfassung über E-Mail-Versand bis zur Rechnungsstellung.",
    features: ["n8n-basiert", "500+ Integrationen", "Keine Coding-Skills nötig", "Skalierbar"],
    color: "from-orange-500/20 to-orange-500/5"
  },
  {
    icon: Brain,
    title: "Content-Agent",
    description: "Generiert Social Media Posts, Blog-Artikel und Marketing-Texte in Ihrem Markenstil – mit menschlicher Qualitätskontrolle.",
    features: ["Markenkonform", "SEO-optimiert", "Multi-Plattform", "Schnelle Erstellung"],
    color: "from-emerald-500/20 to-emerald-500/5"
  }
];

const benefits = [
  { icon: Clock, title: "Zeit sparen", description: "Bis zu 80% weniger manuelle Arbeit durch intelligente Automatisierung." },
  { icon: Zap, title: "Schneller reagieren", description: "Sofortige Antworten und Aktionen – 24 Stunden am Tag, 7 Tage die Woche." },
  { icon: Shield, title: "Fehler reduzieren", description: "Konsistente Qualität ohne menschliche Flüchtigkeitsfehler." },
  { icon: Users, title: "Team entlasten", description: "Mitarbeiter können sich auf wertschöpfende Aufgaben konzentrieren." }
];

export default function KIAgenten() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                <Bot className="w-4 h-4" />
                KI-Agenten für Ihr Business
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6">
                Intelligente Agenten, die für Sie arbeiten
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Unsere KI-Agenten automatisieren Routineaufgaben, beantworten Kundenanfragen 
                und analysieren Daten – damit Sie sich auf Ihr Kerngeschäft konzentrieren können.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/kontakt" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-background font-bold rounded-lg hover:bg-primary/90 transition-colors"
                  data-testid="button-ki-agenten-cta"
                >
                  Kostenlose Beratung <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="#agents" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 transition-colors border border-white/10"
                >
                  Agenten entdecken
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-white mb-1">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Agents Grid */}
        <section id="agents" className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
                Unsere KI-Agenten
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Jeder Agent ist auf bestimmte Aufgaben spezialisiert und kann individuell 
                an Ihre Geschäftsprozesse angepasst werden.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {agents.map((agent, i) => (
                <motion.div
                  key={agent.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${agent.color} border border-white/10`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <agent.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{agent.title}</h3>
                      <p className="text-gray-400 mb-4">{agent.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {agent.features.map((feature) => (
                          <span 
                            key={feature}
                            className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 bg-card/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold font-display text-white mb-4">
                So funktioniert's
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { step: 1, title: "Analyse", description: "Wir analysieren Ihre Prozesse und identifizieren Automatisierungspotenziale." },
                { step: 2, title: "Entwicklung", description: "Wir konfigurieren und trainieren den KI-Agenten für Ihre spezifischen Anforderungen." },
                { step: 3, title: "Integration", description: "Der Agent wird in Ihre Systeme integriert und kontinuierlich optimiert." }
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary text-background font-bold text-xl flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Teaser */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">
                Preise ab 1.500€
              </h2>
              <p className="text-gray-400 mb-6">
                Einfache KI-Agenten starten ab 1.500€ einmalig. Komplexere Lösungen 
                mit mehreren Integrationen beginnen bei 3.000€. Monatliche Wartungspakete optional.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Kostenlose Erstberatung
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Transparente Preise
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Keine versteckten Kosten
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10 border-y border-white/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Bereit für Ihren ersten KI-Agenten?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Lassen Sie uns gemeinsam herausfinden, wie KI-Agenten Ihr Unternehmen voranbringen können.
            </p>
            <a 
              href="/kontakt" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-background font-bold rounded-lg hover:bg-primary/90 transition-colors text-lg"
              data-testid="button-ki-agenten-contact"
            >
              Jetzt Beratungstermin vereinbaren <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
