"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const logoSrc = "/assets/424fe691d2e133bf65723770b2e18f23ba6d8069.png";

export default function NavBar() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

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

  // Mark mounted for portals
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

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
            <div className="relative h-8 w-[104px]">
              <Image
                src={logoSrc}
                alt="TMOD logo"
                fill
                className="object-contain"
                sizes="104px"
                priority
              />
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-black">
            <Link href="/homes" className="relative px-1 py-1 hover:text-[#595E48] transition-colors duration-300 before:absolute before:top-0 before:left-0 before:w-0 before:h-0.5 before:bg-[#595E48] before:transition-all before:duration-400 hover:before:w-full after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-[#595E48] after:transition-all after:duration-400 hover:after:w-full">Homes</Link>
            <Link href="/health" className="relative px-1 py-1 hover:text-[#595E48] transition-colors duration-300 before:absolute before:top-0 before:left-0 before:w-0 before:h-0.5 before:bg-[#595E48] before:transition-all before:duration-400 hover:before:w-full after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-[#595E48] after:transition-all after:duration-400 hover:after:w-full">Health</Link>
            <Link href="/team" className="relative px-1 py-1 hover:text-[#595E48] transition-colors duration-300 before:absolute before:top-0 before:left-0 before:w-0 before:h-0.5 before:bg-[#595E48] before:transition-all before:duration-400 hover:before:w-full after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-[#595E48] after:transition-all after:duration-400 hover:after:w-full">Team</Link>
          </nav>
        </div>
        <div className="flex items-center ml-auto gap-2">
          <Link
            href="/contact"
            className="hidden md:inline-flex rounded-full bg-[#595E48] px-3 py-1.5 text-sm text-white hover:bg-[#4a4d3c] transition-colors"
          >
            Contact us
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex md:hidden h-9 w-9 items-center justify-center rounded-md border border-[#595E48] text-[#595E48] hover:bg-[#595E48]/10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#595E48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

        {mounted && menuOpen && createPortal(
          (
            <div className="md:hidden fixed inset-0 z-[60] bg-[#595E48] text-white">
              {/* Close button */}
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/60 text-white/90 hover:bg-white/10"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <nav className="flex flex-col h-full px-6 pt-16 pb-8">
                <div className="flex-1 flex flex-col items-center justify-center gap-2">
                  <Link href="/homes" onClick={() => setMenuOpen(false)} className="py-3 text-3xl font-medium">Homes</Link>
                  <Link href="/health" onClick={() => setMenuOpen(false)} className="py-3 text-3xl font-medium">Health</Link>
                  <Link href="/team" onClick={() => setMenuOpen(false)} className="py-3 text-3xl font-medium">Team</Link>
                </div>
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-3 text-lg text-[#595E48] hover:bg-white/90 transition-colors"
                >
                  Contact us
                </Link>
              </nav>
            </div>
          ),
          document.body
        )}
      </div>

    </motion.header>
  );
}
