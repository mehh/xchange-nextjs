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
    <section ref={sectionRef} className="relative w-full bg-off-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16">
        
        {/* Product image - responsive positioning */}
        <div className="relative w-full flex justify-center mb-16 md:mb-24">
          <motion.div
            className="relative w-full max-w-[1194px] aspect-[1194/1397]"
            style={{ opacity: imageOpacity, scale: imageScale }}
          >
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/993353e31db87e0e701cab7447c3eb9f6a34e0aa?width=2388"
              alt="Pneuma xchange nasal dock device"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 1194px"
              priority
            />
          </motion.div>
        </div>

        {/* Centered text - responsive positioning */}
        <div className="flex justify-center">
          <div className="max-w-[573px] text-center">
            <div className="font-outfit text-[28px] md:text-[32px] lg:text-[40px] font-normal leading-[130%] tracking-[-0.5px] md:tracking-[-0.8px]">
              {/* First phrase - "Positive pressure" */}
              <motion.span
                className="inline-block text-verdant"
                style={{
                  opacity: word1Progress,
                  y: useTransform(word1Progress, [0, 1], [50, 0])
                }}
              >
                Positive pressure
              </motion.span>

              {/* Space */}
              <motion.span
                className="inline-block text-verdant opacity-40"
                style={{
                  opacity: useTransform(word2Progress, [0, 1], [0, 0.4])
                }}
              >
                {" "}
              </motion.span>

              {/* Second phrase - "perfected." */}
              <motion.span
                className="inline-block text-verdant"
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
                className="inline-block text-verdant opacity-40"
                style={{
                  opacity: word3Progress,
                  y: useTransform(word3Progress, [0, 1], [50, 0])
                }}
              >
                For patients
              </motion.span>

              {/* Space */}
              <motion.span
                className="inline-block text-verdant opacity-40"
                style={{
                  opacity: useTransform(word3Progress, [0, 1], [0, 0.4])
                }}
              >
                {" "}
              </motion.span>

              {/* Fourth phrase - "who need it the most." */}
              <motion.span
                className="inline-block text-verdant opacity-40"
                style={{
                  opacity: word4Progress,
                  y: useTransform(word4Progress, [0, 1], [50, 0])
                }}
              >
                who need it the most.
              </motion.span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute left-0 bottom-0 w-full h-[100px] md:h-[200px] bg-gradient-to-t from-off-white to-transparent pointer-events-none" />
    </section>
  );
}
