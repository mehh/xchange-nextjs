"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function StatisticsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  // Progress value driven by GSAP ScrollTrigger (0..1)
  const scrollProgress = useMotionValue(0);

  useEffect(() => {
    if (!containerRef.current || !pinRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    // Tunable total scroll distance while pinned (px)
    const SCROLL_DISTANCE = typeof window !== 'undefined' && window.innerWidth < 768 ? 1200 : 2000; // shorter on mobile

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: `+=${SCROLL_DISTANCE}`,
      pin: pinRef.current,
      scrub: true,
      onUpdate: (self) => {
        scrollProgress.set(self.progress);
      }
    });

    return () => {
      st.kill();
    };
  }, [scrollProgress]);

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
  const stat1Opacity = useTransform(scrollProgress, [0, 0.16, 0.33], [1, 1, 0]);
  const stat2Opacity = useTransform(scrollProgress, [0.33, 0.5, 0.66], [0, 1, 0]);
  const stat3Opacity = useTransform(scrollProgress, [0.66, 0.88, 1], [0, 1, 1]);

  // Subtle vertical motion to enhance transitions
  const stat1Y = useTransform(scrollProgress, [0, 0.16, 0.33], [0, 0, -12]);
  const stat2Y = useTransform(scrollProgress, [0.33, 0.5, 0.66], [12, 0, -12]);
  const stat3Y = useTransform(scrollProgress, [0.66, 0.9, 1], [12, 0, 0]);

  // Subtle overall fade for the right column when entering the pinned range (no exit dim).
  const rightColOpacity = useTransform(scrollProgress, [0, 0.03, 1], [0.2, 1, 1]);

  // Subtle group shift so the whole block appears to scroll into and out of view
  const groupY = useTransform(scrollProgress, [0, 0.08, 0.88, 1], [32, 0, 0, -160]);

  // Keep opacity solid to avoid revealing lighter backgrounds at release
  const sectionOpacity = useTransform(scrollProgress, [0, 1], [1, 1]);

  return (
    <section className="relative w-full bg-calm-dark overflow-hidden">
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 md:px-16">

        {/* Mobile: simplified static layout showing all stats at once */}
        <div className="md:hidden py-24">
          <div className="flex flex-col gap-8 w-full">
            {/* Heading and copy */}
            <div className="w-full flex flex-col gap-6">
              <h2 className="text-white font-outfit text-[28px] font-normal leading-[110%] tracking-[-0.56px]">
                Patients with medical issues that directly affect their breathing during procedures are on the rise.
              </h2>
              <p className="text-white font-outfit text-[16px] font-normal leading-[140%] tracking-[-0.32px] opacity-70">
                Airway obstruction leading to oxygen desaturation and/or hypercapnia is a common and serious complication during moderate to deep sedation. This risk is particularly pronounced in patients with known airway pathology.
              </p>
            </div>

            {/* Stats stacked */}
            <div className="flex flex-col divide-y divide-white/10 rounded-xl border border-white/10 overflow-hidden">
              {stats.map((s, idx) => (
                <div key={idx} className="p-6 bg-white/5 backdrop-blur-sm">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-outfit text-[64px] font-normal leading-[100%] tracking-[-1.2px] text-gradient-calm">
                      {s.percentage}
                    </h3>
                    <p className="text-white font-outfit text-[16px] font-normal leading-[130%] tracking-[-0.32px]">
                      {s.title}
                    </p>
                    <p className="text-white font-outfit text-[12px] font-normal leading-[130%] tracking-[-0.24px] opacity-80">
                      {s.source}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA below stats on mobile */}
            <div className="mt-6">
              <div className="h-12 px-6 inline-flex items-center rounded-full border border-white/50 self-start">
                <Link href="/patients" className="text-white font-outfit text-[16px] font-normal leading-[100%] tracking-[-0.32px] uppercase hover:opacity-80 transition-opacity duration-300">
                  see full list
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop/Tablet: original pinned animated layout */}
        <div ref={containerRef} className="relative hidden md:block">
          <div ref={pinRef} className="relative z-20">
            <motion.div
              className="flex justify-center items-center min-h-screen pt-[120px] md:pt-[176px] pb-[80px] md:pb-[104px]"
              style={{ y: groupY, opacity: sectionOpacity, willChange: "transform, opacity" }}
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center w-full">
            
            {/* Left content - stays fixed while pinned */}
            <div className="w-full max-w-[648px] lg:basis-[648px] flex-1 min-w-0 flex flex-col gap-6 md:gap-10">
              <h2 className="text-white font-outfit text-[28px] md:text-[40px] font-normal leading-[110%] md:leading-[100%] tracking-[-0.56px] md:tracking-[-0.8px]">
                Patients with medical issues that directly affect their breathing during procedures are on the rise.
              </h2>

              <div className="flex items-start gap-4">
                <div className="hidden lg:flex w-[165px] pt-2 justify-center items-center">
                  <span className="text-white font-outfit text-[14px] font-normal leading-[140%] tracking-[-0.28px] uppercase opacity-70">
                    The Problem
                  </span>
                </div>

                <p className="w-full max-w-[467px] text-white font-outfit text-[16px] md:text-[18px] font-normal leading-[140%] md:leading-[130%] tracking-[-0.32px] md:tracking-[-0.36px] opacity-70">
                  Airway obstruction leading to oxygen desaturation and/or hypercapnia is a common and serious complication during moderate to deep sedation. This risk is particularly pronounced in patients with known airway pathology.
                </p>
              </div>

              <div className="flex flex-col md:pl-[181px] gap-2">
                <div className="h-12 px-6 inline-flex items-center rounded-full border border-white/50 self-start">
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
            <motion.div className="w-full max-w-[538px] lg:pl-24 xl:pl-36 lg:ml-4 lg:border-l border-white/15 relative overflow-visible h-auto min-h-[420px] md:min-h-[500px] flex-1 min-w-0 flex items-center mt-10 lg:mt-0" aria-live="polite" style={{ opacity: rightColOpacity }}>
              
              {/* Stat 1 - OSA */}
              <motion.div
                style={{ opacity: stat1Opacity, y: stat1Y, willChange: "opacity, transform" }}
                className="absolute inset-y-0 left-0 right-0 lg:left-16 xl:left-28 flex flex-col gap-5 justify-center pr-4 lg:pr-6"
              >
                <h3 className="font-outfit text-[72px] md:text-[100px] lg:text-[122px] font-normal leading-[100%] tracking-[-1.44px] md:tracking-[-2.4px] lg:tracking-[-2.88px] text-gradient-calm">
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
                className="absolute inset-y-0 left-0 right-0 lg:left-16 xl:left-28 flex flex-col gap-5 justify-center pr-4 lg:pr-6"
              >
                <h3 className="font-outfit text-[72px] md:text-[100px] lg:text-[122px] font-normal leading-[100%] tracking-[-1.44px] md:tracking-[-2.4px] lg:tracking-[-2.88px] text-gradient-calm">
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
                className="absolute inset-y-0 left-0 right-0 lg:left-16 xl:left-28 flex flex-col gap-5 justify-center pr-4 lg:pr-6"
              >
                <h3 className="font-outfit text-[72px] md:text-[100px] lg:text-[122px] font-normal leading-[100%] tracking-[-1.44px] md:tracking-[-2.4px] lg:tracking-[-2.88px] text-gradient-calm">
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
      </div>
    </section>
  );
}
