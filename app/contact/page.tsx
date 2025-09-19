import ContactForm from "@/app/components/ContactForm";
import React from "react";

export default function ContactPage() {
  return (
    <section className="w-full bg-calm text-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <p className="text-white/70 font-outfit text-xs tracking-widest uppercase mb-4">Contact</p>
            <h1 className="text-white font-outfit text-[40px] md:text-[56px] leading-[110%] tracking-[-0.96px] mb-6">
              Let’s talk about your needs
            </h1>
            <p className="text-white/80 font-outfit text-[16px] md:text-[18px] leading-relaxed max-w-[520px]">
              We’re here to help. Tell us a bit about yourself and how we can support you. Our team will get back to you shortly.
            </p>
          </div>
          <div className="md:justify-self-end w-full">
            <ContactForm title="Let's talk." className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
