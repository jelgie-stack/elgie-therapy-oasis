/**
 * Normalizes internal URLs by removing trailing slashes (except for homepage "/")
 * Preserves query strings and hashes
 * Only affects elgietherapy.com internal links
 */
export function normalizeUrl(input: string): string {
  if (!input) return input;
  
  const isAbs = /^https?:\/\//i.test(input);
  
  try {
    const base = 'https://www.elgietherapy.com';
    const u = new URL(isAbs ? input : input.startsWith('/') ? input : `/${input}`, base);
    
    // Check if this is an internal elgietherapy.com link
    const host = u.hostname.replace(/^www\./, '');
    const isInternal = host === 'elgietherapy.com';
    
    // Only normalize internal links
    if (isInternal && u.pathname !== '/' && u.pathname.endsWith('/')) {
      u.pathname = u.pathname.replace(/\/+$/, '');
    }
    
    // For relative inputs that were internal, return relative output
    // For absolute inputs that were internal, return relative output
    const out = `${u.pathname}${u.search}${u.hash}`;
    
    // Return relative path for internal links, original for external
    return isInternal ? out : input;
  } catch {
    // If parsing fails, return input unchanged
    return input;
  }
}
