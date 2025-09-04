"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
    <section className="relative w-full bg-off-white py-16 md:py-24 overflow-hidden">
      {/* Background image - contained within section boundaries */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full max-w-[1440px] mx-auto">
          <div className="absolute -left-4 md:-left-8 -top-4 md:-top-8 w-[calc(100%+2rem)] md:w-[calc(100%+4rem)] h-[calc(100%+2rem)] md:h-[calc(100%+4rem)]">
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/5a65ed19424fdd7140ad1fb2c7596978ec0e57fc?width=3762"
              alt="Product background"
              fill
              className="object-cover opacity-30"
              sizes="100vw"
            />
          </div>
        </div>
      </div>

      {/* Top gradient fade */}
      <div className="absolute left-0 top-0 w-full h-[200px] md:h-[400px] bg-gradient-fade-bottom pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-16">
        
        {/* Section header */}
        <div className="max-w-4xl mb-12 md:mb-16 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-slate font-outfit text-[28px] md:text-[32px] lg:text-[40px] font-normal leading-[100%] tracking-[-0.5px] lg:tracking-[-0.8px] mb-6 md:mb-10"
          >
            Introducing the xchange nasal dock. The evolution of CPAP devices.
          </motion.h2>

          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="flex items-center justify-center md:w-[165px] pt-2">
              <span className="text-slate font-outfit text-[12px] md:text-[14px] font-normal leading-[140%] tracking-[-0.28px] uppercase opacity-70">
                The product
              </span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-[467px] text-slate font-outfit text-[16px] md:text-[18px] font-normal leading-[130%] tracking-[-0.36px] opacity-70"
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
              className="p-6 md:p-7 flex flex-col justify-center items-center gap-4 rounded-lg bg-blur-card min-h-[140px] hover:bg-black/10 transition-all duration-300"
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

        {/* Decorative elements - positioned responsively */}
        <div className="hidden lg:block">
          {/* Decorative circles - responsive positioning */}
          <div className="absolute top-1/4 right-[10%] w-[80px] h-[80px] xl:w-[110px] xl:h-[110px] opacity-20">
            <svg width="132" height="132" viewBox="0 0 132 132" fill="none">
              <path d="M92.0421 37.9667C96.4791 42.0628 99.8832 47.1513 101.976 52.8157C104.069 58.4801 104.79 64.5595 104.082 70.5565" stroke="#44695A" strokeWidth="1.5"/>
              <path d="M46.9779 32.9784C52.2075 29.9591 58.0777 28.2209 64.1081 27.906C70.1385 27.591 76.1578 28.7084 81.6735 31.1665" stroke="#44695A" strokeWidth="1.5"/>
              <path opacity="0.3" d="M28.7704 74.4244C27.4569 68.5304 27.5575 62.4091 29.0641 56.5614C30.5706 50.7137 33.4403 45.3058 37.4383 40.7802" stroke="#44695A" strokeWidth="1.5"/>
              <g opacity="0.8">
                <circle cx="66" cy="66" r="38" fill="url(#paint0_radial)" opacity="0.1"/>
              </g>
              <circle cx="66.103" cy="66.103" r="7.5" fill="#44695A"/>
              <defs>
                <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse">
                  <stop offset="0.302885" stopColor="white"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </radialGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute top-2/3 left-[15%] w-[80px] h-[80px] xl:w-[110px] xl:h-[110px] opacity-20">
            <svg width="132" height="132" viewBox="0 0 132 132" fill="none">
              <path d="M92.0421 37.9667C96.4791 42.0628 99.8832 47.1513 101.976 52.8157C104.069 58.4801 104.79 64.5595 104.082 70.5565" stroke="#44695A" strokeWidth="1.5"/>
              <circle cx="66.103" cy="66.103" r="7.5" fill="#44695A"/>
            </svg>
          </div>

          {/* Decorative connecting lines - responsive */}
          <div className="absolute top-1/3 right-[15%] w-[60px] h-[50px] xl:w-[92px] xl:h-[77px] opacity-20">
            <svg width="94" height="79" viewBox="0 0 94 79" fill="none">
              <path opacity="0.2" d="M1 1L6.63825 1.82874C47.9578 7.90215 81.8131 37.7626 93 78V78" stroke="#44695A" strokeLinecap="square" strokeDasharray="2 6"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
