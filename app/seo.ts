import type { Metadata } from "next";

// Centralized SEO configuration
export const SITE_NAME = "Pneuma";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pneuma.com";

export const OG_TITLE = "Pneuma - Advanced Nasal CPAP Technology";
export const OG_DESCRIPTION =
  "The xchange™ nasal dock by Pneuma is designed for procedures involving moderate to deep sedation in patients with health challenges. Significantly reduce oxygen desaturation and hypercapnia.";

// Use an existing public asset as the default OG image
// Ideally 1200x630. Replace this path once you have a purpose-made OG image.
export const OG_IMAGE = "/assets/the-science-hero.png";

const defaultOpenGraph: NonNullable<Metadata["openGraph"]> = {
  type: "website",
  locale: "en_US",
  url: SITE_URL,
  siteName: SITE_NAME,
  title: OG_TITLE,
  description: OG_DESCRIPTION,
  images: [
    {
      url: OG_IMAGE,
      alt: `${SITE_NAME} - Default Open Graph Image`,
    },
  ],
};

const defaultTwitter: NonNullable<Metadata["twitter"]> = {
  card: "summary_large_image",
  title: OG_TITLE,
  description: OG_DESCRIPTION,
  images: [OG_IMAGE],
};

// Site-wide default metadata (used by root layout). Pages can override via pageMetadata().
export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: OG_TITLE,
    template: "%s | Pneuma",
  },
  description: OG_DESCRIPTION,
  openGraph: defaultOpenGraph,
  twitter: defaultTwitter,
  alternates: {
    canonical: "/",
  },
};

// Helper to build consistent per-page metadata while inheriting global OG/Twitter
export function pageMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      ...defaultOpenGraph,
      title,
      description,
      url,
    },
    twitter: {
      ...defaultTwitter,
      title,
      description,
    },
  };
}
