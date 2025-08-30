// Utility to ping Google when sitemap is updated
export const pingGoogleSitemap = async () => {
  if (typeof window === 'undefined') return; // Only run in browser
  
  try {
    // Use a simple fetch to ping Google's sitemap update service
    const response = await fetch(
      `https://www.google.com/ping?sitemap=${encodeURIComponent('https://www.elgietherapy.com/sitemap.xml')}`,
      { 
        method: 'GET',
        mode: 'no-cors' // CORS will block the response, but the ping still works
      }
    );
    console.log('Sitemap ping attempted');
  } catch (error) {
    console.log('Sitemap ping failed (expected due to CORS):', error);
  }
};

// Auto-ping on app load (once per session) - SSR safe
let hasPinged = false;
export const autoPingSitemap = () => {
  // Only run on client-side after hydration
  if (typeof window === 'undefined') return;
  
  if (!hasPinged) {
    hasPinged = true;
    // Delay to avoid blocking initial load and ensure DOM is ready
    setTimeout(() => {
      pingGoogleSitemap();
      console.log('Sitemap auto-ping completed for SEO optimization');
    }, 5000);
  }
};

// Enhanced sitemap ping with better error handling
export const pingGoogleSitemapEnhanced = async () => {
  if (typeof window === 'undefined') return;
  
  try {
    // Primary Google ping
    await fetch(
      `https://www.google.com/ping?sitemap=${encodeURIComponent('https://www.elgietherapy.com/sitemap.xml')}`,
      { 
        method: 'GET',
        mode: 'no-cors' 
      }
    );
    
    // Bing ping as fallback
    await fetch(
      `https://www.bing.com/ping?sitemap=${encodeURIComponent('https://www.elgietherapy.com/sitemap.xml')}`,
      { 
        method: 'GET',
        mode: 'no-cors' 
      }
    );
    
    console.log('Search engine sitemap notifications sent');
  } catch (error) {
    console.log('Sitemap ping attempted (CORS expected):', error);
  }
};