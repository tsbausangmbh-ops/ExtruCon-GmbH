import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Bot, MapPin, Phone, ArrowRight, Workflow, Globe, Anchor, Building2, Heart, Briefcase } from "lucide-react";
import { Link } from "wouter";

export default function Starnberg() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "KI-Agentur Starnberg | ExtruCon GmbH",
    "description": "KI-Agentur für Starnberg und das Fünfseenland. KI-Agenten, Automatisierung und Websites für Unternehmen am Starnberger See.",
    "url": "https://extrucon.de/starnberg",
    "mainEntity": {
      "@type": "LocalBusiness",
      "@id": "https://extrucon.de/#localbusiness"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://extrucon.de" },
        { "@type": "ListItem", "position": 2, "name": "München", "item": "https://extrucon.de/muenchen" },
        { "@type": "ListItem", "position": 3, "name": "Starnberg", "item": "https://extrucon.de/starnberg" }
      ]
    },
    "areaServed": [
      { "@type": "City", "name": "Starnberg" },
      { "@type": "Place", "name": "Fünfseenland" },
      { "@type": "City", "name": "Tutzing" },
      { "@type": "City", "name": "Berg" }
    ]
  };

  const services = [
    { icon: Bot, title: "Premium KI-Agenten", description: "Intelligente Assistenten für gehobene Dienstleister und Tourismus am Starnberger See.", link: "/ki-agenten" },
    { icon: Workflow, title: "Workflow-Automatisierung", description: "Effiziente Prozesse für Hotels, Restaurants und lokale Unternehmen.", link: "/automatisierungen" },
    { icon: Globe, title: "Stilvolle Websites", description: "Moderne Webauftritte mit KI für das Fünfseenland.", link: "/webseiten-ki" },
    { icon: Anchor, title: "Tourismus-Marketing", description: "Online-Marketing und SEO für Hotels, Restaurants und Freizeitanbieter.", link: "/leistungen/marketing" }
  ];

  const industries = [
    { icon: Anchor, title: "Tourismus & Hotels", description: "Buchungssysteme und Gästekommunikation für Hotels und Pensionen am See." },
    { icon: Building2, title: "Luxusimmobilien", description: "Automatisierte Vermarktung für Premium-Objekte im Fünfseenland." },
    { icon: Heart, title: "Gesundheit & Wellness", description: "Terminbuchung für Spas, Therapeuten und Gesundheitseinrichtungen." },
    { icon: Briefcase, title: "Lokale Unternehmen", description: "KI-Lösungen für Handwerk, Einzelhandel und Dienstleister." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="KI-Agentur Starnberg | ExtruCon – KI-Lösungen am Starnberger See"
        description="KI-Agentur für Starnberg & Fünfseenland: KI-Agenten, Automatisierung und Websites. Tourismus, Immobilien, lokale Unternehmen. ✓ Vor-Ort-Service ✓ 20 Min. ab FFB"
        canonical="https://extrucon.de/starnberg"
        schema={schemaData}
      />
      <Navbar />
      
      <main id="main-content" role="main" aria-label="Hauptinhalt">
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-teal-900/10" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
              <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "München", href: "/muenchen" }, { label: "Starnberg" }]} />
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm mb-6 mt-8">
                <MapPin className="w-4 h-4" />
                <span>KI-Agentur für das Fünfseenland</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">KI-Agentur</span>{" "}
                <span className="bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent">Starnberg</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Moderne KI-Lösungen für Starnberg und das Fünfseenland. Nur 20 Minuten von unserem Hauptsitz – persönlicher Service garantiert.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/termin">
                  <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-600 text-white font-semibold rounded-xl flex items-center gap-2">
                    Beratungstermin vereinbaren <ArrowRight className="w-5 h-5" />
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
            <h2 className="text-3xl font-bold text-white text-center mb-10">Unsere Leistungen für Starnberg</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Link href={service.link}>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all h-full">
                      <service.icon className="w-10 h-10 text-blue-400 mb-4" />
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
            <h2 className="text-3xl font-bold text-white text-center mb-10">Branchen im Fünfseenland</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((ind, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                  <ind.icon className="w-8 h-8 text-blue-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">{ind.title}</h3>
                  <p className="text-sm text-gray-400">{ind.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-br from-blue-900/20 to-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Einsatzgebiet Fünfseenland</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Wir betreuen Unternehmen in Starnberg und der gesamten Region:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Starnberg", "Tutzing", "Berg", "Feldafing", "Pöcking", "Gauting", "Gilching", "Herrsching", "Andechs", "Wörthsee"].map((area) => (
                <span key={area} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm">{area}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
