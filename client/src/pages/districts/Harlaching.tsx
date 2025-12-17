import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Bot, MapPin, Phone, ArrowRight, Workflow, Globe, Heart, Home, Stethoscope, Users } from "lucide-react";
import { Link } from "wouter";

export default function Harlaching() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "KI-Agentur Harlaching | ExtruCon GmbH",
    "description": "KI-Agentur für München-Harlaching. KI-Lösungen für Gesundheitswesen, Seniorenbetreuung und gehobenes Wohnen.",
    "url": "https://extrucon.de/muenchen/harlaching",
    "mainEntity": {
      "@type": "LocalBusiness",
      "@id": "https://extrucon.de/#localbusiness"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://extrucon.de" },
        { "@type": "ListItem", "position": 2, "name": "München", "item": "https://extrucon.de/muenchen" },
        { "@type": "ListItem", "position": 3, "name": "Harlaching", "item": "https://extrucon.de/muenchen/harlaching" }
      ]
    },
    "areaServed": [
      { "@type": "Place", "name": "Harlaching" },
      { "@type": "Place", "name": "Menterschwaige" },
      { "@type": "Place", "name": "Geiselgasteig" }
    ]
  };

  const services = [
    { icon: Bot, title: "Healthcare KI-Agenten", description: "Spezialisierte KI-Assistenten für Kliniken, Praxen und Gesundheitseinrichtungen.", link: "/ki-agenten" },
    { icon: Workflow, title: "Praxis-Automatisierung", description: "Effiziente Workflows für Terminbuchung, Patientenverwaltung und Dokumentation.", link: "/automatisierungen" },
    { icon: Globe, title: "Medizinische Websites", description: "DSGVO-konforme Webauftritte mit Patientenportal und Online-Terminbuchung.", link: "/webseiten-ki" }
  ];

  const industries = [
    { icon: Stethoscope, title: "Kliniken & Praxen", description: "Das Klinikum Harlaching und umliegende Praxen profitieren von unseren KI-Lösungen." },
    { icon: Heart, title: "Seniorenbetreuung", description: "Intelligente Kommunikationssysteme für Seniorenresidenzen und Pflegeeinrichtungen." },
    { icon: Home, title: "Immobilien", description: "Automatisierte Mieter- und Eigentümerkommunikation für gehobene Wohnanlagen." },
    { icon: Users, title: "Therapeuten", description: "Terminbuchung und Patientenkommunikation für Physio-, Ergo- und Psychotherapeuten." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="KI-Agentur Harlaching | ExtruCon – KI für Gesundheit & Wohnen"
        description="KI-Agentur München-Harlaching: KI-Agenten für Kliniken, Praxen und Seniorenbetreuung. ✓ DSGVO-konform ✓ Healthcare-Expertise ✓ Vor-Ort-Service"
        canonical="https://extrucon.de/muenchen/harlaching"
        schema={schemaData}
      />
      <Navbar />
      
      <main>
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 via-background to-pink-900/10" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
              <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "München", href: "/muenchen" }, { label: "Harlaching" }]} />
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/30 rounded-full text-rose-400 text-sm mb-6 mt-8">
                <MapPin className="w-4 h-4" />
                <span>KI für Gesundheit in Harlaching</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">KI-Agentur</span>{" "}
                <span className="bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent">Harlaching</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Spezialisierte KI-Lösungen für das Gesundheitsviertel Münchens. DSGVO-konform, patientenfreundlich und effizient.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/termin">
                  <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold rounded-xl flex items-center gap-2">
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
            <h2 className="text-3xl font-bold text-white text-center mb-10">Unsere Leistungen für Harlaching</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Link href={service.link}>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-rose-500/50 transition-all h-full">
                      <service.icon className="w-10 h-10 text-rose-400 mb-4" />
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
            <h2 className="text-3xl font-bold text-white text-center mb-4">Branchen in Harlaching</h2>
            <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">Wir kennen die besonderen Anforderungen im Gesundheits- und Wohnbereich.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((ind, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                  <ind.icon className="w-8 h-8 text-rose-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">{ind.title}</h3>
                  <p className="text-sm text-gray-400">{ind.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-br from-rose-900/20 to-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ihr Partner in Harlaching</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Von der Menterschwaige bis Geiselgasteig – wir betreuen Gesundheitseinrichtungen im gesamten Stadtbezirk.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Harlaching", "Menterschwaige", "Geiselgasteig", "Thalkirchen", "Obersendling", "Tierpark"].map((area) => (
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
