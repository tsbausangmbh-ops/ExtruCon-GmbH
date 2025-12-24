import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";
import prerender from "prerender-node";

const app = express();
const httpServer = createServer(app);

// Server timeout settings for better connection handling
httpServer.keepAliveTimeout = 120000;
httpServer.headersTimeout = 120000;

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
if (process.env.PRERENDER_TOKEN) {
  app.use(prerender.set('prerenderToken', process.env.PRERENDER_TOKEN));
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
