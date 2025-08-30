// src/components/SEOHead.tsx
import Head from "next/head";

type SEOProps = {
  /** Page title (will be combined with site name) */
  title?: string;
  /** One-sentence description for meta and social */
  description?: string;
  /** Absolute path or absolute URL for the canonical (e.g., "/about" or "https://...") */
  canonicalPathOrUrl?: string;
  /** Absolute URL of the preview image (OG/Twitter) */
  imageUrl?: string;
  /** Set true to add noindex,nofollow (e.g., staging, thank-you pages) */
  noIndex?: boolean;
  /** Open Graph type; defaults to "website" */
  ogType?: "website" | "article" | "profile" | "book" | "video.other";
  /** Optional extra JSON-LD to embed */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const SITE_NAME = "Elgie Therapy";
const BASE_URL = "https://elgietherapy.com"; // <-- If you want www canonical, set to "https://www.elgietherapy.com"

function toAbsoluteUrl(pathOrUrl?: string): string | undefined {
  if (!pathOrUrl) return undefined;
  try {
    // Already absolute?
    const maybe = new URL(pathOrUrl);
    return maybe.toString();
  } catch {
    // Treat as path
    const base = BASE_URL.endsWith("/") ? BASE_URL.slice(0, -1) : BASE_URL;
    const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
    return `${base}${path}`;
  }
}

export default function SEOHead({
  title,
  description = "Compassionate, evidence-based therapy in Park City, Utah.",
  canonicalPathOrUrl,
  imageUrl,
  noI
