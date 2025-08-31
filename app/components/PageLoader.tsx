"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

type PageLoaderProps = {
  show: boolean;
  // Total animation timing: draw + fill. Keep in sync with CSS below.
  drawMs?: number; // default 1400
  fillMs?: number; // default 400
  // Start fill before the stroke finishes (default 60% of draw time)
  fillDelayMs?: number;
  // Visual stroke settings
  strokeWidth?: number; // default 2 for crispness
  // Callback when the fill animation completes
  onComplete?: () => void;
};

export default function PageLoader({
  show,
  drawMs = 1400,
  fillMs = 400,
  fillDelayMs,
  strokeWidth = 2,
  onComplete,
}: PageLoaderProps) {
  const delay = fillDelayMs ?? Math.round(drawMs * 0.6);
  const [completed, setCompleted] = useState(false);

  const handleAnimationEnd = (e: React.AnimationEvent<SVGPathElement>) => {
    if (completed) return;
    const target = e.target as Element | null;
    // We only care about path elements after their fill becomes non-transparent
    if (target && target.tagName.toLowerCase() === "path") {
      const fillColor = getComputedStyle(target as Element).fill;
      // Browser will report 'rgba(0, 0, 0, 0)' or 'transparent' when not filled
      if (fillColor && fillColor !== "transparent" && !fillColor.includes("0)")) {
        setCompleted(true);
        onComplete?.();
      }
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          aria-label="Page loading"
          role="status"
        >
          {/* Background fill */}
          <div className="absolute inset-0 bg-[#595e48]" aria-hidden="true" />

          {/* Centered logo animation */}
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 96 52"
              className="w-[220px] h-auto md:w-[300px]"
            >
              <path
                className="fill"
                d="M 84.55 0.00 L 84.76 6.31 A 0.52 0.51 -1.1 0 1 84.24 6.84 L 21.88 6.84 A 0.53 0.52 -90.0 0 0 21.36 7.37 L 21.35 52.00 L 14.40 52.00 L 14.43 7.42 A 0.51 0.51 0.0 0 0 13.92 6.91 L 0.00 6.89 L 0.00 0.00 L 84.55 0.00 Z"
              />
              <path
                className="fill"
                d="M 96.00 0.00 L 96.00 39.74 L 90.58 39.79 A 0.56 0.55 4.4 0 1 90.03 39.15 Q 90.06 38.94 90.05 38.84 A 0.34 0.33 -19.4 0 0 89.52 38.59 Q 83.40 42.93 79.49 36.87 Q 78.74 35.70 78.62 31.75 Q 78.40 24.78 78.64 20.32 Q 78.80 17.31 80.08 14.80 A 3.17 3.06 -9.3 0 1 80.67 14.01 Q 84.69 10.19 89.51 13.86 A 0.32 0.31 -71.2 0 0 90.01 13.61 L 90.20 0.00 L 96.00 0.00 Z M 90.07 18.97 A 2.42 2.42 0.0 0 0 87.65 16.55 L 87.47 16.55 A 2.42 2.42 0.0 0 0 85.05 18.97 L 85.05 33.53 A 2.42 2.42 0.0 0 0 87.47 35.95 L 87.65 35.95 A 2.42 2.42 0.0 0 0 90.07 33.53 L 90.07 18.97 Z"
              />
              <path
                className="fill"
                d="M 33.39 14.47 C 36.29 11.94 41.80 10.36 43.55 14.81 A 0.49 0.49 0.0 0 0 44.38 14.96 Q 47.30 11.70 51.77 12.11 A 2.19 2.14 -25.6 0 1 52.71 12.43 Q 55.81 14.40 55.83 17.77 Q 55.87 28.87 55.87 39.71 A 0.25 0.25 0.0 0 1 55.62 39.96 L 49.97 39.96 A 0.29 0.28 -90.0 0 1 49.69 39.67 L 49.69 18.44 A 2.08 2.08 0.0 0 0 46.91 16.48 L 46.21 16.74 A 2.87 2.85 -9.9 0 0 44.31 19.43 L 44.31 39.70 A 0.25 0.25 0.0 0 1 44.06 39.95 L 38.36 39.95 A 0.22 0.21 90.0 0 1 38.15 39.73 L 38.19 18.67 A 2.27 2.27 0.0 0 0 35.49 16.43 L 35.45 16.43 A 3.27 3.27 0.0 0 0 32.87 19.64 L 32.92 39.70 A 0.26 0.25 -90.0 0 1 32.67 39.96 L 26.95 39.96 A 0.27 0.27 0.0 0 1 26.68 39.69 L 26.68 13.10 A 0.52 0.52 0.0 0 1 27.20 12.58 L 32.38 12.58 A 0.51 0.51 0.0 0 1 32.89 13.09 L 32.89 14.25 A 0.30 0.30 0.0 0 0 33.39 14.47 Z"
              />
              <path
                className="fill"
                d="M 75.97 32.30 A 8.04 8.04 0.0 0 1 67.93 40.34 L 66.39 40.34 A 8.04 8.04 0.0 0 1 58.35 32.30 L 58.35 20.20 A 8.04 8.04 0.0 0 1 66.39 12.16 L 67.93 12.16 A 8.04 8.04 0.0 0 1 75.97 20.20 L 75.97 32.30 Z M 69.55 18.92 A 2.29 2.29 0.0 0 0 67.26 16.63 L 67.12 16.63 A 2.29 2.29 0.0 0 0 64.83 18.92 L 64.83 33.64 A 2.29 2.29 0.0 0 0 67.12 35.93 L 67.26 35.93 A 2.29 2.29 0.0 0 0 69.55 33.64 L 69.55 18.92 Z"
              />
              <path
                className="fill"
                d="M 96.00 45.15 L 96.00 52.00 L 91.28 52.00 L 87.83 52.00 Q 87.68 52.00 87.54 52.00 Q 87.14 51.86 86.75 52.00 L 26.85 52.00 L 26.80 45.72 A 0.51 0.51 0.0 0 1 27.31 45.20 L 96.00 45.15 Z"
                onAnimationEnd={handleAnimationEnd}
              />
            </svg>
          </div>

          {/* Scoped styles for SVG animation */}
          <style jsx>{`
            svg { display: block; }
            /* Base visual stroke settings */
            svg path {
              stroke: #fff;
              fill: transparent;
              stroke-width: ${strokeWidth};
              stroke-dasharray: 1000;
              stroke-dashoffset: 1000;
              vector-effect: non-scaling-stroke;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 2;
              shape-rendering: geometricPrecision;
              will-change: stroke-dashoffset, fill;
              animation: draw ${drawMs}ms ease forwards;
            }
            svg path.fill { animation: draw ${drawMs}ms ease forwards, fillin ${fillMs}ms ease forwards ${delay}ms; }
            @keyframes draw { to { stroke-dashoffset: 0; } }
            @keyframes fillin { to { fill: #fff; } }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
