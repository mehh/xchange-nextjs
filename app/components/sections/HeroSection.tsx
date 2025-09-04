"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[810px] md:h-[810px] sm:h-[600px] bg-gradient-hero">
      {/* Background mask and blur effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 w-full h-full">
          <div
            className="absolute inset-0 w-full h-full bg-[#D9D9D9] opacity-100"
            style={{ filter: 'blur(2.5px)' }}
          />
          <div className="absolute left-4 md:left-[42px] top-[80px] md:top-[157px] right-4 md:right-[42px] h-[200px] md:h-[272px] flex items-center justify-center">
            <h1 className="text-center font-outfit text-[120px] sm:text-[200px] md:text-[300px] lg:text-[392px] font-normal leading-[100%] tracking-[-2px] md:tracking-[-7.84px] opacity-50 text-gradient-breathe select-none">
              Breathe
            </h1>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-overlay" />

      {/* Content */}
      <div className="relative z-10 w-full h-full">
        <div className="max-w-[1440px] mx-auto px-4 md:px-16 h-full">
          {/* Mobile layout */}
          <div className="md:hidden flex flex-col justify-end h-full pb-20">
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[#1C1C20] font-outfit text-[28px] font-normal leading-[110%] tracking-[-0.5px]"
              >
                Patient safety starts with perfecting positive pressure.
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="text-[#1C1C20] font-outfit text-[12px] font-normal leading-[140%] tracking-[-0.28px] uppercase opacity-70">
                  introduction
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center h-12 px-6 gap-2 rounded-full bg-[#1C1C20] text-white font-outfit text-[14px] font-normal leading-[100%] tracking-[-0.32px] uppercase hover:bg-[#1C1C20]/90 transition-colors"
                >
                  Let&apos;s talk
                </Link>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-[#1C1C20] font-outfit text-[14px] font-normal leading-[140%] tracking-[-0.32px] opacity-70"
              >
                The xchange™ nasal dock by Pneuma is designed for procedures involving moderate to deep sedation in patients with health challenges.
              </motion.p>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:flex items-end justify-between h-full pb-[176px]">
            {/* Left content area */}
            <div className="w-[537px]">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[#1C1C20] font-outfit text-[32px] lg:text-[40px] font-normal leading-[110%] tracking-[-0.8px] mb-12"
              >
                Patient safety starts with perfecting positive pressure.
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center gap-4"
              >
                <div className="flex items-center justify-center w-[165px] pt-2">
                  <span className="text-[#1C1C20] font-outfit text-[14px] font-normal leading-[140%] tracking-[-0.28px] uppercase opacity-70">
                    introduction
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right content area */}
            <div className="w-[442px] space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center h-12 px-6 gap-2 rounded-full bg-[#1C1C20] text-white font-outfit text-[16px] font-normal leading-[100%] tracking-[-0.32px] uppercase hover:bg-[#1C1C20]/90 transition-colors"
                >
                  Let&apos;s talk
                </Link>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-[#1C1C20] font-outfit text-[16px] font-normal leading-[140%] tracking-[-0.32px] opacity-70"
              >
                The xchange™ nasal dock by Pneuma is designed for procedures involving moderate to deep sedation in patients with health challenges. Significantly reduce the incidence of oxygen desaturation and decrease the occurrence of hypercapnia.
              </motion.p>
            </div>
          </div>

          {/* Divider line */}
          <div className="absolute bottom-[60px] md:bottom-[176px] left-4 md:left-16 right-4 md:right-16 h-px bg-[#1C1C20] opacity-20" />
        </div>
      </div>
    </section>
  );
}
