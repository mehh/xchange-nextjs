"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const chartData = [
  {
    label: "Standard Nasal Cannula",
    symbol: "≤",
    value: 3,
    height: 72,
    left: 336
  },
  {
    label: "High Flow Nasal Cannula", 
    symbol: "≤ 7",
    value: 8,
    height: 195,
    left: 608
  },
  {
    label: "xchange nasal dock",
    symbol: "≥ 20", 
    value: 20,
    height: 540,
    left: 880
  }
];

const yAxisLabels = [
  { value: "25", top: 360 },
  { value: "20", top: 487 },
  { value: "15", top: 614 },
  { value: "10", top: 740 },
  { value: "5", top: 867 },
  { value: "0", top: 994 }
];

export default function PressureChartSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative w-full h-[1119px] bg-off-white overflow-hidden">
      <div className="px-16 py-26">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-slate font-outfit text-[40px] font-normal leading-[130%] tracking-[-0.8px] max-w-[648px]"
        >
          High risk patients require 12 — 25 cm H2O to perfectly open their airway.
        </motion.h2>

        {/* Chart container */}
        <div className="relative mt-20 ml-12">
          {/* Chart area background with grid */}
          <div className="relative w-[1065px] h-[634px]">
            {/* Horizontal grid lines */}
            <div className="absolute left-[200px] top-0 w-[865px] h-full opacity-10">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-px bg-slate"
                  style={{ top: `${127 * i}px` }}
                />
              ))}
            </div>

            {/* Y-axis labels on the LEFT */}
            {yAxisLabels.map((label, index) => (
              <motion.div
                key={label.value}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 0.3, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="absolute text-slate font-outfit text-[20px] font-normal leading-[100%] tracking-[-0.4px] text-right"
                style={{ 
                  left: "176px", 
                  top: `${label.top - 360}px`, 
                  width: "32px" 
                }}
              >
                {label.value}
              </motion.div>
            ))}

            {/* Chart bars - properly spaced */}
            {chartData.map((item, index) => {
              const barLeft = 224 + (index * 272); // Proper spacing between bars
              const barBottom = 634; // Chart bottom
              
              return (
                <div key={item.label}>
                  {/* Bar */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={isInView ? { height: item.height, opacity: 1 } : {}}
                    transition={{ 
                      duration: 1.2, 
                      delay: 0.3 + index * 0.2,
                      ease: "easeOut"
                    }}
                    className="absolute w-56 rounded-[20px] border-t-[3px] border-verdant origin-bottom"
                    style={{
                      left: `${barLeft}px`,
                      bottom: "0px",
                      background: "linear-gradient(180deg, #44695A 0%, rgba(68, 105, 90, 0.20) 100%)"
                    }}
                  />

                  {/* Label and symbol below bar */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                    className="absolute flex flex-col gap-[18px] w-56"
                    style={{
                      left: `${barLeft}px`,
                      top: `${barBottom - item.height - 180}px`
                    }}
                  >
                    <div className="text-slate font-outfit text-[64px] font-normal leading-[100%] tracking-[-1.28px]">
                      {item.symbol}
                    </div>
                    <div className="text-slate font-outfit text-[20px] font-normal leading-[100%] tracking-[-0.4px]">
                      {item.label}
                    </div>
                  </motion.div>

                  {/* Gradient line extending from bar */}
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={isInView ? { width: `${144 + index * 126}px`, opacity: 0.3 } : {}}
                    transition={{ duration: 1, delay: 1.2 + index * 0.2 }}
                    className="absolute h-px"
                    style={{
                      left: `${barLeft}px`,
                      top: `${barBottom - 50}px`,
                      background: "linear-gradient(90deg, #44695A 42.31%, #E8ECE6 100%)"
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
