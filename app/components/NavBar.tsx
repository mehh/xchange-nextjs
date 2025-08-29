"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const logoSrc = "/assets/424fe691d2e133bf65723770b2e18f23ba6d8069.png";

export default function NavBar() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? -72 : 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="w-screen bg-white sticky top-0 z-50 border-b border-black/5 will-change-transform"
    >
      <div className="relative mx-auto flex h-[72px] w-full max-w-[1440px] items-center px-4 sm:px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span
              className="block h-6 w-[78px] bg-no-repeat bg-center bg-contain"
              style={{ backgroundImage: `url('${logoSrc}')` }}
              aria-label="TMOD logo"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-black">
            <Link href="/homes" className="hover:opacity-80 text-black">Homes</Link>
            <Link href="/health" className="hover:opacity-80 text-black">Health</Link>
            <Link href="/team" className="hover:opacity-80 text-black">Team</Link>
          </nav>
        </div>
        <div className="flex items-center ml-auto gap-2">
          <Link
            href="/contact"
            className="hidden md:inline-flex rounded-full border border-black/80 px-3 py-1.5 text-sm hover:bg-black hover:text-white transition-colors"
          >
            Contact us
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex md:hidden h-9 w-9 items-center justify-center rounded-md border border-black/20 hover:bg-black/5"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full border-b border-black/10 bg-white">
            <nav className="flex flex-col px-4 py-3 text-base">
              <Link href="/homes" onClick={() => setMenuOpen(false)} className="py-2.5 text-black">Homes</Link>
              <Link href="/health" onClick={() => setMenuOpen(false)} className="py-2.5 text-black">Health</Link>
              <Link href="/team" onClick={() => setMenuOpen(false)} className="py-2.5 text-black">Team</Link>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex w-full items-center justify-center rounded-full border border-black/80 px-3 py-2 text-sm hover:bg-black hover:text-white transition-colors"
              >
                Contact us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  );
}
