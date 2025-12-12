import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Bot, Zap, MessageSquare, BarChart3, Clock, Shield, Sparkles, ArrowRight, CheckCircle, Brain, Workflow, Users, Mail, Calendar, FileText, ShoppingCart, Headphones, TrendingUp, Settings, Database, Globe, Cpu, Lock, RefreshCw, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const agents = [
  {
    icon: MessageSquare,
    title: "Kundenservice-Agent",
    description: "Automatisierte Beantwortung von Kundenanfragen rund um die Uhr. Der Agent versteht Kontext, beantwortet FAQs und leitet komplexe Fälle intelligent an Mitarbeiter weiter.",
    features: ["24/7 verfügbar", "Mehrsprachig", "Lernfähig", "CRM-Integration"],
    useCases: ["Live-Chat auf Website", "E-Mail-Support", "WhatsApp Business", "Facebook Messenger"],
    color: "from-cyan-500/20 to-cyan-500/5"
  },
  {
    icon: BarChart3,
    title: "Analyse-Agent",
    description: "Automatische Auswertung von Marketing-Daten, Erstellung von Reports und Handlungsempfehlungen basierend auf KI-Analyse Ihrer Geschäftskennzahlen.",
    features: ["Echtzeit-Daten", "Automatische Reports", "Trend-Erkennung", "ROI-Tracking"],
    useCases: ["Google Analytics Auswertung", "Social Media Insights", "Kampagnen-Performance", "Umsatzprognosen"],
    color: "from-purple-500/20 to-purple-500/5"
  },
  {
    icon: Workflow,
    title: "Automatisierungs-Agent",
    description: "Verbindet Ihre Tools und automatisiert Workflows – von Lead-Erfassung über E-Mail-Versand bis zur Rechnungsstellung. Basierend auf n8n für maximale Flexibilität.",
    features: ["n8n-basiert", "500+ Integrationen", "Keine Coding-Skills nötig", "Skalierbar"],
    useCases: ["Lead-Nurturing", "Rechnungsautomatisierung", "Daten-Synchronisation", "Benachrichtigungen"],
    color: "from-orange-500/20 to-orange-500/5"
  },
  {
    icon: Brain,
    title: "Content-Agent",
    description: "Generiert Social Media Posts, Blog-Artikel und Marketing-Texte in Ihrem Markenstil – mit menschlicher Qualitätskontrolle für perfekte Ergebnisse.",
    features: ["Markenkonform", "SEO-optimiert", "Multi-Plattform", "Schnelle Erstellung"],
    useCases: ["Social Media Posts", "Blog-Artikel", "Newsletter-Texte", "Produktbeschreibungen"],
    color: "from-emerald-500/20 to-emerald-500/5"
  },
  {
    icon: Mail,
    title: "E-Mail-Agent",
    description: "Intelligente E-Mail-Automatisierung mit personalisierten Antworten, automatischer Kategorisierung und Priorisierung eingehender Nachrichten.",
    features: ["Auto-Kategorisierung", "Personalisierte Antworten", "Spam-Filter", "Follow-up Reminder"],
    useCases: ["Inbox-Management", "Newsletter-Versand", "Terminanfragen", "Angebotsversand"],
    color: "from-blue-500/20 to-blue-500/5"
  },
  {
    icon: Calendar,
    title: "Termin-Agent",
    description: "Automatisiert Ihre Terminplanung: Koordiniert Verfügbarkeiten, sendet Erinnerungen und verwaltet Absagen oder Verschiebungen selbstständig.",
    features: ["Kalender-Sync", "Automatische Erinnerungen", "Zeitzonenmanagement", "Konfliktlösung"],
    useCases: ["Kundentermine", "Team-Meetings", "Webinar-Buchungen", "Servicezeiten"],
    color: "from-pink-500/20 to-pink-500/5"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce-Agent",
    description: "Unterstützt Kunden beim Einkauf, beantwortet Produktfragen, verfolgt Bestellungen und kümmert sich um Retouren-Anfragen automatisch.",
    features: ["Produktberatung", "Bestellstatus", "Retouren-Handling", "Upselling"],
    useCases: ["Shop-Assistenz", "Warenkorbabbruch", "Größenberatung", "Liefertracking"],
    color: "from-yellow-500/20 to-yellow-500/5"
  },
  {
    icon: FileText,
    title: "Dokumenten-Agent",
    description: "Verarbeitet Dokumente automatisch: Extrahiert Daten aus PDFs, kategorisiert Unterlagen und erstellt strukturierte Zusammenfassungen.",
    features: ["PDF-Extraktion", "OCR-Erkennung", "Auto-Kategorisierung", "Datenexport"],
    useCases: ["Rechnungsverarbeitung", "Vertragsanalyse", "Bewerbungsmanagement", "Archivierung"],
    color: "from-indigo-500/20 to-indigo-500/5"
  }
];

