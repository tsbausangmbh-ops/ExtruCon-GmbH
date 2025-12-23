import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ExploreMoreSection, GeoLinks, RelatedServices } from "@/components/InternalLinks";
import { motion } from "framer-motion";
import { Workflow, Zap, ArrowRight, CheckCircle, Clock, TrendingUp, Shield, RefreshCw, Mail, FileText, Users, ShoppingCart, Calendar, Database, Settings, Cpu, Link2, GitBranch, Layers, Play, ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";
import { useLanguage, Language } from "@/lib/i18n";

const localTranslations: Record<Language, {
  roiTitle: string;
  roiSubtitle: string;
  roiStats: { value: string; label: string; desc: string }[];
  exampleTitle: string;
  beforeTitle: string;
  beforePoints: string[];
  afterTitle: string;
  afterPoints: string[];
  useCasesTitle: string;
  useCasesSubtitle: string;
  useCases: { title: string; desc: string }[];
}> = {
  de: {
    roiTitle: "Ihre Investition rechnet sich schnell",
    roiSubtitle: "Automatisierung ist keine Ausgabe, sondern eine Investition mit messbarem ROI.",
    roiStats: [
      { value: "80%", label: "Zeitersparnis", desc: "Bei wiederkehrenden Aufgaben wie E-Mail-Verarbeitung, Dateneingabe und Reporting." },
      { value: "50%", label: "Kostenreduktion", desc: "Durch automatisierte Prozesse sinken Personalkosten für Routinearbeiten." },
      { value: "3-6", label: "Monate ROI", desc: "Die meisten Automatisierungsprojekte amortisieren sich innerhalb eines halben Jahres." }
    ],
    exampleTitle: "Beispiel-Rechnung: E-Mail-Automatisierung",
    beforeTitle: "Vorher (manuell)",
    beforePoints: ["2 Stunden täglich für E-Mail-Bearbeitung", "50€/Std. Personalkosten = 100€/Tag", "20 Arbeitstage/Monat = 2.000€/Monat", "= 24.000€/Jahr"],
    afterTitle: "Nachher (automatisiert)",
    afterPoints: ["Einmalige Einrichtung: 2.500€", "Wartung: 200€/Monat = 2.400€/Jahr", "Ersparnis: 24.000€ - 4.900€", "= 19.100€ Ersparnis/Jahr"],
    useCasesTitle: "Beliebte Automatisierungs-Workflows",
    useCasesSubtitle: "Diese Prozesse automatisieren wir am häufigsten für unsere Kunden.",
    useCases: [
      { title: "Lead zu CRM", desc: "Neue Leads automatisch von Webformularen in Ihr CRM übertragen und Vertrieb benachrichtigen." },
      { title: "Rechnungsversand", desc: "Rechnungen automatisch erstellen, versenden und in Buchhaltungssoftware erfassen." },
      { title: "Social Media Posting", desc: "Content automatisch auf mehreren Plattformen veröffentlichen und analysieren." },
      { title: "Termin-Erinnerungen", desc: "Automatische E-Mails und SMS vor Terminen an Kunden senden." },
      { title: "Bestandsmanagement", desc: "Lagerbestände überwachen und automatisch Nachbestellungen auslösen." },
      { title: "Kundenfeedback", desc: "Nach Abschluss automatisch Bewertungsanfragen senden und sammeln." },
      { title: "Report-Erstellung", desc: "Tägliche/wöchentliche Reports automatisch generieren und versenden." },
      { title: "Daten-Synchronisation", desc: "Daten zwischen verschiedenen Systemen automatisch abgleichen." }
    ]
  },
  en: {
    roiTitle: "Your Investment Pays Off Quickly",
    roiSubtitle: "Automation is not an expense, but an investment with measurable ROI.",
    roiStats: [
      { value: "80%", label: "Time Saved", desc: "On recurring tasks like email processing, data entry, and reporting." },
      { value: "50%", label: "Cost Reduction", desc: "Automated processes reduce personnel costs for routine work." },
      { value: "3-6", label: "Months ROI", desc: "Most automation projects pay for themselves within half a year." }
    ],
    exampleTitle: "Example Calculation: Email Automation",
    beforeTitle: "Before (manual)",
    beforePoints: ["2 hours daily for email processing", "€50/hr personnel costs = €100/day", "20 working days/month = €2,000/month", "= €24,000/year"],
    afterTitle: "After (automated)",
    afterPoints: ["One-time setup: €2,500", "Maintenance: €200/month = €2,400/year", "Savings: €24,000 - €4,900", "= €19,100 savings/year"],
    useCasesTitle: "Popular Automation Workflows",
    useCasesSubtitle: "These are the processes we automate most frequently for our clients.",
    useCases: [
      { title: "Lead to CRM", desc: "Automatically transfer new leads from web forms to your CRM and notify sales." },
      { title: "Invoice Sending", desc: "Automatically create, send invoices and record them in accounting software." },
      { title: "Social Media Posting", desc: "Automatically publish and analyze content on multiple platforms." },
      { title: "Appointment Reminders", desc: "Send automatic emails and SMS to customers before appointments." },
      { title: "Inventory Management", desc: "Monitor inventory levels and automatically trigger reorders." },
      { title: "Customer Feedback", desc: "Automatically send and collect review requests after completion." },
      { title: "Report Generation", desc: "Automatically generate and send daily/weekly reports." },
      { title: "Data Synchronization", desc: "Automatically sync data between different systems." }
    ]
  },
  hr: {
    roiTitle: "Vaša investicija se brzo isplati",
    roiSubtitle: "Automatizacija nije trošak, već investicija s mjerljivim povratom.",
    roiStats: [
      { value: "80%", label: "Ušteda vremena", desc: "Na ponavljajućim zadacima poput obrade e-pošte, unosa podataka i izvještavanja." },
      { value: "50%", label: "Smanjenje troškova", desc: "Automatizirani procesi smanjuju troškove osoblja za rutinske poslove." },
      { value: "3-6", label: "Mjeseci ROI", desc: "Većina projekata automatizacije se isplati unutar pola godine." }
    ],
    exampleTitle: "Primjer izračuna: Automatizacija e-pošte",
    beforeTitle: "Prije (ručno)",
    beforePoints: ["2 sata dnevno za obradu e-pošte", "50€/sat troškovi osoblja = 100€/dan", "20 radnih dana/mjesec = 2.000€/mjesec", "= 24.000€/godišnje"],
    afterTitle: "Poslije (automatizirano)",
    afterPoints: ["Jednokratna postava: 2.500€", "Održavanje: 200€/mjesec = 2.400€/godišnje", "Ušteda: 24.000€ - 4.900€", "= 19.100€ uštede/godišnje"],
    useCasesTitle: "Popularni automatizirani procesi",
    useCasesSubtitle: "Ovo su procesi koje najčešće automatiziramo za naše klijente.",
    useCases: [
      { title: "Lead u CRM", desc: "Automatski prenesite nove potencijalne kupce iz web obrazaca u vaš CRM." },
      { title: "Slanje računa", desc: "Automatski kreirajte i šaljite račune te ih evidentirajte u računovodstvenom softveru." },
      { title: "Objave na društvenim mrežama", desc: "Automatski objavljujte i analizirajte sadržaj na više platformi." },
      { title: "Podsjetnici za termine", desc: "Šaljite automatske e-mailove i SMS poruke kupcima prije termina." },
      { title: "Upravljanje zalihama", desc: "Pratite razine zaliha i automatski pokrenite narudžbe." },
      { title: "Povratne informacije kupaca", desc: "Automatski šaljite i prikupljajte zahtjeve za recenzije." },
      { title: "Generiranje izvještaja", desc: "Automatski generirajte i šaljite dnevne/tjedne izvještaje." },
      { title: "Sinkronizacija podataka", desc: "Automatski sinkronizirajte podatke između različitih sustava." }
    ]
  },
  tr: {
    roiTitle: "Yatırımınız Hızla Geri Döner",
    roiSubtitle: "Otomasyon bir gider değil, ölçülebilir yatırım getirisi olan bir yatırımdır.",
    roiStats: [
      { value: "80%", label: "Zaman Tasarrufu", desc: "E-posta işleme, veri girişi ve raporlama gibi tekrarlayan görevlerde." },
      { value: "50%", label: "Maliyet Azaltma", desc: "Otomatik süreçler rutin işler için personel maliyetlerini düşürür." },
      { value: "3-6", label: "Ay ROI", desc: "Çoğu otomasyon projesi yarım yıl içinde kendini amorti eder." }
    ],
    exampleTitle: "Örnek Hesaplama: E-posta Otomasyonu",
    beforeTitle: "Önce (manuel)",
    beforePoints: ["E-posta işleme için günlük 2 saat", "50€/saat personel maliyeti = 100€/gün", "Ayda 20 iş günü = 2.000€/ay", "= Yıllık 24.000€"],
    afterTitle: "Sonra (otomatik)",
    afterPoints: ["Tek seferlik kurulum: 2.500€", "Bakım: 200€/ay = 2.400€/yıl", "Tasarruf: 24.000€ - 4.900€", "= Yıllık 19.100€ tasarruf"],
    useCasesTitle: "Popüler Otomasyon İş Akışları",
    useCasesSubtitle: "Müşterilerimiz için en sık otomatikleştirdiğimiz süreçler bunlar.",
    useCases: [
      { title: "Lead'den CRM'e", desc: "Web formlarından yeni potansiyel müşterileri otomatik olarak CRM'inize aktarın." },
      { title: "Fatura Gönderimi", desc: "Faturaları otomatik olarak oluşturun, gönderin ve muhasebe yazılımına kaydedin." },
      { title: "Sosyal Medya Paylaşımı", desc: "Birden fazla platformda içerikleri otomatik olarak yayınlayın ve analiz edin." },
      { title: "Randevu Hatırlatmaları", desc: "Randevulardan önce müşterilere otomatik e-posta ve SMS gönderin." },
      { title: "Envanter Yönetimi", desc: "Stok seviyelerini izleyin ve otomatik olarak yeniden sipariş verin." },
      { title: "Müşteri Geri Bildirimi", desc: "Tamamlandıktan sonra otomatik olarak değerlendirme talepleri gönderin." },
      { title: "Rapor Oluşturma", desc: "Günlük/haftalık raporları otomatik olarak oluşturun ve gönderin." },
      { title: "Veri Senkronizasyonu", desc: "Farklı sistemler arasındaki verileri otomatik olarak senkronize edin." }
    ]
  }
};

const automationIcons = [Mail, Users, FileText, ShoppingCart, Calendar, Database, TrendingUp, Settings];
const benefitIcons = [Clock, Shield, TrendingUp, Zap];

const automationSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://extrucon.de/automatisierungen#service",
    "name": "KI-Workflow-Automatisierung mit n8n & GPT-4",
    "alternateName": ["AI Automation", "GPT-4 Workflow Automation", "KI-gestützte Prozessautomatisierung"],
    "description": "Professionelle KI-gestützte Geschäftsprozess-Automatisierung mit n8n, Make und GPT-4. E-Mail, CRM, Rechnungen automatisieren. Bis zu 80% Zeitersparnis durch intelligente Workflows.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "ExtruCon GmbH",
      "@id": "https://extrucon.de/#organization"
    },
    "areaServed": [
      { "@type": "City", "name": "Fürstenfeldbruck" },
      { "@type": "City", "name": "München" },
      { "@type": "State", "name": "Bayern" },
      { "@type": "Country", "name": "Deutschland" }
    ],
    "serviceType": ["KI-Automatisierung", "Workflow Automation", "GPT-4 Integration", "n8n Workflows"],
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "EUR"
      }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://extrucon.de" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://extrucon.de/#services" },
      { "@type": "ListItem", "position": 3, "name": "Automatisierungen", "item": "https://extrucon.de/automatisierungen" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Wie nutzt ExtruCon KI für Workflow-Automatisierung?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir integrieren GPT-4 und Claude AI in n8n-Workflows für intelligente E-Mail-Klassifizierung, automatische Dokumentenverarbeitung und KI-gestützte Entscheidungsfindung in Geschäftsprozessen."
        }
      },
      {
        "@type": "Question",
        "name": "Was ist n8n und warum nutzt ExtruCon es mit KI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "n8n ist eine leistungsstarke Open-Source Workflow-Plattform. Kombiniert mit GPT-4 und KI-Nodes ermöglicht sie intelligente Automatisierungen, die über einfache Wenn-Dann-Regeln hinausgehen."
        }
      },
      {
        "@type": "Question",
        "name": "Welche KI-gestützten Prozesse können automatisiert werden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "KI-gestützte E-Mail-Triage, intelligente Lead-Qualifizierung mit GPT-4, automatische Dokumentenextraktion, KI-Chatbot-Integrationen, und Sentiment-Analyse für Kundenfeedback."
        }
      }
    ]
  }
];

