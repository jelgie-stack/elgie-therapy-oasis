// Utility to ping Google when sitemap is updated
export const pingGoogleSitemap = async () => {
  if (typeof window === 'undefined') return; // Only run in browser
  
  try {
    // Use a simple fetch to ping Google's sitemap update service
    const response = await fetch(
      `https://www.google.com/ping?sitemap=${encodeURIComponent('https://elgietherapy.com/sitemap.xml')}`,
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

// Auto-ping on app load (once per session)
let hasPinged = false;
export const autoPingSitemap = () => {
  if (!hasPinged && typeof window !== 'undefined') {
    hasPinged = true;
    // Delay to avoid blocking initial load
    setTimeout(pingGoogleSitemap, 5000);
  }
};