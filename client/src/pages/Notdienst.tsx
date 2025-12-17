import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { motion } from "framer-motion";
import { Bot, Phone, ArrowRight, Clock, Zap, Shield, AlertTriangle, CheckCircle, Headphones, Wrench, Server, Mail } from "lucide-react";
import { Link } from "wouter";

export default function Notdienst() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "KI-Notdienst München | ExtruCon GmbH",
    "description": "24/7 KI-Notdienst für München: Schnelle Hilfe bei Chatbot-Ausfällen, Automatisierungs-Problemen und Website-Störungen.",
    "url": "https://extrucon.de/notdienst",
    "mainEntity": {
      "@type": "Service",
      "name": "KI-Notdienst München",
      "serviceType": "IT-Notdienst und KI-Support",
      "provider": {
        "@type": "LocalBusiness",
        "@id": "https://extrucon.de/#localbusiness"
      },
      "areaServed": [
        { "@type": "City", "name": "München" },
        { "@type": "City", "name": "Fürstenfeldbruck" },
        { "@type": "City", "name": "Dachau" },
        { "@type": "City", "name": "Starnberg" }
      ],
      "availableChannel": {
        "@type": "ServiceChannel",
        "servicePhone": "+4989444438879",
        "availableLanguage": ["German", "English"]
      },
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://extrucon.de" },
        { "@type": "ListItem", "position": 2, "name": "Notdienst", "item": "https://extrucon.de/notdienst" }
      ]
    }
  };

  const emergencyServices = [
    { icon: Bot, title: "Chatbot-Notfall", description: "Ihr KI-Chatbot antwortet nicht mehr? Wir bringen ihn schnellstmöglich wieder online.", time: "< 2 Std." },
    { icon: Wrench, title: "Automatisierungs-Ausfall", description: "Workflows funktionieren nicht? Wir analysieren und reparieren Ihre n8n-Automatisierungen.", time: "< 4 Std." },
    { icon: Server, title: "Website-Störung", description: "Ihre Website ist down oder langsam? Notfall-Support für kritische Webprobleme.", time: "< 1 Std." },
    { icon: Mail, title: "E-Mail-Automation", description: "E-Mail-Workflows laufen nicht? Schnelle Diagnose und Behebung von Mail-Problemen.", time: "< 2 Std." }
  ];

  const benefits = [
    { icon: Clock, title: "Schnelle Reaktion", description: "Garantierte Erstreaktion innerhalb von 30 Minuten" },
    { icon: Headphones, title: "24/7 Erreichbar", description: "Notfall-Hotline rund um die Uhr verfügbar" },
    { icon: Shield, title: "Festpreise", description: "Transparente Notdienst-Pauschalen ohne versteckte Kosten" },
    { icon: Zap, title: "Remote-First", description: "Die meisten Probleme lösen wir sofort per Fernzugriff" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="KI-Notdienst München | 24/7 Schnelle Hilfe | ExtruCon"
        description="KI-Notdienst München: Chatbot ausgefallen? Automatisierung defekt? Website down? Schnelle Hilfe von KI-Experten. ✓ 24/7 Hotline ✓ < 30 Min. Reaktion ✓ Festpreis"
        canonical="https://extrucon.de/notdienst"
        schema={schemaData}
      />
      <Navbar />
      
      <main>
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-background to-orange-900/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(239,68,68,0.15),transparent_50%)]" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
              <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Notdienst" }]} />
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/40 rounded-full text-red-400 text-sm mb-6 mt-8 animate-pulse">
                <AlertTriangle className="w-4 h-4" />
                <span>24/7 Notdienst verfügbar</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">KI-</span>
                <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">Notdienst</span>
                <span className="text-white"> München</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Chatbot ausgefallen? Automatisierung defekt? Website nicht erreichbar? Unser KI-Notdienst hilft schnell und kompetent – rund um die Uhr.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+4989444438879">
                  <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold rounded-xl flex items-center gap-2 shadow-lg shadow-red-500/25">
                    <Phone className="w-5 h-5" /> Notfall-Hotline anrufen
                  </motion.button>
                </a>
                <Link href="/kontakt">
                  <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-4 border border-gray-600 text-white rounded-xl flex items-center gap-2">
                    Notfall-Ticket erstellen <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
              <p className="text-gray-400 text-sm mt-6">
                <Phone className="w-4 h-4 inline mr-2" />
                Notfall-Hotline: <a href="tel:+4989444438879" className="text-red-400 font-semibold">089 444 438 879</a>
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 bg-card/30">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-white text-center mb-4">Notfall-Leistungen</h2>
            <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">Bei diesen Problemen helfen wir sofort:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {emergencyServices.map((service, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 bg-white/5 border border-red-500/20 rounded-xl">
                  <div className="flex justify-between items-start mb-4">
                    <service.icon className="w-10 h-10 text-red-400" />
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">{service.time}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-white text-center mb-10">Warum unser Notdienst?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 bg-white/5 border border-white/10 rounded-xl text-center">
                  <benefit.icon className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-br from-red-900/20 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">So funktioniert's</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-red-400 font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Anrufen</h3>
                  <p className="text-gray-400 text-sm">Rufen Sie unsere Notfall-Hotline an und schildern Sie das Problem.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-400 font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Analyse</h3>
                  <p className="text-gray-400 text-sm">Wir analysieren das Problem per Fernzugriff und starten die Reparatur.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-400 font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Gelöst</h3>
                  <p className="text-gray-400 text-sm">Ihr System läuft wieder – mit Dokumentation und Präventions-Tipps.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Einsatzgebiet</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Unser Notdienst ist in München und der gesamten Region verfügbar:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["München", "Fürstenfeldbruck", "Dachau", "Starnberg", "Germering", "Puchheim", "Olching", "Freising", "Erding", "Landsberg"].map((area) => (
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