export default function Automatisierungen() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SEOHead 
        title="KI-Workflow-Automatisierung mit n8n & GPT-4 | ExtruCon – 80% Zeit sparen"
        description="KI-gestützte Workflow-Automatisierung mit n8n, Make & GPT-4. E-Mail, CRM, Rechnungen automatisieren. Bis zu 80% Zeitersparnis. KI-Agentur Fürstenfeldbruck."
        keywords="KI Automatisierung, n8n GPT-4, Workflow Automatisierung KI, AI Prozessautomatisierung, Business Automation KI, Zapier Alternative, Make Alternative, n8n Agentur München, Claude AI Integration, GPT-4 Workflow"
        canonical="https://extrucon.de/automatisierungen"
        geoRegion="DE-BY"
        geoPlacename="Fürstenfeldbruck"
        schema={automationSchema}
      />
      <Navbar />
      <main className="pt-24">
        <Breadcrumbs items={[
          { label: t.nav.services, href: "/#services" },
          { label: t.nav.automation }
        ]} />
        {/* Hero */}
        <section className="py-10 bg-gradient-to-b from-orange-500/5 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
                <Workflow className="w-4 h-4" />
                {t.automationPage.badge}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mb-6">
                {t.automationPage.title}
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                {t.automationPage.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/kontakt" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors"
                  data-testid="button-automatisierung-cta"
                >
                  {t.automationPage.ctaPrimary} <ArrowRight className="w-4 h-4" />
                </a>
                <a 
                  href="#automations" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 text-white font-medium rounded-lg hover:bg-white/10 transition-colors border border-white/10"
                >
                  {t.automationPage.ctaSecondary}
                </a>
              </div>
              <GeoLinks serviceKey="workflowAutomation" />
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-10 border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {t.automationPage.benefits.map((benefit, i) => {
                const IconComponent = benefitIcons[i] || Clock;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="font-bold text-white mb-1">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Automations Grid */}
        <section id="automations" className="py-10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
                {t.automationPage.automationsTitle}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {t.automationPage.automationsSubtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {t.automationPage.automations.map((auto, i) => {
                const IconComponent = automationIcons[i] || Workflow;
                return (
                  <motion.div
                    key={auto.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{auto.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{auto.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {auto.examples.map((ex) => (
                        <span key={ex} className="text-xs text-gray-500">• {ex}</span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* n8n Feature */}
        <section className="py-10 bg-card/20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
                  <GitBranch className="w-4 h-4" />
                  {t.automationPage.n8nBadge}
                </div>
                <h2 className="text-3xl font-bold font-display text-white mb-4">
                  {t.automationPage.n8nTitle}
                </h2>
                <p className="text-gray-400 mb-6">
                  {t.automationPage.n8nDescription}
                </p>
                <ul className="space-y-3">
                  {t.automationPage.n8nFeatures.map((item) => (
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
                    <h3 className="text-xl font-bold text-white">{t.automationPage.visualWorkflows}</h3>
                    <p className="text-gray-400 text-sm">{t.automationPage.visualWorkflowsDesc}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {t.automationPage.workflowSteps.map((step, i) => (
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
        <section className="py-10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold font-display text-white mb-4">
                {t.automationPage.processTitle}
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                {t.automationPage.processSubtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {t.automationPage.processSteps.map((item, i) => (
                <motion.div
                  key={item.title}
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
                    {i + 1}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-xs">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Section */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <TrendingUp className="w-10 h-10 text-orange-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-4">
                {localTranslations[language].roiTitle}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {localTranslations[language].roiSubtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              {localTranslations[language].roiStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-orange-500/10 border border-orange-500/30 rounded-2xl"
                >
                  <div className="text-4xl font-bold text-orange-400 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                  <p className="text-sm text-gray-400">{stat.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-8 max-w-4xl mx-auto"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">{localTranslations[language].exampleTitle}</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-orange-400 font-semibold mb-4">{localTranslations[language].beforeTitle}</h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    {localTranslations[language].beforePoints.slice(0, 3).map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                    <li className="font-semibold text-white">{localTranslations[language].beforePoints[3]}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-green-400 font-semibold mb-4">{localTranslations[language].afterTitle}</h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    {localTranslations[language].afterPoints.slice(0, 3).map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                    <li className="font-semibold text-green-400">{localTranslations[language].afterPoints[3]}</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-10 bg-card/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                {localTranslations[language].useCasesTitle}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {localTranslations[language].useCasesSubtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {localTranslations[language].useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-orange-500/50 transition-all"
                >
                  <h3 className="text-base font-semibold text-white mb-2">{useCase.title}</h3>
                  <p className="text-xs text-gray-400">{useCase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="py-10 bg-card/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl font-bold font-display text-white mb-3">
                {t.automationPage.toolsTitle}
              </h2>
              <p className="text-gray-400">
                {t.automationPage.toolsSubtitle}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {t.automationPage.tools.map((tool, i) => (
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
        <section className="py-10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <HelpCircle className="w-10 h-10 text-orange-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold font-display text-white mb-3">
                {t.automationPage.faqTitle}
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-3">
              {t.automationPage.faqs.map((faq, i) => (
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
        <section className="py-10 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-y border-white/10">
          <div className="container mx-auto px-4 text-center">
            <Play className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t.automationPage.ctaTitle}
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              {t.automationPage.ctaSubtitle}
            </p>
            <a 
              href="/kontakt" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors text-lg"
              data-testid="button-automatisierung-contact"
            >
              {t.automationPage.ctaPrimary} <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        <RelatedServices currentPage="automatisierungen" />
        <ExploreMoreSection />
      </main>
      <Footer />
    </div>
  );
}
