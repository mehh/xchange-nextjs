import type { Metadata } from "next";
import Team from "@/app/tmod/Team";

export const metadata: Metadata = {
  title: "Meet Our Team - United by Purpose, Driven by Passion",
  description: "Meet the TMOD team. Industry leaders with 100+ years of collective experience in construction, engineering, finance, and real estate development.",
  keywords: [
    "TMOD team",
    "construction leaders",
    "real estate development",
    "engineering expertise",
    "home building experience",
    "robotics automation",
    "steel construction",
    "affordable housing experts",
    "sustainable building team",
    "innovation leaders"
  ],
  openGraph: {
    title: "Meet Our Team - United by Purpose, Driven by Passion | TMOD",
    description: "Industry leaders with 100+ years of collective experience in construction, engineering, finance, and real estate development.",
    url: "https://tmod.com/team",
    images: [
      {
        url: "/assets/team-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TMOD Team - Industry Leaders",
      },
    ],
  },
  twitter: {
    title: "Meet Our Team | TMOD",
    description: "100+ years of collective experience in construction, engineering, and real estate development. Meet the leaders behind affordable housing innovation.",
  },
  alternates: {
    canonical: "/team",
  },
};

export default function TeamPage() {
  return <Team />;
}
