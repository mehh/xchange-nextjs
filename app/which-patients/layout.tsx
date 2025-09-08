import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Which Patients? - Advanced Nasal CPAP for High-Risk Patients",
  description: "Discover which patients benefit most from the xchange™ nasal dock. From OSA and high BMI to cardiovascular diseases - ensure optimal oxygen delivery during procedures.",
  keywords: [
    "high-risk patients",
    "OSA patients", 
    "obstructive sleep apnea",
    "high BMI patients",
    "cardiovascular disease",
    "diabetes",
    "obesity",
    "hypertension",
    "pulmonary conditions",
    "nasal CPAP indications",
    "xchange nasal dock",
    "procedural sedation safety",
    "patient selection criteria",
    "respiratory support",
    "chronic conditions"
  ],
  openGraph: {
    title: "Which Patients Benefit from Xchange Nasal Dock?",
    description: "Comprehensive list of medical conditions where the xchange™ nasal dock ensures optimal oxygen delivery during procedures.",
    type: "website",
  },
  twitter: {
    title: "Which Patients Benefit from Xchange Nasal Dock?",
    description: "From OSA to obesity - discover which patients need enhanced respiratory support during procedures.",
  },
  alternates: {
    canonical: "/which-patients",
  },
};

export default function WhichPatientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
