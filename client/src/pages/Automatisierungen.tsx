import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Workflow, Zap, ArrowRight, CheckCircle, Clock, TrendingUp, Shield, RefreshCw, Mail, FileText, Users, ShoppingCart, Calendar, Database, Settings, Cpu, Link2, GitBranch, Layers, Play, ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const automations = [
  {
    icon: Mail,
    title: "E-Mail-Automatisierung",
    description: "Automatischer Versand, Sortierung und Beantwortung von E-Mails. Willkommens-Sequenzen, Follow-ups und personalisierte Kampagnen auf Autopilot.",
    examples: ["Willkommens-E-Mails", "Lead-Nurturing", "Warenkorbabbrecher", "Newsletter-Segmentierung"]
  },
  {
    icon: Users,
    title: "Lead-Management",
    description: "Leads automatisch erfassen, qualifizieren und an den Vertrieb übergeben. Integration mit Ihrem CRM und automatisches Scoring.",
    examples: ["Formulare → CRM", "Lead-Scoring", "Automatische Zuweisung", "Nachfass-Reminder"]
  },
  {
    icon: FileText,
    title: "Dokumenten-Workflows",
    description: "Rechnungen, Verträge und Dokumente automatisch verarbeiten, archivieren und weiterleiten. OCR-Erkennung inklusive.",
    examples: ["Rechnungsverarbeitung", "Vertragsmanagement", "Digitale Unterschriften", "Archivierung"]
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce-Automation",
    description: "Bestellungen, Lagerbestände und Versand automatisch verwalten. Synchronisation zwischen Shop, Buchhaltung und Versand.",
    examples: ["Bestellbestätigungen", "Lager-Sync", "Retouren-Workflow", "Bewertungsanfragen"]
  },
  {
    icon: Calendar,
    title: "Termin-Automatisierung",
    description: "Buchungen, Erinnerungen und Kalenderabgleich vollautomatisch. Keine doppelten Termine, keine vergessenen Meetings.",
    examples: ["Online-Buchung", "Erinnerungen", "Kalender-Sync", "No-Show-Management"]
  },
  {
    icon: Database,
    title: "Daten-Synchronisation",
    description: "Halten Sie alle Ihre Systeme synchron. Änderungen in einem Tool werden automatisch in allen anderen übernommen.",
    examples: ["CRM ↔ Buchhaltung", "Shop ↔ Warenwirtschaft", "Kontakte synchron", "Bestandsabgleich"]
  },
  {
    icon: TrendingUp,
    title: "Reporting-Automation",
    description: "Automatische Erstellung und Versand von Reports. Tägliche, wöchentliche oder monatliche Auswertungen ohne manuellen Aufwand.",
    examples: ["Umsatzreports", "Marketing-KPIs", "Mitarbeiter-Dashboards", "Kundenanalysen"]
  },
  {
    icon: Settings,
    title: "Prozess-Workflows",
    description: "Komplexe Geschäftsprozesse automatisieren: Freigaben, Eskalationen und mehrstufige Abläufe mit intelligenten Regeln.",
    examples: ["Freigabe-Workflows", "Eskalationsketten", "Onboarding", "Checklisten"]
  }
];

const tools = [
  { name: "n8n", description: "Unser Haupt-Tool für komplexe Automatisierungen" },
  { name: "Zapier", description: "Schnelle Integrationen für einfache Workflows" },
  { name: "Make (Integromat)", description: "Visuelle Workflow-Erstellung" },
  { name: "HubSpot", description: "Marketing- und Sales-Automatisierung" },
  { name: "Airtable", description: "Datenbank-Automatisierungen" },
  { name: "Google Workspace", description: "Sheets, Docs, Gmail-Integration" }
];

const benefits = [
  { icon: Clock, title: "80% Zeitersparnis", description: "Manuelle Aufgaben werden automatisch erledigt" },
  { icon: Shield, title: "Weniger Fehler", description: "Konsistente Prozesse ohne Flüchtigkeitsfehler" },
  { icon: TrendingUp, title: "Skalierbar", description: "Mehr Volumen ohne mehr Personal" },
  { icon: Zap, title: "Schneller", description: "Prozesse laufen 24/7 in Sekunden" }
];

