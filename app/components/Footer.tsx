"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Using the white logo version from the Figma design
const logoSrc = "https://api.builder.io/api/v1/image/assets/TEMP/ade10ca9ee41942e99d3f5acec3438f026183112?width=621";

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className="w-full bg-slate text-white py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16">
        
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 md:gap-16 mb-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="relative h-12 w-[240px] md:h-16 md:w-[310px]">
            <Link
              href="/"
            >
              <Image
                src={logoSrc}
                alt="Pneuma logo"
                fill
                className="object-contain object-left"
                sizes="(max-width: 768px) 240px, 310px"
              />
            </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-6 md:gap-8">
            <Link
              href="/the-science"
              className={`text-white font-outfit text-[32px] md:text-[40px] lg:text-[48px] font-normal leading-[130%] tracking-[-0.8px] md:tracking-[-0.96px] hover:opacity-80 transition-all duration-300 link-underline link-underline-hover ${pathname?.startsWith("/the-science") ? "link-underline-active" : ""}`}
            >
              The Science
            </Link>
            <Link
              href="/which-patients"
              className={`text-white font-outfit text-[32px] md:text-[40px] lg:text-[48px] font-normal leading-[130%] tracking-[-0.8px] md:tracking-[-0.96px] hover:opacity-80 transition-all duration-300 link-underline link-underline-hover ${pathname?.startsWith("/which-patients") ? "link-underline-active" : ""}`}
            >
              Which Patients?
            </Link>
            <Link
              href="/contact"
              className={`text-white font-outfit text-[32px] md:text-[40px] lg:text-[48px] font-normal leading-[130%] tracking-[-0.8px] md:tracking-[-0.96px] hover:opacity-80 transition-all duration-300 link-underline link-underline-hover ${pathname === "/contact" ? "link-underline-active" : ""}`}
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/50 mb-8 md:mb-10" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <p className="text-white font-outfit text-[12px] md:text-[14px] font-normal leading-[100%] tracking-[-0.28px] uppercase opacity-50">
            by Pneuma technology inc. All Rights Reserved
          </p>
          
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className={`text-white font-outfit text-[12px] md:text-[14px] font-normal leading-[100%] tracking-[-0.28px] uppercase hover:opacity-80 transition-opacity link-underline link-underline-hover ${pathname === "/privacy" ? "link-underline-active" : ""}`}
            >
              Privacy Policy
            </Link>
            <span className="text-white font-outfit text-[12px] md:text-[14px] font-normal leading-[100%] tracking-[-0.28px] uppercase opacity-50">
              |
            </span>
            <Link
              href="/terms"
              className={`text-white font-outfit text-[12px] md:text-[14px] font-normal leading-[100%] tracking-[-0.28px] uppercase hover:opacity-80 transition-opacity link-underline link-underline-hover ${pathname === "/terms" ? "link-underline-active" : ""}`}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
