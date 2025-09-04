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

  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.8]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  // Letter-by-letter animation for two lines
  const line1Text = "Positive pressure perfected.";
  const line2Text = "For patients who need it the most.";
  const line1Words = line1Text.split(" ");
  const line2Words = line2Text.split(" ");

  return (
    <section ref={sectionRef} className="relative w-full bg-off-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16 w-full">

        {/* Container with image and overlaid text */}
        <div className="relative w-full flex justify-center items-start">

          {/* Product image - centered */}
          <motion.div
            className="relative w-full max-w-[1194px]"
            style={{ opacity: imageOpacity, y: imageY }}
          >
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/993353e31db87e0e701cab7447c3eb9f6a34e0aa?width=2388"
              alt="Pneuma xchange nasal dock device"
              width={1194}
              height={1397}
              className="w-full h-auto object-contain"
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 1194px"
              priority
            />
          </motion.div>

          {/* Overlaid text in center of image */}
          <motion.div className="absolute inset-0 flex items-center justify-center" style={{ y: textY }}>
            <div className="max-w-[573px] text-center px-4">
              <div className="font-outfit text-[clamp(18px,4vw,40px)] font-normal leading-[130%] tracking-[-0.5px] md:tracking-[-0.8px]">
                {/* First line: "Positive pressure perfected." */}
                <div className="block whitespace-nowrap">
                  {(() => {
                    let letterIndex = 0;
                    return line1Words.map((word, wordIndex) => {
                      const wordLetters = word.split("");
                      const wordElement = (
                        <span key={`word1-${wordIndex}`} className="inline-block whitespace-nowrap">
                          {wordLetters.map((letter, letterIndexInWord) => {
                            const currentLetterIndex = letterIndex++;
                            const letterProgress = useTransform(
                              scrollYProgress,
                              [0.1 + (currentLetterIndex * 0.01), 0.2 + (currentLetterIndex * 0.01)],
                              [0, 1]
                            );

                            return (
                              <motion.span
                                key={`line1-${wordIndex}-${letterIndexInWord}`}
                                className="text-verdant"
                                style={{
                                  opacity: letterProgress
                                }}
                              >
                                {letter}
                              </motion.span>
                            );
                          })}
                          {wordIndex < line1Words.length - 1 && <span className="text-verdant">&nbsp;</span>}
                        </span>
                      );
                      return wordElement;
                    });
                  })()}
                </div>

                {/* Second line: "For patients who need it the most." */}
                <div className="block whitespace-nowrap">
                  {(() => {
                    let letterIndex = line1Text.length; // Continue from first line
                    return line2Words.map((word, wordIndex) => {
                      const wordLetters = word.split("");
                      const wordElement = (
                        <span key={`word2-${wordIndex}`} className="inline-block whitespace-nowrap">
                          {wordLetters.map((letter, letterIndexInWord) => {
                            const currentLetterIndex = letterIndex++;
                            const letterProgress = useTransform(
                              scrollYProgress,
                              [0.1 + (currentLetterIndex * 0.01), 0.2 + (currentLetterIndex * 0.01)],
                              [0, 1]
                            );

                            return (
                              <motion.span
                                key={`line2-${wordIndex}-${letterIndexInWord}`}
                                className="text-verdant opacity-40"
                                style={{
                                  opacity: useTransform(letterProgress, [0, 1], [0, 0.4])
                                }}
                              >
                                {letter}
                              </motion.span>
                            );
                          })}
                          {wordIndex < line2Words.length - 1 && <span className="text-verdant opacity-40">&nbsp;</span>}
                        </span>
                      );
                      return wordElement;
                    });
                  })()}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
