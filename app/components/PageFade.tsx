"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import LogoDraw from "./LogoDraw";

export default function PageFade({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const disableFade =
    process.env.NEXT_PUBLIC_DISABLE_PAGE_FADE === "1" ||
    process.env.NEXT_PUBLIC_DISABLE_PAGE_FADE === "true";
  const prefersReducedMotion = useReducedMotion();
  const duration = prefersReducedMotion ? 0.2 : 1.2;
  if (disableFade) {
    return (
      <main id="main" className="min-h-[calc(100vh-4.5rem)]">
        {children}
      </main>
    );
  }
  return (
    <>
      {/* Overlay backdrop + centered logo animation */}
      <div className="pointer-events-none fixed inset-0 z-[55] flex items-center justify-center">
        {/* Backdrop stays visible until the logo fill completes, then fades */}
        <motion.div
          key={`backdrop-${pathname}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            // Fade backdrop after logo draw+fill completes
            // startDelay(0.3s) + draw(1.0s) + fill(0.3s) ≈ 1.6s, add small buffer
            delay: prefersReducedMotion ? 0 : 1.7,
            duration: prefersReducedMotion ? 0.15 : 0.45,
            ease: "easeOut",
          }}
          className="absolute inset-0"
          style={{ backgroundColor: "#5E838F" }}
        />
        <motion.div
          key={`logo-${pathname}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            // Fade the logo overlay out right after animation finishes
            delay: prefersReducedMotion ? 0.2 : 1.8,
            duration: prefersReducedMotion ? 0.2 : 0.4,
            ease: "easeOut",
          }}
          className="will-change-auto"
        >
          {/* Fancy path-by-path draw and fill */}
          <LogoDraw
            src="/assets/logo.svg"
            width={960}
            height={192}
            stroke="#ffffff"
            strokeWidth={2}
            startDelayMs={prefersReducedMotion ? 0 : 300}
            drawMs={prefersReducedMotion ? 250 : 1000}
            staggerMs={prefersReducedMotion ? 0 : 16}
            fillMs={prefersReducedMotion ? 120 : 300}
          />
        </motion.div>
      </div>

      <motion.main
        key={pathname}
        id="main"
        // Avoid transforms here because transformed ancestors break position: sticky
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.25 }}
        className="min-h-[calc(100vh-4.5rem)]" // 4.5rem accounts for 72px navbar height
      >
        {children}
      </motion.main>
    </>
  );
}
