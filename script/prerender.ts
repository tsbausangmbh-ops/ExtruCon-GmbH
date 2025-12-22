import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const buildDir = path.join(__dirname, '..', 'dist', 'public');

const routes = [
  '/',
  '/ki-agenten',
  '/automatisierungen',
  '/webseiten-ki',
  '/ki-bot',
  '/kontakt',
  '/faq',
  '/referenzen',
  '/ratgeber',
  '/ueber-uns',
  '/impressum',
  '/datenschutz',
  '/privacy',
  '/terms',
  '/agb',
  '/cookies',
  '/termin',
  '/leistungen/marketing',
  '/leistungen/social-media',
  '/leistungen/content',
  '/leistungen/markenaufbau',
  '/leistungen/web',
  '/leistungen/ki-automatisierung',
  '/leistungen/seo',
  '/muenchen',
  '/muenchen/bogenhausen',
  '/muenchen/schwabing',
  '/muenchen/nymphenburg',
  '/muenchen/gruenwald',
  '/muenchen/harlaching',
  '/starnberg',
  '/dachau',
  '/germering',
  '/puchheim',
  '/olching'
];

function createServer(port: number): Promise<http.Server> {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let filePath = path.join(buildDir, req.url || '/');
      
      if (!path.extname(filePath)) {
        filePath = path.join(buildDir, 'index.html');
      }
      
      const extname = path.extname(filePath);
      const contentTypes: Record<string, string> = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.svg': 'image/svg+xml',
        '.woff': 'font/woff',
        '.woff2': 'font/woff2'
      };
      
      fs.readFile(filePath, (error, content) => {
        if (error) {
          if (error.code === 'ENOENT') {
            fs.readFile(path.join(buildDir, 'index.html'), (err, indexContent) => {
              if (err) {
                res.writeHead(500);
                res.end('Error loading index.html');
              } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(indexContent);
              }
            });
          } else {
            res.writeHead(500);
            res.end(`Server Error: ${error.code}`);
          }
        } else {
          res.writeHead(200, { 'Content-Type': contentTypes[extname] || 'application/octet-stream' });
          res.end(content);
        }
      });
    });
    
    server.listen(port, () => {
      console.log(`Static server running on port ${port}`);
      resolve(server);
    });
  });
}

async function prerender() {
  console.log('Starting pre-rendering...');
  console.log(`Build directory: ${buildDir}`);
  
  if (!fs.existsSync(buildDir)) {
    console.error(`Build directory not found: ${buildDir}`);
    console.error('Please run "npm run build" first.');
    process.exit(1);
  }
  
  const port = 30000 + Math.floor(Math.random() * 10000);
  const server = await createServer(port);
  
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || '/nix/store/zi4f80l169xlmivz8vja8wlphq74qqk0-chromium-125.0.6422.141/bin/chromium',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--single-process'
    ]
  });

  const page = await browser.newPage();
  
  await page.setUserAgent('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)');

  let successCount = 0;
  let errorCount = 0;

  for (const route of routes) {
    try {
      console.log(`Pre-rendering: ${route}`);
      
      const url = `http://localhost:${port}${route}`;
      
      await page.goto(url, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });

      await page.waitForSelector('main', { timeout: 10000 }).catch(() => {});
      
      await new Promise(resolve => setTimeout(resolve, 500));

      const html = await page.content();

      const routePath = route === '/' ? '' : route;
      const filePath = path.join(buildDir, routePath, 'index.html');
      const fileDir = path.dirname(filePath);
      
      if (!fs.existsSync(fileDir)) {
        fs.mkdirSync(fileDir, { recursive: true });
      }

      fs.writeFileSync(filePath, html, 'utf-8');
      console.log(`  ✓ Saved: ${filePath}`);
      successCount++;
      
    } catch (error) {
      console.error(`  ✗ Error pre-rendering ${route}:`, error);
      errorCount++;
    }
  }

  await browser.close();
  server.close();
  
  console.log(`\nPre-rendering completed!`);
  console.log(`  Success: ${successCount}/${routes.length}`);
  console.log(`  Errors: ${errorCount}/${routes.length}`);
}

prerender().catch(console.error);