const benefits = [
  { icon: Clock, title: "Zeit sparen", description: "Bis zu 80% weniger manuelle Arbeit durch intelligente Automatisierung." },
  { icon: Zap, title: "Schneller reagieren", description: "Sofortige Antworten und Aktionen – 24 Stunden am Tag, 7 Tage die Woche." },
  { icon: Shield, title: "Fehler reduzieren", description: "Konsistente Qualität ohne menschliche Flüchtigkeitsfehler." },
  { icon: Users, title: "Team entlasten", description: "Mitarbeiter können sich auf wertschöpfende Aufgaben konzentrieren." },
  { icon: TrendingUp, title: "Skalierbar wachsen", description: "Agenten wachsen mit Ihrem Unternehmen – ohne zusätzliches Personal." },
  { icon: Database, title: "Daten nutzen", description: "Wandeln Sie Daten in verwertbare Insights und bessere Entscheidungen um." }
];

const technologies = [
  { name: "OpenAI GPT-4", description: "Modernste Sprachverarbeitung für natürliche Konversationen" },
  { name: "n8n Workflows", description: "No-Code Automatisierung mit 500+ Integrationen" },
  { name: "Claude AI", description: "Präzise Analyse und Texterstellung mit Anthropic Claude" },
  { name: "LangChain", description: "Intelligente Verkettung von KI-Modellen für komplexe Aufgaben" },
  { name: "Vector Databases", description: "Wissensbasen für kontextbewusste Antworten" },
  { name: "Custom APIs", description: "Nahtlose Integration in Ihre bestehenden Systeme" }
];

const faqs = [
  {
    question: "Wie lange dauert die Entwicklung eines KI-Agenten?",
    answer: "Einfache Agenten können binnen 1-2 Wochen einsatzbereit sein. Komplexere Lösungen mit mehreren Integrationen benötigen 3-6 Wochen. In einem ersten Gespräch erstellen wir einen realistischen Zeitplan für Ihr Projekt."
  },
  {
    question: "Brauche ich technisches Wissen, um KI-Agenten zu nutzen?",
    answer: "Nein! Wir übernehmen die komplette Entwicklung und Integration. Sie erhalten ein benutzerfreundliches Dashboard und eine Schulung. Für Änderungen oder Erweiterungen stehen wir Ihnen zur Seite."
  },
  {
    question: "Sind meine Daten bei KI-Agenten sicher?",
    answer: "Datenschutz hat höchste Priorität. Wir nutzen verschlüsselte Verbindungen, DSGVO-konforme Hosting-Lösungen in Deutschland/EU und können auf Wunsch auch komplett lokale Lösungen implementieren."
  },
  {
    question: "Können KI-Agenten mit meinen bestehenden Tools arbeiten?",
    answer: "Ja! Unsere Agenten integrieren sich nahtlos in gängige Tools wie CRM-Systeme (HubSpot, Salesforce), E-Mail-Provider, Kalender, Buchhaltung (lexoffice, sevDesk) und viele weitere über n8n-Schnittstellen."
  },
  {
    question: "Was passiert, wenn der Agent eine Anfrage nicht beantworten kann?",
    answer: "Unsere Agenten sind so konfiguriert, dass sie komplexe Fälle automatisch an menschliche Mitarbeiter weiterleiten. Sie erkennen ihre Grenzen und eskalieren intelligent – mit allen relevanten Kontextinformationen."
  },
  {
    question: "Wie werden die Agenten trainiert?",
    answer: "Wir trainieren die Agenten mit Ihren Unternehmensdaten, FAQs, Produktinformationen und bisherigen Kundeninteraktionen. Je mehr Kontext, desto besser die Antworten. Das Training ist ein kontinuierlicher Prozess."
  },
  {
    question: "Welche laufenden Kosten entstehen?",
    answer: "Neben der einmaligen Entwicklung fallen monatliche Kosten für Hosting, API-Nutzung und optional Wartung an. Ein typischer Agent kostet 50-200€ monatlich je nach Nutzungsvolumen und Komplexität."
  },
  {
    question: "Kann ich den Agenten später erweitern?",
    answer: "Absolut! KI-Agenten sind modular aufgebaut. Sie können jederzeit neue Funktionen, Integrationen oder Sprachfähigkeiten hinzufügen. Wir begleiten Sie bei der Weiterentwicklung."
  }
];

