import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Bot, Check, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import aiImg from "@assets/generated_images/glowing_neural_network_brain.png";
import { useLanguage } from "@/lib/i18n";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedServices, ExploreMoreSection, GeoLinks } from "@/components/InternalLinks";

export default function KI() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEOHead
        title="KI-Automatisierung & KI-Lösungen | GPT-4, Claude AI, Gemini | ExtruCon"
        description="Professionelle KI-Automatisierung für Ihr Unternehmen. GPT-4, Claude AI, Gemini Integration. KI-Agenten, Chatbots, Workflow-Automatisierung. DSGVO-konform. Fürstenfeldbruck & München."
        keywords="KI Automatisierung, KI-Lösungen, GPT-4 Integration, Claude AI, Google Gemini, ChatGPT Integration, KI Agentur München, Künstliche Intelligenz Bayern, n8n Automatisierung, Chatbot Entwicklung, Machine Learning, AI Agent Development"
        canonical="https://extrucon.de/leistungen/ki-automatisierung"
        geoRegion="DE-BY"
        geoPlacename="Fürstenfeldbruck"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://extrucon.de/leistungen/ki-automatisierung#service",
            "name": "KI-Automatisierung & KI-Lösungen",
            "alternateName": ["AI Automation", "Künstliche Intelligenz Lösungen", "AI Solutions"],
            "description": "Professionelle KI-Automatisierung mit GPT-4, Claude AI, Google Gemini. Entwicklung von KI-Agenten, Chatbots und Workflow-Automatisierung für Unternehmen. DSGVO-konform.",
            "provider": { "@type": "Organization", "@id": "https://extrucon.de/#organization" },
            "areaServed": [
              { "@type": "City", "name": "Fürstenfeldbruck" },
              { "@type": "City", "name": "München" },
              { "@type": "State", "name": "Bayern" },
              { "@type": "Country", "name": "Deutschland" }
            ],
            "serviceType": ["AI Solutions", "KI-Automatisierung", "Chatbot Development", "Workflow Automation"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "KI-Dienstleistungen",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GPT-4 Integration", "description": "Integration von OpenAI GPT-4 in Ihre Geschäftsprozesse" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Claude AI Integration", "description": "Anthropic Claude AI für präzise und sichere KI-Anwendungen" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Chatbot Entwicklung", "description": "Maßgeschneiderte KI-Chatbots für Kundenservice und Lead-Generierung" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "n8n Workflow-Automatisierung", "description": "Automatisierung von Geschäftsprozessen mit n8n und Make" } }
              ]
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "ExtruCon KI-Agent",
            "applicationCategory": "BusinessApplication",
            "applicationSubCategory": "AI Chatbot",
            "operatingSystem": "Web-basiert",
            "description": "Intelligenter KI-Agent für Kundenservice, Lead-Qualifizierung und Prozessautomatisierung. Powered by GPT-4 und Claude AI.",
            "offers": { "@type": "Offer", "price": "490", "priceCurrency": "EUR" },
            "provider": { "@type": "Organization", "@id": "https://extrucon.de/#organization" }
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Welche KI-Technologien nutzen Sie?", "acceptedAnswer": { "@type": "Answer", "text": "Wir arbeiten mit OpenAI GPT-4 und GPT-4 Turbo, Anthropic Claude AI, Google Gemini Pro, Midjourney, DALL-E 3 sowie Automatisierungstools wie n8n, Make und Zapier." } },
              { "@type": "Question", "name": "Was kann ein KI-Agent für mein Unternehmen tun?", "acceptedAnswer": { "@type": "Answer", "text": "KI-Agenten automatisieren Kundenservice 24/7, qualifizieren Leads, beantworten E-Mails, erstellen Angebote und optimieren viele weitere Geschäftsprozesse - bis zu 80% Zeitersparnis." } },
              { "@type": "Question", "name": "Sind Ihre KI-Lösungen DSGVO-konform?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, alle unsere KI-Lösungen sind vollständig DSGVO-konform. Wir bieten auch On-Premise-Installationen für maximale Datensicherheit und können KI auf Ihrer eigenen Infrastruktur betreiben." } },
              { "@type": "Question", "name": "Wie lange dauert die Implementierung einer KI-Lösung?", "acceptedAnswer": { "@type": "Answer", "text": "Einfache Chatbots sind in 1-2 Wochen einsatzbereit. Komplexe KI-Agenten mit CRM-Integration benötigen 2-4 Wochen. Enterprise-Lösungen 4-8 Wochen." } }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://extrucon.de" },
              { "@type": "ListItem", "position": 2, "name": "Leistungen", "item": "https://extrucon.de/#services" },
              { "@type": "ListItem", "position": 3, "name": "KI-Automatisierung", "item": "https://extrucon.de/leistungen/ki-automatisierung" }
            ]
          }
        ]}
      />
      <Navbar />
      <main className="pt-24">
        <Breadcrumbs items={[
          { label: t.nav.services, href: "/#services" },
          { label: t.kiServicePage.badge }
        ]} />
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={aiImg} alt="KI Automatisierung Agentur Fürstenfeldbruck München - Künstliche Intelligenz Workflows und Prozessoptimierung für Unternehmen in Bayern" className="w-full h-full object-cover opacity-20" loading="eager" fetchPriority="high" width={1920} height={1080} decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Bot className="w-12 h-12 text-cyan-400" />
                <span className="text-cyan-400 font-semibold">{t.kiServicePage.badge}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6">
                {t.kiServicePage.title}
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                {t.kiServicePage.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-black" data-testid="button-contact-ki">
                  {t.kiServicePage.ctaButton} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Leistungsumfang */}
        <section className="py-10 bg-card/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-display text-white mb-4 text-center">{t.kiServicePage.servicesTitle}</h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              {t.kiServicePage.servicesSubtitle}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.kiServicePage.services.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-card/30 border border-white/5"
                >
                  <Check className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologien */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-display text-white mb-12 text-center">{t.kiServicePage.techTitle}</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {["OpenAI / GPT-4", "Claude AI", "Google Gemini", "Midjourney", "DALL-E", "n8n", "Make", "Zapier", "Custom APIs"].map((tech, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-6 py-3 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vorteile */}
        <section className="py-10 bg-card/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold font-display text-white mb-8">{t.kiServicePage.benefitsTitle}</h2>
              <div className="space-y-4 text-left">
                {t.kiServicePage.benefits.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-card/30">
                    <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-display text-white mb-8 text-center">
              {t.kiServicePage.faqTitle}
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {t.kiServicePage.faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-xl bg-card/30 border border-white/5"
                >
                  <h3 className="text-lg font-bold text-white mb-2 flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    {faq.q}
                  </h3>
                  <p className="text-gray-400 ml-7">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-display text-white mb-4">{t.kiServicePage.ctaTitle}</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              {t.kiServicePage.ctaSubtitle}
            </p>
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-black" data-testid="button-cta-ki">
              {t.kiServicePage.ctaButtonAlt} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        <RelatedServices currentPage="ki-automatisierung" />
        <ExploreMoreSection />
      </main>
      <Footer />
    </div>
  );
}
