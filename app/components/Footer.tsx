"use client";

import Link from "next/link";
import { Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-screen bg-[#272719] text-white border-t border-white/5">
      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <nav className="flex flex-wrap gap-6 text-sm">
            <Link href="/homes" className="hover:opacity-80">Homes</Link>
            <Link href="/health" className="hover:opacity-80">Health</Link>
            <Link href="/team" className="hover:opacity-80">Team</Link>
            <Link href="/contact" className="hover:opacity-80">Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com/tmod"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TMOD on X (Twitter)"
              className="opacity-90 hover:opacity-100 transition-opacity"
            >
              <Twitter aria-hidden className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/company/tmod"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TMOD on LinkedIn"
              className="opacity-90 hover:opacity-100 transition-opacity"
            >
              <Linkedin aria-hidden className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 h-px w-full bg-white/10" />
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs opacity-90">
          <p>© 2025 TMOD, Inc. All rights reserved</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:opacity-80">Privacy Policy</Link>
            <Link href="/terms" className="hover:opacity-80">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
