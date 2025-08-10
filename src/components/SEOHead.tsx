import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  breadcrumbs?: Array<{ name: string; url: string }>;
  jsonLd?: object[];
}

const SEOHead = ({ 
  title, 
  description, 
  canonicalUrl, 
  ogImage = "https://elgietherapy.com/img/brigette-hero-desktop.webp",
  breadcrumbs = [],
  jsonLd = []
}: SEOHeadProps) => {
  const location = useLocation();
  
  useEffect(() => {
    // Only run on client-side after hydration
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    
    // Update canonical URL
    const canonical = canonicalUrl || `https://elgietherapy.com${location.pathname}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    // Update title
    if (title) {
      document.title = title;
    }

    // Update meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = description;
    }

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.content = content;
    };

    if (title) {
      updateOGTag('og:title', title);
    }
    if (description) {
      updateOGTag('og:description', description);
    }
    updateOGTag('og:url', canonical);
    updateOGTag('og:image', ogImage);

    // Update Twitter tags
    const updateTwitterTag = (name: string, content: string) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.name = name;
        document.head.appendChild(twitterTag);
      }
      twitterTag.content = content;
    };

    if (title) {
      updateTwitterTag('twitter:title', title);
    }
    if (description) {
      updateTwitterTag('twitter:description', description);
    }
    updateTwitterTag('twitter:image', ogImage);

    // Add breadcrumb schema if provided
    if (breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": crumb.name,
          "item": crumb.url
        }))
      };

      let breadcrumbScript = document.querySelector('script[data-schema="breadcrumb"]') as HTMLScriptElement;
      if (!breadcrumbScript) {
        breadcrumbScript = document.createElement('script');
        breadcrumbScript.type = 'application/ld+json';
        breadcrumbScript.setAttribute('data-schema', 'breadcrumb');
        document.head.appendChild(breadcrumbScript);
      }
      breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    }

    // Add additional JSON-LD schemas
    jsonLd.forEach((schema, index) => {
      const schemaId = `schema-${index}`;
      let schemaScript = document.querySelector(`script[data-schema="${schemaId}"]`) as HTMLScriptElement;
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.type = 'application/ld+json';
        schemaScript.setAttribute('data-schema', schemaId);
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    });

    // Force HTTPS redirect (client-side fallback)
    if (window.location.protocol === 'http:' && window.location.hostname !== 'localhost') {
      window.location.replace(window.location.href.replace('http:', 'https:'));
    }

    // Redirect www to non-www (client-side fallback)
    if (window.location.hostname.startsWith('www.')) {
      window.location.replace(window.location.href.replace('www.', ''));
    }

  }, [title, description, canonicalUrl, ogImage, breadcrumbs, jsonLd, location]);

  return null;
};

export default SEOHead;