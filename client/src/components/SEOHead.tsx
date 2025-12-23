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
  author?: string;
  robots?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
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
  geoPlacename,
  author = "ExtruCon GmbH",
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  articlePublishedTime,
  articleModifiedTime
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

    // Author meta
    let authorMeta = document.querySelector('meta[name="author"]');
    if (!authorMeta) {
      authorMeta = document.createElement('meta');
      authorMeta.setAttribute('name', 'author');
      document.head.appendChild(authorMeta);
    }
    authorMeta.setAttribute('content', author);

    // Robots meta
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', robots);

    // Revisit-after for crawlers
    let revisitMeta = document.querySelector('meta[name="revisit-after"]');
    if (!revisitMeta) {
      revisitMeta = document.createElement('meta');
      revisitMeta.setAttribute('name', 'revisit-after');
      document.head.appendChild(revisitMeta);
    }
    revisitMeta.setAttribute('content', '7 days');

    // Rating
    let ratingMeta = document.querySelector('meta[name="rating"]');
    if (!ratingMeta) {
      ratingMeta = document.createElement('meta');
      ratingMeta.setAttribute('name', 'rating');
      document.head.appendChild(ratingMeta);
    }
    ratingMeta.setAttribute('content', 'general');

    // Article published/modified time for articles
    if (articlePublishedTime) {
      let publishedMeta = document.querySelector('meta[property="article:published_time"]');
      if (!publishedMeta) {
        publishedMeta = document.createElement('meta');
        publishedMeta.setAttribute('property', 'article:published_time');
        document.head.appendChild(publishedMeta);
      }
      publishedMeta.setAttribute('content', articlePublishedTime);
    }

    if (articleModifiedTime) {
      let modifiedMeta = document.querySelector('meta[property="article:modified_time"]');
      if (!modifiedMeta) {
        modifiedMeta = document.createElement('meta');
        modifiedMeta.setAttribute('property', 'article:modified_time');
        document.head.appendChild(modifiedMeta);
      }
      modifiedMeta.setAttribute('content', articleModifiedTime);
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
  }, [title, description, canonical, keywords, schema, ogImage, ogType, geoRegion, geoPlacename, author, robots, articlePublishedTime, articleModifiedTime]);

  return null;
}
