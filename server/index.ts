import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";
import prerender from "prerender-node";
import compression from "compression";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
const httpServer = createServer(app);

// Server timeout settings for better connection handling
// Optimized for Replit's proxy (avoids 504 errors)
httpServer.keepAliveTimeout = 65000; // Slightly higher than 60s default
httpServer.headersTimeout = 66000; // Must be higher than keepAliveTimeout
httpServer.timeout = 120000; // Overall request timeout

// Enable gzip compression for faster responses
app.use(compression({
  level: 6,
  threshold: 1024,
  filter: (req, res) => {
    if (req.headers['x-no-compression']) return false;
    return compression.filter(req, res);
  }
}));

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

// Prerender.io middleware for SEO (bot detection)
// Extended crawler list - specific bot names only (no generic terms like 'bot')
if (process.env.PRERENDER_TOKEN) {
  app.use(prerender
    .set('prerenderToken', process.env.PRERENDER_TOKEN)
    .set('crawlerUserAgents', [
      // Google Bots (2026 comprehensive list)
      'Googlebot',
      'Googlebot-Image',
      'Googlebot-News',
      'Googlebot-Video',
      'Storebot-Google',
      'Google-InspectionTool',
      'AdsBot-Google',
      'AdsBot-Google-Mobile',
      'Mediapartners-Google',
      'APIs-Google',
      'FeedFetcher-Google',
      // Bing/Microsoft Bots
      'Bingbot',
      'BingPreview',
      'YandexBot',
      'Baiduspider',
      'DuckDuckBot',
      'Slurp',
      'msnbot',
      'SeznamBot',
      'Yeti',
      'NaverBot',
      'Applebot',
      // Social media crawlers (exact names)
      'facebookexternalhit',
      'Facebookbot',
      'Twitterbot',
      'LinkedInBot',
      'Pinterestbot',
      'TelegramBot',
      'Slackbot',
      'Discordbot',
      'WhatsApp',
      // AI assistants and LLM crawlers (exact names)
      'GPTBot',
      'ChatGPT-User',
      'OAI-SearchBot',
      'ClaudeBot',
      'Claude-Web',
      'anthropic-ai',
      'PerplexityBot',
      'DuckAssistBot',
      'YouBot',
      'cohere-ai',
      'Google-Extended',
      'GoogleOther',
      'Meta-ExternalAgent',
      'Bytespider',
      'Amazonbot',
      'CCBot',
      'Diffbot',
      // SEO tools (exact names)
      'AhrefsBot',
      'SemrushBot',
      'MJ12bot',
      'DotBot',
      'rogerbot',
      'Screaming Frog SEO Spider',
      // Archive crawlers
      'ia_archiver',
      'archive.org_bot',
      // Other specific crawlers
      'Embedly',
      'Quora-Bot',
      'outbrain',
      'vkShare',
      'W3C_Validator',
      'redditbot'
    ])
  );
}

// Redirect www to non-www
app.use((req, res, next) => {
  const host = req.headers.host || '';
  if (host.startsWith('www.')) {
    const newHost = host.slice(4);
    return res.redirect(301, `https://${newHost}${req.url}`);
  }
  next();
});

// Geo-IP based language detection middleware
// Maps country codes to supported languages
const countryToLanguage: Record<string, string> = {
  'TR': 'tr', // Turkey -> Turkish
  'HR': 'hr', // Croatia -> Croatian
  'BA': 'hr', // Bosnia -> Croatian
  'RS': 'hr', // Serbia -> Croatian (similar)
  'ME': 'hr', // Montenegro -> Croatian
  'SI': 'hr', // Slovenia -> Croatian
  'AT': 'de', // Austria -> German
  'CH': 'de', // Switzerland -> German
  'DE': 'de', // Germany -> German
  'US': 'en', // USA -> English
  'GB': 'en', // UK -> English
  'AU': 'en', // Australia -> English
  'CA': 'en', // Canada -> English
};

