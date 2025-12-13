export const SEO_KEYWORDS = {
  base: [
    "ExtruCon",
    "ExtruCon GmbH",
    "KI-Agentur München",
    "KI Agentur Fürstenfeldbruck",
    "Künstliche Intelligenz Bayern"
  ],
  
  kiAgenten: [
    "KI-Agenten entwickeln",
    "Chatbot Entwicklung",
    "Kundenservice automatisieren",
    "Lead-Generierung KI",
    "intelligente Assistenten",
    "24/7 Kundenservice",
    "mehrsprachiger Chatbot"
  ],
  
  automatisierung: [
    "Workflow Automatisierung",
    "n8n Agentur",
    "Prozessautomatisierung",
    "Business Automation",
    "Zapier Alternative",
    "Make Alternative",
    "E-Mail Automatisierung",
    "CRM Automatisierung"
  ],
  
  webseiten: [
    "Website mit Chatbot",
    "KI Webseite erstellen",
    "Webentwicklung München",
    "Webdesign Agentur",
    "Lead-Generierung Website",
    "React Entwicklung",
    "WordPress Agentur"
  ],
  
  marketing: [
    "Performance Marketing München",
    "Google Ads Agentur",
    "SEO Agentur München",
    "Meta Ads",
    "Social Media Marketing",
    "Content Marketing"
  ],
  
  socialMedia: [
    "Instagram Agentur",
    "TikTok Marketing",
    "LinkedIn Marketing",
    "Social Media Betreuung",
    "Content Erstellung"
  ],
  
  branding: [
    "Markenentwicklung München",
    "Logo Design",
    "Corporate Identity",
    "Corporate Design",
    "Branding Agentur"
  ],
  
  content: [
    "Content Erstellung KI",
    "SEO Texte",
    "Video Content",
    "Social Media Grafiken",
    "KI Content"
  ],
  
  allgemein: [
    "digitale Transformation",
    "KI für Unternehmen",
    "Digitalisierung KMU",
    "KI Beratung",
    "Automatisierung Beratung"
  ]
};

type KeywordCategory = keyof typeof SEO_KEYWORDS;

export function getKeywords(...categories: KeywordCategory[]): string {
  const keywords: string[] = [...SEO_KEYWORDS.base];
  
  for (const cat of categories) {
    keywords.push(...SEO_KEYWORDS[cat]);
  }
  
  return Array.from(new Set(keywords)).join(", ");
}

export const PAGE_KEYWORDS = {
  home: getKeywords("kiAgenten", "automatisierung", "allgemein"),
  kiAgenten: getKeywords("kiAgenten"),
  automatisierungen: getKeywords("automatisierung"),
  webseitenKI: getKeywords("webseiten", "kiAgenten"),
  kontakt: getKeywords("allgemein"),
  terminbuchung: getKeywords("allgemein"),
  ueberUns: getKeywords("allgemein"),
  faq: getKeywords("kiAgenten", "automatisierung", "allgemein"),
  ratgeber: getKeywords("kiAgenten", "automatisierung", "allgemein"),
  chatbot: getKeywords("kiAgenten"),
  servicesKI: getKeywords("kiAgenten", "automatisierung"),
  servicesWeb: getKeywords("webseiten"),
  servicesSocialMedia: getKeywords("socialMedia", "marketing"),
  servicesMarketing: getKeywords("marketing"),
  servicesBrand: getKeywords("branding"),
  servicesContent: getKeywords("content", "socialMedia"),
  impressum: getKeywords("allgemein"),
  datenschutz: getKeywords("allgemein"),
  agb: getKeywords("allgemein"),
  cookies: getKeywords("allgemein")
};
