import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ExploreMoreSection, GeoLinks } from "@/components/InternalLinks";
import { motion } from "framer-motion";
import { Bot, Zap, MessageSquare, BarChart3, Clock, Shield, Sparkles, ArrowRight, CheckCircle, Brain, Workflow, Users, Mail, Calendar, FileText, ShoppingCart, Headphones, TrendingUp, Settings, Database, Globe, Cpu, Lock, RefreshCw, HelpCircle, ChevronDown } from "lucide-react";
import { useState, useMemo } from "react";
import { useLanguage, Language } from "@/lib/i18n";

const localTranslations: Record<Language, {
  industriesTitle: string;
  industriesSubtitle: string;
  industries: { title: string; desc: string }[];
  comparisonTitle: string;
  comparisonSubtitle: string;
  classicTitle: string;
  classicPoints: string[];
  kiAgentTitle: string;
  kiAgentPoints: string[];
}> = {
  de: {
    industriesTitle: "KI-Agenten für jede Branche",
    industriesSubtitle: "Unsere KI-Agenten sind vielseitig einsetzbar und passen sich an die Anforderungen verschiedener Branchen an.",
    industries: [
      { title: "Gesundheitswesen", desc: "Terminmanagement, Patientenkommunikation, FAQ-Bots für Praxen und Kliniken. DSGVO-konform und sicher." },
      { title: "Immobilien", desc: "Automatische Objektanfragen, virtuelle Besichtigungen, Lead-Qualifizierung und Exposé-Versand." },
      { title: "Recht & Steuer", desc: "Mandantenanfragen automatisieren, Dokumentenmanagement, intelligente Terminbuchung." },
      { title: "E-Commerce", desc: "Produktberatung, Bestellstatus, Retouren-Handling und personalisierte Empfehlungen." },
      { title: "Handwerk", desc: "Terminbuchung, Angebotserstellung, Kundennachfragen und automatische Erinnerungen." },
      { title: "Gastronomie", desc: "Tischreservierungen, Speisekarten-Auskünfte, Bewertungsmanagement und Events." }
    ],
    comparisonTitle: "KI-Agent vs. klassischer Kundenservice",
    comparisonSubtitle: "Vergleichen Sie die Vorteile eines KI-Agenten mit herkömmlichem Support.",
    classicTitle: "Klassischer Support",
    classicPoints: ["Nur während Geschäftszeiten erreichbar", "Wartezeiten bei hohem Anfragevolumen", "Personalkosten steigen mit Wachstum", "Schulungsaufwand bei neuen Mitarbeitern", "Menschliche Fehler bei Routineaufgaben", "Schwer skalierbar bei Spitzenzeiten"],
    kiAgentTitle: "ExtruCon KI-Agent",
    kiAgentPoints: ["24/7 verfügbar, auch an Feiertagen", "Sofortige Antworten, keine Wartezeiten", "Fixkosten unabhängig vom Volumen", "Einmal trainiert, immer aktuell", "Konsistente, fehlerfreie Antworten", "Unbegrenzt skalierbar in Sekunden"]
  },
  en: {
    industriesTitle: "AI Agents for Every Industry",
    industriesSubtitle: "Our AI agents are versatile and adapt to the requirements of different industries.",
    industries: [
      { title: "Healthcare", desc: "Appointment management, patient communication, FAQ bots for practices and clinics. GDPR-compliant and secure." },
      { title: "Real Estate", desc: "Automatic property inquiries, virtual tours, lead qualification, and exposé delivery." },
      { title: "Legal & Tax", desc: "Automate client inquiries, document management, intelligent appointment booking." },
      { title: "E-Commerce", desc: "Product advice, order status, returns handling, and personalized recommendations." },
      { title: "Trades", desc: "Appointment booking, quote creation, customer inquiries, and automatic reminders." },
      { title: "Gastronomy", desc: "Table reservations, menu information, review management, and events." }
    ],
    comparisonTitle: "AI Agent vs. Traditional Customer Service",
    comparisonSubtitle: "Compare the advantages of an AI agent with traditional support.",
    classicTitle: "Traditional Support",
    classicPoints: ["Only available during business hours", "Wait times during high inquiry volume", "Personnel costs increase with growth", "Training effort for new employees", "Human errors in routine tasks", "Difficult to scale during peak times"],
    kiAgentTitle: "ExtruCon AI Agent",
    kiAgentPoints: ["Available 24/7, even on holidays", "Instant responses, no wait times", "Fixed costs regardless of volume", "Once trained, always up-to-date", "Consistent, error-free responses", "Infinitely scalable in seconds"]
  },
  hr: {
    industriesTitle: "AI agenti za svaku industriju",
    industriesSubtitle: "Naši AI agenti su svestrani i prilagođavaju se zahtjevima različitih industrija.",
    industries: [
      { title: "Zdravstvo", desc: "Upravljanje terminima, komunikacija s pacijentima, FAQ botovi za ordinacije i klinike. GDPR-sukladni i sigurni." },
      { title: "Nekretnine", desc: "Automatski upiti za objekte, virtualni obilasci, kvalifikacija potencijalnih kupaca." },
      { title: "Pravo i porez", desc: "Automatizacija upita klijenata, upravljanje dokumentima, inteligentno zakazivanje termina." },
      { title: "E-trgovina", desc: "Savjeti o proizvodima, status narudžbe, obrada povrata i personalizirane preporuke." },
      { title: "Obrt", desc: "Zakazivanje termina, izrada ponuda, upiti kupaca i automatski podsjetnici." },
      { title: "Ugostiteljstvo", desc: "Rezervacije stolova, informacije o jelovniku, upravljanje recenzijama i događaji." }
    ],
    comparisonTitle: "AI agent naspram klasične korisničke službe",
    comparisonSubtitle: "Usporedite prednosti AI agenta s tradicionalnom podrškom.",
    classicTitle: "Tradicionalna podrška",
    classicPoints: ["Dostupno samo tijekom radnog vremena", "Vrijeme čekanja kod velikog broja upita", "Troškovi osoblja rastu s rastom", "Napor ulaganja u obuku novih zaposlenika", "Ljudske greške u rutinskim zadacima", "Teško skaliranje u vršnim vremenima"],
    kiAgentTitle: "ExtruCon AI agent",
    kiAgentPoints: ["Dostupno 24/7, čak i praznikom", "Trenutni odgovori, bez čekanja", "Fiksni troškovi neovisno o volumenu", "Jednom obučen, uvijek ažuran", "Dosljedni odgovori bez grešaka", "Neograničeno skalabilno u sekundama"]
  },
  tr: {
    industriesTitle: "Her Sektör İçin Yapay Zeka Temsilcileri",
    industriesSubtitle: "Yapay zeka temsilcilerimiz çok yönlüdür ve farklı sektörlerin gereksinimlerine uyum sağlar.",
    industries: [
      { title: "Sağlık", desc: "Randevu yönetimi, hasta iletişimi, klinikler için SSS botları. KVKK uyumlu ve güvenli." },
      { title: "Gayrimenkul", desc: "Otomatik mülk sorguları, sanal turlar, potansiyel müşteri kalifikasyonu." },
      { title: "Hukuk ve Vergi", desc: "Müşteri sorgularını otomatikleştirin, belge yönetimi, akıllı randevu alma." },
      { title: "E-Ticaret", desc: "Ürün danışmanlığı, sipariş durumu, iade işlemleri ve kişiselleştirilmiş öneriler." },
      { title: "Zanaat", desc: "Randevu alma, teklif oluşturma, müşteri sorguları ve otomatik hatırlatmalar." },
      { title: "Gastronomi", desc: "Masa rezervasyonları, menü bilgileri, yorum yönetimi ve etkinlikler." }
    ],
    comparisonTitle: "Yapay Zeka Temsilcisi vs. Geleneksel Müşteri Hizmeti",
    comparisonSubtitle: "Yapay zeka temsilcisinin geleneksel destekle karşılaştırmalı avantajlarını görün.",
    classicTitle: "Geleneksel Destek",
    classicPoints: ["Sadece mesai saatlerinde ulaşılabilir", "Yoğun dönemlerde bekleme süreleri", "Büyümeyle birlikte personel maliyetleri artar", "Yeni çalışanlar için eğitim çabası", "Rutin görevlerde insan hataları", "Yoğun dönemlerde ölçekleme zor"],
    kiAgentTitle: "ExtruCon Yapay Zeka Temsilcisi",
    kiAgentPoints: ["Tatillerde bile 7/24 kullanılabilir", "Anında yanıtlar, bekleme yok", "Hacimden bağımsız sabit maliyetler", "Bir kez eğitilmiş, her zaman güncel", "Tutarlı, hatasız yanıtlar", "Saniyeler içinde sınırsız ölçeklenebilir"]
  }
};

