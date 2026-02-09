import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Bot, MapPin, Phone, ArrowRight, Workflow, Globe, Building2, Heart, Briefcase, GraduationCap } from "lucide-react";
import { Link } from "wouter";

export default function Nymphenburg() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "KI-Agentur Nymphenburg | ExtruCon GmbH",
    "description": "KI-Agentur für München-Nymphenburg. Elegante KI-Lösungen für Traditionsunternehmen und gehobene Dienstleister.",
    "url": "https://extrucon.de/muenchen/nymphenburg",
    "mainEntity": {
      "@type": "LocalBusiness",
      "@id": "https://extrucon.de/#localbusiness"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://extrucon.de" },
        { "@type": "ListItem", "position": 2, "name": "München", "item": "https://extrucon.de/muenchen" },
        { "@type": "ListItem", "position": 3, "name": "Nymphenburg", "item": "https://extrucon.de/muenchen/nymphenburg" }
      ]
    },
    "areaServed": [
      { "@type": "Place", "name": "Nymphenburg" },
      { "@type": "Place", "name": "Neuhausen" },
      { "@type": "Place", "name": "Gern" }
    ]
  };

  const services = [
    { icon: Bot, title: "Elegante KI-Agenten", description: "Stilvolle KI-Assistenten für traditionsreiche Unternehmen und gehobene Dienstleister.", link: "/ki-agenten" },
    { icon: Workflow, title: "Prozessoptimierung", description: "Diskrete Automatisierung für Familienunternehmen und etablierte Betriebe.", link: "/automatisierungen" },
    { icon: Globe, title: "Repräsentative Websites", description: "Hochwertige Webauftritte mit KI für Nymphenburger Unternehmen.", link: "/webseiten-ki" },
    { icon: Briefcase, title: "B2B Marketing", description: "Professionelles Online-Marketing und SEO für etablierte Unternehmen.", link: "/leistungen/marketing" }
  ];

  const industries = [
    { icon: Building2, title: "Immobilien & Hausverwaltung", description: "Automatisierte Mieterkommunikation und intelligentes Objektmanagement." },
    { icon: Heart, title: "Gesundheit & Wellness", description: "Terminbuchung und Patientenkommunikation für Praxen und Therapiezentren." },
    { icon: Briefcase, title: "Traditionsunternehmen", description: "Digitalisierung und KI-Integration für etablierte Familienbetriebe." },
    { icon: GraduationCap, title: "Bildung & Coaching", description: "Automatisierte Kursverwaltung und intelligente Lernplattformen." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="KI-Agentur Nymphenburg | ExtruCon – Elegante KI-Lösungen München"
        description="KI-Agentur München-Nymphenburg: KI-Agenten & Automatisierung für Traditionsunternehmen und gehobene Dienstleister. ✓ Elegant ✓ Diskret ✓ Professionell"
        canonical="https://extrucon.de/muenchen/nymphenburg"
        schema={schemaData}
      />
      <Navbar />
      
      <main>
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-background to-teal-900/10" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
              <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "München", href: "/muenchen" }, { label: "Nymphenburg" }]} />
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm mb-6 mt-8">
                <MapPin className="w-4 h-4" />
                <span>Elegante KI für Nymphenburg</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-4">
                <span className="text-white">KI-Agentur</span>{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">Nymphenburg</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Stilvolle KI-Lösungen für eines der schönsten Viertel Münchens. Tradition trifft Innovation – diskret und professionell.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/termin">
                  <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl flex items-center gap-2">
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
            <h2 className="text-2xl md:text-3xl font-bold font-display text-white text-center mb-10">Unsere Leistungen für Nymphenburg</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Link href={service.link}>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-emerald-500/50 transition-all h-full">
                      <service.icon className="w-10 h-10 text-emerald-400 mb-4" />
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
            <h2 className="text-2xl md:text-3xl font-bold font-display text-white text-center mb-4">Branchen in Nymphenburg</h2>
            <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">Wir verstehen die besonderen Anforderungen von Nymphenburger Unternehmen.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((ind, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                  <ind.icon className="w-8 h-8 text-emerald-400 mb-3" />
                  <h3 className="text-lg font-bold text-white mb-2">{ind.title}</h3>
                  <p className="text-sm text-gray-400">{ind.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-br from-emerald-900/20 to-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-4">Ihr Partner in Nymphenburg</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Vom Schloss bis Neuhausen – wir betreuen Unternehmen im gesamten Stadtbezirk.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Nymphenburg", "Neuhausen", "Gern", "Nymphenburg-Süd", "Hirschgarten", "Rotkreuzplatz"].map((area) => (
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
