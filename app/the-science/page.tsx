import { Metadata } from "next";
import ScienceHeroSection from "../components/sections/ScienceHeroSection";
import PressureChartSection from "../components/sections/PressureChartSection";
import EtCO2ChartSection from "../components/sections/EtCO2ChartSection";
import WhitePaperSection from "../components/sections/WhitePaperSection";
import LetsTalkSection from "../components/LetsTalkSection";

export const metadata: Metadata = {
  title: "The Science",
  description: "High risk patients require 12-25 cm H₂O to perfectly open their airway. Learn about the science behind the xchange nasal dock technology.",
};

export default function TheSciencePage() {
  return (
    <main id="main" className="min-h-screen">
      <ScienceHeroSection />
      <PressureChartSection />
      <EtCO2ChartSection />
      <WhitePaperSection />
      <LetsTalkSection backgroundClass="bg-calm" />
    </main>
  );
}