const industryIcons = ["🏥", "🏢", "⚖️", "🛒", "🔧", "🍽️"];

const agentIcons = [MessageSquare, BarChart3, Workflow, Brain, Mail, Calendar, ShoppingCart, FileText];
const agentColors = [
  "from-cyan-500/20 to-cyan-500/5",
  "from-purple-500/20 to-purple-500/5",
  "from-orange-500/20 to-orange-500/5",
  "from-emerald-500/20 to-emerald-500/5",
  "from-blue-500/20 to-blue-500/5",
  "from-pink-500/20 to-pink-500/5",
  "from-yellow-500/20 to-yellow-500/5",
  "from-indigo-500/20 to-indigo-500/5"
];

const benefitIcons = [Clock, Zap, Shield, Users, TrendingUp, Database];
const useCaseIcons = [Headphones, TrendingUp, Settings];

export default function KIAgenten() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t, language } = useLanguage();

  // Generate comprehensive Schema.org structured data
  const schemaData = useMemo(() => {
    const baseUrl = "https://extrucon.de";
    
    // Service Schema for KI-Agenten
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${baseUrl}/ki-agenten#service`,
      "name": "KI-Agenten Entwicklung",
      "alternateName": ["AI Agent Development", "Chatbot Entwicklung", "Künstliche Intelligenz Agenten"],
      "description": "Professionelle Entwicklung von KI-Agenten für Kundenservice, Lead-Generierung, Marketing-Automatisierung und Geschäftsprozesse. 24/7 verfügbar, mehrsprachig, DSGVO-konform.",
      "url": `${baseUrl}/ki-agenten`,
      "provider": {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`
      },
      "serviceType": ["KI-Entwicklung", "Chatbot-Entwicklung", "Automatisierung", "AI Agent Development"],
      "category": "Künstliche Intelligenz / Artificial Intelligence",
      "areaServed": [
        { "@type": "Country", "name": "Deutschland", "sameAs": "https://www.wikidata.org/wiki/Q183" },
        { "@type": "Country", "name": "Österreich", "sameAs": "https://www.wikidata.org/wiki/Q40" },
        { "@type": "Country", "name": "Schweiz", "sameAs": "https://www.wikidata.org/wiki/Q39" },
        { "@type": "Country", "name": "Kroatien", "sameAs": "https://www.wikidata.org/wiki/Q224" },
        { "@type": "Country", "name": "Türkei", "sameAs": "https://www.wikidata.org/wiki/Q43" },
        { "@type": "State", "name": "Bayern" },
        { "@type": "City", "name": "München" },
        { "@type": "City", "name": "Fürstenfeldbruck" }
      ],
      "availableLanguage": ["de", "en", "hr", "tr"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "KI-Agenten Pakete",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Starter-Agent",
            "description": "Einfacher FAQ-Bot für kleine Unternehmen",
            "price": "490",
            "priceCurrency": "EUR",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "490",
              "priceCurrency": "EUR",
              "unitText": "einmalig"
            }
          },
          {
            "@type": "Offer",
            "name": "Business-Agent",
            "description": "KI-Agent mit CRM-Integration und Lead-Qualifizierung",
            "price": "1490",
            "priceCurrency": "EUR"
          },
          {
            "@type": "Offer",
            "name": "Enterprise-Agent",
            "description": "Multi-Channel Agent mit Analytics und API-Integration",
            "price": "2990",
            "priceCurrency": "EUR"
          }
        ]
      },
      "termsOfService": `${baseUrl}/impressum`,
      "brand": {
        "@type": "Brand",
        "name": "ExtruCon"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "47",
        "bestRating": "5"
      }
    };

    // FAQPage Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${baseUrl}/ki-agenten#faq`,
      "mainEntity": t.kiAgentsPage.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    };

    // HowTo Schema for the process
    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "@id": `${baseUrl}/ki-agenten#howto`,
      "name": "So entwickeln wir Ihren KI-Agenten",
      "description": "Unser bewährter Prozess für die Entwicklung individueller KI-Agenten",
      "totalTime": "P2W",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "EUR",
        "value": "490-2990"
      },
      "step": t.kiAgentsPage.processSteps.map((step, index) => ({
        "@type": "HowToStep",
        "position": index + 1,
        "name": step.title,
        "text": step.description
      }))
    };

    // SoftwareApplication Schema
    const softwareSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "ExtruCon KI-Agent",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "Chatbot, AI Assistant, Customer Service Bot",
      "operatingSystem": "Web-basiert, Cloud",
      "offers": {
        "@type": "Offer",
        "price": "490",
        "priceCurrency": "EUR"
      },
      "featureList": [
        "24/7 Verfügbarkeit",
        "Mehrsprachig (Deutsch, Englisch, Kroatisch, Türkisch)",
        "DSGVO-konform",
        "CRM-Integration",
        "Lead-Qualifizierung",
        "Automatische Terminbuchung",
        "Lernfähig mit Machine Learning"
      ],
      "screenshot": `${baseUrl}/images/ki-agent-screenshot.png`,
      "softwareHelp": `${baseUrl}/faq`,
      "author": {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`
      }
    };

    // BreadcrumbList for this page
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": baseUrl },
        { "@type": "ListItem", "position": 2, "name": "Leistungen", "item": `${baseUrl}/#services` },
        { "@type": "ListItem", "position": 3, "name": "KI-Agenten", "item": `${baseUrl}/ki-agenten` }
      ]
    };

    // Product Schema with Reviews
    const productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "KI-Agent für Unternehmen",
      "description": "Intelligenter KI-Agent für Kundenservice, Lead-Generierung und Automatisierung. Entwickelt von ExtruCon GmbH.",
      "brand": {
        "@type": "Brand",
        "name": "ExtruCon"
      },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "490",
        "highPrice": "2990",
        "priceCurrency": "EUR",
        "offerCount": "4"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "47"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "author": { "@type": "Person", "name": "Markus H." },
          "reviewBody": "Der KI-Agent hat unseren Kundenservice revolutioniert. 80% weniger manuelle Anfragen!"
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5" },
          "author": { "@type": "Person", "name": "Sandra K." },
          "reviewBody": "Professionelle Umsetzung und super Support. Der Bot qualifiziert jetzt unsere Leads automatisch."
        }
      ]
    };

    return [serviceSchema, faqSchema, howToSchema, softwareSchema, breadcrumbSchema, productSchema];
  }, [t.kiAgentsPage.faqs, t.kiAgentsPage.processSteps]);

  // Comprehensive SEO keywords
  const seoKeywords = [
    // Primary Keywords
    "KI-Agenten", "KI Agent Entwicklung", "Chatbot Entwicklung",
    // Location Keywords
    "KI Agentur Fürstenfeldbruck", "KI Agent München", "Chatbot Bayern", "AI Agentur Deutschland",
    // Service Keywords
    "Kundenservice Bot", "Lead-Qualifizierung KI", "24/7 Chatbot",
    "Marketing Automatisierung KI", "Vertrieb Automatisierung",
    // Technology Keywords
    "GPT Integration", "OpenAI Agent", "Claude Agent", "LLM Chatbot",
    "n8n KI Automatisierung", "Workflow Automatisierung KI",
    // Industry Keywords
    "KI für Unternehmen", "Business Chatbot", "Enterprise AI Agent",
    "DSGVO konformer Chatbot", "Mehrsprachiger Chatbot",
    // Long-tail Keywords
    "KI Agent für Kundenservice", "automatische Lead Qualifizierung",
    "Chatbot mit Terminbuchung", "KI Assistent für Webseite"
  ].join(", ");

  const seoTitle = language === 'de' 
    ? "KI-Agenten Entwicklung Fürstenfeldbruck | Chatbots & Automatisierung | ExtruCon"
    : language === 'en'
    ? "AI Agent Development Fürstenfeldbruck | Chatbots & Automation | ExtruCon"
    : language === 'hr'
    ? "Razvoj AI Agenata | Chatbotovi i Automatizacija | ExtruCon"
    : "Yapay Zeka Ajanı Geliştirme | Chatbotlar ve Otomasyon | ExtruCon";

  const seoDescription = language === 'de'
    ? "Professionelle KI-Agenten für Kundenservice, Lead-Generierung & Automatisierung. 24/7 verfügbar, mehrsprachig, DSGVO-konform. KI-Agentur aus Fürstenfeldbruck – München, Bayern, deutschlandweit. ✓ Kostenlose Beratung"
    : language === 'en'
    ? "Professional AI agents for customer service, lead generation & automation. Available 24/7, multilingual, GDPR compliant. AI agency from Fürstenfeldbruck – Munich, Bavaria, Germany-wide. ✓ Free consultation"
    : language === 'hr'
    ? "Profesionalni AI agenti za korisničku službu, generiranje leadova i automatizaciju. Dostupno 24/7, višejezično, GDPR usklađeno. AI agencija iz Fürstenfeldbrucka. ✓ Besplatna konzultacija"
    : "Müşteri hizmetleri, potansiyel müşteri oluşturma ve otomasyon için profesyonel AI ajanları. 7/24 erişilebilir, çok dilli, KVKK uyumlu. Fürstenfeldbruck'tan AI ajansı. ✓ Ücretsiz danışma";

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEOHead 
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        canonical="https://extrucon.de/ki-agenten"
        schema={schemaData}
        ogType="product"
        geoRegion="DE-BY"
        geoPlacename="Fürstenfeldbruck, München, Bayern"
      />
      <Navbar />
      <main className="pt-24">
        <Breadcrumbs items={[
          { label: t.nav.services, href: "/#services" },
          { label: t.nav.kiAgents }
        ]} />
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
                {t.kiAgentsPage.badge}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6">
                {t.kiAgentsPage.title}
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                {t.kiAgentsPage.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/kontakt" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-background font-bold rounded-lg hover:bg-primary/90 transition-colors"
                  data-testid="button-ki-agenten-cta"
                >
                  {t.kiAgentsPage.ctaPrimary} <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="#agents" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 transition-colors border border-white/10"
                >
                  {t.kiAgentsPage.ctaSecondary}
                </a>
              </div>
              <GeoLinks serviceKey="kiAgents" />
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "80%", label: t.kiAgentsPage.stats.timeSaving },
                { value: "24/7", label: t.kiAgentsPage.stats.availability },
                { value: "500+", label: t.kiAgentsPage.stats.integrations },
                { value: "<2 Sek", label: t.kiAgentsPage.stats.responseTime }
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
                {t.kiAgentsPage.whyTitle}
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                {t.kiAgentsPage.whySubtitle}
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {t.kiAgentsPage.benefits.map((benefit, i) => {
                const IconComponent = benefitIcons[i] || Clock;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-white text-sm mb-1">{benefit.title}</h3>
                    <p className="text-gray-400 text-xs">{benefit.description}</p>
                  </motion.div>
                );
              })}
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
                {t.kiAgentsPage.agentsTitle}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {t.kiAgentsPage.agentsSubtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {t.kiAgentsPage.agents.map((agent, i) => {
                const IconComponent = agentIcons[i] || Bot;
                const colorClass = agentColors[i] || agentColors[0];
                return (
                  <motion.div
                    key={agent.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`p-6 rounded-2xl bg-gradient-to-br ${colorClass} border border-white/10`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-7 h-7 text-white" />
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
                          <p className="text-xs text-gray-500 mb-2">{t.kiAgentsPage.typicalApps}</p>
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
                );
              })}
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
                {t.kiAgentsPage.useCasesTitle}
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                {t.kiAgentsPage.useCasesSubtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {t.kiAgentsPage.useCaseCategories.map((category, i) => {
                const IconComponent = useCaseIcons[i] || Headphones;
                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
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
                );
              })}
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
                {t.kiAgentsPage.howTitle}
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                {t.kiAgentsPage.howSubtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {t.kiAgentsPage.processSteps.map((item, i) => (
                <motion.div
                  key={item.title}
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
                    {i + 1}
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
                {t.kiAgentsPage.techTitle}
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                {t.kiAgentsPage.techSubtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {t.kiAgentsPage.technologies.map((tech, i) => (
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

        {/* Industries Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                {localTranslations[language].industriesTitle}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {localTranslations[language].industriesSubtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {localTranslations[language].industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-primary/50 transition-all"
                >
                  <div className="text-4xl mb-4">{industryIcons[index]}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{industry.title}</h3>
                  <p className="text-sm text-gray-400">{industry.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                {localTranslations[language].comparisonTitle}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {localTranslations[language].comparisonSubtitle}
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-red-500/10 border border-red-500/30 rounded-xl">
                <h3 className="text-xl font-bold text-red-400 mb-4">❌ {localTranslations[language].classicTitle}</h3>
                <ul className="space-y-3 text-gray-400">
                  {localTranslations[language].classicPoints.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-green-500/10 border border-green-500/30 rounded-xl">
                <h3 className="text-xl font-bold text-green-400 mb-4">✓ {localTranslations[language].kiAgentTitle}</h3>
                <ul className="space-y-3 text-gray-400">
                  {localTranslations[language].kiAgentPoints.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
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
                {t.kiAgentsPage.pricingTitle}
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                {t.kiAgentsPage.pricingSubtitle}
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {t.kiAgentsPage.pricing.map((plan, i) => (
                <motion.div
                  key={plan.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`relative p-5 rounded-2xl border ${plan.best ? 'bg-primary/10 border-primary/30 ring-2 ring-primary/50' : plan.badge === 'AKTION' ? 'bg-green-500/10 border-green-500/30' : 'bg-white/5 border-white/10'}`}
                >
                  {plan.badge && (
                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-bold rounded-full ${plan.badge === 'AKTION' ? 'bg-green-500 text-white animate-pulse' : plan.badge === 'Beliebt' ? 'bg-primary text-background' : 'bg-white/20 text-white'}`}>
                      {plan.badge}
                    </div>
                  )}
                  <h3 className="text-base font-bold text-white mb-1 mt-2">{plan.title}</h3>
                  <div className="text-xl font-bold text-primary mb-1">{plan.price}</div>
                  <p className="text-gray-400 text-xs mb-3">{plan.description}</p>
                  <ul className="space-y-1.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-gray-300 text-xs">
                        <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
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
                {t.hero.freeConsultation}
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Lock className="w-5 h-5 text-primary" />
                {t.kiAgentsPage.gdprCompliant}
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <RefreshCw className="w-5 h-5 text-primary" />
                {t.kiAgentsPage.monthlyMaintenance}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16" id="faq">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <HelpCircle className="w-10 h-10 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold font-display text-white mb-4">
                {t.kiAgentsPage.faqTitle}
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-3">
              {t.kiAgentsPage.faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl bg-white/5 border border-white/10 overflow-hidden"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                    data-testid={`faq-toggle-${i}`}
                  >
                    <span className="font-medium text-white" itemProp="name">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-4" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                      <p className="text-gray-400 text-sm" itemProp="text">{faq.a}</p>
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
              {t.kiAgentsPage.ctaTitle}
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              {t.kiAgentsPage.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/kontakt" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-background font-bold rounded-lg hover:bg-primary/90 transition-colors text-lg"
                data-testid="button-ki-agenten-contact"
              >
                {t.kiAgentsPage.ctaPrimary} <ArrowRight className="w-5 h-5" />
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

        {/* Related Services */}
        <section className="py-12 bg-white/5">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-white text-center mb-8">{t.nav.services}</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/automatisierungen" className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-orange-500/50 transition-colors group">
                <Workflow className="w-8 h-8 text-orange-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">{t.nav.automation}</h3>
                <p className="text-sm text-gray-400">{t.services.automation.desc}</p>
              </a>
              <a href="/webseiten-ki" className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-secondary/50 transition-colors group">
                <Globe className="w-8 h-8 text-secondary mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">{t.nav.websitesKI}</h3>
                <p className="text-sm text-gray-400">{t.services.websites.desc}</p>
              </a>
              <a href="/kontakt" className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-primary/50 transition-colors group">
                <Users className="w-8 h-8 text-primary mb-3" />
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
