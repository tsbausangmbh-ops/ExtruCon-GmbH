import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Bot, MapPin, Phone, ArrowRight, Workflow, Globe, Wrench, Users, Heart, Building2 } from "lucide-react";
import { Link } from "wouter";

export default function Puchheim() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "KI-Agentur Puchheim | ExtruCon GmbH",
    "description": "KI-Agentur für Puchheim. KI-Agenten, Automatisierung und Websites für lokale Unternehmen und Dienstleister.",
    "url": "https://extrucon.de/puchheim",
    "mainEntity": {
      "@type": "LocalBusiness",
      "@id": "https://extrucon.de/#localbusiness"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://extrucon.de" },
        { "@type": "ListItem", "position": 2, "name": "München", "item": "https://extrucon.de/muenchen" },
        { "@type": "ListItem", "position": 3, "name": "Puchheim", "item": "https://extrucon.de/puchheim" }
      ]
    },
    "areaServed": [
      { "@type": "City", "name": "Puchheim" },
      { "@type": "City", "name": "Eichenau" },
      { "@type": "City", "name": "Gröbenzell" }
    ]
  };

  const services = [
    { icon: Bot, title: "Lokale KI-Agenten", description: "Smarte Assistenten für kleine und mittlere Unternehmen in Puchheim.", link: "/ki-agenten" },
    { icon: Workflow, title: "Büro-Automatisierung", description: "Automatisierte Verwaltung, Termine und Kundenkommunikation.", link: "/automatisierungen" },
    { icon: Globe, title: "Moderne Websites", description: "Professionelle Webauftritte mit KI für lokale Unternehmen.", link: "/webseiten-ki" },
    { icon: Users, title: "Lokales Marketing", description: "Online-Marketing und SEO für lokale Dienstleister und Unternehmen.", link: "/leistungen/marketing" }
  ];

  const industries = [
    { icon: Wrench, title: "Handwerk", description: "KI-gestützte Anfragenverwaltung und Terminbuchung für Handwerksbetriebe." },
    { icon: Users, title: "Dienstleister", description: "Automatisierte Kundenkommunikation für Beratung und Coaching." },
    { icon: Heart, title: "Gesundheit", description: "Terminbuchung und Erinnerungen für Praxen und Therapeuten." },
    { icon: Building2, title: "Immobilien", description: "Intelligente Makler-Assistenten und Interessentenkommunikation." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="KI-Agentur Puchheim | ExtruCon – KI für lokale Unternehmen"
        description="KI-Agentur für Puchheim: KI-Agenten und Automatisierung für lokale Unternehmen. ✓ Direkte Nachbarschaft zu FFB ✓ Persönlicher Service ✓ Faire Preise"
        canonical="https://extrucon.de/puchheim"
        schema={schemaData}
      />
      <Navbar />
      
      <main id="main-content" role="main" aria-label="Hauptinhalt" className="pt-24">
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-background to-emerald-900/10" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
              <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "München", href: "/muenchen" }, { label: "Puchheim" }]} />
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm mb-6 mt-8">
                <MapPin className="w-4 h-4" />
                <span>Ihre KI-Agentur in der Nachbarschaft</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">KI-Agentur</span>{" "}
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Puchheim</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                KI-Lösungen direkt vor Ihrer Haustür. Als Ihr Nachbar in Fürstenfeldbruck sind wir in 5 Minuten bei Ihnen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/termin">
                  <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl flex items-center gap-2">
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
            <h2 className="text-3xl font-bold text-white text-center mb-10">Unsere Leistungen für Puchheim</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Link href={service.link}>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-green-500/50 transition-all h-full">
                      <service.icon className="w-10 h-10 text-green-400 mb-4" />
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
            <h2 className="text-3xl font-bold text-white text-center mb-10">Branchen in Puchheim</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((ind, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                  <ind.icon className="w-8 h-8 text-green-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">{ind.title}</h3>
                  <p className="text-sm text-gray-400">{ind.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-br from-green-900/20 to-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Auch in der Umgebung</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {["Puchheim", "Eichenau", "Gröbenzell", "Fürstenfeldbruck", "Olching", "Maisach", "Emmering"].map((area) => (
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
