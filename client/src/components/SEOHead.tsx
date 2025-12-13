import { useEffect } from "react";
import { COMPANY_INFO, buildWebPageSchema, buildBreadcrumbSchema, type BreadcrumbItem } from "@/lib/schema";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  type?: "website" | "article" | "service";
  structuredData?: object | object[];
  breadcrumb?: BreadcrumbItem[];
  noIndex?: boolean;
  language?: "de" | "en" | "hr" | "tr";
}

const BASE_URL = "https://extrucon.de";

const LANGUAGE_CODES: Record<string, string> = {
  de: "de_DE",
  en: "en_US",
  hr: "hr_HR",
  tr: "tr_TR"
};

function getHreflangUrls(path: string) {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const basePath = cleanPath === '/' ? '' : cleanPath;
  
  return {
    de: `${BASE_URL}${basePath}`,
    en: `${BASE_URL}${basePath}${basePath ? '?' : '?'}lang=en`,
    hr: `${BASE_URL}${basePath}${basePath ? '?' : '?'}lang=hr`,
    tr: `${BASE_URL}${basePath}${basePath ? '?' : '?'}lang=tr`,
    "x-default": `${BASE_URL}${basePath}`
  };
}

export function SEOHead({ 
  title, 
  description, 
  canonical, 
  keywords, 
  type = "website", 
  structuredData,
  breadcrumb,
  noIndex = false,
  language = "de"
}: SEOHeadProps) {
  useEffect(() => {
    document.title = title;
    
    const updateMeta = (selector: string, content: string, attr = "content") => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, content);
    };

    updateMeta('meta[name="description"]', description);
    if (keywords) updateMeta('meta[name="keywords"]', keywords);
    
    const robotsContent = noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large";
    updateMeta('meta[name="robots"]', robotsContent);
    
    const canonicalUrl = canonical || window.location.href.split('?')[0];
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonicalLink) {
      canonicalLink.href = canonicalUrl;
    }
    
    updateMeta('meta[property="og:title"]', title);
    updateMeta('meta[property="og:description"]', description);
    updateMeta('meta[property="og:type"]', type);
    updateMeta('meta[property="og:url"]', canonicalUrl);
    updateMeta('meta[property="og:locale"]', LANGUAGE_CODES[language] || "de_DE");
    
    updateMeta('meta[name="twitter:title"]', title);
    updateMeta('meta[name="twitter:description"]', description);

    const hreflangUrls = getHreflangUrls(window.location.pathname);
    const existingHreflangLinks = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflangLinks.forEach(link => {
      const hreflang = link.getAttribute('hreflang') as keyof typeof hreflangUrls;
      if (hreflang && hreflangUrls[hreflang]) {
        (link as HTMLLinkElement).href = hreflangUrls[hreflang];
      }
    });

    const scriptIds: string[] = [];
    
    const addJsonLd = (id: string, data: object) => {
      let scriptTag = document.querySelector(`script[type="application/ld+json"]#${id}`);
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.setAttribute("type", "application/ld+json");
        scriptTag.setAttribute("id", id);
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(data);
      scriptIds.push(id);
    };

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://extrucon.de/#profservice",
      "name": COMPANY_INFO.name,
      "alternateName": COMPANY_INFO.alternateName,
      "description": "KI-Agentur für Automatisierung, KI-Agenten und Webentwicklung in Fürstenfeldbruck bei München",
      "url": COMPANY_INFO.url,
      "logo": COMPANY_INFO.logo,
      "image": COMPANY_INFO.image,
      "telephone": COMPANY_INFO.telephone,
      "email": COMPANY_INFO.email,
      "address": {
        "@type": "PostalAddress",
        ...COMPANY_INFO.address
      },
      "geo": {
        "@type": "GeoCoordinates",
        ...COMPANY_INFO.geo
      },
      "areaServed": [
        { "@type": "City", "name": "Fürstenfeldbruck" },
        { "@type": "City", "name": "München" },
        { "@type": "State", "name": "Bayern" },
        { "@type": "Country", "name": "Deutschland" }
      ],
      "priceRange": COMPANY_INFO.priceRange,
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        ...COMPANY_INFO.openingHours
      },
      "sameAs": COMPANY_INFO.sameAs
    };

    addJsonLd("local-business", localBusinessSchema);

    if (breadcrumb && breadcrumb.length > 0) {
      addJsonLd("breadcrumb", buildBreadcrumbSchema(breadcrumb));
    }

    const webPageSchema = buildWebPageSchema({
      name: title,
      description,
      url: canonicalUrl,
      breadcrumb,
      language
    });
    addJsonLd("webpage", webPageSchema);

    if (structuredData) {
      if (Array.isArray(structuredData)) {
        structuredData.forEach((data, index) => {
          addJsonLd(`custom-schema-${index}`, data);
        });
      } else {
        addJsonLd("custom-schema", structuredData);
      }
    }
    
    return () => {
      scriptIds.forEach(id => {
        const scriptTag = document.querySelector(`script[type="application/ld+json"]#${id}`);
        if (scriptTag && scriptTag.parentNode) {
          scriptTag.parentNode.removeChild(scriptTag);
        }
      });
    };
  }, [title, description, canonical, keywords, type, structuredData, breadcrumb, noIndex, language]);

  return null;
}
