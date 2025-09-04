"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PropsWithChildren } from "react";

export default function PageFade({ children }: PropsWithChildren) {
  const disableFade =
    process.env.NEXT_PUBLIC_DISABLE_PAGE_FADE === "1" ||
    process.env.NEXT_PUBLIC_DISABLE_PAGE_FADE === "true";
  const prefersReducedMotion = useReducedMotion();
  const duration = prefersReducedMotion ? 0.2 : 1.5;
  if (disableFade) {
    return (
      <main id="main" className="min-h-[calc(100vh-4.5rem)]">
        {children}
      </main>
    );
  }
  return (
    <motion.main
      id="main"
      // Avoid transforms here because transformed ancestors break position: sticky
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, ease: "easeOut" }}
      className="min-h-[calc(100vh-4.5rem)]" // 4.5rem accounts for 72px navbar height
    >
      {children}
    </motion.main>
  );
}
