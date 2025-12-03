"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

// Use local logo asset for the main navigation
const logoSrc = "/assets/Logo Nav.png";

export default function NavBar() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current;
      setHidden(goingDown && y > 80);
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    setMounted(true);
    const el = document.getElementById("portal-root");
    setContainer((el as HTMLElement | null) ?? document.body);
  }, []);

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
      className="fixed top-0 left-0 w-full bg-transparent z-50 will-change-transform"
    >
      <div className="flex w-full max-w-[1440px] mx-auto px-4 md:px-16 py-6 md:py-10 justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-7 w-[140px] md:h-10 md:w-[196px]">
            <Image
              src={logoSrc}
              alt="Pneuma logo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 140px, 196px"
              priority
            />
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-9">
          <Link
            href="/the-science"
            className={`text-slate text-[15px] font-outfit font-normal leading-[140%] tracking-[-0.3px] uppercase opacity-70 hover:opacity-100 transition-all duration-300 link-underline link-underline-hover ${pathname?.startsWith("/the-science") ? "link-underline-active" : ""}`}
          >
            The science
          </Link>
          <Link
            href="/which-patients"
            className={`text-slate text-[15px] font-outfit font-normal leading-[140%] tracking-[-0.3px] uppercase opacity-70 hover:opacity-100 transition-all duration-300 link-underline link-underline-hover ${pathname?.startsWith("/which-patients") ? "link-underline-active" : ""}`}
          >
            which patients?
          </Link>
          <Link 
            href="/contact" 
            className={`text-slate text-[15px] font-outfit font-normal leading-[140%] tracking-[-0.3px] uppercase opacity-70 hover:opacity-100 transition-all duration-300 link-underline link-underline-hover ${pathname === "/contact" ? "link-underline-active" : ""}`}
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
          className="inline-flex md:hidden h-9 w-9 items-center justify-center rounded-md text-slate bg-white hover:bg-white shadow-sm transition-all duration-200"
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

        {/* Mobile Menu Portal */}
        {mounted && container && menuOpen && createPortal(
          (
            <div className="md:hidden fixed inset-0 z-[60] bg-slate text-white">
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-md text-white/90 hover:bg-white/10 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              <nav className="flex flex-col h-full px-6 pt-16 pb-8">
                <div className="flex-1 flex flex-col items-center justify-center gap-8">
                  <Link href="/the-science" onClick={() => setMenuOpen(false)} className="py-3 text-2xl font-normal uppercase tracking-[-0.3px] hover:opacity-80 transition-opacity">The science</Link>
                  <Link href="/which-patients" onClick={() => setMenuOpen(false)} className="py-3 text-2xl font-normal uppercase tracking-[-0.3px] hover:opacity-80 transition-opacity">which patients?</Link>
                  <Link href="/contact" onClick={() => setMenuOpen(false)} className="py-3 text-2xl font-normal uppercase tracking-[-0.3px] hover:opacity-80 transition-opacity">Contact Us</Link>
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
