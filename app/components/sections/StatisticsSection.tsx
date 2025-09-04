"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function StatisticsSection() {
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

  return (
    <section className="w-full bg-[#3A5261] py-16 md:py-[104px]">
      <div className="min-h-screen">
        <div className="max-w-[1440px] mx-auto px-4 md:px-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[126px] min-h-screen items-center">

            {/* Left content - updates based on scroll */}
            <div className="w-full lg:w-[648px] flex flex-col gap-6 md:gap-10">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-white font-outfit text-[28px] md:text-[32px] lg:text-[40px] font-normal leading-[100%] tracking-[-0.5px] md:tracking-[-0.8px]"
              >
                Patients with medical issues that directly affect their breathing during procedures are on the rise.
              </motion.h2>

              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex items-center justify-center md:w-[165px] pt-2">
                  <span className="text-white font-outfit text-[12px] md:text-[14px] font-normal leading-[140%] tracking-[-0.28px] uppercase opacity-70">
                    The Problem
                  </span>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-full md:w-[467px] text-white font-outfit text-[16px] md:text-[18px] font-normal leading-[130%] tracking-[-0.36px] opacity-70"
                >
                  Airway obstruction leading to oxygen desaturation and/or hypercapnia is a common and serious complication during moderate to deep sedation. This risk is particularly pronounced in patients with known airway pathology.
                </motion.p>
              </div>

              <div className="flex justify-center md:justify-start md:pl-[181px]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <Link
                    href="/patients"
                    className="inline-flex items-center justify-center h-12 px-6 rounded-full border border-white/50 text-white font-outfit text-[14px] md:text-[16px] font-normal leading-[100%] tracking-[-0.32px] uppercase hover:bg-white/10 transition-colors"
                  >
                    see full list
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Right statistics - staggered animations */}
            <div className="w-full lg:w-[538px] flex flex-col gap-16 md:gap-24 lg:gap-32 pt-8 lg:pt-0 lg:pl-12 lg:border-l border-white/15">

              {/* Stat 1 - OSA */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col gap-3 md:gap-5"
              >
                <h3 className="font-outfit text-[80px] md:text-[120px] lg:text-[144px] font-normal leading-[100%] tracking-[-1.5px] md:tracking-[-2.88px] text-gradient-calm">
                  {stats[0].percentage}
                </h3>
                <div className="flex flex-col gap-1">
                  <p className="text-white font-outfit text-[16px] md:text-[18px] font-normal leading-[130%] tracking-[-0.36px]">
                    {stats[0].title}
                  </p>
                  <p className="text-white font-outfit text-[11px] md:text-[12px] font-normal leading-[130%] tracking-[-0.24px]">
                    {stats[0].source}
                  </p>
                </div>
              </motion.div>

              {/* Stat 2 - Obesity */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col gap-3 md:gap-5 opacity-30"
              >
                <h3 className="font-outfit text-[80px] md:text-[120px] lg:text-[144px] font-normal leading-[100%] tracking-[-1.5px] md:tracking-[-2.88px] text-gradient-calm">
                  {stats[1].percentage}
                </h3>
                <div className="flex flex-col gap-1">
                  <p className="text-white font-outfit text-[16px] md:text-[18px] font-normal leading-[130%] tracking-[-0.36px]">
                    {stats[1].title}
                  </p>
                  <p className="text-white font-outfit text-[11px] md:text-[12px] font-normal leading-[130%] tracking-[-0.24px]">
                    {stats[1].source}
                  </p>
                </div>
              </motion.div>

              {/* Stat 3 - Chronic Conditions */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col gap-3 md:gap-5 opacity-30"
              >
                <h3 className="font-outfit text-[80px] md:text-[120px] lg:text-[144px] font-normal leading-[100%] tracking-[-1.5px] md:tracking-[-2.88px] text-gradient-calm">
                  {stats[2].percentage}
                </h3>
                <div className="flex flex-col gap-1">
                  <p className="text-white font-outfit text-[16px] md:text-[18px] font-normal leading-[130%] tracking-[-0.36px]">
                    {stats[2].title}
                  </p>
                  <p className="text-white font-outfit text-[11px] md:text-[12px] font-normal leading-[130%] tracking-[-0.24px]">
                    {stats[2].source}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