const processSteps = [
  { step: 1, title: "Analyse", description: "Wir verstehen Ihre aktuellen Prozesse und identifizieren Automatisierungspotenzial." },
  { step: 2, title: "Konzept", description: "Gemeinsam definieren wir den optimalen Workflow und wählen die passenden Tools." },
  { step: 3, title: "Umsetzung", description: "Wir bauen Ihre Automatisierung mit n8n oder dem passenden Tool." },
  { step: 4, title: "Testing", description: "Ausgiebige Tests stellen sicher, dass alles reibungslos funktioniert." },
  { step: 5, title: "Go-Live", description: "Ihr Workflow geht live – mit Monitoring und kontinuierlicher Optimierung." }
];

const faqs = [
  {
    question: "Was kostet eine Automatisierung?",
    answer: "Einfache Automatisierungen starten ab 500€. Komplexere Workflows mit mehreren Systemen beginnen bei 1.500€. In der kostenlosen Erstberatung erstellen wir einen konkreten Kostenvoranschlag."
  },
  {
    question: "Welche Tools können integriert werden?",
    answer: "Mit n8n können wir über 500 Tools integrieren: CRM-Systeme, E-Mail-Provider, Shops, Buchhaltung, Google Workspace, Microsoft 365, Slack, Notion und viele mehr. Auch individuelle APIs sind möglich."
  },
  {
    question: "Wie lange dauert die Umsetzung?",
    answer: "Einfache Workflows sind in 1-2 Tagen fertig. Komplexere Automatisierungen mit mehreren Integrationen benötigen 1-2 Wochen. Bei der Erstberatung geben wir Ihnen einen realistischen Zeitplan."
  },
  {
    question: "Kann ich die Automatisierungen selbst anpassen?",
    answer: "Ja! Wir schulen Sie im Umgang mit n8n oder dem genutzten Tool. Einfache Anpassungen können Sie selbst vornehmen. Für komplexere Änderungen stehen wir Ihnen zur Seite."
  },
  {
    question: "Was passiert, wenn etwas schiefgeht?",
    answer: "Unsere Automatisierungen haben eingebaute Fehlerbehandlung und Benachrichtigungen. Sie werden sofort informiert, wenn etwas nicht funktioniert. Zusätzlich bieten wir Wartungspakete an."
  },
  {
    question: "Sind meine Daten sicher?",
    answer: "Ja! Wir nutzen verschlüsselte Verbindungen und DSGVO-konforme Lösungen. Auf Wunsch hosten wir n8n auch auf Ihren eigenen Servern für maximale Datenkontrolle."
  }
];

