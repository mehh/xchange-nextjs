"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const logoSrc = "/assets/424fe691d2e133bf65723770b2e18f23ba6d8069.png";

export default function NavBar() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current;
      // Hide only after small threshold to avoid flicker near top
      setHidden(goingDown && y > 80);
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? -72 : 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="w-screen bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50 border-b border-black/5 will-change-transform"
    >
      <div className="mx-auto flex h-14 w-full max-w-[1440px] items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span
            className="block h-6 w-[78px] bg-no-repeat bg-center bg-contain"
            style={{ backgroundImage: `url('${logoSrc}')` }}
            aria-label="TMOD logo"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/homes" className="hover:opacity-80">Homes</Link>
          <Link href="/health" className="hover:opacity-80">Health</Link>
          <Link href="/team" className="hover:opacity-80">Team</Link>
        </nav>
        <div className="flex items-center">
          <Link
            href="/contact"
            className="rounded-full border border-black/80 px-3 py-1.5 text-sm hover:bg-black hover:text-white transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
