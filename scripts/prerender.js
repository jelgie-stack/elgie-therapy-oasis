import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';
import url from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  '/',
  '/child-therapist-park-city',
  '/teen-therapist-park-city', 
  '/emdr-therapist-park-city',
  '/anxiety-depression-therapy-park-city',
  '/adhd-therapy-park-city',
  '/parent-coaching-park-city',
  '/supervision-consulting',
  '/insurance-fees',
  '/anxiety-therapy-park-city'
];

const distDir = path.join(__dirname, '../dist');
const baseUrl = 'http://localhost:8080';

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.map': 'application/json'
};

function startStaticServer(dir, port) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const parsed = url.parse(req.url || '/').pathname || '/';
      let filePath = path.join(dir, parsed);

      if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html');
      }

      if (!fs.existsSync(filePath)) {
        filePath = path.join(dir, 'index.html');
      }

      const ext = path.extname(filePath);
      const contentType = mimeTypes[ext] || 'application/octet-stream';

      try {
        const content = fs.readFileSync(filePath);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      } catch {
        res.writeHead(500);
        res.end('Server Error');
      }
    });

    server.listen(port, () => {
      console.log(`Static server running at http://localhost:${port}`);
      resolve(server);
    });
  });
}

async function prerender() {
  console.log('Starting pre-rendering process...');
  
  // Check if we're in CI environment and skip prerender if specified
  if (process.env.SKIP_PRERENDER === 'true') {
    console.log('Skipping pre-rendering (SKIP_PRERENDER=true)');
    return;
  }
  
  if (!fs.existsSync(distDir)) {
    console.error('✗ Dist directory not found. Build first with `vite build`.');
    process.exit(1);
  }
  
  const server = await startStaticServer(distDir, 8080);
  
  // CI-safe Puppeteer launch options
  const launchOptions = {
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--single-process',
      '--disable-gpu'
    ]
  };
  
  const browser = await puppeteer.launch(launchOptions);
  const page = await browser.newPage();
  
  for (const route of routes) {
    try {
      console.log(`Pre-rendering ${route}...`);
      
      await page.goto(`${baseUrl}${route}`, { 
        waitUntil: 'networkidle0',
        timeout: 60000 
      });
      
      await page.waitForTimeout(2000);
      
      const html = await page.content();
      
      const routePath = route === '/' ? '/index' : route;
      const filePath = path.join(distDir, routePath, 'index.html');
      const dir = path.dirname(filePath);
      
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      fs.writeFileSync(filePath, html);
      console.log(`✓ Pre-rendered ${route} to ${filePath}`);
      
    } catch (error) {
      console.error(`✗ Failed to pre-render ${route}:`, error.message);
    }
  }
  
  await browser.close();
  server.close();
  console.log('Pre-rendering complete!');
}

prerender().catch((e) => {
  console.error(e);
  process.exit(1);
});