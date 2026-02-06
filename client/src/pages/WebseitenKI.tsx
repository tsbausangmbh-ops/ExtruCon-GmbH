import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ExploreMoreSection, GeoLinks, RelatedServices } from "@/components/InternalLinks";
import { motion } from "framer-motion";
import heroImg from "@/assets/images/hero-webseiten-ki-abstract.webp";
import { Globe, Sparkles, ArrowRight, CheckCircle, Zap, Shield, TrendingUp, MessageSquare, Bot, Search, FileText, Image, Code, Palette, Smartphone, BarChart3, RefreshCw, ChevronDown, HelpCircle, Clock, Users } from "lucide-react";
import { useState } from "react";
import { useLanguage, Language } from "@/lib/i18n";

const localTranslations: Record<Language, {
  whyTitle: string;
  whySubtitle: string;
  features: { title: string; desc: string }[];
  pricingTitle: string;
  pricingSubtitle: string;
  packages: { name: string; desc: string; features: string[] }[];
  pricingNote: string;
  popular: string;
}> = {
  de: {
    whyTitle: "Warum eine Website mit KI-Features?",
    whySubtitle: "Moderne Websites sind mehr als digitale Visitenkarten – sie arbeiten aktiv für Ihren Geschäftserfolg.",
    features: [
      { title: "24/7 Kundenservice", desc: "Ein KI-Chatbot beantwortet Fragen rund um die Uhr und qualifiziert Leads automatisch." },
      { title: "Automatische Content-Erstellung", desc: "KI generiert SEO-optimierte Texte, Produktbeschreibungen und Blog-Artikel." },
      { title: "Intelligente Suche", desc: "Besucher finden sofort, was sie suchen – dank KI-gestützter Suchfunktion." },
      { title: "Personalisierung", desc: "Inhalte werden individuell auf jeden Besucher zugeschnitten für höhere Conversions." },
      { title: "Predictive Analytics", desc: "KI analysiert Nutzerverhalten und prognostiziert Trends und Kundenbedürfnisse." },
      { title: "Mehrsprachigkeit", desc: "Automatische Übersetzung in beliebig viele Sprachen ohne manuellen Aufwand." }
    ],
    pricingTitle: "Transparente Preise",
    pricingSubtitle: "Von der einfachen Landing Page bis zur komplexen Web-App – wir haben das passende Paket.",
    packages: [
      { name: "Landing Page", desc: "Perfekt für Produktlaunches und Kampagnen", features: ["1 Seite, responsive Design", "Kontaktformular", "SEO-Grundoptimierung", "KI-Chatbot (optional)", "2 Wochen Entwicklung"] },
      { name: "Business Website", desc: "Für etablierte Unternehmen", features: ["5-10 Seiten", "CMS für eigene Bearbeitung", "KI-Chatbot integriert", "SEO-Optimierung", "Blog-Funktion", "4-6 Wochen Entwicklung"] },
      { name: "Web-Applikation", desc: "Komplexe digitale Lösungen", features: ["Unbegrenzte Seiten/Features", "Kundenportal", "Volle KI-Integration", "API-Anbindungen", "Individuelle Entwicklung", "6-12 Wochen Entwicklung"] }
    ],
    pricingNote: "Alle Preise zzgl. MwSt. Monatliche Wartung ab 99€/Monat optional.",
    popular: "Beliebt"
  },
  en: {
    whyTitle: "Why a Website with AI Features?",
    whySubtitle: "Modern websites are more than digital business cards – they actively work for your business success.",
    features: [
      { title: "24/7 Customer Service", desc: "An AI chatbot answers questions around the clock and automatically qualifies leads." },
      { title: "Automatic Content Creation", desc: "AI generates SEO-optimized texts, product descriptions, and blog articles." },
      { title: "Intelligent Search", desc: "Visitors instantly find what they're looking for – thanks to AI-powered search." },
      { title: "Personalization", desc: "Content is individually tailored to each visitor for higher conversions." },
      { title: "Predictive Analytics", desc: "AI analyzes user behavior and predicts trends and customer needs." },
      { title: "Multilingual", desc: "Automatic translation into any number of languages without manual effort." }
    ],
    pricingTitle: "Transparent Pricing",
    pricingSubtitle: "From simple landing pages to complex web apps – we have the right package for you.",
    packages: [
      { name: "Landing Page", desc: "Perfect for product launches and campaigns", features: ["1 page, responsive design", "Contact form", "Basic SEO optimization", "AI chatbot (optional)", "2 weeks development"] },
      { name: "Business Website", desc: "For established companies", features: ["5-10 pages", "CMS for self-editing", "AI chatbot integrated", "SEO optimization", "Blog function", "4-6 weeks development"] },
      { name: "Web Application", desc: "Complex digital solutions", features: ["Unlimited pages/features", "Customer portal", "Full AI integration", "API connections", "Custom development", "6-12 weeks development"] }
    ],
    pricingNote: "All prices plus VAT. Monthly maintenance from €99/month optional.",
    popular: "Popular"
  },
  hr: {
    whyTitle: "Zašto web stranica s AI značajkama?",
    whySubtitle: "Moderne web stranice su više od digitalnih posjetnica – aktivno rade za vaš poslovni uspjeh.",
    features: [
      { title: "24/7 Korisnička služba", desc: "AI chatbot odgovara na pitanja non-stop i automatski kvalificira potencijalne kupce." },
      { title: "Automatsko stvaranje sadržaja", desc: "AI generira SEO-optimizirane tekstove, opise proizvoda i blog članke." },
      { title: "Inteligentna pretraga", desc: "Posjetitelji odmah pronalaze ono što traže – zahvaljujući AI-podržanoj pretrazi." },
      { title: "Personalizacija", desc: "Sadržaj je individualno prilagođen svakom posjetitelju za veće konverzije." },
      { title: "Prediktivna analitika", desc: "AI analizira ponašanje korisnika i predviđa trendove i potrebe kupaca." },
      { title: "Višejezičnost", desc: "Automatski prijevod na bilo koji broj jezika bez ručnog napora." }
    ],
    pricingTitle: "Transparentne cijene",
    pricingSubtitle: "Od jednostavnih odredišnih stranica do složenih web aplikacija – imamo pravi paket za vas.",
    packages: [
      { name: "Odredišna stranica", desc: "Savršeno za lansiranja proizvoda i kampanje", features: ["1 stranica, responzivni dizajn", "Kontaktni obrazac", "Osnovna SEO optimizacija", "AI chatbot (opcionalno)", "2 tjedna razvoja"] },
      { name: "Poslovna web stranica", desc: "Za etablirane tvrtke", features: ["5-10 stranica", "CMS za samostalno uređivanje", "Integrirani AI chatbot", "SEO optimizacija", "Blog funkcija", "4-6 tjedana razvoja"] },
      { name: "Web aplikacija", desc: "Složena digitalna rješenja", features: ["Neograničene stranice/značajke", "Korisnički portal", "Puna AI integracija", "API povezivanja", "Prilagođeni razvoj", "6-12 tjedana razvoja"] }
    ],
    pricingNote: "Sve cijene bez PDV-a. Mjesečno održavanje od 99€/mjesec opcionalno.",
    popular: "Popularno"
  },
  tr: {
    whyTitle: "Neden Yapay Zeka Özellikli Bir Web Sitesi?",
    whySubtitle: "Modern web siteleri dijital kartvizitlerden fazlasıdır – işletme başarınız için aktif olarak çalışırlar.",
    features: [
      { title: "7/24 Müşteri Hizmeti", desc: "Yapay zeka sohbet botu soruları günün her saati yanıtlar ve potansiyel müşterileri otomatik olarak niteler." },
      { title: "Otomatik İçerik Oluşturma", desc: "Yapay zeka SEO optimize edilmiş metinler, ürün açıklamaları ve blog makaleleri üretir." },
      { title: "Akıllı Arama", desc: "Ziyaretçiler aradıklarını anında bulur – yapay zeka destekli arama sayesinde." },
      { title: "Kişiselleştirme", desc: "İçerik, daha yüksek dönüşümler için her ziyaretçiye bireysel olarak uyarlanır." },
      { title: "Prediktif Analitik", desc: "Yapay zeka kullanıcı davranışını analiz eder ve trendleri ve müşteri ihtiyaçlarını tahmin eder." },
      { title: "Çok Dillilik", desc: "Manuel çaba olmadan istediğiniz sayıda dile otomatik çeviri." }
    ],
    pricingTitle: "Şeffaf Fiyatlandırma",
    pricingSubtitle: "Basit açılış sayfalarından karmaşık web uygulamalarına – sizin için doğru pakete sahibiz.",
    packages: [
      { name: "Açılış Sayfası", desc: "Ürün lansmanları ve kampanyalar için mükemmel", features: ["1 sayfa, duyarlı tasarım", "İletişim formu", "Temel SEO optimizasyonu", "Yapay zeka sohbet botu (isteğe bağlı)", "2 hafta geliştirme"] },
      { name: "İşletme Web Sitesi", desc: "Yerleşik şirketler için", features: ["5-10 sayfa", "Kendi düzenlemeniz için CMS", "Entegre yapay zeka sohbet botu", "SEO optimizasyonu", "Blog işlevi", "4-6 hafta geliştirme"] },
      { name: "Web Uygulaması", desc: "Karmaşık dijital çözümler", features: ["Sınırsız sayfa/özellik", "Müşteri portalı", "Tam yapay zeka entegrasyonu", "API bağlantıları", "Özel geliştirme", "6-12 hafta geliştirme"] }
    ],
    pricingNote: "Tüm fiyatlar KDV hariçtir. Aylık bakım 99€/aydan itibaren isteğe bağlıdır.",
    popular: "Popüler"
  }
};

