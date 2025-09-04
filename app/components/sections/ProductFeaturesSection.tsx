"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Decorative SVG components for the circular elements
const DecorativeCircle = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg 
    className={className} 
    style={style}
    width="132" 
    height="132" 
    viewBox="0 0 132 132" 
    fill="none"
  >
    <path d="M92.0421 37.9667C96.4791 42.0628 99.8832 47.1513 101.976 52.8157C104.069 58.4801 104.79 64.5595 104.082 70.5565" stroke="#44695A" strokeWidth="1.5"/>
    <path d="M46.9779 32.9784C52.2075 29.9591 58.0777 28.2209 64.1081 27.906C70.1385 27.591 76.1578 28.7084 81.6735 31.1665" stroke="#44695A" strokeWidth="1.5"/>
    <path opacity="0.3" d="M28.7704 74.4244C27.4569 68.5304 27.5575 62.4091 29.0641 56.5614C30.5706 50.7137 33.4403 45.3058 37.4383 40.7802" stroke="#44695A" strokeWidth="1.5"/>
    <path opacity="0.3" d="M60.8329 103.988C54.8519 103.155 49.1529 100.919 44.2023 97.4613C39.2516 94.0035 35.1899 89.4228 32.3496 84.0939" stroke="#44695A" strokeWidth="1.5"/>
    <path opacity="0.3" d="M100.857 82.067C98.335 87.5539 94.5499 92.3657 89.8113 96.1088C85.0727 99.8519 79.5152 102.42 73.5935 103.603" stroke="#44695A" strokeWidth="1.5"/>
    <g opacity="0.8" filter="url(#filter0_f)">
      <circle cx="66" cy="66" r="38" fill="url(#paint0_radial)"/>
    </g>
    <circle cx="66.103" cy="66.103" r="7.5" fill="#44695A"/>
    <defs>
      <filter id="filter0_f" x="0" y="0" width="132" height="132" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feGaussianBlur stdDeviation="14" result="effect1_foregroundBlur"/>
      </filter>
      <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(66 66) rotate(90) scale(38)">
        <stop offset="0.302885" stopColor="white"/>
        <stop offset="1" stopColor="white" stopOpacity="0"/>
      </radialGradient>
    </defs>
  </svg>
);


export default function ProductFeaturesSection() {
  const features = [
    {
      title: "End-Tidal CO2 Monitoring",
      description: "Exhalation sampling to monitor adequacy of patient ventilation."
    },
    {
      title: "3-Point Head Strap",
      description: "Reduces force required to achieve airway seal to increase patient safety."
    },
    {
      title: "Proprietary Air Chamber",
      description: "Directs flow to minimize EtCO2 dilution and loss of visual monitoring curve."
    },
    {
      title: "Proprietary Nasal Interface",
      description: "Fits a wide range of facial differences to completely seal airway."
    },
    {
      title: "Oxygen from Wall Source",
      description: "No additional equipment or workflow changes for pre, intra or post op."
    }
  ];

  return (
    <section className="relative w-full bg-[#FFFEFB] py-16 md:py-24 lg:py-[104px]">
      {/* Background image - hidden on mobile for better performance */}
      <div className="hidden lg:block absolute left-[-153px] top-[-71px] w-[1881px] h-[1688px]">
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/5a65ed19424fdd7140ad1fb2c7596978ec0e57fc?width=3762"
          alt="Product background"
          fill
          className="object-cover"
          sizes="1881px"
        />
      </div>

      {/* Top gradient fade */}
      <div className="hidden lg:block absolute left-0 top-0 w-full h-[400px] bg-gradient-fade-bottom" />

      {/* Main content */}
      <div className="relative z-10 px-4 md:px-8 lg:px-16">
        {/* Section header */}
        <div className="max-w-4xl mb-12 md:mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[#1C1C20] font-outfit text-[28px] md:text-[32px] lg:text-[40px] font-normal leading-[100%] tracking-[-0.5px] lg:tracking-[-0.8px] mb-6 md:mb-10"
          >
            Introducing the xchange nasal dock. The evolution of CPAP devices.
          </motion.h2>

          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="flex items-center justify-center md:w-[165px] pt-2">
              <span className="text-[#1C1C20] font-outfit text-[12px] md:text-[14px] font-normal leading-[140%] tracking-[-0.28px] uppercase opacity-70">
                The product
              </span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-[467px] text-[#1C1C20] font-outfit text-[16px] md:text-[18px] font-normal leading-[130%] tracking-[-0.36px] opacity-70"
            >
              Engineered to perfect positive pressure to deliver high inspired oxygen (FiO2) continuously throughout the procedure and extend its use into the recovery period if clinically indicated.
            </motion.p>
          </div>
        </div>

        {/* Feature cards - responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="p-6 md:p-7 flex flex-col justify-center items-center gap-4 rounded-lg bg-blur-card min-h-[140px]"
            >
              <h3 className="w-full text-[#212527] font-outfit text-[13px] md:text-[14px] font-normal leading-[140%] tracking-[-0.28px] uppercase">
                {feature.title}
              </h3>
              <p className="w-full text-[#212527] font-outfit text-[15px] md:text-[16px] font-normal leading-[140%] tracking-[-0.32px]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Decorative elements - hidden on mobile */}
        <div className="hidden lg:block">
          <DecorativeCircle
            className="absolute w-[80px] h-[80px] xl:w-[110px] xl:h-[110px] transform rotate-[15.186deg]"
            style={{ right: '10%', top: '30%' }}
          />
          <DecorativeCircle
            className="absolute w-[80px] h-[80px] xl:w-[110px] xl:h-[110px]"
            style={{ left: '15%', top: '60%' }}
          />
          <DecorativeCircle
            className="absolute w-[80px] h-[80px] xl:w-[110px] xl:h-[110px]"
            style={{ right: '20%', bottom: '20%' }}
          />
        </div>
      </div>
    </section>
  );
}
