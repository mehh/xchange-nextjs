import type { Metadata } from "next";
import Health from "../tmod/Health";

export const metadata: Metadata = {
  title: "Healthy & Sustainable Living - Climate Friendly Homes",
  description: "TMOD homes promote healthy living with 84% energy efficiency, LEED certification, and advanced air filtration. Climate-friendly construction for a sustainable future.",
  keywords: [
    "healthy homes",
    "sustainable living",
    "climate friendly homes",
    "LEED certified",
    "energy efficient homes",
    "air filtration homes",
    "84% energy efficiency",
    "sustainable construction",
    "healthy building materials",
    "environmental responsibility",
    "green building",
    "carbon footprint reduction"
  ],
  openGraph: {
    title: "Healthy & Sustainable Living - Climate Friendly Homes | TMOD",
    description: "84% more energy efficient than conventional homes. LEED certified construction with advanced air filtration for healthy living.",
    url: "https://tmod.com/health",
    images: [
      {
        url: "/assets/health-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TMOD Healthy & Sustainable Homes",
      },
    ],
  },
  twitter: {
    title: "Healthy & Sustainable Living | TMOD",
    description: "84% more energy efficient homes with advanced air filtration. Climate-friendly construction for a healthier future.",
  },
  alternates: {
    canonical: "/health",
  },
};

export default function HealthPage() {
  return <Health />;
}
