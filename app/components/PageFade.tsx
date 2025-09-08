"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PropsWithChildren } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
      {/* Centered logo overlay animation */}
      <div className="pointer-events-none fixed inset-0 z-[55] flex items-center justify-center">
        <motion.div
          key={`logo-${pathname}`}
          initial={{ opacity: 1, scale: 0.96 }}
          animate={{ opacity: 0, scale: 1 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.8, ease: "easeOut" }}
          className="will-change-auto"
        >
          <Image
            src="/assets/logo.svg"
            alt="Pneuma logo"
            width={240}
            height={48}
            priority
            className="opacity-90"
          />
        </motion.div>
      </div>

      <motion.main
        key={pathname}
        id="main"
        // Avoid transforms here because transformed ancestors break position: sticky
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration, ease: "easeOut" }}
        className="min-h-[calc(100vh-4.5rem)]" // 4.5rem accounts for 72px navbar height
      >
        {children}
      </motion.main>
    </>
  );
}