const featureIcons = ["🤖", "📝", "🔍", "👤", "📊", "🌐"];
const componentFeatureIcons = [Bot, FileText, Image, Search, Users, BarChart3];

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
  const { t, language } = useLanguage();

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
        <section className="relative py-10 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={heroImg} alt="" className="w-full h-full object-cover opacity-40" fetchPriority="high" decoding="async" width={1920} height={1080} />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
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
        <section id="features" className="py-10">
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
        <section className="py-10 bg-card/20">
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
        <section className="py-10">
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

        {/* Why KI Website Section */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                {localTranslations[language].whyTitle}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {localTranslations[language].whySubtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {localTranslations[language].features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-secondary/50 transition-all"
                >
                  <div className="text-3xl mb-3">{featureIcons[index]}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-10 bg-card/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                {localTranslations[language].pricingTitle}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {localTranslations[language].pricingSubtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {localTranslations[language].packages.map((plan, index) => {
                const prices = ["ab 2.500€", "ab 5.000€", "ab 10.000€"];
                const isPopular = index === 1;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative p-6 rounded-2xl ${isPopular ? 'bg-secondary/10 border-2 border-secondary' : 'bg-white/5 border border-white/10'}`}
                  >
                    {isPopular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-secondary text-background text-xs font-bold rounded-full">
                        {localTranslations[language].popular}
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                    <div className="text-2xl font-bold text-secondary mb-2">{prices[index]}</div>
                    <p className="text-sm text-gray-400 mb-4">{plan.desc}</p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>

            <p className="text-center text-gray-500 text-sm mt-8">
              {localTranslations[language].pricingNote}
            </p>
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
        <section className="py-10">
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
        <section className="py-10 bg-gradient-to-r from-secondary/10 to-primary/10 border-y border-white/10">
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

        <RelatedServices currentPage="webseiten-ki" />
        <ExploreMoreSection />
      </main>
      <Footer />
    </div>
  );
}
