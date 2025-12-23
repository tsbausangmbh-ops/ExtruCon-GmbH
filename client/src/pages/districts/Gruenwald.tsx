import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Bot, MapPin, Phone, ArrowRight, Workflow, Globe, Building2, Gem, Shield, TreePine } from "lucide-react";
import { Link } from "wouter";

export default function Gruenwald() {
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "KI-Agentur Grünwald | ExtruCon GmbH",
      "description": "Exklusive KI-Agentur für Grünwald: VIP KI-Agenten mit GPT-4 & Claude AI für Luxusimmobilien, Vermögensverwaltung und Family Offices.",
      "url": "https://extrucon.de/muenchen/gruenwald",
      "mainEntity": { "@type": "LocalBusiness", "@id": "https://extrucon.de/#localbusiness" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://extrucon.de" },
          { "@type": "ListItem", "position": 2, "name": "München", "item": "https://extrucon.de/muenchen" },
          { "@type": "ListItem", "position": 3, "name": "Grünwald", "item": "https://extrucon.de/muenchen/gruenwald" }
        ]
      },
      "areaServed": [
        { "@type": "Place", "name": "Grünwald" },
        { "@type": "Place", "name": "Pullach" },
        { "@type": "Place", "name": "Straßlach" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://extrucon.de/muenchen/gruenwald#service",
      "name": "VIP KI-Lösungen Grünwald",
      "alternateName": ["Premium AI Solutions", "GPT-4 VIP Service"],
      "description": "Exklusive KI-Agenten mit GPT-4 & Claude AI für Family Offices, Vermögensverwalter und Luxusimmobilien in Grünwald. Höchste Diskretion.",
      "provider": { "@type": "Organization", "@id": "https://extrucon.de/#organization" },
      "areaServed": { "@type": "Place", "name": "Grünwald" },
      "serviceType": ["VIP KI-Agenten", "GPT-4 Chatbot", "Diskrete Automatisierung"]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Welche KI-Modelle nutzt ExtruCon für VIP-Kunden?", "acceptedAnswer": { "@type": "Answer", "text": "Für VIP-Kunden in Grünwald setzen wir GPT-4 und Claude AI ein – die fortschrittlichsten KI-Modelle für höchste Ansprüche. Alle Daten bleiben DSGVO-konform in Europa." } },
        { "@type": "Question", "name": "Ist ein GPT-4 Chatbot für Family Offices geeignet?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, wir entwickeln diskrete GPT-4 Chatbots für Family Offices, die Kundenanfragen intelligent beantworten, Reports erstellen und vertrauliche Kommunikation automatisieren." } },
        { "@type": "Question", "name": "Bietet ExtruCon Vor-Ort-Service in Grünwald?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, wir bieten diskrete Vor-Ort-Beratung in Grünwald, Pullach und Straßlach. Von Fürstenfeldbruck sind wir in 25 Minuten bei Ihnen." } }
      ]
    }
  ];

  const services = [
    { icon: Bot, title: "VIP KI-Agenten", description: "Hochexklusive KI-Assistenten für anspruchsvolle Privatkundschaft und Family Offices.", link: "/ki-agenten" },
    { icon: Workflow, title: "Private Automatisierung", description: "Diskrete Prozessautomatisierung für Vermögensverwalter und Private Offices.", link: "/automatisierungen" },
    { icon: Globe, title: "Luxus-Webauftritte", description: "Prestigeträchtige Websites für Grünwalder Unternehmen und Dienstleister.", link: "/webseiten-ki" },
    { icon: Gem, title: "Luxus-Marketing", description: "Exklusives Online-Marketing und SEO für Premium-Marken und Dienstleister.", link: "/leistungen/marketing" }
  ];

  const industries = [
    { icon: Building2, title: "Luxusimmobilien", description: "KI-gestützte Vermarktung und exklusive virtuelle Besichtigungen für Premiumobjekte." },
    { icon: Gem, title: "Vermögensverwaltung", description: "Automatisierte Reports und intelligente Kundenbetreuung für Family Offices." },
    { icon: Shield, title: "Privatärzte", description: "Diskrete Terminbuchung und Patientenkommunikation auf höchstem Niveau." },
    { icon: TreePine, title: "Lifestyle & Wellness", description: "Exklusive Buchungssysteme für Spas, Golfclubs und Privatclubs." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="KI-Agentur Grünwald | GPT-4 & Claude AI für VIP-Kunden | ExtruCon"
        description="Exklusive KI-Agentur Grünwald: VIP KI-Agenten mit GPT-4 & Claude AI für Luxusimmobilien, Vermögensverwaltung, Family Offices. ✓ Höchste Diskretion ✓ DSGVO"
        keywords="KI Agentur Grünwald, GPT-4 Vermögensverwaltung, Claude AI Family Office, KI Luxusimmobilien, VIP Chatbot München, Pullach KI, Isartal Automatisierung"
        canonical="https://extrucon.de/muenchen/gruenwald"
        geoRegion="DE-BY"
        geoPlacename="Grünwald"
        schema={schemaData}
      />
      <Navbar />
      
      <main>
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-background to-amber-900/10" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
              <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "München", href: "/muenchen" }, { label: "Grünwald" }]} />
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-sm mb-6 mt-8">
                <MapPin className="w-4 h-4" />
                <span>Exklusive KI für Grünwald</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">KI-Agentur</span>{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">Grünwald</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Exklusive KI-Lösungen für Bayerns wohlhabendste Gemeinde. Höchste Diskretion und Premium-Service für anspruchsvolle Kunden.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/termin">
                  <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 text-white font-semibold rounded-xl flex items-center gap-2">
                    Exklusivtermin vereinbaren <ArrowRight className="w-5 h-5" />
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
            <h2 className="text-3xl font-bold text-white text-center mb-10">Unsere Leistungen für Grünwald</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Link href={service.link}>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-yellow-500/50 transition-all h-full">
                      <service.icon className="w-10 h-10 text-yellow-400 mb-4" />
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
            <h2 className="text-3xl font-bold text-white text-center mb-4">Branchen in Grünwald</h2>
            <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">Wir verstehen die besonderen Anforderungen einer exklusiven Klientel.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((ind, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                  <ind.icon className="w-8 h-8 text-yellow-400 mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">{ind.title}</h3>
                  <p className="text-sm text-gray-400">{ind.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-br from-yellow-900/20 to-background">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ihr Partner im Isartal</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Grünwald, Pullach und das gesamte südliche Isartal – wir sind Ihr exklusiver KI-Partner.</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Grünwald", "Pullach", "Straßlach", "Baierbrunn", "Schäftlarn", "Isartal"].map((area) => (
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
