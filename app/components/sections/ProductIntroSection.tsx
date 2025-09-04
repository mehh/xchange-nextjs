"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProductIntroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Create staggered animations for each word/phrase
  const word1Progress = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const word2Progress = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const word3Progress = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const word4Progress = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.8]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-[#FFFEFB] flex items-center justify-center overflow-hidden py-16 md:py-24">
      {/* Product image with scroll-based transforms */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity: imageOpacity, scale: imageScale }}
      >
        <div className="relative w-[300px] h-[350px] sm:w-[500px] sm:h-[600px] md:w-[800px] md:h-[900px] lg:w-[1000px] lg:h-[1200px]">
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/993353e31db87e0e701cab7447c3eb9f6a34e0aa?width=2388"
            alt="Pneuma xchange nasal dock device"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 300px, (max-width: 768px) 500px, (max-width: 1024px) 800px, 1000px"
            priority
          />
        </div>
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute left-0 bottom-0 w-full h-[100px] md:h-[200px] bg-gradient-fade-top pointer-events-none" />
      <div className="absolute left-0 top-0 w-full h-[100px] md:h-[200px] bg-gradient-fade-bottom pointer-events-none" />

      {/* Scroll-triggered text content */}
      <div className="relative z-10 w-[90%] max-w-[800px] text-center px-4">
        <div className="font-outfit text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-normal leading-[130%] tracking-[-0.5px] md:tracking-[-0.8px]">
          {/* First phrase - "Positive pressure" */}
          <motion.span
            className="inline-block text-[#44695A]"
            style={{
              opacity: word1Progress,
              y: useTransform(word1Progress, [0, 1], [50, 0])
            }}
          >
            Positive pressure
          </motion.span>

          {/* Space */}
          <motion.span
            className="inline-block text-[#44695A] opacity-40"
            style={{
              opacity: useTransform(word2Progress, [0, 1], [0, 0.4])
            }}
          >
            {" "}
          </motion.span>

          {/* Second phrase - "perfected." */}
          <motion.span
            className="inline-block text-[#44695A]"
            style={{
              opacity: word2Progress,
              y: useTransform(word2Progress, [0, 1], [50, 0])
            }}
          >
            perfected.
          </motion.span>

          <br />

          {/* Third phrase - "For patients" */}
          <motion.span
            className="inline-block text-[#44695A] opacity-40"
            style={{
              opacity: word3Progress,
              y: useTransform(word3Progress, [0, 1], [50, 0])
            }}
          >
            For patients
          </motion.span>

          {/* Space */}
          <motion.span
            className="inline-block text-[#44695A] opacity-40"
            style={{
              opacity: useTransform(word3Progress, [0, 1], [0, 0.4])
            }}
          >
            {" "}
          </motion.span>

          {/* Fourth phrase - "who need it the most." */}
          <motion.span
            className="inline-block text-[#44695A] opacity-40"
            style={{
              opacity: word4Progress,
              y: useTransform(word4Progress, [0, 1], [50, 0])
            }}
          >
            who need it the most.
          </motion.span>
        </div>
      </div>
    </section>
  );
}
