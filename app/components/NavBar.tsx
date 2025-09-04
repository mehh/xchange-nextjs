"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// Using the logo from the Figma design
const logoSrc = "https://api.builder.io/api/v1/image/assets/TEMP/63edb6c922bf9e76a96e81957e4b978960b1f9ce?width=315";

export default function NavBar() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [container, setContainer] = useState<HTMLElement | null>(null);

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
    const el = document.getElementById("portal-root");
    setContainer((el as HTMLElement | null) ?? document.body);
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
      className="w-screen bg-transparent absolute top-0 left-0 z-50 will-change-transform"
    >
      <div className="relative mx-auto flex h-[72px] w-full max-w-[1440px] items-end justify-between px-4 md:px-16 py-10">
        <Link href="/" className="flex items-center">
          <div className="relative h-8 w-[157px]">
            <Image
              src={logoSrc}
              alt="Pneuma logo"
              fill
              className="object-contain"
              sizes="157px"
              priority
            />
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-9 pl-6">
          <Link 
            href="/science" 
            className="text-[#1C1C20] font-outfit text-[15px] font-normal leading-[140%] tracking-[-0.3px] uppercase opacity-70 hover:opacity-100 transition-opacity duration-300 pb-3"
          >
            The science
          </Link>
          <Link 
            href="/patients" 
            className="text-[#1C1C20] font-outfit text-[15px] font-normal leading-[140%] tracking-[-0.3px] uppercase opacity-70 hover:opacity-100 transition-opacity duration-300 pb-3"
          >
            which patients?
          </Link>
          <Link 
            href="/contact" 
            className="text-[#1C1C20] font-outfit text-[15px] font-normal leading-[140%] tracking-[-0.3px] uppercase opacity-70 hover:opacity-100 transition-opacity duration-300 pb-3"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="inline-flex md:hidden h-9 w-9 items-center justify-center rounded-md border border-[#1C1C20] text-[#1C1C20] hover:bg-[#1C1C20]/10"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C1C20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

        {/* Mobile Menu Portal */}
        {mounted && container && menuOpen && createPortal(
          (
            <div className="md:hidden fixed inset-0 z-[60] bg-[#1C1C20] text-white">
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
                  <Link href="/science" onClick={() => setMenuOpen(false)} className="py-3 text-2xl font-normal uppercase tracking-[-0.3px]">The science</Link>
                  <Link href="/patients" onClick={() => setMenuOpen(false)} className="py-3 text-2xl font-normal uppercase tracking-[-0.3px]">which patients?</Link>
                  <Link href="/contact" onClick={() => setMenuOpen(false)} className="py-3 text-2xl font-normal uppercase tracking-[-0.3px]">Contact Us</Link>
                </div>
              </nav>
            </div>
          ),
          container
        )}
      </div>
    </motion.header>
  );
}
