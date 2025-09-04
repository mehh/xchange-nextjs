import type { Metadata, Viewport } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PageFade from "./components/PageFade";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pneuma - Advanced Nasal CPAP Technology",
    template: "%s | Pneuma"
  },
  description: "The xchange™ nasal dock by Pneuma is designed for procedures involving moderate to deep sedation in patients with health challenges. Significantly reduce oxygen desaturation and hypercapnia.",
  keywords: [
    "nasal CPAP",
    "xchange nasal dock",
    "positive pressure",
    "oxygen desaturation",
    "hypercapnia",
    "medical devices",
    "airway management",
    "procedural sedation",
    "patient safety",
    "respiratory support"
  ],
  authors: [{ name: "Pneuma Technology Inc." }],
  creator: "Pneuma Technology Inc.",
  publisher: "Pneuma Technology Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://pneuma.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://pneuma.com",
    title: "Pneuma - Advanced Nasal CPAP Technology",
    description: "The xchange™ nasal dock - perfecting positive pressure for patients who need it the most.",
    siteName: "Pneuma",
    images: [
      {
        url: "/api/placeholder/1200/630",
        alt: "Pneuma - xchange nasal dock",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pneuma - Advanced Nasal CPAP Technology",
    description: "Patient safety starts with perfecting positive pressure. The xchange™ nasal dock by Pneuma.",
    images: ["/api/placeholder/1200/630"],
    creator: "@pneuma",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "Medical Technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pneuma.com";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pneuma Technology Inc.",
    "description": "Advanced nasal CPAP technology for enhanced patient safety during medical procedures.",
    "url": siteUrl,
    "logo": `${siteUrl}/assets/pneuma-logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-PNEUMA",
      "contactType": "customer service",
      "url": `${siteUrl}/contact`
    },
    "sameAs": [
      "https://twitter.com/pneuma",
      "https://linkedin.com/company/pneuma"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          id="org-jsonld"
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${outfit.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {/* Stable portal root for overlays/menus to avoid manipulating body children directly */}
        <div id="portal-root">
          {/* Dedicated, persistent host for the page loader portal to avoid insertBefore/removeChild races */}
          <div id="page-loader-host" />
        </div>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 bg-black text-white px-3 py-2 rounded"
        >
          Skip to content
        </a>
        <NavBar />
        <PageFade>{children}</PageFade>
        <Footer />
      </body>
    </html>
  );
}
