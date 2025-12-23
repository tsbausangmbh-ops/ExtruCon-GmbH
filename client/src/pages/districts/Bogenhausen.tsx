import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ExploreMoreSection, LocationLinks } from "@/components/InternalLinks";
import { motion } from "framer-motion";
import { Bot, Zap, Building2, MapPin, Phone, ArrowRight, CheckCircle, Workflow, Users, Clock, Shield, TrendingUp, Globe, Star, Briefcase } from "lucide-react";
import { Link } from "wouter";

export default function Bogenhausen() {
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "KI-Agentur Bogenhausen | ExtruCon GmbH",
      "description": "Premium KI-Agentur für München-Bogenhausen. KI-Agenten mit GPT-4, Automatisierung und intelligente Websites für Unternehmen im Premiumviertel.",
      "url": "https://extrucon.de/muenchen/bogenhausen",
      "mainEntity": {
        "@type": "LocalBusiness",
        "@id": "https://extrucon.de/#localbusiness"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://extrucon.de" },
          { "@type": "ListItem", "position": 2, "name": "München", "item": "https://extrucon.de/muenchen" },
          { "@type": "ListItem", "position": 3, "name": "Bogenhausen", "item": "https://extrucon.de/muenchen/bogenhausen" }
        ]
      },
      "areaServed": [
        { "@type": "Place", "name": "München-Bogenhausen" },
        { "@type": "Place", "name": "Herzogpark" },
        { "@type": "Place", "name": "Oberföhring" },
        { "@type": "Place", "name": "Daglfing" },
        { "@type": "Place", "name": "Prinzregentenplatz" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://extrucon.de/muenchen/bogenhausen#service",
      "name": "Premium KI-Lösungen Bogenhausen",
      "description": "Exklusive KI-Agenten und Automatisierung für Premiumunternehmen in München-Bogenhausen. GPT-4, Claude AI für Vermögensverwalter, Anwälte, Privatärzte.",
      "provider": { "@type": "Organization", "@id": "https://extrucon.de/#organization" },
      "areaServed": { "@type": "Place", "name": "München-Bogenhausen" },
      "serviceType": ["Premium KI-Agenten", "Diskrete Automatisierung", "VIP Kundenservice"]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Bietet ExtruCon Vor-Ort-Service in Bogenhausen?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, wir bieten diskrete Vor-Ort-Beratung in Bogenhausen, Herzogpark und Oberföhring. Von Fürstenfeldbruck sind wir in 25 Minuten bei Ihnen." } },
        { "@type": "Question", "name": "Welche KI-Lösungen eignen sich für Vermögensverwalter?", "acceptedAnswer": { "@type": "Answer", "text": "Für Family Offices und Vermögensverwalter entwickeln wir KI-gestützte Kundenbetreuung, automatisierte Reports und intelligente Terminbuchung – DSGVO-konform und diskret." } },
        { "@type": "Question", "name": "Können KI-Agenten für Anwaltskanzleien eingesetzt werden?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, wir entwickeln KI-Agenten für automatisierte Mandantenanfragen, intelligentes Dokumentenmanagement und 24/7 Erreichbarkeit – ideal für Kanzleien am Prinzregentenplatz." } }
      ]
    }
  ];

  const services = [
    { icon: Bot, title: "Premium KI-Agenten", description: "Maßgeschneiderte KI-Assistenten für exklusive Dienstleister und Premiummarken in Bogenhausen.", link: "/ki-agenten" },
    { icon: Workflow, title: "Diskrete Automatisierung", description: "Hochwertige Workflow-Automatisierung für Anwaltskanzleien, Vermögensverwalter und Private Offices.", link: "/automatisierungen" },
    { icon: Globe, title: "Exklusive Websites", description: "Repräsentative Webauftritte mit KI-Features für den gehobenen Anspruch.", link: "/webseiten-ki" },
    { icon: TrendingUp, title: "Premium Marketing", description: "Strategisches Online-Marketing und SEO für gehobene Marken und Luxusdienstleister.", link: "/leistungen/marketing" }
  ];

  const industries = [
    { icon: Briefcase, title: "Vermögensverwaltung", description: "KI-gestützte Kundenbetreuung und automatisierte Reports für Family Offices und Vermögensverwalter." },
    { icon: Building2, title: "Premium Immobilien", description: "Intelligente Lead-Qualifizierung und automatische Exposé-Erstellung für Luxusimmobilien." },
    { icon: Users, title: "Privatärzte & Kliniken", description: "Diskrete Terminbuchung und Patientenkommunikation für Privatpraxen am Prinzregentenplatz." },
    { icon: Shield, title: "Anwaltskanzleien", description: "Automatisierte Mandantenanfragen und intelligentes Dokumentenmanagement." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="KI-Agentur Bogenhausen | GPT-4 & Claude AI für Premium-Unternehmen | ExtruCon"
        description="Premium KI-Agentur für München-Bogenhausen: Exklusive KI-Agenten mit GPT-4 & Automatisierung für Vermögensverwalter, Anwälte, Privatärzte. ✓ Diskret ✓ Vor-Ort-Service ✓ DSGVO"
        keywords="KI Agentur Bogenhausen, KI München Bogenhausen, GPT-4 Vermögensverwaltung, KI Anwaltskanzlei, Premium KI-Agenten, Herzogpark KI, Oberföhring Automatisierung"
        canonical="https://extrucon.de/muenchen/bogenhausen"
        geoRegion="DE-BY"
        geoPlacename="München-Bogenhausen"
        schema={schemaData}
      />
      <Navbar />
      
      <main>
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-background to-cyan-900/10" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
              <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "München", href: "/muenchen" }, { label: "Bogenhausen" }]} />
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm mb-6 mt-8">
                <MapPin className="w-4 h-4" />
                <span>Premium KI-Lösungen für Bogenhausen</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">KI-Agentur</span>{" "}
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Bogenhausen</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Exklusive KI-Lösungen für das Premiumviertel Münchens. Von Herzogpark bis Oberföhring – wir automatisieren diskret und professionell.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/termin">
                  <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-xl flex items-center gap-2">
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
            <h2 className="text-3xl font-bold text-white text-center mb-10">Unsere Leistungen für Bogenhausen</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Link href={service.link}>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-amber-500/50 transition-all h-full">
                      <service.icon className="w-10 h-10 text-amber-400 mb-4" />
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
            <h2 className="text-3xl font-bold text-white text-center mb-4">Branchen in Bogenhausen</h2>
            <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">Wir verstehen die besonderen Anforderungen von Premiumunternehmen und bieten maßgeschneiderte Lösungen.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((ind, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                  <ind.icon className="w-8 h-8 text-amber-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">{ind.title}</h3>
                  <p className="text-sm text-gray-400">{ind.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-br from-amber-900/20 to-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ihr Partner in Bogenhausen</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Von Herzogpark über Oberföhring bis Daglfing – wir sind Ihr lokaler Ansprechpartner für KI-Lösungen im gesamten Stadtbezirk Bogenhausen.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Herzogpark", "Oberföhring", "Daglfing", "Johanneskirchen", "Englschalking", "Prinzregentenplatz"].map((area) => (
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
