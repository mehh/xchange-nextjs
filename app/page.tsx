import type { Metadata } from "next";
import LP from "./lp/page";

export const metadata: Metadata = {
  title: "TMOD - Restoring the American Dream with Affordable Homes",
  description: "TMOD creates precision-engineered, affordable homes starting from $250,000. Advanced manufacturing, sustainable construction, and healthy living - one truly affordable home at a time.",
  keywords: [
    "affordable homes",
    "American Dream",
    "precision engineered homes",
    "$250,000 homes",
    "sustainable housing",
    "advanced manufacturing",
    "healthy living homes",
    "steel frame construction",
    "LEED certified",
    "energy efficient homes",
    "climate resilient",
    "16 week construction"
  ],
  openGraph: {
    title: "TMOD - Restoring the American Dream with Affordable Homes",
    description: "Precision-engineered homes starting from $250,000. Advanced manufacturing meets sustainable construction for healthy, affordable living.",
    url: "https://tmod.com",
    images: [
      {
        url: "/assets/tmod-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TMOD - Restoring the American Dream",
      },
    ],
  },
  twitter: {
    title: "TMOD - Restoring the American Dream",
    description: "Affordable, precision-engineered homes starting from $250,000. Advanced manufacturing for sustainable living.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <LP />;
}
