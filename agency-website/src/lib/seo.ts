import type { Metadata } from "next";

// Next.js shallow-merges metadata: a page that sets `openGraph`/`twitter` REPLACES
// the root layout's version entirely (including the file-based og:image). So every
// page must emit a complete card. This helper builds one from the fields that vary,
// keeping siteName/locale/image consistent across routes.
// Relative `canonical`, `url`, and image paths resolve against `metadataBase` (set in layout).

// Single source of truth for the canonical host. metadataBase (layout), sitemap,
// and robots all import this — change it in ONE place if the domain moves.
export const SITE_URL = "https://ri-software-agency.vercel.app";

const SITE_NAME = "RI Software";
const OG_IMAGE = "/opengraph-image";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  /** Route path, e.g. "/services". Used for canonical + og:url. */
  path: string;
}): Metadata {
  const ogTitle = `${title} — ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description,
      url: path,
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [OG_IMAGE],
    },
  };
}

// BreadcrumbList JSON-LD for an inner page (Home > Page). Rendered in the body via
// <JsonLd/>. Uses absolute URLs — metadataBase does NOT apply to raw JSON-LD.
export function breadcrumbLd(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}
