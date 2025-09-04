import type { Metadata } from "next";
import HeroSection from "./components/sections/HeroSection";
import ProductIntroSection from "./components/sections/ProductIntroSection";
import StatisticsSection from "./components/sections/StatisticsSection";
import ProductFeaturesSection from "./components/sections/ProductFeaturesSection";
import BenefitsSection from "./components/sections/BenefitsSection";
import TeamSection from "./components/sections/TeamSection";
import ContactSection from "./components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Pneuma - Patient safety starts with perfecting positive pressure",
  description: "The xchange™ nasal dock by Pneuma is designed for procedures involving moderate to deep sedation in patients with health challenges. Significantly reduce the incidence of oxygen desaturation and decrease the occurrence of hypercapnia.",
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
    "respiratory support",
    "CPAP devices",
    "nasal interface",
    "end-tidal CO2 monitoring",
    "pneuma technology"
  ],
  openGraph: {
    title: "Pneuma - Patient safety starts with perfecting positive pressure",
    description: "The xchange™ nasal dock - designed for procedures involving moderate to deep sedation in patients with health challenges.",
    url: "https://pneuma.com",
    images: [
      {
        url: "https://api.builder.io/api/v1/image/assets/TEMP/993353e31db87e0e701cab7447c3eb9f6a34e0aa?width=2388",
        width: 1194,
        height: 1397,
        alt: "Pneuma xchange nasal dock device",
      },
    ],
  },
  twitter: {
    title: "Pneuma - Patient safety starts with perfecting positive pressure",
    description: "The xchange™ nasal dock by Pneuma - the evolution of CPAP devices for enhanced patient safety.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section - accounts for fixed navbar */}
      <div className="section-spacing">
        <HeroSection />
      </div>
      
      {/* Product Intro Section */}
      <div className="section-spacing">
        <ProductIntroSection />
      </div>
      
      {/* Statistics Section - scroll-locked (no wrapper to preserve sticky) */}
      <StatisticsSection />
      
      {/* Product Features Section */}
      <div className="section-spacing">
        <ProductFeaturesSection />
      </div>
      
      {/* Benefits Section - with horizontal scrolling cards */}
      <div className="section-spacing">
        <BenefitsSection />
      </div>
      
      {/* Team Section */}
      <div className="section-spacing">
        <TeamSection />
      </div>
      
      {/* Contact Section */}
      <div className="section-spacing">
        <ContactSection />
      </div>
    </main>
  );
}
