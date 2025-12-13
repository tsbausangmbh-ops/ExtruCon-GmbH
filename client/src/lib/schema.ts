export const COMPANY_INFO = {
  name: "ExtruCon GmbH",
  legalName: "ExtruCon GmbH",
  alternateName: "ExtruCon",
  url: "https://extrucon.de",
  logo: "https://extrucon.de/logo.png",
  image: "https://extrucon.de/og-image.png",
  telephone: "+4989444438879",
  email: "info@extrucon.de",
  address: {
    streetAddress: "Hasenheide 8",
    addressLocality: "Fürstenfeldbruck",
    postalCode: "82256",
    addressRegion: "Bayern",
    addressCountry: "DE"
  },
  geo: {
    latitude: 48.1789,
    longitude: 11.2546
  },
  sameAs: [
    "https://www.linkedin.com/company/extrucon",
    "https://www.instagram.com/extrucon"
  ],
  priceRange: "€€-€€€",
  openingHours: {
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00"
  }
};

export const LOCATIONS = {
  fuerstenfeldbruck: {
    name: "Fürstenfeldbruck",
    region: "Bayern",
    country: "DE",
    latitude: 48.1789,
    longitude: 11.2546
  },
  muenchen: {
    name: "München",
    region: "Bayern", 
    country: "DE",
    latitude: 48.1351,
    longitude: 11.5820
  },
  bayern: {
    name: "Bayern",
    region: "Bayern",
    country: "DE",
    latitude: 48.7904,
    longitude: 11.4979
  },
  berlin: {
    name: "Berlin",
    region: "Berlin",
    country: "DE",
    latitude: 52.5200,
    longitude: 13.4050
  },
  zagreb: {
    name: "Zagreb",
    region: "Grad Zagreb",
    country: "HR",
    latitude: 45.8150,
    longitude: 15.9819
  },
  antalya: {
    name: "Antalya",
    region: "Antalya",
    country: "TR",
    latitude: 36.8969,
    longitude: 30.7133
  },
  alanya: {
    name: "Alanya",
    region: "Antalya",
    country: "TR",
    latitude: 36.5434,
    longitude: 32.0005
  }
};

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export interface ServiceSchemaOptions {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  areaServed?: string[];
  image?: string;
}

export function buildServiceSchema(options: ServiceSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${options.url}#service`,
    "name": options.name,
    "description": options.description,
    "url": options.url,
    "provider": {
      "@type": "Organization",
      "@id": "https://extrucon.de/#organization",
      "name": COMPANY_INFO.name
    },
    "serviceType": options.serviceType || options.name,
    "areaServed": options.areaServed?.map(area => ({
      "@type": "Country",
      "name": area
    })) || [
      { "@type": "Country", "name": "Deutschland" },
      { "@type": "Country", "name": "Österreich" },
      { "@type": "Country", "name": "Schweiz" }
    ],
    "image": options.image || COMPANY_INFO.image
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export function buildFAQSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}

export interface ArticleSchemaOptions {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
  author?: string;
}

export function buildArticleSchema(options: ArticleSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": options.headline,
    "description": options.description,
    "url": options.url,
    "datePublished": options.datePublished || new Date().toISOString().split('T')[0],
    "dateModified": options.dateModified || new Date().toISOString().split('T')[0],
    "image": options.image || COMPANY_INFO.image,
    "author": {
      "@type": "Organization",
      "@id": "https://extrucon.de/#organization",
      "name": options.author || COMPANY_INFO.name
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://extrucon.de/#organization",
      "name": COMPANY_INFO.name,
      "logo": {
        "@type": "ImageObject",
        "url": COMPANY_INFO.logo
      }
    }
  };
}

export interface LocalBusinessSchemaOptions {
  locationKey: keyof typeof LOCATIONS;
  name?: string;
  description?: string;
  url?: string;
}

