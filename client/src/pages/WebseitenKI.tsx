import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Globe, Sparkles, ArrowRight, CheckCircle, Zap, Shield, TrendingUp, MessageSquare, Bot, Search, FileText, Image, Code, Palette, Smartphone, BarChart3, RefreshCw, ChevronDown, HelpCircle, Clock, Users } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Bot,
    title: "KI-Chatbot Integration",
    description: "Intelligente Chatbots, die Kundenanfragen 24/7 beantworten, Leads qualifizieren und Termine buchen – direkt auf Ihrer Website.",
    benefits: ["Sofortige Antworten", "Lead-Generierung", "Terminbuchung", "FAQ-Automatisierung"]
  },
  {
    icon: FileText,
    title: "KI-Content-Erstellung",
    description: "SEO-optimierte Texte, Produktbeschreibungen und Blog-Artikel werden mit KI erstellt und von Experten geprüft.",
    benefits: ["SEO-optimiert", "Markenkonform", "Schnelle Erstellung", "Regelmäßige Updates"]
  },
  {
    icon: Image,
    title: "KI-Bildoptimierung",
    description: "Automatische Bildoptimierung, Alt-Text-Generierung und intelligente Bildauswahl für maximale Performance.",
    benefits: ["Schnelle Ladezeiten", "Auto Alt-Texte", "Responsive Bilder", "WebP-Konvertierung"]
  },
  {
    icon: Search,
    title: "KI-SEO-Analyse",
    description: "Kontinuierliche SEO-Überwachung mit KI-gestützten Empfehlungen für bessere Rankings bei Google.",
    benefits: ["Keyword-Tracking", "Konkurrenz-Analyse", "Auto-Optimierung", "Ranking-Reports"]
  },
  {
    icon: Users,
    title: "Personalisierung",
    description: "KI analysiert Besucherverhalten und zeigt personalisierte Inhalte, Produkte und Angebote.",
    benefits: ["Höhere Conversion", "Relevante Inhalte", "A/B-Testing", "Nutzerprofile"]
  },
  {
    icon: BarChart3,
    title: "Intelligente Analytics",
    description: "KI-gestützte Auswertung Ihrer Website-Daten mit automatischen Handlungsempfehlungen.",
    benefits: ["Automatische Insights", "Conversion-Tracking", "Nutzerverhalten", "Optimierungsvorschläge"]
  }
];

const websiteTypes = [
  {
    title: "Unternehmenswebsite",
    description: "Professionelle Präsenz mit KI-Chatbot, SEO-Optimierung und Content-Management.",
    price: "ab 3.500€",
    features: ["Responsives Design", "KI-Chatbot", "SEO-Optimierung", "CMS", "Kontaktformular", "Analytics"]
  },
  {
    title: "Landing Page",
    description: "Conversion-optimierte Seite für Kampagnen, Produkte oder Dienstleistungen.",
    price: "ab 1.500€",
    features: ["Conversion-Design", "A/B-Testing", "Lead-Formulare", "Tracking", "Mobile-First", "Schnelle Ladezeit"]
  },
  {
    title: "E-Commerce Shop",
    description: "Online-Shop mit KI-Produktempfehlungen und automatisiertem Marketing.",
    price: "ab 5.000€",
    features: ["Produktkatalog", "KI-Empfehlungen", "Zahlungsintegration", "Warenkorbabbruch-Mail", "SEO", "Analytics"]
  },
  {
    title: "Blog / Content-Plattform",
    description: "Content-Hub mit KI-gestützter Texterstellung und SEO-Automatisierung.",
    price: "ab 2.500€",
    features: ["KI-Content", "SEO-Tools", "Kategorien", "Newsletter", "Social Sharing", "Autorenprofile"]
  }
];