export default function Automatisierungen() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEOHead 
        title="Workflow-Automatisierung mit n8n | ExtruCon Fürstenfeldbruck – 80% Zeit sparen"
        description="Automatisieren Sie Ihre Geschäftsprozesse mit n8n: E-Mail, CRM, Rechnungen & mehr. Bis zu 80% Zeitersparnis. KI-Agentur aus Fürstenfeldbruck – deutschlandweit."
        keywords="n8n Automatisierung, Workflow Automatisierung, Prozessautomatisierung, Business Automation, Zapier Alternative, Make Alternative"
      />
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-orange-500/5 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
                <Workflow className="w-4 h-4" />
                Workflow-Automatisierung
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6">
                Automatisieren Sie Ihr Business
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Wir verbinden Ihre Tools und automatisieren wiederkehrende Aufgaben – 
                damit Sie sich auf das Wesentliche konzentrieren können.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/kontakt" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors"
                  data-testid="button-automatisierung-cta"
                >
                  Kostenlose Beratung <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="#automations" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 transition-colors border border-white/10"
                >
                  Möglichkeiten entdecken
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-10 border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mx-auto mb-3">
                    <benefit.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="font-bold text-white mb-1">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Automations Grid */}
        <section id="automations" className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
                Was wir automatisieren
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Von einfachen E-Mail-Workflows bis zu komplexen Geschäftsprozessen – 
                wir finden die passende Lösung.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {automations.map((auto, i) => (
                <motion.div
                  key={auto.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                    <auto.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{auto.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{auto.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {auto.examples.map((ex) => (
                      <span key={ex} className="text-xs text-gray-500">• {ex}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* n8n Feature */}
        <section className="py-16 bg-card/20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
                  <GitBranch className="w-4 h-4" />
                  Powered by n8n
                </div>
                <h2 className="text-3xl font-bold font-display text-white mb-4">
                  Warum wir n8n nutzen
                </h2>
                <p className="text-gray-400 mb-6">
                  n8n ist die leistungsstärkste Open-Source-Automatisierungsplattform. 
                  Damit bauen wir Workflows, die genau Ihren Anforderungen entsprechen – 
                  ohne die Einschränkungen anderer Tools.
                </p>
                <ul className="space-y-3">
                  {[
                    "Über 500 Integrationen verfügbar",
                    "Keine Limitierungen bei Ausführungen",
                    "Self-Hosting für maximale Datenkontrolle",
                    "Komplexe Logik und Verzweigungen möglich",
                    "API-Anbindungen für jedes System",
                    "Kosteneffizienter als Zapier & Make"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <Layers className="w-8 h-8 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Visuelle Workflows</h3>
                    <p className="text-gray-400 text-sm">Klar, verständlich, wartbar</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {["Trigger", "Bedingung", "Aktion 1", "Aktion 2"].map((step, i) => (
                    <div key={step} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-white text-sm font-bold">
                        {i + 1}
                      </div>
                      <div className="flex-1 h-10 rounded bg-white/5 border border-white/10 flex items-center px-3">
                        <span className="text-gray-300 text-sm">{step}</span>
                      </div>
                      {i < 3 && <ArrowRight className="w-4 h-4 text-gray-600" />}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold font-display text-white mb-4">
                Unser Prozess
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Von der Idee zur fertigen Automatisierung in 5 Schritten.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {processSteps.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center relative"
                >
                  {i < 4 && (
                    <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gradient-to-r from-orange-500/50 to-orange-500/20" />
                  )}
                  <div className="w-12 h-12 rounded-full bg-orange-500 text-white font-bold text-lg flex items-center justify-center mx-auto mb-3 relative z-10">
                    {item.step}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-xs">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="py-16 bg-card/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl font-bold font-display text-white mb-3">
                Unsere Tools
              </h2>
              <p className="text-gray-400">
                Je nach Anforderung nutzen wir das passende Tool.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 text-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mx-auto mb-2">
                    <Link2 className="w-5 h-5 text-orange-400" />
                  </div>
                  <h3 className="font-bold text-white text-sm">{tool.name}</h3>
                  <p className="text-gray-500 text-xs mt-1">{tool.description}</p>
                </motion.div>
              ))}
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
              className="text-center mb-10"
            >
              <HelpCircle className="w-10 h-10 text-orange-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold font-display text-white mb-3">
                Häufige Fragen
              </h2>
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
                    data-testid={`auto-faq-toggle-${i}`}
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
        <section className="py-16 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-y border-white/10">
          <div className="container mx-auto px-4 text-center">
            <Play className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Starten Sie Ihre erste Automatisierung
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Kostenlose Erstberatung – wir analysieren Ihre Prozesse und zeigen Ihnen, 
              was möglich ist.
            </p>
            <a 
              href="/kontakt" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
              data-testid="button-automatisierung-contact"
            >
              Jetzt Beratung anfragen <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 bg-white/5">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Weitere Leistungen</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/ki-agenten" className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-primary/50 transition-colors group">
                <Cpu className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">KI-Agenten</h3>
                <p className="text-sm text-gray-400">Intelligente Assistenten für Ihr Business</p>
              </a>
              <a href="/webseiten-ki" className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-secondary/50 transition-colors group">
                <Link2 className="w-8 h-8 text-secondary mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Webseiten mit KI</h3>
                <p className="text-sm text-gray-400">Moderne Websites mit KI-Features</p>
              </a>
              <a href="/kontakt" className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-orange-500/50 transition-colors group">
                <Users className="w-8 h-8 text-orange-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Beratung</h3>
                <p className="text-sm text-gray-400">Kostenlose Erstberatung anfordern</p>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
