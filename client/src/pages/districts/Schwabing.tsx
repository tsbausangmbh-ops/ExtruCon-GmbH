import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Bot, Zap, MapPin, Phone, ArrowRight, Workflow, Globe, Palette, Coffee, Lightbulb, Rocket } from "lucide-react";
import { Link } from "wouter";

export default function Schwabing() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "KI-Agentur Schwabing | ExtruCon GmbH",
    "description": "KI-Agentur für München-Schwabing. Innovative KI-Lösungen für Startups, Agenturen und kreative Unternehmen.",
    "url": "https://extrucon.de/muenchen/schwabing",
    "mainEntity": {
      "@type": "LocalBusiness",
      "@id": "https://extrucon.de/#localbusiness"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://extrucon.de" },
        { "@type": "ListItem", "position": 2, "name": "München", "item": "https://extrucon.de/muenchen" },
        { "@type": "ListItem", "position": 3, "name": "Schwabing", "item": "https://extrucon.de/muenchen/schwabing" }
      ]
    },
    "areaServed": [
      { "@type": "Place", "name": "Schwabing-West" },
      { "@type": "Place", "name": "Schwabing-Freimann" },
      { "@type": "Place", "name": "Maxvorstadt" }
    ]
  };

  const services = [
    { icon: Bot, title: "Startup-KI-Agenten", description: "Skalierbare KI-Assistenten für schnell wachsende Startups und Tech-Unternehmen.", link: "/ki-agenten" },
    { icon: Workflow, title: "Agile Automatisierung", description: "Flexible Workflows für Agenturen und kreative Teams in Schwabing.", link: "/automatisierungen" },
    { icon: Globe, title: "Innovative Websites", description: "Cutting-edge Webentwicklung mit KI für die kreative Szene.", link: "/webseiten-ki" },
    { icon: Rocket, title: "Growth Marketing", description: "Datengetriebenes Online-Marketing und SEO für Startups und Agenturen.", link: "/leistungen/marketing" }
  ];

  const industries = [
    { icon: Rocket, title: "Startups & Tech", description: "KI-gestützte Skalierung für junge Unternehmen am Münchner Innovations-Hub." },
    { icon: Palette, title: "Kreativagenturen", description: "Automatisierte Workflows für Design-, Werbe- und PR-Agenturen." },
    { icon: Coffee, title: "Gastronomie", description: "Reservierungssysteme und Kundenkommunikation für Cafés und Restaurants." },
    { icon: Lightbulb, title: "Beratung & Coaching", description: "Terminbuchung und Lead-Management für Coaches und Berater." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="KI-Agentur Schwabing | ExtruCon – Innovative KI für Startups & Kreative"
        description="KI-Agentur München-Schwabing: KI-Agenten & Automatisierung für Startups, Agenturen und Kreative. ✓ Innovativ ✓ Agil ✓ Skalierbar"
        canonical="https://extrucon.de/muenchen/schwabing"
        schema={schemaData}
      />
      <Navbar />
      
      <main>
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-pink-900/10" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
              <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "München", href: "/muenchen" }, { label: "Schwabing" }]} />
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm mb-6 mt-8">
                <MapPin className="w-4 h-4" />
                <span>Innovative KI für Schwabing</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">KI-Agentur</span>{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Schwabing</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Kreative KI-Lösungen für das innovativste Viertel Münchens. Von der Leopoldstraße bis zum Englischen Garten – wir bringen Ihre Ideen auf das nächste Level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/termin">
                  <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl flex items-center gap-2">
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
            <h2 className="text-3xl font-bold text-white text-center mb-10">Unsere Leistungen für Schwabing</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Link href={service.link}>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-purple-500/50 transition-all h-full">
                      <service.icon className="w-10 h-10 text-purple-400 mb-4" />
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
            <h2 className="text-3xl font-bold text-white text-center mb-4">Branchen in Schwabing</h2>
            <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">Von Startups bis Kreativagenturen – wir kennen die Schwabinger Geschäftswelt.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((ind, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                  <ind.icon className="w-8 h-8 text-purple-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">{ind.title}</h3>
                  <p className="text-sm text-gray-400">{ind.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-br from-purple-900/20 to-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ihr Partner in Schwabing</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Ob Leopoldstraße, Münchner Freiheit oder Englischer Garten – wir sind Ihr Ansprechpartner für innovative KI-Lösungen.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Schwabing-West", "Schwabing-Freimann", "Münchner Freiheit", "Leopoldstraße", "Universität", "Maxvorstadt"].map((area) => (
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
