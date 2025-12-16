import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ExploreMoreSection } from "@/components/InternalLinks";
import { motion } from "framer-motion";
import { Bot, Zap, Building2, MapPin, Phone, Mail, ArrowRight, CheckCircle, Brain, Workflow, Users, Clock, Shield, TrendingUp, Globe, Star } from "lucide-react";
import { Link } from "wouter";

export default function Muenchen() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://extrucon.de/muenchen#localbusiness",
    "name": "ExtruCon GmbH - KI-Agentur München",
    "image": "https://extrucon.de/logo.png",
    "description": "KI-Agentur für München und Umgebung. Wir entwickeln KI-Agenten, automatisieren Geschäftsprozesse und erstellen moderne Websites mit KI-Features für Münchner Unternehmen.",
    "url": "https://extrucon.de/muenchen",
    "telephone": "+4989444438879",
    "email": "info@extrucon.de",
    "priceRange": "€€-€€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hasenheide 8",
      "addressLocality": "Fürstenfeldbruck",
      "postalCode": "82256",
      "addressRegion": "Bayern",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.1351,
      "longitude": 11.5820
    },
    "areaServed": [
      { "@type": "City", "name": "München" },
      { "@type": "City", "name": "Fürstenfeldbruck" },
      { "@type": "City", "name": "Dachau" },
      { "@type": "City", "name": "Starnberg" },
      { "@type": "City", "name": "Germering" },
      { "@type": "City", "name": "Puchheim" },
      { "@type": "State", "name": "Bayern" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/extrucon",
      "https://www.instagram.com/extrucon"
    ]
  };

  const services = [
    {
      icon: Bot,
      title: "KI-Agenten für München",
      description: "Intelligente Chatbots und KI-Assistenten, die Ihren Kundenservice in München automatisieren und 24/7 verfügbar sind.",
      link: "/ki-agenten"
    },
    {
      icon: Workflow,
      title: "Workflow-Automatisierung",
      description: "n8n-basierte Automatisierungen für Münchner Unternehmen. Sparen Sie Zeit bei E-Mails, CRM und Rechnungen.",
      link: "/automatisierungen"
    },
    {
      icon: Globe,
      title: "Webseiten mit KI",
      description: "Moderne Websites mit integrierten KI-Features für Münchner Firmen. SEO-optimiert und conversion-stark.",
      link: "/webseiten-ki"
    }
  ];

  const benefits = [
    { icon: MapPin, title: "Vor-Ort-Service", description: "Persönliche Beratung in München und Umgebung" },
    { icon: Clock, title: "Schnelle Reaktion", description: "Kurze Wege – wir sind in 30 Min. bei Ihnen" },
    { icon: Users, title: "Lokale Expertise", description: "Wir kennen den Münchner Markt" },
    { icon: Shield, title: "DSGVO-konform", description: "Hosting in Deutschland, 100% datenschutzkonform" },
    { icon: TrendingUp, title: "Messbare Ergebnisse", description: "Transparente KPIs und regelmäßige Reports" },
    { icon: Star, title: "Top-Bewertungen", description: "4.9/5 Sterne von unseren Kunden" }
  ];

  const districts = [
    "München Zentrum", "Schwabing", "Maxvorstadt", "Bogenhausen", "Haidhausen",
    "Sendling", "Laim", "Pasing", "Neuhausen", "Moosach", "Milbertshofen",
    "Trudering", "Riem", "Berg am Laim", "Giesing", "Thalkirchen"
  ];

  const nearbyAreas = [
    "Fürstenfeldbruck", "Dachau", "Starnberg", "Germering", "Puchheim",
    "Gröbenzell", "Olching", "Maisach", "Eichenau", "Grafrath"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="KI-Agentur München | ExtruCon GmbH – KI-Agenten & Automatisierung"
        description="Ihre KI-Agentur für München: KI-Agenten, Workflow-Automatisierung & Webseiten mit KI. Persönliche Beratung vor Ort. ✓ DSGVO-konform ✓ 24/7 Support"
        canonical="https://extrucon.de/muenchen"
        schema={schemaData}
      />
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-cyan-900/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.15),transparent_50%)]" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex justify-center mb-8">
                <Breadcrumbs
                  items={[
                    { label: "Startseite", href: "/" },
                    { label: "München", href: "/muenchen" }
                  ]}
                />
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm mb-6">
                <MapPin className="w-4 h-4" />
                <span>Ihre KI-Agentur für München & Umgebung</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">KI-Agentur</span>{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">München</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Wir bringen Künstliche Intelligenz in Münchner Unternehmen. Von KI-Agenten über Automatisierung bis zu intelligenten Websites – alles aus einer Hand, direkt vor Ort.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/termin">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
                    data-testid="button-termin-hero"
                  >
                    Kostenlose Beratung in München
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <a href="tel:+4989444438879">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-white/5"
                    data-testid="button-call-hero"
                  >
                    <Phone className="w-5 h-5" />
                    089 444 438 879
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Unsere KI-Services für München
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Von der Beratung bis zur Umsetzung – wir begleiten Münchner Unternehmen bei der digitalen Transformation mit KI.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={service.link}>
                    <div className="group p-8 bg-gray-800/50 border border-gray-700/50 rounded-2xl hover:border-cyan-500/50 transition-all cursor-pointer h-full">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <service.icon className="w-7 h-7 text-cyan-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-400 mb-4">{service.description}</p>
                      <span className="text-cyan-400 flex items-center gap-2 group-hover:gap-3 transition-all">
                        Mehr erfahren <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Warum ExtruCon für München?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Als KI-Agentur aus der Region verstehen wir die Bedürfnisse Münchner Unternehmen.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-gray-800/30 border border-gray-700/30 rounded-xl"
                >
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Coverage Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">
                  KI-Lösungen für ganz München
                </h2>
                <p className="text-gray-400 mb-6">
                  Wir betreuen Unternehmen in allen Münchner Stadtteilen – von Schwabing bis Sendling, von Pasing bis Bogenhausen.
                </p>
                <div className="flex flex-wrap gap-2">
                  {districts.map((district, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800/50 border border-gray-700/50 rounded-full text-sm text-gray-300"
                    >
                      {district}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">
                  Auch im Münchner Umland
                </h2>
                <p className="text-gray-400 mb-6">
                  Unser Hauptsitz in Fürstenfeldbruck ermöglicht uns schnellen Vor-Ort-Service in der gesamten Region.
                </p>
                <div className="flex flex-wrap gap-2">
                  {nearbyAreas.map((area, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-300"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-cyan-900/20 to-blue-900/20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <Building2 className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Bereit für KI in Ihrem Münchner Unternehmen?
              </h2>
              <p className="text-gray-300 mb-8">
                Lassen Sie uns in einem kostenlosen Erstgespräch besprechen, wie KI-Agenten und Automatisierung Ihr Geschäft voranbringen können.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/termin">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2"
                    data-testid="button-termin-cta"
                  >
                    Kostenloses Beratungsgespräch
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400">
                <a href="tel:+4989444438879" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                  <Phone className="w-5 h-5" />
                  089 444 438 879
                </a>
                <a href="mailto:info@extrucon.de" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                  <Mail className="w-5 h-5" />
                  info@extrucon.de
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Fürstenfeldbruck (bei München)
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <ExploreMoreSection />
      </main>

      <Footer />
    </div>
  );
}
