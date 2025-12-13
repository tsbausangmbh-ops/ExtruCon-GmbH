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

const webseitenSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://extrucon.de/webseiten-ki#service",
    "name": "Webseiten mit KI-Features",
    "description": "Moderne Websites mit integrierten KI-Features: Chatbots, automatische Content-Erstellung, intelligente SEO. Professionelle Webentwicklung mit React und TypeScript.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "ExtruCon GmbH",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hasenheide 8",
        "addressLocality": "Fürstenfeldbruck",
        "postalCode": "82256",
        "addressRegion": "Bayern",
        "addressCountry": "DE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 48.1789,
        "longitude": 11.2546
      },
      "telephone": "+49-89-444438879"
    },
    "areaServed": ["Bayern", "Deutschland", "Österreich", "Schweiz"],
    "serviceType": "Webentwicklung mit KI",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "EUR",
      "lowPrice": "2500",
      "highPrice": "15000",
      "offerCount": "3"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://extrucon.de" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://extrucon.de/#services" },
      { "@type": "ListItem", "position": 3, "name": "Webseiten mit KI", "item": "https://extrucon.de/webseiten-ki" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Was kostet eine Website mit KI-Features?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unsere Websites starten ab 2.500€ für eine Landing Page und reichen bis zu 15.000€+ für komplexe Web-Applikationen mit umfassenden KI-Integrationen."
        }
      },
      {
        "@type": "Question",
        "name": "Welche KI-Features können integriert werden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir integrieren KI-Chatbots für Kundenservice, automatische Content-Generierung, intelligente SEO-Optimierung, personalisierte Empfehlungen und Bild-Analyse."
        }
      },
      {
        "@type": "Question",
        "name": "Wie lange dauert die Entwicklung?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eine Landing Page ist in 2-3 Wochen fertig. Komplexere Projekte dauern 4-8 Wochen, abhängig von den gewünschten Features und Integrationen."
        }
      }
    ]
  }
];

export default function WebseitenKI() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEOHead 
        title="Webseiten mit KI-Features | ExtruCon Fürstenfeldbruck – Chatbots & SEO"
        description="Moderne Websites mit integrierten KI-Features: Chatbots, automatische Content-Erstellung, intelligente SEO. Webentwicklung aus Fürstenfeldbruck – deutschlandweit."
        keywords="Webseiten mit KI, Website Chatbot, KI Content, SEO Automatisierung, Webentwicklung München, React Website, KI Website Agentur"
        canonical="https://extrucon.de/webseiten-ki"
        geoRegion="DE-BY"
        geoPlacename="Fürstenfeldbruck"
        schema={webseitenSchema}
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
              <GeoLinks serviceKey="kiWebsites" />
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
