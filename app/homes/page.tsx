import type { Metadata } from "next";
import Homes from "@/app/tmod/Homes";

export const metadata: Metadata = {
  title: "Precision Engineered Homes - Advanced Manufacturing",
  description: "Discover TMOD's precision-engineered, high-performance homes built with advanced manufacturing. Steel frame construction, 16-week production, LEED certified standards.",
  keywords: [
    "precision engineered homes",
    "advanced manufacturing homes",
    "steel frame construction",
    "prefabricated homes",
    "16 week construction",
    "LEED certified homes",
    "high performance homes",
    "climate resilient homes",
    "sustainable construction",
    "predictable building process"
  ],
  openGraph: {
    title: "Precision Engineered Homes - Advanced Manufacturing | TMOD",
    description: "Discover TMOD's precision-engineered, high-performance homes built with advanced manufacturing. Steel frame construction, 16-week production, LEED certified standards.",
    url: "https://tmod.com/homes",
    images: [
      {
        url: "/assets/homes-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TMOD Precision Engineered Homes",
      },
    ],
  },
  twitter: {
    title: "Precision Engineered Homes - Advanced Manufacturing | TMOD",
    description: "Steel frame construction, 16-week production, built to last 100 years. See how TMOD revolutionizes home building.",
  },
  alternates: {
    canonical: "/homes",
  },
};

export default function HomesPage() {
  return <Homes />;
}
