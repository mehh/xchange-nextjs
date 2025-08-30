import type { Metadata, Viewport } from "next";
import { Montserrat, Oswald, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PageFade from "./components/PageFade";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TMOD - Precision Engineered, Affordable Homes",
    template: "%s | TMOD"
  },
  description: "TMOD creates precision-engineered, high-performance homes that are affordable, sustainable, and built to last 100 years. Advanced manufacturing meets healthy living.",
  keywords: [
    "affordable homes",
    "precision engineered homes",
    "sustainable housing",
    "prefabricated homes",
    "steel frame construction",
    "energy efficient homes",
    "healthy living",
    "climate resilient homes",
    "advanced manufacturing",
    "LEED certified"
  ],
  authors: [{ name: "TMOD" }],
  creator: "TMOD",
  publisher: "TMOD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tmod.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tmod.com",
    title: "TMOD - Precision Engineered, Affordable Homes",
    description: "TMOD creates precision-engineered, high-performance homes that are affordable, sustainable, and built to last 100 years.",
    siteName: "TMOD",
    images: [
      {
        url: "/assets/tmod-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TMOD - Precision Engineered Homes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TMOD - Precision Engineered, Affordable Homes",
    description: "Advanced manufacturing meets healthy living. Sustainable homes built to last 100 years.",
    images: ["/assets/tmod-og-image.jpg"],
    creator: "@tmod",
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
  category: "Real Estate",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TMOD",
    "description": "TMOD creates precision-engineered, high-performance homes that are affordable, sustainable, and built to last 100 years.",
    "url": "https://tmod.com",
    "logo": "https://tmod.com/assets/tmod-logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-TMOD",
      "contactType": "customer service",
      "url": "https://tmod.com/contact"
    },
    "sameAs": [
      "https://twitter.com/tmod",
      "https://linkedin.com/company/tmod"
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
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${oswald.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <NavBar />
        <PageFade>{children}</PageFade>
        <Footer />
      </body>
    </html>
  );
}