export function buildLocalBusinessSchema(options: LocalBusinessSchemaOptions) {
  const location = LOCATIONS[options.locationKey];
  
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `https://extrucon.de/#location-${options.locationKey}`,
    "name": options.name || `ExtruCon GmbH - ${location.name}`,
    "description": options.description || `KI-Agentur für Automatisierung, KI-Agenten und Webentwicklung in ${location.name}`,
    "url": options.url || "https://extrucon.de",
    "telephone": COMPANY_INFO.telephone,
    "email": COMPANY_INFO.email,
    "logo": COMPANY_INFO.logo,
    "image": COMPANY_INFO.image,
    "priceRange": COMPANY_INFO.priceRange,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location.name,
      "addressRegion": location.region,
      "addressCountry": location.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": location.latitude,
      "longitude": location.longitude
    },
    "hasMap": `https://www.google.com/maps?q=${location.latitude},${location.longitude}`,
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": COMPANY_INFO.openingHours.dayOfWeek,
      "opens": COMPANY_INFO.openingHours.opens,
      "closes": COMPANY_INFO.openingHours.closes
    },
    "parentOrganization": {
      "@type": "Organization",
      "@id": "https://extrucon.de/#organization"
    },
    "sameAs": COMPANY_INFO.sameAs
  };
}

export function buildWebPageSchema(options: {
  name: string;
  description: string;
  url: string;
  breadcrumb?: BreadcrumbItem[];
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${options.url}#webpage`,
    "name": options.name,
    "description": options.description,
    "url": options.url,
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://extrucon.de/#website",
      "name": "ExtruCon GmbH",
      "url": "https://extrucon.de"
    },
    "about": {
      "@type": "Organization",
      "@id": "https://extrucon.de/#organization"
    },
    "inLanguage": "de-DE"
  };

  if (options.breadcrumb && options.breadcrumb.length > 0) {
    schema.breadcrumb = buildBreadcrumbSchema(options.breadcrumb);
  }

  return schema;
}

export const SERVICES = {
  kiAgenten: {
    name: "KI-Agenten Entwicklung",
    description: "Intelligente KI-Agenten für Kundenservice, Lead-Generierung und Automatisierung. 24/7 verfügbar, mehrsprachig, lernfähig.",
    url: "https://extrucon.de/ki-agenten",
    serviceType: "KI-Agent Development"
  },
  automatisierungen: {
    name: "Workflow-Automatisierung",
    description: "Geschäftsprozesse automatisieren mit n8n, Zapier-Alternative. E-Mail, CRM, Marketing vollständig automatisiert.",
    url: "https://extrucon.de/automatisierungen",
    serviceType: "Business Process Automation"
  },
  webseitenKI: {
    name: "Webseiten mit KI",
    description: "Moderne Websites mit integrierten KI-Features, Chatbots und intelligenter Lead-Generierung.",
    url: "https://extrucon.de/webseiten-ki",
    serviceType: "AI Web Development"
  },
  marketing: {
    name: "Performance Marketing",
    description: "Google Ads, Meta Ads und SEO für maximale Sichtbarkeit und Conversions.",
    url: "https://extrucon.de/leistungen/marketing",
    serviceType: "Digital Marketing"
  },
  socialMedia: {
    name: "Social Media Marketing",
    description: "Instagram, TikTok und LinkedIn Marketing für mehr Reichweite und Engagement.",
    url: "https://extrucon.de/leistungen/social-media",
    serviceType: "Social Media Marketing"
  },
  content: {
    name: "Content Creation",
    description: "KI-gestützte Content-Erstellung für Social Media, Blog und Website.",
    url: "https://extrucon.de/leistungen/content",
    serviceType: "Content Marketing"
  },
  branding: {
    name: "Markenaufbau",
    description: "Corporate Identity, Logo Design und Markenentwicklung für starke Marken.",
    url: "https://extrucon.de/leistungen/markenaufbau",
    serviceType: "Brand Development"
  }
};

export function getAllServicesSchema() {
  return Object.values(SERVICES).map(service => buildServiceSchema(service));
}
