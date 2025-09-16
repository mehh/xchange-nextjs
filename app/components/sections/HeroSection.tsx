"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[810px] bg-gradient-hero">

      {/* Woman background image layer */}
      <div
        className="absolute inset-0 w-full h-full z-10"
        style={{
          backgroundImage: 'url(/Container-2.png)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Large "Breathe" text overlay - behind woman */}
      <div className="absolute inset-0 flex items-center justify-center px-4 z-5">
        <h1 className="text-center font-outfit text-[120px] sm:text-[200px] md:text-[300px] lg:text-[392px] font-normal leading-[100%] tracking-[-2px] md:tracking-[-7.84px] opacity-50 text-gradient-breathe select-none pointer-events-none">
          Breathe
        </h1>
      </div>

      {/* Bottom 1/3 gradient blur overlay */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-overlay-bottom z-20" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-overlay z-30" />

      {/* Content - responsive positioning */}
      <div className="relative z-40 w-full h-full flex flex-col justify-end pb-16 md:pb-24">
        <div className="max-w-[1440px] mx-auto px-4 md:px-16 w-full">
          
          {/* Mobile layout */}
          <div className="md:hidden space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate font-outfit text-[28px] font-normal leading-[110%] tracking-[-0.5px]"
            >
              Patient safety starts with perfecting positive pressure.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-slate font-outfit text-[12px] font-normal leading-[140%] tracking-[-0.28px] uppercase opacity-70">
                introduction
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-slate font-outfit text-[14px] font-normal leading-[140%] tracking-[-0.32px] opacity-70"
            >
              The xchange™ nasal dock by Pneuma is designed for procedures involving moderate to deep sedation in patients with health challenges.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 gap-2 rounded-full bg-slate text-white font-outfit text-[14px] font-normal leading-[100%] tracking-[-0.32px] uppercase hover:bg-slate/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Let&apos;s talk
              </Link>
            </motion.div>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:block space-y-8">
            {/* Top row: Patient safety title + Let's talk button */}
            <div className="flex items-end">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-slate font-outfit text-[32px] lg:text-[40px] font-normal leading-[110%] tracking-[-0.8px] max-w-[537px] flex-1"
              >
                Patient safety starts with perfecting positive pressure.
              </motion.h2>

              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center h-12 px-6 gap-2 rounded-full bg-slate text-white font-outfit text-[16px] font-normal leading-[100%] tracking-[-0.32px] uppercase hover:bg-slate/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Let&apos;s talk
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Divider line */}
            <div className="w-full h-px bg-slate opacity-20" />

            {/* Bottom row: Introduction + Description */}
            <div className="flex justify-between items-start pt-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="text-slate font-outfit text-[14px] font-normal leading-[140%] tracking-[-0.28px] uppercase opacity-70">
                  introduction
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-slate font-outfit text-[16px] font-normal leading-[140%] tracking-[-0.32px] opacity-70 max-w-[442px]"
              >
                The xchange™ nasal dock by Pneuma is designed for procedures involving moderate to deep sedation in patients with health challenges. Significantly reduce the incidence of oxygen desaturation and decrease the occurrence of hypercapnia.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
