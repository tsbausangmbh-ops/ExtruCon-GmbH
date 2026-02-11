import fs from "fs";
import path from "path";

const PRERENDER_TOKEN = process.env.PRERENDER_TOKEN || '';
const PRERENDER_SERVICE_URL = 'https://service.prerender.io/';
const SITE_URL = 'https://extrucon.de';
const PRERENDER_TIMEOUT = 8000;

const CRAWLER_USER_AGENTS = [
  'googlebot',
  'google-inspectiontool',
  'adsbot-google',
  'apis-google',
  'mediapartners-google',
  'googleother',
  'bingbot',
  'bingpreview',
  'msnbot',
  'slurp',
  'duckduckbot',
  'baiduspider',
  'yandexbot',
  'sogou',
  'exabot',
  'facebot',
  'facebookexternalhit',
  'ia_archiver',
  'linkedinbot',
  'twitterbot',
  'pinterestbot',
  'applebot',
  'semrushbot',
  'ahrefsbot',
  'mj12bot',
  'dotbot',
  'petalbot',
  'rogerbot',
  'screaming frog',
  'sitebulb',
  'deepcrawl',
  'oncrawl',
  'seositecheckup',
  'seznam',
  'chatgpt-user',
  'gptbot',
  'ccbot',
  'anthropic-ai',
  'claude-web',
  'perplexitybot',
  'bytespider',
  'cohere-ai',
];

const STATIC_PAGES: Record<string, string> = {
  '/': 'index.html',
  '/ki-agenten': 'ki-agenten.html',
  '/automatisierungen': 'automatisierungen.html',
  '/webseiten-ki': 'webseiten-ki.html',
  '/muenchen': 'muenchen.html',
  '/faq': 'faq.html',
  '/referenzen': 'referenzen.html',
  '/ki-bot': 'ki-bot.html',
  '/impressum': 'impressum.html',
  '/datenschutz': 'datenschutz.html',
  '/ratgeber': 'ratgeber.html',
  '/leistungen/markenaufbau': 'leistungen/markenaufbau.html',
  '/leistungen/content': 'leistungen/content.html',
  '/leistungen/social-media': 'leistungen/social-media.html',
  '/leistungen/ki-automatisierung': 'leistungen/ki-automatisierung.html',
  '/leistungen/web': 'leistungen/web.html',
  '/leistungen/marketing': 'leistungen/marketing.html',
  '/leistungen/seo': 'leistungen/seo.html',
  '/barrierefreiheit': 'barrierefreiheit.html',
};

export function isCrawler(userAgent: string): boolean {
  const ua = userAgent.toLowerCase();
  return CRAWLER_USER_AGENTS.some(crawler => ua.includes(crawler));
}

export function getStaticPages(): Record<string, string> {
  return STATIC_PAGES;
}

function validatePrerenderResponse(html: string): { valid: boolean; missingJsonLd: boolean; missingContent: boolean } {
  const hasJsonLd = html.includes('application/ld+json');
  const hasMainContent = html.includes('<main') || html.includes('<article') || html.includes('<section');
  const hasTitle = /<title>[^<]+<\/title>/.test(html);
  const hasMetaDescription = /meta\s+name=["']description["']/.test(html);

  return {
    valid: hasJsonLd && (hasMainContent || hasTitle),
    missingJsonLd: !hasJsonLd,
    missingContent: !hasMainContent && !hasTitle && !hasMetaDescription,
  };
}

function getStaticFilePath(reqPath: string): string | null {
  const staticFile = STATIC_PAGES[reqPath];
  if (!staticFile) return null;

  const staticPath = path.resolve(
    process.cwd(),
    process.env.NODE_ENV === 'production'
      ? `dist/public/static/${staticFile}`
      : `client/public/static/${staticFile}`
  );

  if (fs.existsSync(staticPath)) {
    return staticPath;
  }
  return null;
}

function extractJsonLdFromStaticFile(filePath: string): string[] {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const jsonLdBlocks: string[] = [];
    const regex = /<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
    let match;
    while ((match = regex.exec(content)) !== null) {
      jsonLdBlocks.push(match[0]);
    }
    return jsonLdBlocks;
  } catch {
    return [];
  }
}

