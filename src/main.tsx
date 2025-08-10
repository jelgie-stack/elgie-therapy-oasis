import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { autoPingSitemap } from './utils/sitemapPing'

// Initialize sitemap ping for SEO
autoPingSitemap();

createRoot(document.getElementById("root")!).render(<App />);
