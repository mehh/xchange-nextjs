"use client";

import { motion } from "framer-motion";

export default function ProductIntroSection() {
  const line1Text = "Positive pressure perfected.";
  const line2Text = "For patients who need it the most.";
  const line1Words = line1Text.split(" ");
  const line2Words = line2Text.split(" ");

  const linesVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.5 }
    }
  } as const;

  const lineVariants = {
    hidden: { opacity: 0, y: 6 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.1 }
    }
  } as const;

  const wordVariants = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } }
  } as const;

  return (
    <section
      className="relative w-full bg-off-white bg-no-repeat bg-center overflow-visible overscroll-none bg-[length:70%_auto] md:bg-[length:80%_auto] lg:bg-[length:90%_auto]"
      style={{ backgroundImage: "url('/assets/large-cpap.png')" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-16 w-full">
        <div className="w-full flex items-center justify-center py-40 md:py-64 lg:py-80 min-h-[70vh]">
          <motion.div
            variants={linesVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center px-4"
          >
            <div className="inline-block font-outfit text-[clamp(18px,4vw,40px)] font-normal leading-[130%] tracking-[-0.5px] md:tracking-[-0.8px] whitespace-nowrap">
              <motion.div variants={lineVariants} className="text-verdant whitespace-nowrap">
                {line1Words.map((word, i) => (
                  <span key={`l1-wrap-${i}`} className="inline-block">
                    <motion.span
                      variants={wordVariants}
                      className={`inline-block ${i < line1Words.length - 1 ? 'mr-[0.5ch]' : ''}`}
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </motion.div>
              <motion.div variants={lineVariants} className="text-verdant opacity-40 whitespace-nowrap">
                {line2Words.map((word, i) => (
                  <span key={`l2-wrap-${i}`} className="inline-block">
                    <motion.span
                      variants={wordVariants}
                      className={`inline-block ${i < line2Words.length - 1 ? 'mr-[0.5ch]' : ''}`}
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Top fade/blur overlay with gradient mask to soften into content */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-20 md:h-28 lg:h-36 z-10 bg-gradient-to-b from-off-white/95 to-transparent backdrop-blur-[3px] md:backdrop-blur"
        style={{
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)"
        }}
      />
      {/* Bottom fade/blur overlay with gradient mask to soften into content */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 md:h-28 lg:h-36 z-10 bg-gradient-to-t from-off-white/95 to-transparent backdrop-blur-[3px] md:backdrop-blur"
        style={{
          WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)",
          maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)"
        }}
      />
    </section>
  );
}