const useCaseCategories = [
  {
    title: "Kundenservice",
    icon: Headphones,
    examples: [
      "Automatische Beantwortung von FAQ-Anfragen",
      "24/7 Chat-Support auf Ihrer Website",
      "Ticket-Kategorisierung und Priorisierung",
      "Mehrsprachiger Support ohne Mehrkosten"
    ]
  },
  {
    title: "Marketing & Vertrieb",
    icon: TrendingUp,
    examples: [
      "Lead-Qualifizierung und -Scoring",
      "Personalisierte E-Mail-Kampagnen",
      "Social Media Content-Erstellung",
      "Automatische Angebotserstellung"
    ]
  },
  {
    title: "Operations",
    icon: Settings,
    examples: [
      "Automatische Rechnungsverarbeitung",
      "Terminplanung und Ressourcenmanagement",
      "Dokumentenanalyse und -extraktion",
      "Workflow-Automatisierung zwischen Tools"
    ]
  }
];

export default function KIAgenten() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEOHead 
        title="KI-Agenten Entwicklung | ExtruCon Fürstenfeldbruck – Chatbots & Automatisierung"
        description="Individuelle KI-Agenten für Kundenservice, Lead-Generierung & Automatisierung. 24/7 verfügbar, mehrsprachig, lernfähig. KI-Agentur aus Fürstenfeldbruck – deutschlandweit."
        keywords="KI-Agenten, Chatbot Entwicklung, Kundenservice Automatisierung, Lead-Qualifizierung, KI München, Automatisierung Bayern"
      />
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

        {/* Stats */}
        <section className="py-8 border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "80%", label: "Zeitersparnis" },
                { value: "24/7", label: "Verfügbarkeit" },
                { value: "500+", label: "Integrationen" },
                { value: "<2 Sek", label: "Antwortzeit" }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-3">
                Warum KI-Agenten?
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Die Vorteile intelligenter Automatisierung für Ihr Unternehmen.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-white text-sm mb-1">{benefit.title}</h3>
                  <p className="text-gray-400 text-xs">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Agents Grid */}
        <section id="agents" className="py-16 bg-card/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
                Unsere 8 KI-Agenten
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
                  transition={{ delay: i * 0.05 }}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${agent.color} border border-white/10`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <agent.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{agent.title}</h3>
                      <p className="text-gray-400 mb-4 text-sm">{agent.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {agent.features.map((feature) => (
                          <span 
                            key={feature}
                            className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="pt-3 border-t border-white/10">
                        <p className="text-xs text-gray-500 mb-2">Typische Anwendungen:</p>
                        <div className="flex flex-wrap gap-2">
                          {agent.useCases.map((useCase) => (
                            <span 
                              key={useCase}
                              className="text-xs text-gray-400"
                            >
                              • {useCase}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold font-display text-white mb-4">
                Einsatzbereiche
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                KI-Agenten unterstützen Sie in allen Unternehmensbereichen.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {useCaseCategories.map((category, i) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.examples.map((example) => (
                      <li key={example} className="flex items-start gap-2 text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {example}
                      </li>
                    ))}
                  </ul>
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
              <p className="text-gray-400 max-w-xl mx-auto">
                In 5 Schritten zu Ihrem individuellen KI-Agenten.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {[
                { step: 1, title: "Gespräch", description: "Wir verstehen Ihre Anforderungen und Prozesse." },
                { step: 2, title: "Analyse", description: "Identifikation von Automatisierungspotenzialen." },
                { step: 3, title: "Konzept", description: "Entwicklung einer maßgeschneiderten Lösung." },
                { step: 4, title: "Umsetzung", description: "Konfiguration und Training des Agenten." },
                { step: 5, title: "Go-Live", description: "Integration und kontinuierliche Optimierung." }
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center relative"
                >
                  {i < 4 && (
                    <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
                  )}
                  <div className="w-12 h-12 rounded-full bg-primary text-background font-bold text-lg flex items-center justify-center mx-auto mb-3 relative z-10">
                    {item.step}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-xs">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold font-display text-white mb-4">
                Unsere Technologien
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Wir nutzen die modernsten KI-Technologien für Ihre Agenten.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {technologies.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">{tech.name}</h3>
                    <p className="text-gray-400 text-xs">{tech.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-card/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Sparkles className="w-10 h-10 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">
                Transparente Preise
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Keine versteckten Kosten – Sie wissen von Anfang an, was Ihr Agent kostet.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  name: "Starter",
                  price: "ab 1.500€",
                  description: "Perfekt für einfache Automatisierungen",
                  features: ["1 KI-Agent", "Basis-Integration", "E-Mail-Support", "1 Monat Optimierung"],
                  highlight: false
                },
                {
                  name: "Business",
                  price: "ab 3.000€",
                  description: "Für komplexere Anforderungen",
                  features: ["1-2 KI-Agenten", "Multi-Tool-Integration", "Priority Support", "3 Monate Optimierung", "Dashboard"],
                  highlight: true
                },
                {
                  name: "Enterprise",
                  price: "auf Anfrage",
                  description: "Maßgeschneiderte Lösungen",
                  features: ["Mehrere Agenten", "Custom Development", "24/7 Support", "Kontinuierliche Betreuung", "SLA"],
                  highlight: false
                }
              ].map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-6 rounded-2xl border ${plan.highlight ? 'bg-primary/10 border-primary/30' : 'bg-white/5 border-white/10'}`}
                >
                  <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                  <div className="text-2xl font-bold text-primary mb-2">{plan.price}</div>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 justify-center mt-10">
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-5 h-5 text-primary" />
                Kostenlose Erstberatung
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Lock className="w-5 h-5 text-primary" />
                DSGVO-konform
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <RefreshCw className="w-5 h-5 text-primary" />
                Monatliche Wartung optional
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <HelpCircle className="w-10 h-10 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold font-display text-white mb-4">
                Häufige Fragen
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Antworten auf die wichtigsten Fragen zu unseren KI-Agenten.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl bg-white/5 border border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                    data-testid={`faq-toggle-${i}`}
                  >
                    <span className="font-medium text-white">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-400 text-sm">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
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
              Kostenlose Erstberatung – unverbindlich und unkompliziert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/kontakt" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-background font-bold rounded-lg hover:bg-primary/90 transition-colors text-lg"
                data-testid="button-ki-agenten-contact"
              >
                Jetzt Beratungstermin vereinbaren <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:089444438879" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/10"
              >
                <Globe className="w-5 h-5" />
                089 444438879
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
