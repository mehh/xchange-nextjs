"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import LetsTalkSection from "../components/LetsTalkSection";

// Medical conditions data organized in columns as shown in the design
const medicalConditions = [
  // Column 1
  [
    "Adiposity-Based Chronic Disease",
    "Android Obesity", 
    "Asthma",
    "Bronchiectasis",
    "Cardiovascular Diseases",
    "Deficiency Anemias",
    "Diabetes",
    "Dyslipidemia",
    "Excess Body Weight"
  ],
  // Column 2
  [
    "Gastrointestinal Diseases",
    "Gynoid/Gynecoid Obesity",
    "High Blood Pressure",
    "Hypertension",
    "Heart Disease",
    "High Blood Lipid Levels",
    "High BMI",
    "Kidney Disease",
    "Lung Disease"
  ],
  // Column 3
  [
    "Metabolic Disorders",
    "Morbid Obesity",
    "Obesity",
    "Obstructive Sleep Apnea",
    "Osteoporosis",
    "Overweight",
    "Pulmonary Fibrosis",
    "Severe Obesity",
    "Skeletal Muscle Dysfunction"
  ]
];


// Condition list item component
function ConditionItem({ condition }: { condition: string }) {
  return (
    <div className="flex items-center justify-between py-5 border-b border-slate/20 pr-5">
      <span className="text-slate text-lg md:text-xl font-normal leading-[130%] tracking-[-0.4px] flex-1">
        {condition}
      </span>
      <div className="flex items-center justify-center w-8 h-8 flex-shrink-0 ml-4">
        <Check className="w-5 h-[14px] text-slate" strokeWidth={2} />
      </div>
    </div>
  );
}

export default function WhichPatientsPage() {
  return (
    <main className="pt-20 md:pt-24" id="main">
      {/* Hero Section */}
      <section className="relative min-h-[681px] bg-[#E3E6E9] overflow-hidden">
        {/* Background Decorative SVG */}
        <div className="absolute right-0 top-[159px] w-[790px] h-[757px] opacity-20 pointer-events-none">
          <svg
            width="791"
            height="759"
            viewBox="0 0 791 759"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              opacity="0.2"
              d="M634.986 1.38086C669.548 -3.9666 698.77 26.9447 691.453 61.1494L677.151 128.021V128.025C670.125 160.833 649.13 188.547 620.7 205.437C589.834 223.771 546.641 250.985 509.517 279.99C515.295 299.515 528.751 316.776 548.724 326.761L548.725 326.762L651.318 378.066L653.31 379.072C737.347 422.023 790.319 508.461 790.319 602.959V702.941C790.319 738.836 756.619 765.219 721.767 756.572L531.32 709.358C467.68 693.581 417.78 647.824 395.16 589.394C372.786 647.2 323.715 692.594 261.052 708.839L258.999 709.358L68.5518 756.574L68.5469 756.576C33.7087 765.197 0 738.846 0 702.941V602.959C0.000111475 507.718 53.8095 420.663 139 378.066L241.594 326.762L241.6 326.759C261.582 316.776 275.033 299.523 280.801 280.01C246.133 252.926 206.165 227.402 175.902 209.211L169.616 205.453C141.174 188.548 120.173 160.834 113.165 128.036L98.8652 61.167L98.5498 59.5664C92.466 26.0164 121.299 -3.88572 155.335 1.40039L270.928 19.3291L270.931 19.3311C295.751 23.1886 319.344 32.7456 339.847 47.2559L341.848 48.6953C365.592 66.0433 383.834 89.2451 395.161 115.556C406.805 88.5039 425.754 64.7376 450.471 47.2393L450.473 47.2373C470.975 32.7272 494.568 23.1701 519.388 19.3125L519.392 19.3105L634.981 1.38086H634.986Z"
              fill="url(#paint0_linear_343_376)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_343_376"
                x1="395"
                y1="569.5"
                x2="395.16"
                y2="53"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3A5261" stopOpacity="0" />
                <stop offset="0.5" stopColor="#3A5261" stopOpacity="0.7" />
                <stop offset="1" stopColor="#3A5261" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-16">
          {/* Hero Content */}
          <div className="pt-[152px] pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-[647px]"
            >
              <h1 className="text-slate text-[32px] md:text-[48px] lg:text-[56px] font-normal leading-[100%] tracking-[-0.64px] md:tracking-[-0.96px] lg:tracking-[-1.12px] mb-10">
                Is your patient getting enough positive airflow during procedures?
              </h1>
              <p className="text-slate text-base md:text-lg font-normal leading-[140%] tracking-[-0.32px] md:tracking-[-0.36px] opacity-70 max-w-[537px]">
                Health conditions can significantly impact a patient&apos;s ability to breathe during medical procedures. The xchange nasal dock ensures that patients that suffer from OSA, high BMI or other chronic conditions (listed below) are getting the perfect amount of oxygen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Medical Conditions Section */}
      <section className="bg-[#E3E6E9] py-10 md:py-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 xl:gap-12">
            {medicalConditions.map((column, columnIndex) => (
              <motion.div
                key={columnIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: columnIndex * 0.2 }}
                className="flex flex-col max-w-[427px] w-full mx-auto"
              >
                {column.map((condition) => (
                  <ConditionItem key={condition} condition={condition} />
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <LetsTalkSection backgroundClass="bg-calm" />
    </main>
  );
}
