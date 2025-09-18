"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function WhitePaperSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative w-full bg-[#F7F6F3] py-16">
      <div className="container-responsive">
        {/* Container for both label and card with consistent width */}
        <div className="w-full max-w-[1090px] mx-auto">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 0.7, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-slate font-outfit text-[14px] font-normal leading-[140%] tracking-[-0.28px] uppercase mb-6"
          >
            white papers
          </motion.div>

          {/* White paper card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-12 p-6 sm:p-12 rounded-2xl border border-slate/20 bg-white w-full"
          >
          {/* File icon */}
          <div className="flex-shrink-0">
            <svg 
              width="96" 
              height="96" 
              viewBox="0 0 96 96" 
              fill="none" 
              className="w-16 h-16 sm:w-24 sm:h-24"
            >
              <g clipPath="url(#clip0_343_112)">
                <path 
                  d="M97.5 -1.5V97.5H-1.5V-1.5H97.5Z" 
                  stroke="#1C1C20" 
                  strokeWidth="3"
                />
                <path 
                  d="M75 84H21C20.2044 84 19.4413 83.6839 18.8787 83.1213C18.3161 82.5587 18 81.7956 18 81V15C18 14.2044 18.3161 13.4413 18.8787 12.8787C19.4413 12.3161 20.2044 12 21 12H57L78 33V81C78 81.7956 77.6839 82.5587 77.1213 83.1213C76.5587 83.6839 75.7956 84 75 84Z" 
                  stroke="#1C1C20" 
                  strokeWidth="3"
                />
                <g clipPath="url(#clip1_343_112)">
                  <path 
                    d="M43.8613 65.0476C48.0001 57.9805 47.9617 52.7484 48 49.5L48 83.1732C48 88.6685 45.3988 93.8223 41.0227 96.9978C38.9353 98.5125 36.5333 99.51 34.0059 99.9119L21.1938 101.949C18.3773 102.397 15.9963 99.8145 16.5922 96.958L18.1772 89.3596C18.8638 86.0678 20.9258 83.2615 23.7493 81.5418C29.8834 77.8059 40.5055 70.7777 43.8613 65.0476Z" 
                    fill="#1C1C20"
                  />
                  <path 
                    d="M52.1387 65.0476C47.9999 57.9805 48.0383 52.7484 48 49.5L48 83.1732C48 88.6685 50.6012 93.8223 54.9773 96.9978C57.0647 98.5125 59.4667 99.51 61.9941 99.9119L74.8062 101.949C77.6227 102.397 80.0037 99.8145 79.4078 96.958L77.8228 89.3596C77.1362 86.0678 75.0743 83.2615 72.2507 81.5418C66.1166 77.8059 55.4945 70.7777 52.1387 65.0476Z" 
                    fill="#1C1C20"
                  />
                </g>
                <path 
                  d="M57 12V33H78" 
                  stroke="#1C1C20" 
                  strokeWidth="3"
                />
              </g>
              <defs>
                <clipPath id="clip0_343_112">
                  <rect width="96" height="96" fill="white"/>
                </clipPath>
                <clipPath id="clip1_343_112">
                  <rect width="63" height="34.5" fill="white" transform="translate(16.5 49.5)"/>
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center gap-4 flex-1 text-center sm:text-left">
            <h3 className="text-slate font-outfit text-[36px] md:text-[56px] font-normal leading-[100%] tracking-[-0.72px] md:tracking-[-1.12px]">
              xchange nasal dock
            </h3>
            <div className="flex items-center gap-4">
              <span className="text-slate font-outfit text-[16px] font-normal leading-[130%] tracking-[-0.32px] opacity-70">
                WHITE PAPER
              </span>
              <span className="text-slate font-outfit text-[16px] font-normal leading-[130%] tracking-[-0.32px] opacity-70">
                08.2025
              </span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4 flex-shrink-0 w-full sm:w-auto">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link
                href="/whitepaper"
                className="flex h-12 px-6 justify-center items-center gap-2 rounded-full bg-slate text-white font-outfit text-[16px] font-normal leading-[100%] tracking-[-0.32px] uppercase hover:bg-slate/90 transition-all duration-300 w-full sm:w-auto"
              >
                learn more
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
              <Link
                href="/files/xchange-whitepaper.pdf"
                target="_blank"
                className="flex h-12 px-6 justify-center items-center gap-2 rounded-full border border-slate text-slate font-outfit text-[16px] font-normal leading-[130%] tracking-[-0.32px] uppercase hover:bg-slate hover:text-white transition-all duration-300 w-full sm:w-auto"
              >
                Download
              </Link>
            </motion.div>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
