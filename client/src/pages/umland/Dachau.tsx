import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Bot, MapPin, Phone, ArrowRight, Workflow, Globe, Factory, Building2, ShoppingBag, Truck } from "lucide-react";
import { Link } from "wouter";

export default function Dachau() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "KI-Agentur Dachau | ExtruCon GmbH",
    "description": "KI-Agentur für Dachau und Umgebung. KI-Agenten, Automatisierung und Websites für Unternehmen im Landkreis Dachau.",
    "url": "https://extrucon.de/dachau",
    "mainEntity": {
      "@type": "LocalBusiness",
      "@id": "https://extrucon.de/#localbusiness"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://extrucon.de" },
        { "@type": "ListItem", "position": 2, "name": "München", "item": "https://extrucon.de/muenchen" },
        { "@type": "ListItem", "position": 3, "name": "Dachau", "item": "https://extrucon.de/dachau" }
      ]
    },
    "areaServed": [
      { "@type": "City", "name": "Dachau" },
      { "@type": "City", "name": "Karlsfeld" },
      { "@type": "City", "name": "Bergkirchen" }
    ]
  };

  const services = [
    { icon: Bot, title: "KI-Agenten für KMU", description: "Smarte Assistenten für mittelständische Unternehmen und Handwerksbetriebe.", link: "/ki-agenten" },
    { icon: Workflow, title: "Produktions-Automatisierung", description: "Workflow-Optimierung für Fertigung, Logistik und Verwaltung.", link: "/automatisierungen" },
    { icon: Globe, title: "Lokale Websites", description: "SEO-optimierte Webauftritte mit KI für den Dachauer Markt.", link: "/webseiten-ki" },
    { icon: Factory, title: "B2B Marketing", description: "Online-Marketing und SEO für produzierende Unternehmen und Logistik.", link: "/leistungen/marketing" }
  ];

  const industries = [
    { icon: Factory, title: "Produktion & Fertigung", description: "KI-gestützte Prozessoptimierung für produzierende Unternehmen." },
    { icon: Truck, title: "Logistik & Transport", description: "Automatisierte Disposition und Kundenkommunikation für Speditionen." },
    { icon: ShoppingBag, title: "Einzelhandel", description: "Intelligente Bestellsysteme und Kundenbindung für lokale Geschäfte." },
    { icon: Building2, title: "Immobilien", description: "Automatisierte Mieter- und Interessentenkommunikation." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="KI-Agentur Dachau | ExtruCon – KI für Mittelstand & Handwerk"
        description="KI-Agentur für Dachau: KI-Agenten, Automatisierung und Websites für KMU. Produktion, Logistik, Einzelhandel. ✓ Persönlich ✓ 15 Min. ab FFB ✓ Festpreis"
        canonical="https://extrucon.de/dachau"
        schema={schemaData}
      />
      <Navbar />
      
      <main>
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-background to-violet-900/10" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
              <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "München", href: "/muenchen" }, { label: "Dachau" }]} />
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-400 text-sm mb-6 mt-8">
                <MapPin className="w-4 h-4" />
                <span>KI-Agentur für den Landkreis Dachau</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">
                <span className="text-white">KI-Agentur</span>{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">Dachau</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Praktische KI-Lösungen für den Mittelstand in Dachau. Nur 15 Minuten von unserem Hauptsitz – schnelle Hilfe vor Ort.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/termin">
                  <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold rounded-xl flex items-center gap-2">
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
            <h2 className="text-2xl md:text-3xl font-bold font-display text-white text-center mb-10">Unsere Leistungen für Dachau</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Link href={service.link}>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-indigo-500/50 transition-all h-full">
                      <service.icon className="w-10 h-10 text-indigo-400 mb-4" />
                      <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
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
            <h2 className="text-2xl md:text-3xl font-bold font-display text-white text-center mb-10">Branchen im Landkreis Dachau</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((ind, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                  <ind.icon className="w-8 h-8 text-indigo-400 mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">{ind.title}</h3>
                  <p className="text-sm text-gray-400">{ind.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-br from-indigo-900/20 to-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-4">Einsatzgebiet Landkreis Dachau</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {["Dachau", "Karlsfeld", "Bergkirchen", "Petershausen", "Markt Indersdorf", "Altomünster", "Schwabhausen", "Röhrmoos", "Hebertshausen"].map((area) => (
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