const technologies = [
  { name: "React / Next.js", category: "Frontend" },
  { name: "WordPress", category: "CMS" },
  { name: "Webflow", category: "No-Code" },
  { name: "OpenAI GPT", category: "KI" },
  { name: "Claude AI", category: "KI" },
  { name: "n8n", category: "Automation" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Vercel", category: "Hosting" }
];

const processSteps = [
  { step: 1, title: "Briefing", description: "Wir verstehen Ihre Ziele, Zielgruppe und Anforderungen." },
  { step: 2, title: "Konzept", description: "Struktur, Design-Richtung und KI-Features werden definiert." },
  { step: 3, title: "Design", description: "Modernes UI/UX-Design mit Fokus auf Conversion." },
  { step: 4, title: "Entwicklung", description: "Technische Umsetzung mit KI-Integrationen." },
  { step: 5, title: "Launch", description: "Go-Live mit SEO-Setup und Monitoring." }
];

const faqs = [
  {
    question: "Was kostet eine Website mit KI-Features?",
    answer: "Einfache Landing Pages starten ab 1.500€, Unternehmenswebsites ab 3.500€. KI-Features wie Chatbots oder Content-Automatisierung können separat oder als Paket hinzugebucht werden. Wir erstellen ein individuelles Angebot basierend auf Ihren Anforderungen."
  },
  {
    question: "Wie lange dauert die Erstellung einer Website?",
    answer: "Eine Landing Page ist in 1-2 Wochen fertig. Unternehmenswebsites benötigen 3-6 Wochen, E-Commerce-Projekte 4-8 Wochen. Der genaue Zeitplan hängt von Umfang und Komplexität ab."
  },
  {
    question: "Welche KI-Features sind am sinnvollsten?",
    answer: "Das hängt von Ihren Zielen ab. Für Lead-Generierung empfehlen wir einen Chatbot. Für SEO setzen wir auf KI-Content-Erstellung. In der Beratung analysieren wir, welche Features den größten Mehrwert bieten."
  },
  {
    question: "Kann ich die Website selbst bearbeiten?",
    answer: "Ja! Wir setzen auf benutzerfreundliche CMS wie WordPress oder Webflow. Sie erhalten eine Schulung und können Texte, Bilder und einfache Änderungen selbst vornehmen."
  },
  {
    question: "Ist die Website DSGVO-konform?",
    answer: "Absolut. Wir achten auf DSGVO-konforme Cookie-Banner, Datenschutzerklärungen, SSL-Verschlüsselung und sichere Kontaktformulare. Bei KI-Features nutzen wir EU-konforme Lösungen."
  },
  {
    question: "Was passiert nach dem Launch?",
    answer: "Wir bieten Wartungspakete für Updates, Sicherheit und Support. Außerdem können wir kontinuierlich neue KI-Features hinzufügen und die Website basierend auf Analytics-Daten optimieren."
  }
];

export default function WebseitenKI() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEOHead 
        title="Webseiten mit KI-Features | ExtruCon Fürstenfeldbruck – Chatbots & SEO"
        description="Moderne Websites mit integrierten KI-Features: Chatbots, automatische Content-Erstellung, intelligente SEO. Webentwicklung aus Fürstenfeldbruck – deutschlandweit."
        keywords="Webseiten mit KI, Website Chatbot, KI Content, SEO Automatisierung, Webentwicklung München, React Website"
      />
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-secondary/10 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                Webseiten mit KI
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6">
                Intelligente Websites, die arbeiten
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Wir entwickeln moderne Websites mit integrierten KI-Features: 
                Chatbots, automatische Content-Erstellung, intelligente SEO und mehr.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/kontakt" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-background font-bold rounded-lg hover:bg-secondary/90 transition-colors"
                  data-testid="button-webseiten-cta"
                >
                  Projekt starten <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="#features" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 transition-colors border border-white/10"
                >
                  KI-Features entdecken
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
                { icon: Zap, value: "< 2s", label: "Ladezeit" },
                { icon: TrendingUp, value: "+40%", label: "Conversion" },
                { icon: Clock, value: "24/7", label: "Verfügbarkeit" },
                { icon: Shield, value: "100%", label: "DSGVO-konform" }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <stat.icon className="w-6 h-6 text-secondary mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* KI Features */}
        <section id="features" className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
                KI-Features für Ihre Website
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Integrierte KI-Funktionen, die Ihre Website smarter und effektiver machen.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-secondary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.benefits.map((benefit) => (
                      <span key={benefit} className="px-2 py-1 rounded bg-secondary/10 text-secondary text-xs">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Website Types */}
        <section className="py-16 bg-card/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold font-display text-white mb-4">
                Website-Pakete
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Wählen Sie das passende Paket oder lassen Sie uns eine individuelle Lösung erstellen.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {websiteTypes.map((type, i) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10"
                >
                  <h3 className="text-lg font-bold text-white mb-1">{type.title}</h3>
                  <div className="text-2xl font-bold text-secondary mb-3">{type.price}</div>
                  <p className="text-gray-400 text-sm mb-4">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
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
                Von der Idee zur fertigen Website in 5 Schritten.
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
                    <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gradient-to-r from-secondary/50 to-secondary/20" />
                  )}
                  <div className="w-12 h-12 rounded-full bg-secondary text-background font-bold text-lg flex items-center justify-center mx-auto mb-3 relative z-10">
                    {item.step}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-xs">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-12 bg-card/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl font-bold font-display text-white mb-2">
                Unsere Technologien
              </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {technologies.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 flex items-center gap-2"
                >
                  <Code className="w-4 h-4 text-secondary" />
                  <span className="text-white text-sm font-medium">{tech.name}</span>
                  <span className="text-gray-500 text-xs">({tech.category})</span>
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
              <HelpCircle className="w-10 h-10 text-secondary mx-auto mb-4" />
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
                    data-testid={`web-faq-toggle-${i}`}
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
        <section className="py-16 bg-gradient-to-r from-secondary/10 to-primary/10 border-y border-white/10">
          <div className="container mx-auto px-4 text-center">
            <Sparkles className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Bereit für Ihre intelligente Website?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Kostenlose Erstberatung – wir besprechen Ihre Ziele und zeigen, 
              wie KI Ihre Website verbessern kann.
            </p>
            <a 
              href="/kontakt" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-background font-bold rounded-lg hover:bg-secondary/90 transition-colors text-lg"
              data-testid="button-webseiten-contact"
            >
              Projekt anfragen <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 bg-white/5">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Weitere Leistungen</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/ki-agenten" className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-primary/50 transition-colors group">
                <Bot className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">KI-Agenten</h3>
                <p className="text-sm text-gray-400">Intelligente Assistenten für Ihr Business</p>
              </a>
              <a href="/automatisierungen" className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-orange-500/50 transition-colors group">
                <Zap className="w-8 h-8 text-orange-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Automatisierungen</h3>
                <p className="text-sm text-gray-400">n8n-Workflows für Ihre Geschäftsprozesse</p>
              </a>
              <a href="/kontakt" className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-secondary/50 transition-colors group">
                <Users className="w-8 h-8 text-secondary mb-3" />
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
