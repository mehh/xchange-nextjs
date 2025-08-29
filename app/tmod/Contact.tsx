"use client";

import React, { useEffect, useRef, useState } from "react";
import Parallax from "../components/Parallax";

// Map Framer figma:asset imports to Next.js public assets
const imgGettyImages14122890251 = "/assets/12ee3548fe7cb77bf66faeb8b3af5a1edf87ddc4.png";

 

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    userType: "I\'m a landowner",
    message: "",
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const userTypes = [
    "I\'m a landowner",
    "I\'m a developer",
    "I\'m an investor",
    "Other",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUserTypeSelect = (userType: string) => {
    setFormData((prev) => ({
      ...prev,
      userType,
    }));
    setDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with API call as needed
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <form onSubmit={handleSubmit} className="contents">
      {/* Name Field */}
      <div className="absolute font-['Montserrat:Regular',_sans-serif] h-6 leading-[0] left-[757px] not-italic opacity-50 text-[18px] text-white top-[343px] w-[216px]">
        <p className="leading-[normal]">Name</p>
      </div>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        required
        className="absolute bg-transparent border-none outline-none left-[757px] top-[369px] w-[595px] h-5 text-white text-[18px] font-['Montserrat:Regular',_sans-serif]"
      />
      <div className="absolute h-0 left-[757px] top-[389px] w-[595px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 595 1">
            <line id="Line 14" stroke="var(--stroke-0, white)" x2="595" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>

      {/* Email and Phone Fields */}
      <div className="absolute font-['Montserrat:Regular',_sans-serif] h-6 leading-[0] left-[757px] not-italic opacity-50 text-[18px] text-white top-[443px] w-[216px]">
        <p className="leading-[normal]">Email</p>
      </div>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
        className="absolute bg-transparent border-none outline-none left-[757px] top-[469px] w-[279px] h-5 text-white text-[18px] font-['Montserrat:Regular',_sans-serif]"
      />
      <div className="absolute h-0 left-[757px] top-[489px] w-[279px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 279 1">
            <line id="Line 15" stroke="var(--stroke-0, white)" x2="279" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>

      <div className="absolute font-['Montserrat:Regular',_sans-serif] h-6 leading-[0] left-[1073px] not-italic opacity-50 text-[18px] text-white top-[443px] w-[216px]">
        <p className="leading-[normal]">Phone</p>
      </div>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        className="absolute bg-transparent border-none outline-none left-[1073px] top-[469px] w-[279px] h-5 text-white text-[18px] font-['Montserrat:Regular',_sans-serif]"
      />
      <div className="absolute h-0 left-[1073px] top-[489px] w-[279px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 279 1">
            <line id="Line 15" stroke="var(--stroke-0, white)" x2="279" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>

      {/* Company Field */}
      <div className="absolute font-['Montserrat:Regular',_sans-serif] h-6 leading-[0] left-[757px] not-italic opacity-50 text-[18px] text-white top-[543px] w-[216px]">
        <p className="leading-[normal]">Company</p>
      </div>
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleInputChange}
        className="absolute bg-transparent border-none outline-none left-[757px] top-[569px] w-[595px] h-5 text-white text-[18px] font-['Montserrat:Regular',_sans-serif]"
      />
      <div className="absolute h-0 left-[757px] top-[589px] w-[595px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 595 1">
            <line id="Line 14" stroke="var(--stroke-0, white)" x2="595" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>

      {/* Dropdown */}
      <div className="absolute bg-white h-16 left-[757px] rounded-[13px] top-[625px] w-[595px]" />
      <button
        type="button"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="absolute h-16 left-[757px] rounded-[13px] top-[625px] w-[595px] flex items-center justify-between px-8 bg-white"
      >
        <span className="font-['Montserrat:Regular',_sans-serif] opacity-50 text-[18px] text-black">
          {formData.userType}
        </span>
        <div className="h-2 w-[15px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 16 9"
            style={{ transform: dropdownOpen ? "rotate(180deg)" : "none" }}
          >
            <g id="Group 6">
              <line id="Line 18" stroke="black" x1="0.353553" x2="7.35355" y1="0.646447" y2="7.64645" />
              <line id="Line 19" stroke="black" x1="15.3536" x2="7.35355" y1="0.353553" y2="8.35355" />
            </g>
          </svg>
        </div>
      </button>

      {dropdownOpen && (
        <div className="absolute bg-white left-[757px] top-[681px] w-[595px] rounded-[13px] shadow-lg border border-gray-200 z-10">
          {userTypes.map((type, index) => (
            <button
              key={type}
              type="button"
              onClick={() => handleUserTypeSelect(type)}
              className={`w-full px-8 py-4 text-left font-['Montserrat:Regular',_sans-serif] text-[18px] text-black hover:bg-gray-50 ${
                index === 0 ? "rounded-t-[13px]" : ""
              } ${index === userTypes.length - 1 ? "rounded-b-[13px]" : ""}`}
            >
              {type}
            </button>
          ))}
        </div>
      )}
      {/* Message Field */}
      <div className="absolute font-['Montserrat:Regular',_sans-serif] h-6 leading-[0] left-[757px] not-italic opacity-50 text-[18px] text-white top-[743px] w-[216px]">
        <p className="leading-[normal]">Your Message</p>
      </div>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        required
        rows={8}
        className="absolute bg-transparent border-none outline-none left-[757px] top-[769px] w-[595px] text-white text-[18px] font-['Montserrat:Regular',_sans-serif] resize-none"
      />
      <div className="absolute h-0 left-[757px] top-[925px] w-[595px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 595 1">
            <line id="Line 14" stroke="var(--stroke-0, white)" x2="595" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="absolute bg-white h-[46px] left-[956px] rounded-[29px] top-[970px] w-[197px] border-2 border-white hover:bg-gray-100 transition-colors"
      >
        <span className="font-['Montserrat:Medium',_sans-serif] text-[#43432d] text-[18px]">
          Learn more
        </span>
      </button>
    </form>
  );
}



function MobileContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    userType: "I'm a landowner",
    message: "",
  });

  const userTypes = [
    "I'm a landowner",
    "I'm a developer",
    "I'm an investor",
    "Other",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
      <div>
        <label className="block text-sm/6 opacity-80" htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-base placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
          placeholder="Your full name"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm/6 opacity-80" htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-base placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm/6 opacity-80" htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-base placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
            placeholder="(555) 555-5555"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm/6 opacity-80" htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-base placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
          placeholder="Company name"
        />
      </div>
      <div>
        <label className="block text-sm/6 opacity-80" htmlFor="userType">I&apos;m a...</label>
        <select
          id="userType"
          name="userType"
          value={formData.userType}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border border-white/30 bg-white/10 px-3 py-2 text-base text-white focus:outline-none focus:ring-2 focus:ring-white/40"
        >
          {userTypes.map((t) => (
            <option key={t} value={t} className="bg-[#43432d] text-white">{t}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm/6 opacity-80" htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="mt-1 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-base placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 resize-y"
          placeholder="Tell us a bit about your needs"
        />
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full border border-white bg-white px-5 py-2 text-[#43432d] text-base font-medium hover:bg-gray-100 transition-colors"
        >
          Learn more
        </button>
      </div>
    </form>
  );
}

export default function Contact() {
  const [scale, setScale] = useState(1);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const w = outerRef.current?.clientWidth ?? (typeof window !== "undefined" ? window.innerWidth : 1440);
      const s = w / 1440;
      setScale(s);
      if (outerRef.current && innerRef.current) {
        // Measure after the transform is applied, include absolutely positioned descendants
        requestAnimationFrame(() => {
          const outer = outerRef.current;
          const inner = innerRef.current;
          if (!outer || !inner) return;
          const innerRect = inner.getBoundingClientRect();
          let maxBottom = innerRect.bottom;
          const all = inner.querySelectorAll("*");
          all.forEach((node) => {
            if (node instanceof HTMLElement) {
              const r = node.getBoundingClientRect();
              if (!Number.isNaN(r.bottom)) {
                if (r.bottom > maxBottom) maxBottom = r.bottom;
              }
            }
          });
          const height = Math.max(0, maxBottom - innerRect.top);
          outer.style.height = `${height}px`;
        });
      }
    };
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
      window.removeEventListener("scroll", update);
    };
  }, []);

  return (
    <>
      {/* Mobile layout */}
      <div className="md:hidden w-screen bg-[#43432d] text-white">
        <div className="mx-auto max-w-[640px] px-4 sm:px-6 py-10">
          <div className="text-xs tracking-[0.2em] opacity-80">CONTACT</div>
          <h1 className="mt-2 text-4xl sm:text-5xl font-medium font-heading">Let&apos;s get started</h1>
          <p className="mt-4 text-base/7 max-w-prose opacity-90">
            Welcome to TMod. We&apos;re excited to be on this journey together. Fill out the
            info below to get the process going.
          </p>
          <MobileContactForm />
        </div>
      </div>

      {/* Desktop/tablet (original scaled layout) */}
      <div ref={outerRef} className="hidden md:block relative w-screen overflow-x-hidden bg-white">
        <div
          ref={innerRef}
          className="relative origin-top-left"
          style={{ width: 1440, transform: `scale(${scale})` }}
          data-name="Contact"
        >
          {/* Background blocks */}
          <div className="absolute bg-[#43432d] h-[1141px] left-[-42px] top-0 w-[1529px]" />

          {/* Contact Section Title */}
          <div
            className="absolute font-['Oswald:Medium',_sans-serif] font-medium leading-[0] text-[19px] text-center text-nowrap text-white top-[304px] translate-x-[-50%] z-10"
            style={{ left: "calc(50% - 437px)" }}
          >
            <p className="leading-[normal] whitespace-pre">CONTACT</p>
          </div>

          {/* Main Heading */}
          <div
            className="absolute contents top-[335px] translate-x-[-50%]"
            style={{ left: "calc(50% - 355px)" }}
          >
            <div
              className="absolute font-['Montserrat:Medium',_sans-serif] leading-[normal] not-italic text-[56px] text-nowrap text-white top-[335px] whitespace-pre z-10"
              style={{ left: "calc(50% - 476px)" }}
            >
              <p className="mb-0">Let&apos;s get</p>
              <p>started</p>
            </div>
          </div>

          {/* Welcome Text */}
          <div className="absolute font-['Montserrat:Regular',_sans-serif] h-[172px] leading-[normal] left-[249px] not-italic text-[19px] text-white top-[559px] w-[281px] z-10">
            <p className="mb-0">{`Welcome to TMod. `}</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">{`We\\'re excited to be on this journey together. `}</p>
            <p className="mb-0">&nbsp;</p>
            <p className="whitespace-pre-wrap">{`Fill out the info on the right to get the process going.  `}</p>
          </div>

          {/* Contact Form */}
          <div className="absolute inset-0 z-10">
            <ContactForm />
          </div>

          {/* Background Image */}
          <Parallax
            speed={0.12}
            scale={scale}
            className="absolute bg-[70.8%_44.14%] bg-no-repeat bg-size-[905.77%_103.21%] h-[1141px] left-[-42px] top-0 w-[195px] z-0 pointer-events-none"
            data-name="GettyImages-1412289025 1"
            style={{ backgroundImage: `url('${imgGettyImages14122890251}')` }}
          />
        </div>
      </div>
    </>
  );
}
