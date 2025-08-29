"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export default function PageFade({ children }: PropsWithChildren) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="min-h-[calc(100vh-4.5rem)]" // 4.5rem accounts for 72px navbar height
    >
      {children}
    </motion.main>
  );
}
