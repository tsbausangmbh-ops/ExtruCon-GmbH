import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ExploreMoreSection, LocationLinks } from "@/components/InternalLinks";
import { motion } from "framer-motion";
import { Bot, MapPin, Phone, ArrowRight, Workflow, Globe, Wrench, ShoppingBag, Heart, Building2 } from "lucide-react";
import { Link } from "wouter";

export default function Germering() {
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "KI-Agentur Germering | ExtruCon GmbH",
      "description": "KI-Agentur für Germering. KI-Agenten mit GPT-4, Automatisierung und Websites für Handwerk, Einzelhandel und Dienstleister.",
      "url": "https://extrucon.de/germering",
      "mainEntity": { "@type": "LocalBusiness", "@id": "https://extrucon.de/#localbusiness" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://extrucon.de" },
          { "@type": "ListItem", "position": 2, "name": "München", "item": "https://extrucon.de/muenchen" },
          { "@type": "ListItem", "position": 3, "name": "Germering", "item": "https://extrucon.de/germering" }
        ]
      },
      "areaServed": [
        { "@type": "City", "name": "Germering" },
        { "@type": "City", "name": "Unterpfaffenhofen" },
        { "@type": "City", "name": "Gilching" },
        { "@type": "City", "name": "Puchheim" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://extrucon.de/germering#service",
      "name": "KI-Lösungen Germering",
      "description": "KI-Agenten und Büro-Automatisierung für Handwerksbetriebe und lokale Unternehmen in Germering. GPT-4 powered, erschwinglich.",
      "provider": { "@type": "Organization", "@id": "https://extrucon.de/#organization" },
      "areaServed": { "@type": "City", "name": "Germering" },
      "serviceType": ["Handwerk KI", "Büro-Automatisierung", "Lokale SEO"]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Wie weit ist ExtruCon von Germering entfernt?", "acceptedAnswer": { "@type": "Answer", "text": "Nur 10 Minuten! Von unserem Standort in Fürstenfeldbruck sind wir schnell bei Ihnen in Germering, Unterpfaffenhofen oder Gilching." } },
        { "@type": "Question", "name": "Sind KI-Lösungen auch für kleine Handwerksbetriebe bezahlbar?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, wir bieten KI-Agenten bereits ab 490€ einmalig. Ideal für Elektriker, Maler, Installateure und andere Handwerksbetriebe." } },
        { "@type": "Question", "name": "Welche Prozesse können für Handwerker automatisiert werden?", "acceptedAnswer": { "@type": "Answer", "text": "Anfragen-Management, automatische Terminbuchung, Angebotserstellung, Rechnungsversand und Kundenkommunikation – alles DSGVO-konform." } }
      ]
    }
  ];

  const services = [
    { icon: Bot, title: "KI für Handwerk", description: "Praktische KI-Assistenten für Anfragen, Termine und Kundenkommunikation.", link: "/ki-agenten" },
    { icon: Workflow, title: "Büro-Automatisierung", description: "Automatisierte Angebotserstellung, Rechnungen und Kundenverwaltung.", link: "/automatisierungen" },
    { icon: Globe, title: "Lokale Websites", description: "Handwerker- und Unternehmens-Websites mit KI-Funktionen.", link: "/webseiten-ki" },
    { icon: Wrench, title: "Handwerker-Marketing", description: "Lokale SEO und Online-Marketing für Handwerksbetriebe.", link: "/leistungen/marketing" }
  ];

  const industries = [
    { icon: Wrench, title: "Handwerk", description: "KI-Assistenten für Anfragen und Terminbuchung bei Elektrikern, Malern, Installateuren." },
    { icon: ShoppingBag, title: "Einzelhandel", description: "Automatisierte Bestellungen und Kundenbindung für lokale Geschäfte." },
    { icon: Heart, title: "Gesundheit", description: "Terminbuchung und Patientenkommunikation für Praxen und Therapeuten." },
    { icon: Building2, title: "Dienstleister", description: "Workflow-Automatisierung für Steuerberater, Versicherungen und Beratung." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="KI-Agentur Germering | GPT-4 für Handwerk & Einzelhandel | ExtruCon"
        description="KI-Agentur für Germering: KI-Agenten mit GPT-4 & Automatisierung für Handwerksbetriebe, Einzelhandel, Dienstleister. ✓ Bezahlbar ab 490€ ✓ 10 Min. ab FFB ✓ DSGVO"
        keywords="KI Agentur Germering, KI Handwerk, GPT-4 Handwerksbetrieb, Automatisierung Germering, Unterpfaffenhofen KI, Gilching Automatisierung"
        canonical="https://extrucon.de/germering"
        geoRegion="DE-BY"
        geoPlacename="Germering"
        schema={schemaData}
      />
      <Navbar />
      
      <main>
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-background to-amber-900/10" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
              <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "München", href: "/muenchen" }, { label: "Germering" }]} />
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm mb-6 mt-8">
                <MapPin className="w-4 h-4" />
                <span>KI-Agentur für Germering</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">KI-Agentur</span>{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Germering</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Praktische KI-Lösungen für Handwerk und Mittelstand in Germering. Direkt um die Ecke – persönlicher Service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/termin">
                  <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold rounded-xl flex items-center gap-2">
                    Kostenloses Erstgespräch <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <a href="tel:+4989444438879">
                  <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 border border-gray-600 text-white rounded-xl flex items-center gap-2">
                    <Phone className="w-5 h-5" /> 089 444 438 879
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 bg-card/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-white text-center mb-10">Unsere Leistungen für Germering</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Link href={service.link}>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-orange-500/50 transition-all h-full">
                      <service.icon className="w-10 h-10 text-orange-400 mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-400">{service.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-white text-center mb-10">Branchen in Germering</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((ind, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                  <ind.icon className="w-8 h-8 text-orange-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">{ind.title}</h3>
                  <p className="text-sm text-gray-400">{ind.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-br from-orange-900/20 to-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Auch in der Umgebung</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {["Germering", "Unterpfaffenhofen", "Gilching", "Gräfelfing", "Planegg", "Krailling", "Gauting", "Alling"].map((area) => (
                <span key={area} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm">{area}</span>
              ))}
            </div>
          </div>
        </section>

        <LocationLinks />
        <ExploreMoreSection />
      </main>
      <Footer />
    </div>
  );
}