app.use((req, res, next) => {
  const cookieOptions = {
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    httpOnly: false, // Frontend needs to read it
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const
  };

  // If lang query param is provided, persist it in cookie
  const langParam = req.query.lang as string | undefined;
  if (langParam && ['de', 'en', 'hr', 'tr'].includes(langParam)) {
    res.cookie('extrucon_geo_lang', langParam, cookieOptions);
    log(`Lang param: ${langParam} -> cookie set`, 'geo');
    return next();
  }

  // Skip if language cookie already exists
  const existingLang = req.cookies?.extrucon_geo_lang;
  if (existingLang && ['de', 'en', 'hr', 'tr'].includes(existingLang)) {
    return next();
  }

  // Try to detect country from various headers
  // Cloudflare: CF-IPCountry, Replit/Vercel may use X-Vercel-IP-Country
  const country = (
    req.headers['cf-ipcountry'] ||
    req.headers['x-vercel-ip-country'] ||
    req.headers['x-country-code'] ||
    req.headers['x-real-country']
  ) as string | undefined;

  if (country) {
    const detectedLang = countryToLanguage[country.toUpperCase()];
    if (detectedLang) {
      // Set a cookie that the frontend can read
      res.cookie('extrucon_geo_lang', detectedLang, cookieOptions);
      log(`Geo-IP: ${country} -> ${detectedLang}`, 'geo');
    }
  }

  next();
});

// 301 Redirects for SEO (old URLs to new URLs)
const redirects: Record<string, string> = {
  '/home': '/',
  '/index': '/',
  '/index.html': '/',
  '/startseite': '/',
  '/leistungen': '/ki-agenten',
  '/services': '/ki-agenten',
  '/ai-agents': '/ki-agenten',
  '/automation': '/automatisierungen',
  '/automatisierung': '/automatisierungen',
  '/websites': '/webseiten-ki',
  '/webseiten': '/webseiten-ki',
  '/web': '/leistungen/web',
  '/about': '/ueber-uns',
  '/about-us': '/ueber-uns',
  '/uber-uns': '/ueber-uns',
  '/contact': '/kontakt',
  '/kontaktformular': '/kontakt',
  '/appointment': '/termin',
  '/booking': '/termin',
  '/terminbuchung': '/termin',
  '/chat': '/ki-bot',
  '/chatbot': '/ki-bot',
  '/bot': '/ki-bot',
  '/portfolio': '/referenzen',
  '/projects': '/referenzen',
  '/projekte': '/referenzen',
  '/cases': '/referenzen',
  '/blog': '/ratgeber',
  '/news': '/ratgeber',
  '/articles': '/ratgeber',
  '/help': '/faq',
  '/hilfe': '/faq',
  '/questions': '/faq',
  '/imprint': '/impressum',
  '/legal': '/impressum',
  '/privacy': '/datenschutz',
  '/privacy-policy': '/datenschutz',
  '/datenschutzerklaerung': '/datenschutz',
  '/terms-of-service': '/agb',
  '/tos': '/agb',
  '/munich': '/muenchen',
  '/münchen': '/muenchen',
  // Old sitemap URLs -> correct routes
  '/leistungen/markenentwicklung': '/leistungen/markenaufbau',
  '/leistungen/webentwicklung': '/leistungen/web',
  '/leistungen/ki': '/leistungen/ki-automatisierung',
  '/leistungen/brand': '/leistungen/markenaufbau',
  '/leistungen/branding': '/leistungen/markenaufbau',
  '/leistungen/website': '/leistungen/web',
  '/leistungen/websites': '/leistungen/web',
  '/leistungen/ai': '/leistungen/ki-automatisierung',
  '/leistungen/automation': '/leistungen/ki-automatisierung',
  // English service variations
  '/services/marketing': '/leistungen/marketing',
  '/services/seo': '/leistungen/seo',
  '/services/social-media': '/leistungen/social-media',
  '/services/content': '/leistungen/content',
  '/services/web': '/leistungen/web',
  '/services/brand': '/leistungen/markenaufbau',
  '/services/ai': '/leistungen/ki-automatisierung',
};

app.use((req, res, next) => {
  const path = req.path.toLowerCase();
  
  // Check for exact redirect match
  if (redirects[path]) {
    return res.redirect(301, redirects[path]);
  }
  
  // Remove trailing slash (except for root)
  if (path !== '/' && path.endsWith('/')) {
    return res.redirect(301, path.slice(0, -1));
  }
  
  next();
});

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  await registerRoutes(httpServer, app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (process.env.NODE_ENV === "production") {
    await serveStatic(app);
  } else {
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || "5000", 10);
  httpServer.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`serving on port ${port}`);
    },
  );
})();
