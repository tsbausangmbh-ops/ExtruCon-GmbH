import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  schema?: object | object[];
  ogImage?: string;
  ogType?: string;
  geoRegion?: string;
  geoPlacename?: string;
}

export function SEOHead({ 
  title, 
  description, 
  canonical, 
  keywords, 
  schema,
  ogImage,
  ogType = "website",
  geoRegion,
  geoPlacename
}: SEOHeadProps) {
  useEffect(() => {
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
    
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
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

    const ogTypeEl = document.querySelector('meta[property="og:type"]');
    if (ogTypeEl) ogTypeEl.setAttribute("content", ogType);

    if (ogImage) {
      const ogImageEl = document.querySelector('meta[property="og:image"]');
      if (ogImageEl) ogImageEl.setAttribute("content", ogImage);
    }

    if (canonical) {
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute("content", canonical);
    }
    
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute("content", title);
    
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute("content", description);

    if (geoRegion) {
      let geoRegionMeta = document.querySelector('meta[name="geo.region"]');
      if (geoRegionMeta) geoRegionMeta.setAttribute("content", geoRegion);
    }

    if (geoPlacename) {
      let geoPlacenameMeta = document.querySelector('meta[name="geo.placename"]');
      if (geoPlacenameMeta) geoPlacenameMeta.setAttribute("content", geoPlacename);
    }

    // Inject Schema.org structured data
    if (schema) {
      // Remove existing page-specific schema
      const existingSchema = document.getElementById('page-schema');
      if (existingSchema) {
        existingSchema.remove();
      }

      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.id = 'page-schema';
      
      if (Array.isArray(schema)) {
        schemaScript.textContent = JSON.stringify(schema);
      } else {
        schemaScript.textContent = JSON.stringify(schema);
      }
      
      document.head.appendChild(schemaScript);
    }

    return () => {
      // Cleanup schema on unmount
      const schemaScript = document.getElementById('page-schema');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, [title, description, canonical, keywords, schema, ogImage, ogType, geoRegion, geoPlacename]);

  return null;
}