function injectJsonLdIntoHtml(html: string, jsonLdBlocks: string[]): string {
  if (jsonLdBlocks.length === 0) return html;

  const injection = jsonLdBlocks.join('\n');

  if (html.includes('</head>')) {
    return html.replace('</head>', `${injection}\n</head>`);
  }

  if (html.includes('<body')) {
    return html.replace(/<body[^>]*>/, (match) => `${match}\n${injection}`);
  }

  return injection + '\n' + html;
}

async function fetchFromPrerender(url: string): Promise<string | null> {
  if (!PRERENDER_TOKEN) {
    console.log('[Prerender] No token configured, skipping Prerender.io');
    return null;
  }

  const prerenderUrl = `${PRERENDER_SERVICE_URL}${url}`;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), PRERENDER_TIMEOUT);

    const response = await fetch(prerenderUrl, {
      headers: {
        'X-Prerender-Token': PRERENDER_TOKEN,
        'User-Agent': 'ExtruCon-SSR-Validator/1.0',
      },
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      console.log(`[Prerender] HTTP ${response.status} for ${url}`);
      return null;
    }

    const html = await response.text();

    if (!html || html.trim().length < 100) {
      console.log(`[Prerender] Empty or too short response for ${url}`);
      return null;
    }

    return html;
  } catch (error: any) {
    if (error.name === 'AbortError') {
      console.log(`[Prerender] Timeout after ${PRERENDER_TIMEOUT}ms for ${url}`);
    } else {
      console.log(`[Prerender] Error fetching ${url}: ${error.message}`);
    }
    return null;
  }
}

export async function handleCrawlerRequest(reqPath: string): Promise<{ html: string; source: string }> {
  const fullUrl = `${SITE_URL}${reqPath}`;
  const staticFilePath = getStaticFilePath(reqPath);

  const prerenderHtml = await fetchFromPrerender(fullUrl);

  if (prerenderHtml) {
    const validation = validatePrerenderResponse(prerenderHtml);

    if (validation.valid) {
      console.log(`[Prerender] Valid response for ${reqPath} - serving from Prerender.io`);
      return { html: prerenderHtml, source: 'prerender.io' };
    }

    console.log(`[Prerender] Response for ${reqPath} missing: ${validation.missingJsonLd ? 'JSON-LD ' : ''}${validation.missingContent ? 'Content' : ''}`);

    if (validation.missingJsonLd && staticFilePath) {
      const jsonLdBlocks = extractJsonLdFromStaticFile(staticFilePath);
      if (jsonLdBlocks.length > 0) {
        const enrichedHtml = injectJsonLdIntoHtml(prerenderHtml, jsonLdBlocks);
        console.log(`[Prerender] Enriched response with ${jsonLdBlocks.length} JSON-LD blocks for ${reqPath}`);
        return { html: enrichedHtml, source: 'prerender.io+ssr-jsonld' };
      }
    }

    console.log(`[Prerender] Using Prerender.io response as-is (partial) for ${reqPath}`);
    return { html: prerenderHtml, source: 'prerender.io-partial' };
  }

  if (staticFilePath) {
    const staticHtml = fs.readFileSync(staticFilePath, 'utf-8');
    console.log(`[SSR-Fallback] Serving static HTML for ${reqPath}`);
    return { html: staticHtml, source: 'ssr-fallback' };
  }

  return { html: '', source: 'none' };
}

