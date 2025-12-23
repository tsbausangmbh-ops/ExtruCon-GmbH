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

  app.use("*", (req, res) => {
    const url = req.originalUrl;
    
    if (render) {
      try {
        const { html: appHtml } = render(url);
        const finalHtml = template.replace(
          '<div id="root"></div>',
          `<div id="root">${appHtml}</div>`
        );
        res.status(200).set({ "Content-Type": "text/html" }).send(finalHtml);
      } catch (err) {
        console.error("SSR Error:", err);
        res.sendFile(templatePath);
      }
    } else {
      res.sendFile(templatePath);
    }
  });
}
