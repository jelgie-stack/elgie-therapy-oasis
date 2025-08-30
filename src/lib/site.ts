// Centralized site configuration
export const BASE_URL = "https://www.elgietherapy.com";

// Helper function to create canonical URLs
export const createCanonicalUrl = (path: string = "") => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return cleanPath ? `${BASE_URL}/${cleanPath}` : BASE_URL;
};