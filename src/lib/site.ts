// Centralized site configuration
export const BASE_URL = "https://www.elgietherapy.com";

// Helper function to create canonical URLs
export const createCanonicalUrl = (path: string = "") => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  const fullUrl = cleanPath ? `${BASE_URL}/${cleanPath}` : BASE_URL;
  
  // Remove trailing slash except for homepage
  if (fullUrl !== BASE_URL && fullUrl.endsWith('/')) {
    return fullUrl.slice(0, -1);
  }
  
  return fullUrl;
};