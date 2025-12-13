import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  type?: "website" | "article" | "service";
  structuredData?: object;
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "ExtruCon GmbH",
  "alternateName": "ExtruCon KI-Agentur",
  "description": "KI-Agentur für Automatisierung, KI-Agenten und Webentwicklung in Fürstenfeldbruck bei München",
  "url": "https://extrucon.de",
  "logo": "https://extrucon.de/logo.png",
  "image": "https://extrucon.de/og-image.png",
  "telephone": "+49-89-444438879",
  "email": "info@extrucon.de",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hasenheide 8",
    "addressLocality": "Fürstenfeldbruck",
    "addressRegion": "Bayern",
    "postalCode": "82256",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.1789,
    "longitude": 11.2546
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Fürstenfeldbruck"
    },
    {
      "@type": "City", 
      "name": "München"
    },
    {
      "@type": "State",
      "name": "Bayern"
    },
    {
      "@type": "Country",
      "name": "Deutschland"
    }
  ],
  "serviceType": ["KI-Automatisierung", "KI-Agenten", "Webentwicklung", "Chatbots", "Performance Marketing"],
  "priceRange": "€€",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.linkedin.com/company/extrucon"
  ]
};

export function SEOHead({ title, description, canonical, keywords, type = "website", structuredData }: SEOHeadProps) {
  useEffect(() => {
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
    
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", keywords);
      }
    }
    
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (link) {
        link.href = canonical;
      }
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);
    
    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) ogType.setAttribute("content", type);
    
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", title);
    
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute("content", description);

    let scriptTag = document.querySelector('script[type="application/ld+json"]#local-business');
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.setAttribute("type", "application/ld+json");
      scriptTag.setAttribute("id", "local-business");
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData || localBusinessSchema);
    
    return () => {
      if (scriptTag && scriptTag.parentNode) {
        scriptTag.parentNode.removeChild(scriptTag);
      }
    };
  }, [title, description, canonical, keywords, type, structuredData]);

  return null;
}
