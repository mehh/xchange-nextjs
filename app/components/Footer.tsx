"use client";

import Link from "next/link";
import Image from "next/image";

// Using the white logo version from the Figma design
const logoSrc = "https://api.builder.io/api/v1/image/assets/TEMP/ade10ca9ee41942e99d3f5acec3438f026183112?width=621";

export default function Footer() {
  return (
    <footer className="w-screen bg-[#1C1C20] text-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-16 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 md:gap-12 lg:gap-24">
          {/* Logo */}
          <div className="flex items-start">
            <div className="relative h-12 w-[240px] md:h-16 md:w-[310px]">
              <Image
                src={logoSrc}
                alt="Pneuma logo"
                fill
                className="object-contain object-left"
                sizes="(max-width: 768px) 240px, 310px"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-6 md:gap-8">
            <Link
              href="/science"
              className="text-white font-outfit text-[28px] md:text-[36px] lg:text-[48px] font-normal leading-[130%] tracking-[-0.6px] md:tracking-[-0.96px] hover:opacity-80 transition-opacity"
            >
              The Science
            </Link>
            <Link
              href="/patients"
              className="text-white font-outfit text-[28px] md:text-[36px] lg:text-[48px] font-normal leading-[130%] tracking-[-0.6px] md:tracking-[-0.96px] hover:opacity-80 transition-opacity"
            >
              Which Patients?
            </Link>
            <Link
              href="/contact"
              className="text-white font-outfit text-[28px] md:text-[36px] lg:text-[48px] font-normal leading-[130%] tracking-[-0.6px] md:tracking-[-0.96px] hover:opacity-80 transition-opacity"
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-12 md:mt-16 h-px w-full bg-white opacity-50" />

        {/* Bottom Section */}
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white font-outfit text-[12px] md:text-[14px] font-normal leading-[100%] tracking-[-0.28px] uppercase opacity-50">
            by Pneuma technology inc. All Rights Reserved
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-white font-outfit text-[12px] md:text-[14px] font-normal leading-[100%] tracking-[-0.28px] uppercase hover:opacity-80 transition-opacity"
            >
              Privacy Policy
            </Link>
            <span className="text-white font-outfit text-[12px] md:text-[14px] font-normal leading-[100%] tracking-[-0.28px] uppercase">
              |
            </span>
            <Link
              href="/terms"
              className="text-white font-outfit text-[12px] md:text-[14px] font-normal leading-[100%] tracking-[-0.28px] uppercase hover:opacity-80 transition-opacity"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
