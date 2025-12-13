import { motion } from "framer-motion";
import { Star, Building2, Users, TrendingUp, Quote, ExternalLink, MapPin, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { useEffect } from "react";

export default function Referenzen() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "KI-Agentur Referenzen & Portfolio | Webentwicklung München, Fürstenfeldbruck, Bayern | ExtruCon";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Erfolgreiche KI-Projekte und Webentwicklung Referenzen aus München, Fürstenfeldbruck und Bayern. 50+ Projekte, 98% Zufriedenheit. KI-Agenten, Chatbots, Automatisierung für Unternehmen in Deutschland, Kroatien und Türkei.");
    }

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'referenzen-schema';
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "ExtruCon Referenzen und Portfolio",
      "description": "Erfolgreiche KI-Projekte, Webentwicklung und Automatisierung für Unternehmen in München, Fürstenfeldbruck, Bayern, Kroatien und Türkei",
      "numberOfItems": 6,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "CreativeWork",
            "name": "089Dach GmbH - KI-Website für Dachdecker",
            "description": "Meisterbetrieb für Dacharbeiten in München mit 24/7 Notdienst, KI-gestützter Beratung und automatisierter Anfrageverarbeitung",
            "url": "https://dacharbeiten.089dach.de/",
            "provider": { "@type": "Organization", "name": "ExtruCon GmbH" },
            "areaServed": { "@type": "City", "name": "München" }
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "CreativeWork",
            "name": "089Bayern Ltd. - Energie-Website Türkei",
            "description": "4-in-1 Energiesysteme für die Türkei: Wärmepumpen, Kühlung, Photovoltaik und Energiespeicher",
            "url": "https://www.089bayern.com/",
            "provider": { "@type": "Organization", "name": "ExtruCon GmbH" },
            "areaServed": { "@type": "Country", "name": "Türkei" }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "CreativeWork",
            "name": "AquaPro24 - Sanitär-Plattform München",
            "description": "Partnernetzwerk für Sanitär, Heizung und Wasserinstallation in München mit KI-Kostenrechner",
            "url": "https://aquapro24.de",
            "provider": { "@type": "Organization", "name": "ExtruCon GmbH" },
            "areaServed": { "@type": "City", "name": "München" }
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "CreativeWork",
            "name": "089-Sanierer - Sanierungsportal",
            "description": "Full-Service Sanierung in München mit KI-Beratung und Handwerker-Vermittlung",
            "url": "https://089-sanierer.de",
            "provider": { "@type": "Organization", "name": "ExtruCon GmbH" },
            "areaServed": { "@type": "City", "name": "München" }
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "CreativeWork",
            "name": "ExtruCon Funnel - KI-Agenten Lead-System",
            "description": "Lead-Funnel für KI-Agenten Entwicklung mit Chatbots und Geo-Targeting",
            "url": "https://funnel.extrucon.de",
            "provider": { "@type": "Organization", "name": "ExtruCon GmbH" },
            "areaServed": { "@type": "State", "name": "Bayern" }
          }
        },
        {
          "@type": "ListItem",
          "position": 6,
          "item": {
            "@type": "CreativeWork",
            "name": "ExtruCon GmbH - KI-Agentur Website",
            "description": "Hauptwebsite der KI-Agentur für digitales Marketing und Automatisierung",
            "url": "https://extrucon.de",
            "provider": { "@type": "Organization", "name": "ExtruCon GmbH" },
            "areaServed": { "@type": "Country", "name": "Deutschland" }
          }
        }
      ]
    });

    const existingSchema = document.getElementById('referenzen-schema');
    if (existingSchema) existingSchema.remove();
    document.head.appendChild(schemaScript);

    return () => {
      const script = document.getElementById('referenzen-schema');
      if (script) script.remove();
    };
  }, []);

  const liveProjects = [
    {
      company: "089Dach GmbH",
      industry: "Dachdecker & Spenglerei",
      logo: "🏠",
      description: "Meisterbetrieb für Dacharbeiten in München mit 24/7 Notdienst, KI-gestützter Beratung und automatisierter Anfrageverarbeitung.",
      features: ["KI-Chatbot", "Multi-Step Formular", "SEO-Optimiert", "Responsive Design"],
      url: "https://dacharbeiten.089dach.de/",
      location: "München, Deutschland",
      keywords: ["Dachdecker München", "KI-Chatbot Handwerk", "Webseite Dachdecker"]
    },
    {
      company: "089Bayern Ltd.",
      industry: "Energie & Solar",
      logo: "☀️",
      description: "4-in-1 Energiesysteme für die Türkei: Wärmepumpen, Kühlung, Photovoltaik und Energiespeicher - Deutsch-Türkische Qualität.",
      features: ["Mehrsprachig (TR/DE)", "Energie-Lösungen", "Premium Design", "B2B Website"],
      url: "https://www.089bayern.com/",
      location: "Antalya/Alanya, Türkei",
      keywords: ["Energie Türkei", "Solar Antalya", "Wärmepumpe Alanya"]
    },
    {
      company: "AquaPro24",
      industry: "Sanitär & Wasserinstallation",
      logo: "🔧",
      description: "Partnernetzwerk für Sanitär, Heizung und Wasserinstallation in München mit Festpreis-Garantie, 24/7 Notdienst und KI-Kostenrechner.",
      features: ["KI-Kostenrechner", "24/7 Notdienst", "Festpreis-Garantie", "2.500+ Kunden"],
      url: "https://aquapro24.de",
      location: "München, Deutschland",
      keywords: ["Sanitär München", "KI-Kostenrechner", "Handwerker-Plattform"]
    },
    {
      company: "089-Sanierer",
      industry: "Haussanierung & Renovierung",
      logo: "🏗️",
      description: "Full-Service Sanierung in München: Bad, Küche, Komplettsanierung mit Festpreisgarantie, 268+ Projekte und 20+ Jahre Erfahrung.",
      features: ["KI-Beratung", "Festpreis-Garantie", "268+ Projekte", "Handwerker-Vermittlung"],
      url: "https://089-sanierer.de",
      location: "München, Deutschland",
      keywords: ["Sanierung München", "Badsanierung", "Renovierung Bayern"]
    },
    {
      company: "ExtruCon Funnel",
      industry: "KI-Agenten & Automatisierung",
      logo: "🤖",
      description: "Lead-Funnel für KI-Agenten Entwicklung: Autonome KI-Systeme, Chatbots und intelligente Automatisierung für Unternehmen in Bayern.",
      features: ["Lead-Funnel", "KI-Chatbot", "Geo-Targeting", "Conversion-Optimiert"],
      url: "https://funnel.extrucon.de",
      location: "Fürstenfeldbruck, Deutschland",
      keywords: ["KI-Agenten Bayern", "Lead-Funnel", "Automatisierung Fürstenfeldbruck"]
    },
    {
      company: "ExtruCon GmbH",
      industry: "KI-Agentur & Marketing",
      logo: "⚡",
      description: "Hauptwebsite der KI-Agentur: Digitales Marketing, KI-Automatisierung, Webentwicklung und SEO für Unternehmen deutschlandweit.",
      features: ["KI-Chatbot", "SEO-Optimiert", "Full-Service Agentur", "50+ Projekte"],
      url: "https://extrucon.de",
      location: "Fürstenfeldbruck, Deutschland",
      keywords: ["KI-Agentur Deutschland", "Marketing Automatisierung", "Webentwicklung Bayern"]
    }
  ];

  const references = [
    {
      company: "TechStart GmbH",
      industry: "SaaS / Software",
      logo: "🚀",
      quote: "ExtruCon hat unseren Kundenservice mit KI-Agenten revolutioniert. 70% weniger Support-Tickets!",
      results: ["+70% Effizienz", "24/7 Support", "5x ROI"],
      person: "Max Müller",
      role: "CEO"
    },
    {
      company: "Immobilien Weber",
      industry: "Immobilien",
      logo: "🏠",
      quote: "Die Automatisierung der Lead-Qualifizierung spart uns täglich 4 Stunden Arbeit.",
      results: ["+200% Leads", "4h/Tag gespart", "Schnellere Abschlüsse"],
      person: "Anna Weber",
      role: "Geschäftsführerin"
    },
    {
      company: "Klinik am Park",
      industry: "Gesundheitswesen",
      logo: "🏥",
      quote: "Der KI-Chatbot beantwortet Patientenanfragen sofort - auch nachts und am Wochenende.",
      results: ["24/7 Erreichbar", "-60% Telefonanrufe", "Höhere Zufriedenheit"],
      person: "Dr. Thomas Schmidt",
      role: "Klinikleiter"
    },
    {
      company: "AutoHaus Premium",
      industry: "Automotive",
      logo: "🚗",
      quote: "Probefahrt-Buchungen laufen jetzt vollautomatisch. Kein manueller Aufwand mehr!",
      results: ["+150% Buchungen", "0 manuelle Arbeit", "Mehr Verkäufe"],
      person: "Stefan Bauer",
      role: "Verkaufsleiter"
    },
    {
      company: "Restaurant Bella Italia",
      industry: "Gastronomie",
      logo: "🍝",
      quote: "Online-Reservierungen und Bestellungen werden jetzt automatisch verarbeitet.",
      results: ["+80% Reservierungen", "Weniger No-Shows", "Bessere Auslastung"],
      person: "Marco Rossi",
      role: "Inhaber"
    },
    {
      company: "Rechtsanwalt Schneider",
      industry: "Rechtsberatung",
      logo: "⚖️",
      quote: "Die KI-gestützte Terminbuchung hat unsere Kanzlei modernisiert.",
      results: ["Automatische Termine", "Weniger Verwaltung", "Professioneller Auftritt"],
      person: "RA Schneider",
      role: "Partner"
    }
  ];

  const geoLocations = [
    "München", "Fürstenfeldbruck", "Bayern", "Starnberg", "Dachau", 
    "Augsburg", "Germering", "Puchheim", "Zagreb", "Split", 
    "Antalya", "Alanya", "Istanbul"
  ];

  return (
    <article className="min-h-screen bg-background pt-32 pb-20" itemScope itemType="https://schema.org/CollectionPage">
      <div className="container mx-auto px-4">
        
        <header className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-primary font-medium mb-4 flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>München · Fürstenfeldbruck · Bayern · Deutschland · Kroatien · Türkei</span>
            </p>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="text-referenzen-title" itemProp="name">
              KI-Agentur Referenzen & Portfolio – Webentwicklung München
            </h1>
            
            <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-6" data-testid="text-referenzen-subtitle" itemProp="description">
              Erfolgreiche <strong className="text-white">KI-Projekte</strong>, <strong className="text-white">Webentwicklung</strong> und <strong className="text-white">Automatisierung</strong> für Unternehmen in <strong className="text-white">München</strong>, <strong className="text-white">Fürstenfeldbruck</strong>, <strong className="text-white">Bayern</strong> und international. Entdecken Sie unsere Live-Projekte mit KI-Chatbots, SEO-Optimierung und Lead-Funnels.
            </p>

            <div className="flex flex-wrap justify-center gap-2 text-sm">
              {geoLocations.map((loc, i) => (
                <span key={i} className="bg-white/5 text-gray-400 px-3 py-1 rounded-full border border-white/10">
                  {loc}
                </span>
              ))}
            </div>
          </motion.div>
        </header>

        <section className="mb-20" aria-labelledby="live-projects-heading">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 id="live-projects-heading" className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              Live-Projekte: KI-Websites & Automatisierung
            </h2>
            <p className="text-gray-400 text-center mb-8 max-w-3xl mx-auto">
              Echte Kundenprojekte mit <strong className="text-white">KI-Chatbots</strong>, <strong className="text-white">automatisierten Workflows</strong> und <strong className="text-white">SEO-Optimierung</strong>. Klicken Sie auf ein Projekt, um die Live-Website zu besuchen.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveProjects.map((project, index) => (
                <motion.a
                  key={project.company}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 rounded-2xl p-6 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20"
                  data-testid={`card-live-project-${index}`}
                  itemScope
                  itemType="https://schema.org/CreativeWork"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl" aria-hidden="true">{project.logo}</div>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors" itemProp="name">
                          {project.company}
                        </h3>
                        <p className="text-sm text-gray-400" itemProp="genre">{project.industry}</p>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" aria-hidden="true" />
                  </div>

                  <p className="text-gray-300 mb-4 text-sm" itemProp="description">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature, i) => (
                      <span key={i} className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-400 border-t border-white/10 pt-4">
                    <MapPin className="w-3 h-3" />
                    <span className="font-medium text-white" itemProp="contentLocation">{project.location}</span>
                    <span>•</span>
                    <span className="text-primary group-hover:underline">Website besuchen</span>
                  </div>
                  
                  <meta itemProp="url" content={project.url} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="mb-20" aria-labelledby="testimonials-heading">
          <h2 id="testimonials-heading" className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
            Kundenstimmen: KI-Automatisierung Erfahrungen
          </h2>
          <p className="text-gray-400 text-center mb-8 max-w-3xl mx-auto">
            Was unsere Kunden über <strong className="text-white">KI-Agenten</strong>, <strong className="text-white">Chatbots</strong> und <strong className="text-white">Marketing-Automatisierung</strong> sagen. Echte Ergebnisse aus München, Bayern und deutschlandweit.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {references.map((ref, index) => (
              <motion.div
                key={ref.company}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all"
                data-testid={`card-reference-${index}`}
                itemScope
                itemType="https://schema.org/Review"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl" aria-hidden="true">{ref.logo}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white" itemProp="itemReviewed">{ref.company}</h3>
                    <p className="text-sm text-gray-400">{ref.industry}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <Quote className="w-6 h-6 text-primary/50 mb-2" aria-hidden="true" />
                  <p className="text-gray-300 italic" itemProp="reviewBody">"{ref.quote}"</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {ref.results.map((result, i) => (
                    <span key={i} className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">
                      {result}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-400 border-t border-white/10 pt-4" itemProp="author" itemScope itemType="https://schema.org/Person">
                  <span className="font-medium text-white" itemProp="name">{ref.person}</span>
                  <span>•</span>
                  <span itemProp="jobTitle">{ref.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16" aria-labelledby="cta-heading">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-white/10 rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 id="cta-heading" className="text-2xl md:text-3xl font-bold text-white mb-4">
              Werden Sie unsere nächste Erfolgsgeschichte
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre Prozesse mit <strong className="text-white">KI-Automatisierung</strong> optimieren. Kostenlose Erstberatung für Unternehmen in <strong className="text-white">München</strong>, <strong className="text-white">Fürstenfeldbruck</strong>, <strong className="text-white">Bayern</strong> und deutschlandweit.
            </p>
            <a
              href="/kontakt"
              className="inline-block bg-primary text-background font-bold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              data-testid="link-referenzen-kontakt"
            >
              Kostenloses Beratungsgespräch anfragen
            </a>
          </motion.div>
        </section>

        <section aria-labelledby="stats-heading">
          <h2 id="stats-heading" className="sr-only">ExtruCon Statistiken und Erfolge</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div itemScope itemType="https://schema.org/QuantitativeValue">
              <div className="text-4xl font-bold text-primary mb-2" itemProp="value">50+</div>
              <div className="text-gray-400" itemProp="name">Projekte in München & Bayern</div>
            </div>
            <div itemScope itemType="https://schema.org/QuantitativeValue">
              <div className="text-4xl font-bold text-primary mb-2" itemProp="value">98%</div>
              <div className="text-gray-400" itemProp="name">Kundenzufriedenheit</div>
            </div>
            <div itemScope itemType="https://schema.org/QuantitativeValue">
              <div className="text-4xl font-bold text-primary mb-2" itemProp="value">10+</div>
              <div className="text-gray-400" itemProp="name">Branchen betreut</div>
            </div>
            <div itemScope itemType="https://schema.org/QuantitativeValue">
              <div className="text-4xl font-bold text-primary mb-2" itemProp="value">5x</div>
              <div className="text-gray-400" itemProp="name">Durchschnittlicher ROI</div>
            </div>
          </div>
        </section>

        <section className="mt-16 text-center" aria-labelledby="seo-keywords-heading">
          <h2 id="seo-keywords-heading" className="sr-only">KI-Agentur Services und Standorte</h2>
          <p className="text-sm text-gray-500 max-w-4xl mx-auto leading-relaxed">
            <strong>ExtruCon GmbH</strong> – Ihre <strong>KI-Agentur</strong> für <strong>Webentwicklung</strong>, <strong>KI-Chatbots</strong>, <strong>Marketing-Automatisierung</strong> und <strong>SEO</strong>. 
            Wir betreuen Unternehmen in <strong>München</strong>, <strong>Fürstenfeldbruck</strong>, <strong>Starnberg</strong>, <strong>Dachau</strong>, <strong>Augsburg</strong>, <strong>Germering</strong>, <strong>Puchheim</strong> und ganz <strong>Bayern</strong>. 
            International aktiv in <strong>Zagreb</strong>, <strong>Split</strong>, <strong>Rijeka</strong>, <strong>Dubrovnik</strong> (<strong>Kroatien</strong>) sowie <strong>Antalya</strong>, <strong>Alanya</strong>, <strong>Istanbul</strong>, <strong>Ankara</strong>, <strong>İzmir</strong> (<strong>Türkei</strong>). 
            Spezialisiert auf <strong>KI-Agenten</strong>, <strong>autonome KI-Systeme</strong>, <strong>Lead-Funnels</strong>, <strong>Conversion-Optimierung</strong> und <strong>lokales SEO</strong>.
          </p>
        </section>

      </div>
    </article>
  );
}
