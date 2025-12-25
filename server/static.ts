import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export async function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  const templatePath = path.resolve(distPath, "index.html");
  let template = fs.readFileSync(templatePath, "utf-8");

  let render: ((url: string) => { html: string }) | null = null;
  const ssrPath = path.resolve(__dirname, "server", "entry-server.js");
  
  if (fs.existsSync(ssrPath)) {
    try {
      const ssrModule = await import(ssrPath);
      render = ssrModule.render;
      console.log("SSR module loaded successfully");
    } catch (err) {
      console.warn("SSR module could not be loaded, falling back to CSR:", err);
    }
  }

  const validRoutes = [
    '/', '/ki-agenten', '/automatisierungen', '/webseiten-ki', '/ki-bot',
    '/kontakt', '/termin', '/faq', '/referenzen', '/ratgeber', '/ueber-uns',
    '/impressum', '/datenschutz', '/privacy', '/terms', '/agb', '/cookies',
    '/leistungen/marketing', '/leistungen/social-media', '/leistungen/content',
    '/leistungen/markenaufbau', '/leistungen/web', '/leistungen/ki-automatisierung',
    '/leistungen/seo', '/muenchen', '/muenchen/bogenhausen', '/muenchen/schwabing',
    '/muenchen/nymphenburg', '/muenchen/gruenwald', '/muenchen/harlaching',
    '/starnberg', '/dachau', '/germering', '/puchheim', '/olching',
    '/antalya'
  ];

  app.use("*", (req, res) => {
    const url = req.originalUrl;
    const path = url.split('?')[0];
    
    const isValidRoute = validRoutes.includes(path) || 
                         path.startsWith('/assets/') ||
                         path.endsWith('.js') ||
                         path.endsWith('.css') ||
                         path.endsWith('.png') ||
                         path.endsWith('.jpg') ||
                         path.endsWith('.ico') ||
                         path.endsWith('.txt') ||
                         path.endsWith('.xml');
    
    const statusCode = isValidRoute ? 200 : 404;
    
    if (render) {
      try {
        const { html: appHtml } = render(url);
        const finalHtml = template.replace(
          '<div id="root"></div>',
          `<div id="root">${appHtml}</div>`
        );
        res.status(statusCode).set({ "Content-Type": "text/html" }).send(finalHtml);
      } catch (err) {
        console.error("SSR Error:", err);
        res.status(statusCode).sendFile(templatePath);
      }
    } else {
      res.status(statusCode).sendFile(templatePath);
    }
  });
}
