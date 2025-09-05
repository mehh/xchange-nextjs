"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StatisticsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Track progress while this section is pinned in the viewport
    offset: ["start start", "end end"]
  });

  const stats = [
    {
      percentage: "26%",
      title: "Suffer from OSA (Obstructed Sleep Apnea)",
      source: "*National Sleep Foundation"
    },
    {
      percentage: "42.4%",
      title: "Suffer from BMI Indicated-Obesity",
      source: "*Center for Disease Control & Prevention"
    },
    {
      percentage: "76.4%",
      title: "Suffer from Chronic Conditions",
      source: "*World Health Organization"
    }
  ];

  // Create smoother cross-fades for 3 stats over the scroll duration
  // Progress segments roughly split into thirds with slight overlaps for nicer blending
  const stat1Opacity = useTransform(scrollYProgress, [0, 0.16, 0.33], [1, 1, 0]);
  const stat2Opacity = useTransform(scrollYProgress, [0.33, 0.5, 0.66], [0, 1, 0]);
  const stat3Opacity = useTransform(scrollYProgress, [0.66, 0.88, 1], [0, 1, 1]);

  // Subtle vertical motion to enhance transitions
  const stat1Y = useTransform(scrollYProgress, [0, 0.16, 0.33], [0, 0, -12]);
  const stat2Y = useTransform(scrollYProgress, [0.33, 0.5, 0.66], [12, 0, -12]);
  const stat3Y = useTransform(scrollYProgress, [0.66, 0.9, 1], [12, 0, 0]);

  // Subtle overall fade for the right column when entering the pinned range (no exit dim).
  const rightColOpacity = useTransform(scrollYProgress, [0, 0.03, 1], [0.2, 1, 1]);

  // Subtle group shift so the whole block appears to scroll into and out of view
  const groupY = useTransform(scrollYProgress, [0, 0.08, 0.88, 1], [32, 0, 0, -160]);

  // Keep opacity solid to avoid revealing lighter backgrounds at release
  const sectionOpacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

  // No JS fallback: keep pure CSS sticky to avoid layout toggles that can flash

  return (
    <div ref={containerRef} className="relative z-[1] h-[300vh] bg-calm-dark mb-[-1px]">
      <div className={"sticky top-0 inset-x-0 h-screen bg-calm-dark overflow-hidden z-20 mb-[-1px]"}>
        <motion.div className="flex justify-center items-center h-full" style={{ padding: "176px 64px 104px 64px", y: groupY, opacity: sectionOpacity, willChange: "transform, opacity" }}>
          <div className="flex gap-[126px] items-center">
            
            {/* Left content - stays fixed while pinned */}
            <div className="w-[648px] flex flex-col gap-10">
              <h2 className="text-white font-outfit text-[40px] font-normal leading-[100%] tracking-[-0.8px]">
                Patients with medical issues that directly affect their breathing during procedures are on the rise.
              </h2>

              <div className="flex items-start gap-4">
                <div className="flex w-[165px] pt-2 justify-center items-center">
                  <span className="text-white font-outfit text-[14px] font-normal leading-[140%] tracking-[-0.28px] uppercase opacity-70">
                    The Problem
                  </span>
                </div>

                <p className="w-[467px] text-white font-outfit text-[18px] font-normal leading-[130%] tracking-[-0.36px] opacity-70">
                  Airway obstruction leading to oxygen desaturation and/or hypercapnia is a common and serious complication during moderate to deep sedation. This risk is particularly pronounced in patients with known airway pathology.
                </p>
              </div>

              <div className="flex flex-col pl-[181px] gap-2">
                <div className="h-12 px-6 flex justify-center items-center rounded-full border border-white/50">
                  <Link
                    href="/patients"
                    className="text-white font-outfit text-[16px] font-normal leading-[100%] tracking-[-0.32px] uppercase hover:opacity-80 transition-opacity duration-300"
                  >
                    see full list
                  </Link>
                </div>
              </div>
            </div>

            {/* Right statistics - fade in/out based on scroll */}
            <motion.div className="w-[538px] pl-12 border-l border-white/15 relative h-full flex items-center" aria-live="polite" style={{ opacity: rightColOpacity }}>
              
              {/* Stat 1 - OSA */}
              <motion.div
                style={{ opacity: stat1Opacity, y: stat1Y, willChange: "opacity, transform" }}
                className="absolute inset-0 flex flex-col gap-5 justify-center"
              >
                <h3 className="font-outfit text-[144px] font-normal leading-[100%] tracking-[-2.88px] text-gradient-calm">
                  {stats[0].percentage}
                </h3>
                <div className="flex flex-col gap-1">
                  <p className="text-white font-outfit text-[18px] font-normal leading-[130%] tracking-[-0.36px]">
                    {stats[0].title}
                  </p>
                  <p className="text-white font-outfit text-[12px] font-normal leading-[130%] tracking-[-0.24px]">
                    {stats[0].source}
                  </p>
                </div>
              </motion.div>

              {/* Stat 2 - Obesity */}
              <motion.div
                style={{ opacity: stat2Opacity, y: stat2Y, willChange: "opacity, transform" }}
                className="absolute inset-0 flex flex-col gap-5 justify-center"
              >
                <h3 className="font-outfit text-[144px] font-normal leading-[100%] tracking-[-2.88px] text-gradient-calm">
                  {stats[1].percentage}
                </h3>
                <div className="flex flex-col gap-1">
                  <p className="text-white font-outfit text-[18px] font-normal leading-[130%] tracking-[-0.36px]">
                    {stats[1].title}
                  </p>
                  <p className="text-white font-outfit text-[12px] font-normal leading-[130%] tracking-[-0.24px]">
                    {stats[1].source}
                  </p>
                </div>
              </motion.div>

              {/* Stat 3 - Chronic Conditions */}
              <motion.div
                style={{ opacity: stat3Opacity, y: stat3Y, willChange: "opacity, transform" }}
                className="absolute inset-0 flex flex-col gap-5 justify-center"
              >
                <h3 className="font-outfit text-[144px] font-normal leading-[100%] tracking-[-2.88px] text-gradient-calm">
                  {stats[2].percentage}
                </h3>
                <div className="flex flex-col gap-1">
                  <p className="text-white font-outfit text-[18px] font-normal leading-[130%] tracking-[-0.36px]">
                    {stats[2].title}
                  </p>
                  <p className="text-white font-outfit text-[12px] font-normal leading-[130%] tracking-[-0.24px]">
                    {stats[2].source}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
