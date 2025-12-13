import { motion } from "framer-motion";
import { Quote, ExternalLink, MapPin, CheckCircle, ArrowRight, Users, Zap, Shield, Clock, ChevronDown, Building2, Stethoscope, Car, Utensils, Scale, Home, Wrench, Sun } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Referenzen() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "KI-Agentur Referenzen & Portfolio | Deutschland, Kroatien, Türkei | Webentwicklung München, Zagreb, Istanbul | ExtruCon";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Erfolgreiche KI-Projekte und Webentwicklung Referenzen international. 50+ Projekte, 98% Kundenzufriedenheit. KI-Agenten, Chatbots, Automatisierung in Deutschland (München, Bayern, Berlin, Hamburg), Kroatien (Zagreb, Split, Rijeka, Dubrovnik), Türkei (Istanbul, Antalya, Alanya, Ankara, İzmir).");
    }

    const existingKeywords = document.querySelector('meta[name="keywords"]');
    if (existingKeywords) existingKeywords.remove();
    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'KI-Agentur Referenzen, KI-Projekte Deutschland, Webentwicklung München, Chatbot Entwicklung, KI-Agenten Bayern, AI Agencija Hrvatska, Web Razvoj Zagreb, Chatbot Split, Dubrovnik, Rijeka, AI Ajansı Türkiye, Web Geliştirme Istanbul, Chatbot Antalya, Alanya, Ankara, İzmir, KI-Agentur Berlin, KI-Agentur Hamburg, KI-Agentur Frankfurt, AI Agency Germany, AI Agency Croatia, AI Agency Turkey, Yapay Zeka Ajansı, Umjetna Inteligencija';
    document.head.appendChild(metaKeywords);

    const existingGeoRegion = document.querySelector('meta[name="geo.region"]');
    if (existingGeoRegion) existingGeoRegion.remove();
    const geoRegion = document.createElement('meta');
    geoRegion.name = 'geo.region';
    geoRegion.content = 'DE, HR, TR';
    document.head.appendChild(geoRegion);

    const existingGeoPlacename = document.querySelector('meta[name="geo.placename"]');
    if (existingGeoPlacename) existingGeoPlacename.remove();
    const geoPlacename = document.createElement('meta');
    geoPlacename.name = 'geo.placename';
    geoPlacename.content = 'Deutschland, München, Bayern, Kroatien, Zagreb, Split, Türkei, Istanbul, Antalya';
    document.head.appendChild(geoPlacename);

    const existingGeoPosition = document.querySelector('meta[name="geo.position"]');
    if (existingGeoPosition) existingGeoPosition.remove();
    const geoPosition = document.createElement('meta');
    geoPosition.name = 'geo.position';
    geoPosition.content = '48.1788;11.2553';
    document.head.appendChild(geoPosition);

    const existingIcbm = document.querySelector('meta[name="ICBM"]');
    if (existingIcbm) existingIcbm.remove();
    const icbm = document.createElement('meta');
    icbm.name = 'ICBM';
    icbm.content = '48.1788, 11.2553';
    document.head.appendChild(icbm);

    const existingRobots = document.querySelector('meta[name="robots"]');
    if (existingRobots) existingRobots.remove();
    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    document.head.appendChild(robots);

    const existingAuthor = document.querySelector('meta[name="author"]');
    if (existingAuthor) existingAuthor.remove();
    const author = document.createElement('meta');
    author.name = 'author';
    author.content = 'ExtruCon GmbH - KI-Agentur Deutschland';
    document.head.appendChild(author);

    const existingOgTitle = document.querySelector('meta[property="og:title"]');
    if (existingOgTitle) existingOgTitle.remove();
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = 'KI-Agentur Referenzen | Deutschland, Kroatien, Türkei | AI Agency | ExtruCon';
    document.head.appendChild(ogTitle);

    const existingOgDescription = document.querySelector('meta[property="og:description"]');
    if (existingOgDescription) existingOgDescription.remove();
    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = '50+ erfolgreiche KI-Projekte: Chatbots, Automatisierung, Webentwicklung. Deutschland (München, Bayern), Kroatien (Zagreb, Split), Türkei (Istanbul, Antalya).';
    document.head.appendChild(ogDescription);

    const existingOgType = document.querySelector('meta[property="og:type"]');
    if (existingOgType) existingOgType.remove();
    const ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.content = 'website';
    document.head.appendChild(ogType);

    const existingOgLocale = document.querySelector('meta[property="og:locale"]');
    if (existingOgLocale) existingOgLocale.remove();
    const ogLocale = document.createElement('meta');
    ogLocale.setAttribute('property', 'og:locale');
    ogLocale.content = 'de_DE';
    document.head.appendChild(ogLocale);

    const existingOgSiteName = document.querySelector('meta[property="og:site_name"]');
    if (existingOgSiteName) existingOgSiteName.remove();
    const ogSiteName = document.createElement('meta');
    ogSiteName.setAttribute('property', 'og:site_name');
    ogSiteName.content = 'ExtruCon GmbH - KI-Agentur Deutschland';
    document.head.appendChild(ogSiteName);

    const existingTwitterCard = document.querySelector('meta[name="twitter:card"]');
    if (existingTwitterCard) existingTwitterCard.remove();
    const twitterCard = document.createElement('meta');
    twitterCard.name = 'twitter:card';
    twitterCard.content = 'summary_large_image';
    document.head.appendChild(twitterCard);

    const existingTwitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (existingTwitterTitle) existingTwitterTitle.remove();
    const twitterTitle = document.createElement('meta');
    twitterTitle.name = 'twitter:title';
    twitterTitle.content = 'KI-Agentur Referenzen | DE, HR, TR | AI Agency ExtruCon';
    document.head.appendChild(twitterTitle);

    const existingTwitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (existingTwitterDescription) existingTwitterDescription.remove();
    const twitterDescription = document.createElement('meta');
    twitterDescription.name = 'twitter:description';
    twitterDescription.content = '50+ KI-Projekte: Deutschland, Kroatien, Türkei. Chatbots, Automatisierung, Webentwicklung. München, Zagreb, Istanbul.';
    document.head.appendChild(twitterDescription);

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'referenzen-schema';
    schemaScript.textContent = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://extrucon.de/#organization",
        "name": "ExtruCon GmbH",
        "alternateName": ["ExtruCon KI-Agentur", "ExtruCon AI Agency", "KI-Agentur München", "KI-Agentur Deutschland", "AI Agencija Hrvatska", "AI Ajansı Türkiye", "Yapay Zeka Ajansı"],
        "description": "ExtruCon GmbH ist eine internationale KI-Agentur mit Sitz in Deutschland. Wir entwickeln KI-Agenten, Chatbots und Automatisierungslösungen für Unternehmen in Deutschland, Kroatien und der Türkei.",
        "url": "https://extrucon.de",
        "logo": "https://extrucon.de/logo.png",
        "image": "https://extrucon.de/og-image.png",
        "telephone": "+49-xxx-xxxxxxx",
        "email": "info@extrucon.de",
        "foundingDate": "2023",
        "priceRange": "€€-€€€",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Fürstenfeldbruck",
          "addressLocality": "Fürstenfeldbruck",
          "addressRegion": "Bayern",
          "postalCode": "82256",
          "addressCountry": "DE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "48.1788",
          "longitude": "11.2553"
        },
        "areaServed": [
          { "@type": "Country", "name": "Deutschland" },
          { "@type": "Country", "name": "Österreich" },
          { "@type": "Country", "name": "Schweiz" },
          { "@type": "State", "name": "Bayern" },
          { "@type": "City", "name": "München" },
          { "@type": "City", "name": "Berlin" },
          { "@type": "City", "name": "Hamburg" },
          { "@type": "City", "name": "Frankfurt" },
          { "@type": "City", "name": "Köln" },
          { "@type": "City", "name": "Düsseldorf" },
          { "@type": "City", "name": "Stuttgart" },
          { "@type": "City", "name": "Fürstenfeldbruck" },
          { "@type": "Country", "name": "Kroatien" },
          { "@type": "City", "name": "Zagreb" },
          { "@type": "City", "name": "Split" },
          { "@type": "City", "name": "Rijeka" },
          { "@type": "City", "name": "Dubrovnik" },
          { "@type": "City", "name": "Osijek" },
          { "@type": "City", "name": "Zadar" },
          { "@type": "Country", "name": "Türkei" },
          { "@type": "City", "name": "Istanbul" },
          { "@type": "City", "name": "Antalya" },
          { "@type": "City", "name": "Alanya" },
          { "@type": "City", "name": "Ankara" },
          { "@type": "City", "name": "İzmir" },
          { "@type": "City", "name": "Bursa" },
          { "@type": "City", "name": "Bodrum" }
        ],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        "sameAs": [
          "https://www.linkedin.com/company/extrucon",
          "https://twitter.com/extrucon"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "50",
          "bestRating": "5",
          "worstRating": "1"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "KI-Services Deutschland",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "KI-Agenten Entwicklung",
                "description": "Autonome KI-Agenten für Kundenservice, Lead-Qualifizierung und Prozessautomatisierung"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "KI-Chatbot Entwicklung",
                "description": "Intelligente Chatbots mit GPT-Integration für 24/7 Kundenberatung"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Marketing Automatisierung",
                "description": "Lead-Funnels, E-Mail-Automatisierung und CRM-Integration"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Webentwicklung mit KI",
                "description": "Moderne Webseiten mit integrierten KI-Funktionen und SEO-Optimierung"
              }
            }
          ]
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://extrucon.de"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Referenzen",
            "item": "https://extrucon.de/referenzen"
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "ExtruCon Referenzen und Portfolio",
        "description": "Erfolgreiche KI-Projekte, Webentwicklung und Automatisierung für Unternehmen deutschlandweit",
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
      },
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://extrucon.de/referenzen#webpage",
        "url": "https://extrucon.de/referenzen",
        "name": "KI-Agentur Referenzen & Portfolio | Deutschland | ExtruCon",
        "description": "50+ erfolgreiche KI-Projekte deutschlandweit. Chatbots, Automatisierung, Webentwicklung mit 98% Kundenzufriedenheit.",
        "isPartOf": { "@id": "https://extrucon.de/#website" },
        "about": { "@id": "https://extrucon.de/#organization" },
        "inLanguage": "de-DE",
        "datePublished": "2024-01-01",
        "dateModified": "2024-12-13"
      }
    ]);

    const existingSchema = document.getElementById('referenzen-schema');
    if (existingSchema) existingSchema.remove();
    document.head.appendChild(schemaScript);

    return () => {
      const script = document.getElementById('referenzen-schema');
      if (script) script.remove();
      document.querySelector('meta[name="keywords"]')?.remove();
      document.querySelector('meta[name="geo.region"]')?.remove();
      document.querySelector('meta[name="geo.placename"]')?.remove();
      document.querySelector('meta[name="geo.position"]')?.remove();
      document.querySelector('meta[name="ICBM"]')?.remove();
      document.querySelector('meta[name="robots"]')?.remove();
      document.querySelector('meta[name="author"]')?.remove();
      document.querySelector('meta[property="og:title"]')?.remove();
      document.querySelector('meta[property="og:description"]')?.remove();
      document.querySelector('meta[property="og:type"]')?.remove();
      document.querySelector('meta[property="og:locale"]')?.remove();
      document.querySelector('meta[property="og:site_name"]')?.remove();
      document.querySelector('meta[name="twitter:card"]')?.remove();
      document.querySelector('meta[name="twitter:title"]')?.remove();
      document.querySelector('meta[name="twitter:description"]')?.remove();
    };
  }, []);

  const liveProjects = [
    {
      company: "089Dach GmbH",
      industry: "Dachdecker & Spenglerei",
      logo: "🏠",
      description: "Meisterbetrieb für Dacharbeiten in München mit 24/7 Notdienst, KI-gestützter Beratung und automatisierter Anfrageverarbeitung.",
      detailedDescription: "Für 089Dach entwickelten wir eine vollständige digitale Präsenz mit intelligenter Kundeninteraktion. Der KI-Chatbot qualifiziert Anfragen automatisch, unterscheidet zwischen Notfällen und regulären Projekten, und leitet dringende Fälle sofort an den Bereitschaftsdienst weiter. Das Multi-Step-Formular erfasst alle relevanten Projektdetails für präzise Angebotserstellung.",
      features: ["KI-Chatbot", "Multi-Step Formular", "SEO-Optimiert", "Responsive Design"],
      results: "+45% mehr qualifizierte Anfragen",
      url: "https://dacharbeiten.089dach.de/",
      location: "München, Deutschland",
      keywords: ["Dachdecker München", "KI-Chatbot Handwerk", "Webseite Dachdecker"]
    },
    {
      company: "089Bayern Ltd.",
      industry: "Energie & Solar",
      logo: "☀️",
      description: "4-in-1 Energiesysteme für die Türkei: Wärmepumpen, Kühlung, Photovoltaik und Energiespeicher - Deutsch-Türkische Qualität.",
      detailedDescription: "Dieses internationale B2B-Projekt verbindet deutsche Ingenieurskunst mit dem türkischen Markt. Die mehrsprachige Website (Türkisch/Deutsch) präsentiert komplexe Energielösungen verständlich. Interaktive Produktkonfiguratoren helfen Kunden, die optimale Kombination aus Wärmepumpe, Klimaanlage, PV-Anlage und Speicher zu finden.",
      features: ["Mehrsprachig (TR/DE)", "Energie-Lösungen", "Premium Design", "B2B Website"],
      results: "Markteinführung in der Türkei",
      url: "https://www.089bayern.com/",
      location: "Antalya/Alanya, Türkei",
      keywords: ["Energie Türkei", "Solar Antalya", "Wärmepumpe Alanya"]
    },
    {
      company: "AquaPro24",
      industry: "Sanitär & Wasserinstallation",
      logo: "🔧",
      description: "Partnernetzwerk für Sanitär, Heizung und Wasserinstallation in München mit Festpreis-Garantie, 24/7 Notdienst und KI-Kostenrechner.",
      detailedDescription: "AquaPro24 revolutioniert die Handwerkersuche in München. Der KI-gestützte Kostenrechner gibt Kunden sofort transparente Preisschätzungen für Sanitärarbeiten. Das Vermittlungssystem matcht automatisch Kundenanfragen mit verfügbaren Partnerhandwerkern basierend auf Spezialisierung, Standort und Kapazität.",
      features: ["KI-Kostenrechner", "24/7 Notdienst", "Festpreis-Garantie", "2.500+ Kunden"],
      results: "2.500+ zufriedene Kunden",
      url: "https://aquapro24.de",
      location: "München, Deutschland",
      keywords: ["Sanitär München", "KI-Kostenrechner", "Handwerker-Plattform"]
    },
    {
      company: "089-Sanierer",
      industry: "Haussanierung & Renovierung",
      logo: "🏗️",
      description: "Full-Service Sanierung in München: Bad, Küche, Komplettsanierung mit Festpreisgarantie, 268+ Projekte und 20+ Jahre Erfahrung.",
      detailedDescription: "Das Sanierungsportal 089-Sanierer nutzt KI-Beratung, um Kunden durch komplexe Sanierungsprojekte zu führen. Von der ersten Anfrage bis zur Handwerker-Vermittlung wird alles digital abgebildet. Kunden erhalten realistische Zeitpläne, Kostenschätzungen und können den Projektfortschritt online verfolgen.",
      features: ["KI-Beratung", "Festpreis-Garantie", "268+ Projekte", "Handwerker-Vermittlung"],
      results: "268+ erfolgreiche Projekte",
      url: "https://089-sanierer.de",
      location: "München, Deutschland",
      keywords: ["Sanierung München", "Badsanierung", "Renovierung Bayern"]
    },
    {
      company: "ExtruCon Funnel",
      industry: "KI-Agenten & Automatisierung",
      logo: "🤖",
      description: "Lead-Funnel für KI-Agenten Entwicklung: Autonome KI-Systeme, Chatbots und intelligente Automatisierung für Unternehmen in Bayern.",
      detailedDescription: "Unser eigener Lead-Funnel demonstriert, was wir für Kunden entwickeln können. Der Funnel nutzt psychologisch optimierte Conversion-Elemente, dynamisches Geo-Targeting für personalisierte Ansprache und einen integrierten KI-Chatbot für sofortige Beratung. Das System qualifiziert Leads automatisch nach Budget und Projektumfang.",
      features: ["Lead-Funnel", "KI-Chatbot", "Geo-Targeting", "Conversion-Optimiert"],
      results: "25% Conversion-Rate",
      url: "https://funnel.extrucon.de",
      location: "Fürstenfeldbruck, Deutschland",
      keywords: ["KI-Agenten Bayern", "Lead-Funnel", "Automatisierung Fürstenfeldbruck"]
    },
    {
      company: "ExtruCon GmbH",
      industry: "KI-Agentur & Marketing",
      logo: "⚡",
      description: "Hauptwebsite der KI-Agentur: Digitales Marketing, KI-Automatisierung, Webentwicklung und SEO für Unternehmen deutschlandweit.",
      detailedDescription: "Unsere Agentur-Website ist das Aushängeschild für alles, was wir können. Mehrsprachige Unterstützung (DE/EN/HR/TR), integrierter KI-Chatbot für Erstberatung, umfassende Service-Seiten und optimierte User Experience. Die Website rankt für zahlreiche lokale und branchenspezifische Keywords in Bayern.",
      features: ["KI-Chatbot", "SEO-Optimiert", "Full-Service Agentur", "50+ Projekte"],
      results: "Top-Rankings für KI-Agentur Bayern",
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

  const benefits = [
    {
      icon: Zap,
      title: "Schnelle Umsetzung",
      description: "Von der Idee zur fertigen KI-Lösung in 2-4 Wochen. Wir arbeiten agil und liefern schnell messbare Ergebnisse für Ihr Unternehmen."
    },
    {
      icon: Shield,
      title: "DSGVO-konform",
      description: "Alle unsere KI-Systeme sind vollständig DSGVO-konform. Ihre Kundendaten werden sicher in deutschen Rechenzentren verarbeitet."
    },
    {
      icon: Users,
      title: "Persönliche Betreuung",
      description: "Ein fester Ansprechpartner begleitet Sie durch das gesamte Projekt. Kein anonymes Ticket-System, sondern echte Partnerschaft."
    },
    {
      icon: Clock,
      title: "24/7 Verfügbarkeit",
      description: "Ihre KI-Agenten arbeiten rund um die Uhr - auch nachts, am Wochenende und an Feiertagen. Nie wieder verpasste Kundenanfragen."
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Kostenloses Erstgespräch",
      description: "Wir analysieren gemeinsam Ihre aktuellen Prozesse und identifizieren Automatisierungspotenziale. Wo verbrennt Ihr Team Zeit mit wiederkehrenden Aufgaben?",
      duration: "30 Minuten"
    },
    {
      step: 2,
      title: "Strategie & Konzept",
      description: "Basierend auf Ihren Zielen entwickeln wir ein maßgeschneidertes Konzept. Sie erhalten einen klaren Projektplan mit Meilensteinen, Zeitrahmen und transparenter Kostenübersicht.",
      duration: "1-2 Tage"
    },
    {
      step: 3,
      title: "Entwicklung & Training",
      description: "Unser Team entwickelt Ihre individuelle KI-Lösung. Chatbots werden mit Ihrem Firmenwissen trainiert, Automatisierungen präzise auf Ihre Workflows abgestimmt.",
      duration: "2-4 Wochen"
    },
    {
      step: 4,
      title: "Launch & Optimierung",
      description: "Nach gründlichen Tests geht Ihr System live. Wir überwachen die Performance, sammeln Feedback und optimieren kontinuierlich für beste Ergebnisse.",
      duration: "Laufend"
    }
  ];

  const industries = [
    { icon: Wrench, name: "Handwerk & Bau", description: "Dachdecker, Sanitär, Elektrik, Maler" },
    { icon: Home, name: "Immobilien", description: "Makler, Hausverwaltungen, Bauträger" },
    { icon: Stethoscope, name: "Gesundheit", description: "Ärzte, Kliniken, Therapeuten, Pflegedienste" },
    { icon: Car, name: "Automotive", description: "Autohäuser, Werkstätten, Fahrzeughandel" },
    { icon: Utensils, name: "Gastronomie", description: "Restaurants, Hotels, Catering-Services" },
    { icon: Scale, name: "Rechtsberatung", description: "Anwaltskanzleien, Notare, Steuerberater" },
    { icon: Building2, name: "B2B Services", description: "Agenturen, Beratungen, IT-Dienstleister" },
    { icon: Sun, name: "Energie", description: "Solar, Wärmepumpen, Energieberatung" }
  ];

  const faqs = [
    {
      question: "Wie lange dauert die Entwicklung eines KI-Chatbots?",
      answer: "Die Entwicklung eines maßgeschneiderten KI-Chatbots dauert typischerweise 2-4 Wochen. Ein einfacher FAQ-Bot kann bereits in einer Woche einsatzbereit sein. Komplexere Systeme mit Anbindung an Ihre bestehenden Systeme (CRM, ERP, Kalender) benötigen 4-6 Wochen. Wir arbeiten agil und können erste Ergebnisse oft schon nach wenigen Tagen zeigen."
    },
    {
      question: "Was kostet eine KI-Automatisierung für mein Unternehmen?",
      answer: "Die Kosten variieren je nach Umfang und Komplexität. Ein einfacher Chatbot startet bei ca. 2.000€, umfassende Automatisierungslösungen mit CRM-Integration liegen zwischen 5.000€ und 15.000€. Wichtig: Die meisten unserer Kunden amortisieren die Investition innerhalb von 3-6 Monaten durch eingesparte Arbeitszeit und mehr Leads. Im kostenlosen Erstgespräch erhalten Sie eine individuelle Kalkulation."
    },
    {
      question: "Funktionieren KI-Chatbots auch für kleine Unternehmen?",
      answer: "Absolut! Gerade kleine Unternehmen profitieren enorm von KI-Automatisierung. Ein Chatbot ermöglicht 24/7-Erreichbarkeit ohne zusätzliches Personal. Handwerksbetriebe, Arztpraxen oder Restaurants können Anfragen automatisch erfassen und qualifizieren - auch nach Feierabend. Wir haben spezielle Pakete für KMU entwickelt, die sofort Mehrwert liefern."
    },
    {
      question: "Kann ich bestehende Kundendaten in den KI-Chatbot integrieren?",
      answer: "Ja, unsere KI-Systeme lassen sich nahtlos mit Ihren bestehenden Tools verbinden. Ob CRM (Salesforce, HubSpot, Pipedrive), Kalendersysteme (Google Calendar, Calendly, Microsoft), oder branchenspezifische Software - wir schaffen die Schnittstellen. Der Chatbot kann so auf Kundendaten zugreifen, Termine buchen und Leads direkt in Ihr System übertragen."
    },
    {
      question: "Wie wird der Chatbot auf mein Unternehmen trainiert?",
      answer: "Wir trainieren den Chatbot mit Ihren individuellen Inhalten: FAQ-Listen, Produktinformationen, Preislisten, häufige Kundenanfragen. Durch Machine Learning verbessert sich das System kontinuierlich. Sie können jederzeit neue Informationen hinzufügen oder Antworten anpassen. Wir stellen sicher, dass der Bot Ihren Unternehmens-Ton trifft und korrekte Informationen liefert."
    },
    {
      question: "Was passiert, wenn der Chatbot eine Frage nicht beantworten kann?",
      answer: "Intelligente Eskalation ist Teil jeder unserer Lösungen. Wenn der Bot an seine Grenzen stößt, leitet er die Anfrage nahtlos an einen menschlichen Mitarbeiter weiter - per E-Mail, SMS oder direkt in Ihr Ticketsystem. Der Kunde wird informiert und erhält eine Rückrufzusage. So fallen keine Anfragen durchs Raster und die Kundenzufriedenheit bleibt hoch."
    },
    {
      question: "Ist die KI-Lösung DSGVO-konform?",
      answer: "Datenschutz hat bei uns höchste Priorität. Alle unsere Systeme sind vollständig DSGVO-konform. Kundendaten werden auf deutschen oder EU-Servern verarbeitet. Wir implementieren Cookie-Consent, Datenschutzerklärungen und bieten Nutzern volle Transparenz über die Datenverarbeitung. Auf Wunsch unterstützen wir auch bei der Dokumentation für Ihre Datenschutzerklärung."
    },
    {
      question: "Bieten Sie auch Support nach dem Launch?",
      answer: "Selbstverständlich! Jedes Projekt beinhaltet eine Einführungsphase mit Schulung für Ihr Team. Danach bieten wir verschiedene Support-Pakete an: Von reaktivem E-Mail-Support bis hin zu proaktivem Monitoring mit monatlichen Optimierungs-Reports. Viele Kunden entscheiden sich für unsere Wartungspakete, die regelmäßige Updates und kontinuierliche Verbesserungen beinhalten."
    }
  ];

  const geoLocations = [
    "München", "Fürstenfeldbruck", "Bayern", "Starnberg", "Dachau", 
    "Augsburg", "Germering", "Puchheim", "Zagreb", "Split", 
    "Antalya", "Alanya", "Istanbul"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <article className="pt-32 pb-20" itemScope itemType="https://schema.org/CollectionPage">
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

            <div className="flex flex-wrap justify-center gap-2 text-sm mb-8">
              {geoLocations.map((loc, i) => (
                <span key={i} className="bg-white/5 text-gray-400 px-3 py-1 rounded-full border border-white/10">
                  {loc}
                </span>
              ))}
            </div>

            <div className="max-w-3xl mx-auto text-left bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <p className="text-gray-300 leading-relaxed mb-4">
                Seit unserer Gründung haben wir über <strong className="text-white">50 Unternehmen</strong> dabei geholfen, ihre Geschäftsprozesse mit <strong className="text-white">künstlicher Intelligenz</strong> zu transformieren. Von lokalen Handwerksbetrieben in <strong className="text-white">München</strong> und <strong className="text-white">Fürstenfeldbruck</strong> bis hin zu internationalen Projekten in der <strong className="text-white">Türkei</strong> und <strong className="text-white">Kroatien</strong> - unsere maßgeschneiderten <strong className="text-white">KI-Agenten</strong>, <strong className="text-white">Chatbots</strong> und <strong className="text-white">Automatisierungslösungen</strong> liefern messbare Ergebnisse.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Auf dieser Seite finden Sie eine Auswahl unserer <strong className="text-white">Live-Projekte</strong>, die Sie direkt besuchen können, sowie echte <strong className="text-white">Kundenstimmen</strong> von Geschäftsführern und Unternehmern, die bereits von unseren Lösungen profitieren. Jedes Projekt ist ein Beweis für unsere Expertise in <strong className="text-white">KI-Entwicklung</strong>, <strong className="text-white">Webdesign</strong> und <strong className="text-white">digitaler Transformation</strong>.
              </p>
            </div>
          </motion.div>
        </header>

        <section className="mb-20" aria-labelledby="benefits-heading">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            <h2 id="benefits-heading" className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              Warum Unternehmen ExtruCon vertrauen
            </h2>
            <p className="text-gray-400 text-center mb-10 max-w-3xl mx-auto">
              <strong className="text-white">98% Kundenzufriedenheit</strong> und <strong className="text-white">5x durchschnittlicher ROI</strong> - das sind keine leeren Versprechen, sondern messbare Ergebnisse unserer Arbeit.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-primary/50 transition-all"
                >
                  <div className="w-14 h-14 mx-auto mb-4 bg-primary/20 rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

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

                  <p className="text-gray-300 mb-3 text-sm" itemProp="description">{project.description}</p>
                  
                  <p className="text-gray-400 mb-4 text-xs leading-relaxed">{project.detailedDescription}</p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.features.map((feature, i) => (
                      <span key={i} className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm mb-4">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-medium">{project.results}</span>
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

        <section className="mb-20" aria-labelledby="process-heading">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <h2 id="process-heading" className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              Unser Prozess: Von der Idee zur fertigen KI-Lösung
            </h2>
            <p className="text-gray-400 text-center mb-10 max-w-3xl mx-auto">
              Ein strukturierter, transparenter Ablauf - damit Sie immer wissen, was als Nächstes kommt. So entwickeln wir <strong className="text-white">maßgeschneiderte KI-Automatisierungen</strong> für Ihr Unternehmen.
            </p>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all"
                  >
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary text-background font-bold rounded-xl flex items-center justify-center text-lg">
                      {step.step}
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-white">{step.title}</h3>
                        <span className="text-xs text-primary bg-primary/20 px-2 py-1 rounded">{step.duration}</span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mb-20" aria-labelledby="industries-heading">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 id="industries-heading" className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              Branchen, die wir bedienen
            </h2>
            <p className="text-gray-400 text-center mb-10 max-w-3xl mx-auto">
              Unsere <strong className="text-white">KI-Lösungen</strong> sind branchenübergreifend einsetzbar. Von Handwerksbetrieben bis zu internationalen B2B-Unternehmen - wir verstehen Ihre spezifischen Anforderungen.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-primary/50 hover:bg-white/10 transition-all cursor-default"
                >
                  <industry.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="text-white font-medium mb-1 text-sm">{industry.name}</h3>
                  <p className="text-gray-500 text-xs">{industry.description}</p>
                </motion.div>
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

        <section className="mb-20" aria-labelledby="faq-heading">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              Häufig gestellte Fragen zu unseren KI-Lösungen
            </h2>
            <p className="text-gray-400 text-center mb-10 max-w-3xl mx-auto">
              Antworten auf die wichtigsten Fragen zu <strong className="text-white">KI-Chatbots</strong>, <strong className="text-white">Automatisierung</strong> und unserer Arbeitsweise. Haben Sie weitere Fragen? <a href="/kontakt" className="text-primary hover:underline">Kontaktieren Sie uns</a>.
            </p>
            
            <div className="max-w-3xl mx-auto space-y-4" itemScope itemType="https://schema.org/FAQPage">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
                    data-testid={`button-faq-${index}`}
                  >
                    <h3 className="text-white font-medium pr-4" itemProp="name">{faq.question}</h3>
                    <ChevronDown className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === index && (
                    <div 
                      className="px-5 pb-5"
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <p className="text-gray-400 leading-relaxed" itemProp="text">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="mb-16" aria-labelledby="cta-heading">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-white/10 rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 id="cta-heading" className="text-2xl md:text-3xl font-bold text-white mb-4">
              Werden Sie unsere nächste Erfolgsgeschichte
            </h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihre Prozesse mit <strong className="text-white">KI-Automatisierung</strong> optimieren. Kostenlose Erstberatung für Unternehmen in <strong className="text-white">München</strong>, <strong className="text-white">Fürstenfeldbruck</strong>, <strong className="text-white">Bayern</strong> und deutschlandweit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-primary text-background font-bold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                data-testid="link-referenzen-kontakt"
              >
                Kostenloses Beratungsgespräch anfragen
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/ki-agenten"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-medium px-8 py-3 rounded-lg hover:bg-white/20 transition-colors border border-white/20"
                data-testid="link-referenzen-services"
              >
                Unsere Services entdecken
              </a>
            </div>
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

        <section className="mt-16" aria-labelledby="geo-content-heading">
          <h2 id="geo-content-heading" className="text-xl font-bold text-white mb-6 text-center">
            KI-Agentur für Deutschland, Kroatien & Türkei
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-xl">🇩🇪</span> Deutschland & Bayern
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                Als <strong className="text-white">KI-Agentur in Fürstenfeldbruck</strong> sind wir Ihr lokaler Partner für digitale Transformation im Großraum München. Wir betreuen Unternehmen in <strong className="text-white">München</strong>, <strong className="text-white">Starnberg</strong>, <strong className="text-white">Dachau</strong>, <strong className="text-white">Augsburg</strong>, <strong className="text-white">Germering</strong> und <strong className="text-white">Puchheim</strong>.
              </p>
              <p className="text-gray-500 text-xs">
                Keywords: KI-Agentur München, Chatbot Entwicklung Bayern, Webentwicklung Fürstenfeldbruck, Marketing Automatisierung Augsburg
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-xl">🇭🇷</span> Kroatien
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                Mit unseren Wurzeln in Kroatien bedienen wir den wachsenden Markt für <strong className="text-white">KI-Lösungen in Zagreb</strong>, <strong className="text-white">Split</strong>, <strong className="text-white">Rijeka</strong> und <strong className="text-white">Dubrovnik</strong>. Perfekt für Tourismus, Gastgewerbe und internationale Unternehmen mit Balkan-Fokus.
              </p>
              <p className="text-gray-500 text-xs">
                Keywords: AI Agencija Zagreb, Web Razvoj Hrvatska, Chatbot Split, Automatizacija Dubrovnik
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-5">
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-xl">🇹🇷</span> Türkei
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                Für deutsch-türkische Geschäftsbeziehungen bieten wir mehrsprachige <strong className="text-white">KI-Lösungen</strong> in <strong className="text-white">Antalya</strong>, <strong className="text-white">Alanya</strong>, <strong className="text-white">Istanbul</strong>, <strong className="text-white">Ankara</strong> und <strong className="text-white">İzmir</strong>. Ideal für Immobilien, Energie und Tourismus.
              </p>
              <p className="text-gray-500 text-xs">
                Keywords: AI Ajansı Türkiye, Web Geliştirme Antalya, Chatbot Istanbul, Otomasyon Alanya
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 text-center" aria-labelledby="seo-keywords-heading">
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
      </main>
      <Footer />
    </div>
  );
}
