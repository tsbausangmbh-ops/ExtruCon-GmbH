import { Link } from "wouter";
import { ReactNode } from "react";

interface KeywordLink {
  keywords: string[];
  href: string;
}

const keywordLinks: KeywordLink[] = [
  { 
    keywords: [
      "KI-Agenten", "KI Agenten", "KI-Agentur", "KI Agentur",
      "AI Agents", "AI agency", "AI Agent",
      "AI agencija", "AI agenti",
      "AI ajansı", "AI ajansınız", "yapay zeka ajansı"
    ], 
    href: "/ki-agenten" 
  },
  { 
    keywords: [
      "Automatisierung", "Automatisierungen", "Workflow-Automatisierung", "Workflow Automatisierung",
      "workflow automation", "automation", "automated workflows",
      "automatizacija", "automatizacija radnih tokova", "automatizirani radni tokovi",
      "otomasyon", "iş akışı otomasyonu", "otomatik"
    ], 
    href: "/automatisierungen" 
  },
  { 
    keywords: [
      "Webseiten mit KI", "KI-Webentwicklung", "KI Webentwicklung", "KI-Websites", "KI Websites",
      "AI web development", "AI websites", "AI-powered websites",
      "web stranice s AI", "AI web stranice", "inteligentne web stranice",
      "AI web siteleri", "AI web geliştirme", "akıllı web siteleri"
    ], 
    href: "/webseiten-ki" 
  },
  { 
    keywords: [
      "GPT-4 Chatbot", "GPT-4-Chatbot", "Chatbot", "chatbot", "Chatbots", "chatbots",
      "AI Chatbot", "KI-Chatbot", "KI Chatbot",
      "chatbot", "AI chatbot",
      "sohbet botu", "yapay zeka sohbet botu"
    ], 
    href: "/ki-bot" 
  },
  { 
    keywords: [
      "Performance Marketing", "Performance-Marketing",
      "performance marketing", "digital marketing",
      "performans pazarlama", "dijital pazarlama",
      "performans marketing"
    ], 
    href: "/leistungen/marketing" 
  },
  { 
    keywords: [
      "Social Media Marketing", "Social-Media-Marketing",
      "social media marketing", "social media management",
      "marketing na društvenim mrežama", "upravljanje društvenim mrežama",
      "sosyal medya pazarlama", "sosyal medya yönetimi"
    ], 
    href: "/leistungen/social-media" 
  },
  { 
    keywords: [
      "Content-Erstellung", "Content Erstellung", "Content-Produktion", "Inhalte erstellen",
      "content creation", "content production", "content marketing",
      "kreacija sadržaja", "proizvodnja sadržaja", "sadržajni marketing",
      "içerik üretimi", "içerik oluşturma", "içerik pazarlama"
    ], 
    href: "/leistungen/content" 
  },
  { 
    keywords: [
      "Markenentwicklung", "Markenaufbau", "Brand-Entwicklung", "Branding",
      "brand development", "brand building", "branding",
      "razvoj brenda", "izgradnja brenda", "brendiranje",
      "marka geliştirme", "marka oluşturma", "markalaşma"
    ], 
    href: "/leistungen/brand" 
  },
  { 
    keywords: [
      "Logo-Design", "Logo Design", "Corporate Design", "visuelle Identität",
      "logo design", "corporate design", "visual identity",
      "dizajn logotipa", "korporativni dizajn", "vizualni identitet",
      "logo tasarımı", "kurumsal tasarım", "görsel kimlik"
    ], 
    href: "/leistungen/brand" 
  },
  { 
    keywords: [
      "SEO-optimiert", "SEO optimiert", "Suchmaschinenoptimierung",
      "SEO optimized", "search engine optimization",
      "SEO optimizirano", "optimizacija za tražilice",
      "SEO optimize", "arama motoru optimizasyonu"
    ], 
    href: "/leistungen/seo" 
  },
  { 
    keywords: [
      "Webentwicklung", "Web-Entwicklung", "Webdesign",
      "web development", "website development", "web design",
      "web razvoj", "izrada web stranica", "web dizajn",
      "web geliştirme", "web sitesi geliştirme", "web tasarım"
    ], 
    href: "/leistungen/web" 
  },
  { 
    keywords: [
      "München", "Munich", "Münih"
    ], 
    href: "/muenchen" 
  },
  { 
    keywords: [
      "Fürstenfeldbruck"
    ], 
    href: "/kontakt" 
  },
];

interface KeywordLinkerProps {
  text: string;
  maxLinks?: number;
  excludeKeywords?: string[];
  currentPage?: string;
}

function normalizeForComparison(str: string): string {
  return str.toLowerCase()
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function KeywordLinker({ text, maxLinks = 3, excludeKeywords = [], currentPage }: KeywordLinkerProps): ReactNode {
  let linkCount = 0;
  const usedHrefs = new Set<string>();
  
  const normalizedExcludes = excludeKeywords.map(k => normalizeForComparison(k));
  
  const sortedLinks = [...keywordLinks]
    .filter(kl => !currentPage || kl.href !== currentPage)
    .map(kl => ({
      ...kl,
      keywords: kl.keywords.filter(k => !normalizedExcludes.includes(normalizeForComparison(k)))
    }))
    .filter(kl => kl.keywords.length > 0);
  
  const allKeywords: { keyword: string; href: string }[] = [];
  for (const link of sortedLinks) {
    for (const keyword of link.keywords) {
      allKeywords.push({ keyword, href: link.href });
    }
  }
  allKeywords.sort((a, b) => b.keyword.length - a.keyword.length);
  
  const parts: (string | ReactNode)[] = [text];
  
  for (const { keyword, href } of allKeywords) {
    if (linkCount >= maxLinks) break;
    if (usedHrefs.has(href)) continue;
    
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (typeof part !== 'string') continue;
      
      const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(?<![\\p{L}\\p{N}])(${escapedKeyword})(?![\\p{L}\\p{N}])`, 'iu');
      const match = part.match(regex);
      
      if (match) {
        const index = part.indexOf(match[0]);
        const before = part.slice(0, index);
        const matched = match[0];
        const after = part.slice(index + matched.length);
        
        const newParts: (string | ReactNode)[] = [];
        if (before) newParts.push(before);
        newParts.push(
          <Link 
            key={`${keyword}-${i}-${linkCount}`} 
            href={href} 
            className="text-primary hover:underline font-medium"
          >
            {matched}
          </Link>
        );
        if (after) newParts.push(after);
        
        parts.splice(i, 1, ...newParts);
        usedHrefs.add(href);
        linkCount++;
        break;
      }
    }
  }
  
  return <>{parts}</>;
}

interface LinkedParagraphProps {
  children: string;
  maxLinks?: number;
  excludeKeywords?: string[];
  currentPage?: string;
}

export function LinkedParagraph({ children, maxLinks = 2, excludeKeywords = [], currentPage }: LinkedParagraphProps) {
  return (
    <p>
      <KeywordLinker 
        text={children} 
        maxLinks={maxLinks} 
        excludeKeywords={excludeKeywords}
        currentPage={currentPage}
      />
    </p>
  );
}
