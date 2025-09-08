"use client";

import React from "react";
import { motion } from "framer-motion";

interface LogoDrawProps {
  src?: string; // path to svg asset
  width?: number;
  height?: number;
  stroke?: string;
  strokeWidth?: number;
  drawMs?: number; // duration for stroke draw for each path
  staggerMs?: number; // delay between each path
  fillMs?: number; // duration for fill after draw
  startDelayMs?: number; // delay before any anim starts
}

/**
 * Fetches an external SVG (e.g. public/assets/logo.svg), inlines it, and animates
 * all <path> elements with a stroke-draw followed by a white fill.
 */
export default function LogoDraw({
  src = "/assets/logo.svg",
  width = 960,
  height = 192,
  stroke = "#ffffff",
  strokeWidth = 2,
  drawMs = 1200,
  staggerMs = 20,
  fillMs = 400,
  startDelayMs = 0,
}: LogoDrawProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    let canceled = false;
    async function load() {
      try {
        const res = await fetch(src);
        const svgText = await res.text();
        if (canceled) return;
        if (ref.current) {
          ref.current.innerHTML = svgText;
          setLoaded(true);
          // Post-process paths for animation
          const svg = ref.current.querySelector("svg");
          if (!svg) return;
          // Ensure viewBox scales nicely
          svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
          svg.setAttribute("width", `${width}`);
          svg.setAttribute("height", `${height}`);
          // Collect drawable elements
          const paths = Array.from(svg.querySelectorAll("path"));
          // Apply baseline styles and staggered delays
          paths.forEach((p, i) => {
            (p as SVGPathElement).style.stroke = stroke;
            (p as SVGPathElement).style.fill = "transparent";
            (p as SVGPathElement).style.strokeWidth = String(strokeWidth);
            (p as SVGPathElement).style.vectorEffect = "non-scaling-stroke";
            (p as SVGPathElement).style.strokeLinecap = "round";
            (p as SVGPathElement).style.strokeLinejoin = "round";
            (p as SVGPathElement).style.animation = `logo-draw ${drawMs}ms ease forwards ${startDelayMs + i * staggerMs}ms, logo-fill ${fillMs}ms ease forwards ${startDelayMs + drawMs + i * staggerMs}ms`;
            // Use a large dash length; browsers normalize per path length
            (p as SVGPathElement).style.strokeDasharray = "1000";
            (p as SVGPathElement).style.strokeDashoffset = "1000";
          });
        }
      } catch (e) {
        console.error("Failed to load SVG", e);
      }
    }
    load();
    return () => {
      canceled = true;
    };
  }, [src, width, height, stroke, strokeWidth, drawMs, staggerMs, fillMs, startDelayMs]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: loaded ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      aria-label="Animated logo"
      style={{ width, height }}
    >
      <div ref={ref} style={{ width, height }} />
      <style jsx global>{`
        @keyframes logo-draw { to { stroke-dashoffset: 0; } }
        @keyframes logo-fill { to { fill: #ffffff; } }
      `}</style>
    </motion.div>
  );
}