function extractMetaFromStaticFile(filePath: string): {
  title: string;
  description: string;
  canonical: string;
  ogTags: string[];
  twitterTags: string[];
  jsonLdBlocks: string[];
  extraMeta: string[];
} {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');

    const titleMatch = content.match(/<title>([^<]+)<\/title>/);
    const title = titleMatch ? titleMatch[1] : '';

    const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
    const description = descMatch ? descMatch[1] : '';

    const canonMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
    const canonical = canonMatch ? canonMatch[1] : '';

    const ogTags: string[] = [];
    const ogRegex = /<meta\s+property=["']og:[^"']+["'][^>]*>/gi;
    let ogMatch;
    while ((ogMatch = ogRegex.exec(content)) !== null) {
      ogTags.push(ogMatch[0]);
    }

    const twTags: string[] = [];
    const twRegex = /<meta\s+name=["']twitter:[^"']+["'][^>]*>/gi;
    let twMatch;
    while ((twMatch = twRegex.exec(content)) !== null) {
      twTags.push(twMatch[0]);
    }

    const jsonLdBlocks: string[] = [];
    const jsonLdRegex = /<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
    let jm;
    while ((jm = jsonLdRegex.exec(content)) !== null) {
      jsonLdBlocks.push(jm[0]);
    }

    const extraMeta: string[] = [];
    const keywordsMatch = content.match(/<meta\s+name=["']keywords["'][^>]*>/i);
    if (keywordsMatch) extraMeta.push(keywordsMatch[0]);

    return { title, description, canonical, ogTags, twitterTags: twTags, jsonLdBlocks, extraMeta };
  } catch {
    return { title: '', description: '', canonical: '', ogTags: [], twitterTags: [], jsonLdBlocks: [], extraMeta: [] };
  }
}

let spaHtmlCache: string | null = null;

function getSpaHtml(): string {
  if (spaHtmlCache) return spaHtmlCache;

  const spaPath = path.resolve(
    process.cwd(),
    process.env.NODE_ENV === 'production'
      ? 'dist/public/index.html'
      : 'client/index.html'
  );

  try {
    spaHtmlCache = fs.readFileSync(spaPath, 'utf-8');
    return spaHtmlCache;
  } catch {
    return '';
  }
}

export function invalidateSpaCache(): void {
  spaHtmlCache = null;
}

function replaceMetaTag(html: string, attrName: string, attrValue: string, newContent: string): string {
  const regex = new RegExp(
    `<meta\\s+(?:[^>]*\\s)?${attrName}=["']${attrValue}["'][^>]*>`,
    'i'
  );
  return html.replace(regex, newContent);
}

function replaceOgTag(html: string, property: string, newValue: string): string {
  const regex = new RegExp(
    `<meta\\s+property=["']${property}["']\\s+content=["'][^"']*["'][^>]*>`,
    'i'
  );
  const replacement = `<meta property="${property}" content="${newValue}" />`;
  return html.replace(regex, replacement);
}

function replaceTwitterTag(html: string, name: string, newValue: string): string {
  const regex = new RegExp(
    `<meta\\s+name=["']${name}["']\\s+content=["'][^"']*["'][^>]*>`,
    'i'
  );
  const replacement = `<meta name="${name}" content="${newValue}" />`;
  return html.replace(regex, replacement);
}

function replaceJsonLdBlocks(html: string, newBlocks: string[]): string {
  let result = html.replace(
    /<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi,
    ''
  );

  const injection = newBlocks.join('\n    ');
  result = result.replace('</head>', `${injection}\n  </head>`);
  return result;
}

function extractOgValue(tags: string[], property: string): string {
  for (const tag of tags) {
    const regex = new RegExp(`property=["']${property}["']\\s+content=["']([^"']+)["']`, 'i');
    const match = tag.match(regex);
    if (match) return match[1];
  }
  return '';
}

function extractTwitterValue(tags: string[], name: string): string {
  for (const tag of tags) {
    const regex = new RegExp(`name=["']${name}["']\\s+content=["']([^"']+)["']`, 'i');
    const match = tag.match(regex);
    if (match) return match[1];
  }
  return '';
}

export function handleVisitorSSR(reqPath: string): { html: string; source: string } | null {
  const staticFilePath = getStaticFilePath(reqPath);
  if (!staticFilePath) return null;

  const isDev = process.env.NODE_ENV !== 'production';
  const spaHtml = isDev ? (() => {
    const p = path.resolve(process.cwd(), 'client/index.html');
    try { return fs.readFileSync(p, 'utf-8'); } catch { return ''; }
  })() : getSpaHtml();
  if (!spaHtml) return null;

  const meta = extractMetaFromStaticFile(staticFilePath);
  if (!meta.title && !meta.description) return null;

  let enhanced = spaHtml;

  if (meta.title) {
    enhanced = enhanced.replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`);
  }

  if (meta.description) {
    enhanced = replaceMetaTag(enhanced, 'name', 'description',
      `<meta name="description" content="${meta.description}" />`);
  }

  if (meta.canonical) {
    enhanced = enhanced.replace(
      /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']\s*\/?>/i,
      `<link rel="canonical" href="${meta.canonical}" />`
    );
  }

  const ogTitle = extractOgValue(meta.ogTags, 'og:title');
  if (ogTitle) enhanced = replaceOgTag(enhanced, 'og:title', ogTitle);

  const ogDesc = extractOgValue(meta.ogTags, 'og:description');
  if (ogDesc) enhanced = replaceOgTag(enhanced, 'og:description', ogDesc);

  const ogUrl = extractOgValue(meta.ogTags, 'og:url');
  if (ogUrl) enhanced = replaceOgTag(enhanced, 'og:url', ogUrl);

  const ogImage = extractOgValue(meta.ogTags, 'og:image');
  if (ogImage) enhanced = replaceOgTag(enhanced, 'og:image', ogImage);

  const ogImageAlt = extractOgValue(meta.ogTags, 'og:image:alt');
  if (ogImageAlt) enhanced = replaceOgTag(enhanced, 'og:image:alt', ogImageAlt);

  const twTitle = extractTwitterValue(meta.twitterTags, 'twitter:title');
  if (twTitle) enhanced = replaceTwitterTag(enhanced, 'twitter:title', twTitle);

  const twDesc = extractTwitterValue(meta.twitterTags, 'twitter:description');
  if (twDesc) enhanced = replaceTwitterTag(enhanced, 'twitter:description', twDesc);

  const twImage = extractTwitterValue(meta.twitterTags, 'twitter:image');
  if (twImage) enhanced = replaceTwitterTag(enhanced, 'twitter:image', twImage);

  const twImageAlt = extractTwitterValue(meta.twitterTags, 'twitter:image:alt');
  if (twImageAlt) enhanced = replaceTwitterTag(enhanced, 'twitter:image:alt', twImageAlt);

  if (meta.jsonLdBlocks.length > 0) {
    enhanced = replaceJsonLdBlocks(enhanced, meta.jsonLdBlocks);
  }

  if (meta.extraMeta.length > 0) {
    const extraMetaStr = meta.extraMeta.join('\n    ');
    enhanced = enhanced.replace('</head>', `    ${extraMetaStr}\n  </head>`);
  }

  return { html: enhanced, source: 'ssr-visitor' };
}

export async function recachePrerenderPages(): Promise<{ success: number; failed: number; errors: string[] }> {
  if (!PRERENDER_TOKEN) {
    return { success: 0, failed: 0, errors: ['No PRERENDER_TOKEN configured'] };
  }

  const allPages = Object.keys(STATIC_PAGES);
  const languages = ['', '?lang=en', '?lang=hr', '?lang=tr'];
  const urls: string[] = [];

  for (const page of allPages) {
    for (const lang of languages) {
      urls.push(`${SITE_URL}${page}${lang}`);
    }
  }

  console.log(`[Prerender-Cache] Recaching ${urls.length} pages...`);

  let success = 0;
  let failed = 0;
  const errors: string[] = [];

  const batchSize = 5;
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const results = await Promise.allSettled(
      batch.map(async (url) => {
        try {
          const response = await fetch('https://api.prerender.io/recache', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              prerenderToken: PRERENDER_TOKEN,
              url: url,
            }),
          });

          if (response.ok) {
            return { url, success: true };
          } else {
            const text = await response.text();
            return { url, success: false, error: `HTTP ${response.status}: ${text}` };
          }
        } catch (error: any) {
          return { url, success: false, error: error.message };
        }
      })
    );

    for (const result of results) {
      if (result.status === 'fulfilled' && result.value.success) {
        success++;
      } else {
        failed++;
        const msg = result.status === 'fulfilled'
          ? `${result.value.url}: ${result.value.error}`
          : `Unknown error`;
        errors.push(msg);
      }
    }

    if (i + batchSize < urls.length) {
      await new Promise(resolve => setTimeout(resolve, 200));
    }
  }

  console.log(`[Prerender-Cache] Done: ${success} success, ${failed} failed`);
  if (errors.length > 0) {
    console.log(`[Prerender-Cache] Errors: ${errors.slice(0, 5).join('; ')}`);
  }

  return { success, failed, errors };
}
