import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Let's Get Started",
  description: "Ready to start your TMOD home journey? Contact us today to learn about our precision-engineered, affordable homes. We're excited to be on this journey together.",
  keywords: [
    "contact TMOD",
    "affordable homes inquiry",
    "precision engineered homes contact",
    "home building consultation",
    "sustainable homes quote",
    "TMOD contact form",
    "affordable housing inquiry",
    "get started with TMOD",
    "home building contact",
    "sustainable living consultation"
  ],
  openGraph: {
    title: "Contact Us - Let's Get Started | TMOD",
    description: "Ready to start your TMOD home journey? Contact us today to learn about our precision-engineered, affordable homes.",
    url: "https://tmod.com/contact",
    images: [
      {
        url: "/assets/contact-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact TMOD - Let's Get Started",
      },
    ],
  },
  twitter: {
    title: "Contact Us - Let's Get Started | TMOD",
    description: "Ready to start your affordable, sustainable home journey? Contact TMOD today for a consultation.",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
