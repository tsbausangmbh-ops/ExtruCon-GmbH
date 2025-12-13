import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ExploreMoreSection, GeoLinks } from "@/components/InternalLinks";
import { motion } from "framer-motion";
import { Globe, Sparkles, ArrowRight, CheckCircle, Zap, Shield, TrendingUp, MessageSquare, Bot, Search, FileText, Image, Code, Palette, Smartphone, BarChart3, RefreshCw, ChevronDown, HelpCircle, Clock, Users } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

const featureIcons = [Bot, FileText, Image, Search, Users, BarChart3];

export default function WebseitenKI() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEOHead 
        title="Webseiten mit KI-Features | ExtruCon Fürstenfeldbruck – Chatbots & SEO"
        description="Moderne Websites mit integrierten KI-Features: Chatbots, automatische Content-Erstellung, intelligente SEO. Webentwicklung aus Fürstenfeldbruck – deutschlandweit."
        keywords="Webseiten mit KI, Website Chatbot, KI Content, SEO Automatisierung, Webentwicklung München, React Website"
      />
      <Navbar />
      <main className="pt-24">
        <Breadcrumbs items={[
          { label: t.nav.services, href: "/#services" },
          { label: t.nav.websitesKI }
        ]} />
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
                {t.webKIPage.badge}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6">
                {t.webKIPage.title}
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                {t.webKIPage.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/kontakt" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-background font-bold rounded-lg hover:bg-secondary/90 transition-colors"
                  data-testid="button-webseiten-cta"
                >
                  {t.webKIPage.ctaPrimary} <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="#features" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 transition-colors border border-white/10"
                >
                  {t.webKIPage.ctaSecondary}
                </a>
              </div>
              <GeoLinks service="KI-Webseiten Entwicklung" />
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: Zap, value: "< 2s", label: t.webKIPage.stats.loadTime },
                { icon: TrendingUp, value: "+40%", label: t.webKIPage.stats.conversion },
                { icon: Clock, value: "24/7", label: t.webKIPage.stats.uptime },
                { icon: Shield, value: "100%", label: t.webKIPage.stats.satisfaction }
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

        {/* Referenzen - Hauptthema */}
        <section className="py-20 bg-gradient-to-b from-secondary/5 via-card/30 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-medium mb-4">
                <CheckCircle className="w-4 h-4" />
                Live Projekte
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
                Unsere KI-Webseiten Referenzen
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Entdecken Sie unsere erfolgreich umgesetzten Projekte – jedes mit integrierten KI-Features, NLP-Chatbots und messbaren Ergebnissen.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {[
                {
                  name: "089Dach GmbH",
                  url: "https://dacharbeiten.089dach.de/",
                  industry: "Dachdecker München",
                  features: ["KI-Chatbot", "Multi-Step Formular", "SEO-Optimiert"],
                  result: "+45% mehr qualifizierte Anfragen"
                },
                {
                  name: "AquaPro24",
                  url: "https://aquapro24.de",
                  industry: "Sanitär & Heizung",
                  features: ["KI-Kostenrechner", "24/7 Notdienst", "Lead-Qualifizierung"],
                  result: "2.500+ zufriedene Kunden"
                },
                {
                  name: "089-Sanierer",
                  url: "https://089-sanierer.de",
                  industry: "Haussanierung",
                  features: ["KI-Beratung", "Projekt-Konfigurator", "Handwerker-Matching"],
                  result: "268+ erfolgreiche Projekte"
                },
                {
                  name: "089Bayern Ltd.",
                  url: "https://www.089bayern.com/",
                  industry: "Energie & Solar",
                  features: ["Mehrsprachig (TR/DE)", "Produktkonfigurator", "B2B-Portal"],
                  result: "Erfolgreiche Markteinführung Türkei"
                },
                {
                  name: "ExtruCon Funnel",
                  url: "https://funnel.extrucon.de",
                  industry: "Lead-Generierung",
                  features: ["Conversion-Funnel", "Geo-Targeting", "KI-Chatbot"],
                  result: "25% Conversion-Rate"
                },
                {
                  name: "ExtruCon GmbH",
                  url: "https://extrucon.de",
                  industry: "KI-Agentur",
                  features: ["Multi-Language", "KI-Assistent", "Full SEO"],
                  result: "Top-Rankings Bayern"
                }
              ].map((project, i) => (
                <motion.a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="block p-6 bg-white/5 border border-white/10 rounded-xl hover:border-secondary/50 hover:bg-white/10 transition-all group"
                  data-testid={`referenz-${i}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-secondary transition-colors">{project.name}</h3>
                      <p className="text-sm text-gray-500">{project.industry}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature) => (
                      <span key={feature} className="px-2 py-1 text-xs rounded bg-secondary/10 text-secondary">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-300">{project.result}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="text-center">
              <a 
                href="/referenzen" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/10 text-secondary font-medium rounded-lg hover:bg-secondary/20 transition-colors border border-secondary/30"
                data-testid="link-alle-referenzen"
              >
                Alle Referenzen ansehen <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* NLP & KI-Problemlösung */}
        <section className="py-16 bg-gradient-to-b from-background to-card/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-4">
                  <Bot className="w-4 h-4" />
                  Natural Language Processing
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
                  KI-Webseiten mit NLP: Ihr digitaler Problemlöser
                </h2>
                <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                  Unsere Webseiten verstehen Ihre Kunden – dank modernster NLP-Technologie (Natural Language Processing) 
                  und KI-gestützter Problemlösung.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <MessageSquare className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Natürliche Sprachverarbeitung</h3>
                  <p className="text-gray-400 mb-4">
                    Ihre Website-Besucher können Fragen stellen wie in einem echten Gespräch. Der KI-Chatbot versteht:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Umgangssprache & Dialekte</strong> – auch bayerische Ausdrücke werden verstanden</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Komplexe Anfragen</strong> – mehrere Fragen in einem Satz</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Kontext & Absicht</strong> – erkennt was der Kunde wirklich will</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Tippfehler & Abkürzungen</strong> – robuste Fehlererkennung</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                    <Zap className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Automatische Problemlösung</h3>
                  <p className="text-gray-400 mb-4">
                    Nicht nur Fragen beantworten – sondern Probleme lösen. Unser KI-System kann:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Termine automatisch buchen</strong> – direkte Kalender-Integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Angebote erstellen</strong> – basierend auf Kundenanforderungen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Leads qualifizieren</strong> – relevante Infos automatisch erfassen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                      <span><strong className="text-white">Eskalation an Menschen</strong> – bei komplexen Fällen</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl border border-white/10">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-2">95%</div>
                    <p className="text-gray-400 text-sm">der Kundenanfragen automatisch beantwortet</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-2">3 Sek.</div>
                    <p className="text-gray-400 text-sm">durchschnittliche Antwortzeit des Chatbots</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
                    <p className="text-gray-400 text-sm">Verfügbarkeit ohne Personalkosten</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Konkrete Anwendungsfälle */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold font-display text-white mb-4">
                So löst Ihre KI-Website Kundenprobleme
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Echte Beispiele aus unseren Projekten – sehen Sie, wie NLP im Alltag funktioniert.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  industry: "Handwerker",
                  problem: "Kunde fragt: \"Könnt ihr morgen früh vorbeikommen? Mein Wasserhahn tropft.\"",
                  solution: "KI erkennt Dringlichkeit, prüft Verfügbarkeit, bietet freie Termine an und bucht automatisch."
                },
                {
                  industry: "Arztpraxis",
                  problem: "Patient schreibt: \"Hab Kopfschmerzen seit 3 Tagen, brauch Termin.\"",
                  solution: "KI erfasst Symptome, priorisiert nach Dringlichkeit, schlägt passende Termine vor."
                },
                {
                  industry: "Immobilien",
                  problem: "Interessent: \"Suche 3-Zimmer, max 1500€, Nähe U-Bahn, mit Balkon.\"",
                  solution: "KI filtert Angebote, sendet passende Exposés, vereinbart Besichtigungstermine."
                },
                {
                  industry: "Restaurant",
                  problem: "Gast: \"Kann ich heute Abend für 6 Personen reservieren? Einer ist Vegetarier.\"",
                  solution: "KI prüft Kapazität, reserviert Tisch, notiert Sonderwünsche für die Küche."
                },
                {
                  industry: "Rechtsanwalt",
                  problem: "Mandant: \"Mein Vermieter will mich rauswerfen, was kann ich tun?\"",
                  solution: "KI sammelt erste Infos zum Fall, erklärt Rechte, vereinbart Beratungstermin."
                },
                {
                  industry: "Autowerkstatt",
                  problem: "Kunde: \"Motor macht komische Geräusche beim Anfahren.\"",
                  solution: "KI stellt gezielte Fragen zur Diagnose, schätzt mögliche Ursachen, bucht Werkstatttermin."
                }
              ].map((example, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 bg-white/5 rounded-xl border border-white/10"
                >
                  <div className="text-xs text-secondary font-medium mb-2">{example.industry}</div>
                  <p className="text-gray-300 text-sm mb-3 italic">"{example.problem.split('\"')[1]}"</p>
                  <div className="flex items-start gap-2">
                    <Bot className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-gray-400 text-sm">{example.solution}</p>
                  </div>
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
                {t.webKIPage.featuresTitle}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {t.webKIPage.featuresSubtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.webKIPage.features.map((feature, i) => {
                const IconComponent = featureIcons[i] || Bot;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-secondary/30 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-secondary" />
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
                );
              })}
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
                {t.webKIPage.typesTitle}
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                {t.webKIPage.typesSubtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.webKIPage.websiteTypes.map((type, i) => (
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
                {t.webKIPage.processTitle}
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                {t.webKIPage.processSubtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {t.webKIPage.processSteps.map((item, i) => (
                <motion.div
                  key={item.title}
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
                    {i + 1}
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
                {t.webKIPage.techTitle}
              </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {t.webKIPage.technologies.map((tech, i) => (
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

        {/* Why KI Websites */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold font-display text-white mb-6 text-center">
                Warum KI-Webseiten die Zukunft sind
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  In der heutigen digitalen Welt reicht eine einfache Website nicht mehr aus. Kunden erwarten sofortige Antworten, 
                  personalisierte Erlebnisse und intelligente Interaktionen. Mit unseren <strong className="text-secondary">KI-gestützten Webseiten</strong> bieten 
                  Sie genau das – und mehr.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="p-5 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-secondary" />
                      24/7 Kundenbetreuung
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Ihr KI-Chatbot beantwortet Kundenanfragen rund um die Uhr, qualifiziert Leads automatisch und 
                      leitet komplexe Fälle an Ihr Team weiter. Keine Wartezeiten, keine verlorenen Kunden.
                    </p>
                  </div>
                  <div className="p-5 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                      <Search className="w-5 h-5 text-secondary" />
                      Automatische SEO-Optimierung
                    </h3>
                    <p className="text-gray-400 text-sm">
                      KI-gestützte Content-Erstellung und automatische Meta-Tag-Generierung sorgen dafür, dass 
                      Ihre Website bei Google besser gefunden wird – ohne manuellen Aufwand.
                    </p>
                  </div>
                  <div className="p-5 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-secondary" />
                      Höhere Conversion-Raten
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Personalisierte Inhalte und intelligente Formulare steigern die Conversion-Rate um durchschnittlich 
                      40%. Mehr Besucher werden zu zahlenden Kunden.
                    </p>
                  </div>
                  <div className="p-5 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                      <RefreshCw className="w-5 h-5 text-secondary" />
                      Automatische Updates
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Ihre Website bleibt immer aktuell. KI-generierte Inhalte, automatische Bildoptimierung und 
                      dynamische Anpassungen halten Ihre Seite frisch und relevant.
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg">
                  Als <strong className="text-white">KI-Agentur aus Fürstenfeldbruck</strong> bei München entwickeln wir moderne Webseiten mit 
                  integrierten KI-Features für Unternehmen in ganz Deutschland. Von Handwerksbetrieben über Arztpraxen bis 
                  zu E-Commerce-Shops – wir finden die perfekte Lösung für Ihre Branche.
                </p>
              </div>
            </motion.div>
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
                {t.webKIPage.faqTitle}
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-3">
              {t.webKIPage.faqs.map((faq, i) => (
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
                    <span className="font-medium text-white">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-400 text-sm">{faq.a}</p>
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
              {t.webKIPage.ctaTitle}
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              {t.webKIPage.ctaSubtitle}
            </p>
            <a 
              href="/kontakt" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-background font-bold rounded-lg hover:bg-secondary/90 transition-colors text-lg"
              data-testid="button-webseiten-contact"
            >
              {t.webKIPage.ctaPrimary} <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-12 bg-white/5">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-white text-center mb-8">{t.nav.services}</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/ki-agenten" className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-primary/50 transition-colors group">
                <Bot className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">{t.nav.kiAgents}</h3>
                <p className="text-sm text-gray-400">{t.services.kiAgents.desc}</p>
              </a>
              <a href="/automatisierungen" className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-orange-500/50 transition-colors group">
                <Zap className="w-8 h-8 text-orange-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">{t.nav.automation}</h3>
                <p className="text-sm text-gray-400">{t.services.automation.desc}</p>
              </a>
              <a href="/kontakt" className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-secondary/50 transition-colors group">
                <Users className="w-8 h-8 text-secondary mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">{t.nav.contact}</h3>
                <p className="text-sm text-gray-400">{t.hero.freeConsultation}</p>
              </a>
            </div>
          </div>
        </section>

        <ExploreMoreSection />
      </main>
      <Footer />
    </div>
  );
}
