"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-[calc(100vh-4.5rem)] bg-white">
      <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="font-oswald text-[18px] tracking-wide text-[#595E48]"
        >
          OOPS
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          className="mt-2 font-montserrat text-[44px] font-medium leading-tight text-black sm:text-[56px]"
        >
          Page not found
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="mt-4 max-w-[640px] font-montserrat text-[16px] leading-relaxed text-black/70"
        >
          The page you are looking for may have been moved or no longer exists. Try going back to the homepage or reach out to us if you need help.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border-2 border-black bg-black px-6 py-3 font-montserrat text-[16px] font-medium text-white transition-colors hover:bg-transparent hover:text-black"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-black bg-transparent px-6 py-3 font-montserrat text-[16px] font-medium text-black transition-colors hover:bg-black hover:text-white"
          >
            Contact us
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
