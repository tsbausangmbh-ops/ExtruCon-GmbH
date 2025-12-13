import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Funnel } from "@/components/sections/Funnel";
import { Problem } from "@/components/sections/Problem";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { References } from "@/components/sections/References";
import { HomeFAQ } from "@/components/sections/HomeFAQ";
import { SEOHead } from "@/components/SEOHead";

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://extrucon.de/#organization",
    "name": "ExtruCon GmbH",
    "alternateName": "ExtruCon KI-Agentur",
    "url": "https://extrucon.de",
    "logo": "https://extrucon.de/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/extrucon"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+49-89-444438879",
      "contactType": "customer service",
      "areaServed": ["DE", "AT", "CH"],
      "availableLanguage": ["German", "English", "Croatian", "Turkish"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hasenheide 8",
      "addressLocality": "Fürstenfeldbruck",
      "postalCode": "82256",
      "addressRegion": "Bayern",
      "addressCountry": "DE"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://extrucon.de/#localbusiness",
    "name": "ExtruCon GmbH - KI-Agentur",
    "image": "https://extrucon.de/logo.png",
    "url": "https://extrucon.de",
    "telephone": "+49-89-444438879",
    "email": "info@extrucon.de",
    "priceRange": "€€",
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
      "latitude": 48.1789,
      "longitude": 11.2546
    },
    "areaServed": [
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 48.1789,
          "longitude": 11.2546
        },
        "geoRadius": "100000"
      },
      { "@type": "State", "name": "Bayern" },
      { "@type": "Country", "name": "Deutschland" }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "17:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "12"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://extrucon.de/#website",
    "url": "https://extrucon.de",
    "name": "ExtruCon GmbH",
    "description": "KI-Agentur für intelligente Automatisierung, KI-Agenten und Webentwicklung",
    "publisher": { "@id": "https://extrucon.de/#organization" },
    "inLanguage": ["de", "en", "hr", "tr"]
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "KI-Beratung & Entwicklung",
    "provider": { "@id": "https://extrucon.de/#organization" },
    "areaServed": ["Bayern", "Deutschland", "Österreich", "Schweiz"],
    "serviceType": ["KI-Agenten", "Workflow-Automatisierung", "Webentwicklung mit KI"],
    "description": "Professionelle KI-Dienstleistungen: KI-Agenten, n8n Automatisierungen und intelligente Webseiten"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <SEOHead
        title="ExtruCon GmbH | KI-Agentur Fürstenfeldbruck bei München"
        description="Ihre KI-Agentur in Fürstenfeldbruck. KI-Agenten, Automatisierungen, Webentwicklung & Marketing mit künstlicher Intelligenz. Kostenlose Beratung!"
        keywords="KI Agentur Fürstenfeldbruck, KI Agentur München, künstliche Intelligenz Bayern, AI Agency, Automatisierung, KI Beratung, n8n Automatisierung"
        canonical="https://extrucon.de"
        geoRegion="DE-BY"
        geoPlacename="Fürstenfeldbruck"
        schema={homeSchema}
      />
      <Navbar />
      <main>
        <Hero />
        {/* Funnel Logic: 1. Problem Awareness */}
        <Problem />
        {/* Funnel Logic: 2. The System/Solution */}
        <Funnel />
        {/* Funnel Logic: 3. The Execution Tools (Services) */}
        <Services />
        {/* References Section */}
        <References />
        {/* FAQ Section */}
        <HomeFAQ />
        {/* About Section */}
        <About />
        {/* Funnel Logic: 4. Action */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
