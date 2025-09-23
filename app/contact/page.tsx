import ContactForm from "@/app/components/ContactForm";
import React from "react";

export default function ContactPage() {
  return (
    <section className="w-full bg-calm text-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="md:justify-self-end w-full">
            <ContactForm title="Let's talk." className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
