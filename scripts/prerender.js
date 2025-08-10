import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

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
  '/insurance-fees',
  '/anxiety-therapy-park-city'
];

const distDir = path.join(__dirname, '../dist');
const baseUrl = 'http://localhost:8080';

async function prerender() {
  console.log('Starting pre-rendering process...');
  
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  // Wait for build server to be ready
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  for (const route of routes) {
    try {
      console.log(`Pre-rendering ${route}...`);
      
      await page.goto(`${baseUrl}${route}`, { 
        waitUntil: 'networkidle0',
        timeout: 30000 
      });
      
      // Wait for React hydration and any async content
      await page.waitForTimeout(2000);
      
      const html = await page.content();
      
      // Create directory structure
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
  console.log('Pre-rendering complete!');
}

prerender().catch(console.error);