"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ScienceHeroSection() {
  return (
    <section className="relative w-full min-h-[600px] md:h-[810px] bg-off-white overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0">
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/d3c4979d30dd1d830b542ef9081e50aed88b3fe1?width=2880"
            alt="Medical device background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        
        {/* Gradient overlay bottom */}
        <div 
          className="absolute bottom-0 left-0 w-full h-80"
          style={{
            background: "linear-gradient(180deg, rgba(255, 254, 251, 0.00) 0%, #FFFEFB 50%)"
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 w-full h-full flex flex-col pt-16">
        {/* Title section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute left-4 top-24 md:left-16 md:top-[168px] px-4"
        >
          <h1 className="text-slate font-outfit text-[48px] md:text-[80px] font-normal leading-[110%] tracking-[-0.96px] md:tracking-[-1.6px] text-left">
            The science
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
