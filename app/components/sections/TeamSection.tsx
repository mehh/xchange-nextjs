"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function TeamSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      badge: "Key Opinion Leader",
      title: "THE CONTINUUM OF CARE WITH FOCUS",
      content: "Dr. Jon Clapp, a prominent physiatrist, specializes in high-risk pain management. He meticulously manages patients before, during and after procedures, integrating xchange for sustained oxygenation and reduced complications. He educates healthcare professionals globally and advocates for xchange adoption in his U.S. lectures and practice.",
      name: "Dr. Jonathan Clapp",
      title_role: "Pain Management",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/8dfd2caa6531d36e38952d2c9e37430d1faa1df5?width=160"
    },
    {
      badge: "Anesthesiologist",
      title: "ENHANCED PATIENT SAFETY PROTOCOLS",
      content: "Dr. Sarah Mitchell has integrated the xchange device into her anesthesia practice, seeing remarkable improvements in patient outcomes during complex procedures. Her focus on airway management and patient safety has made her a leading advocate for innovative respiratory support technologies.",
      name: "Dr. Sarah Mitchell",
      title_role: "Anesthesiology",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/8dfd2caa6531d36e38952d2c9e37430d1faa1df5?width=160"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance testimonials on an interval
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000); // 6s cycle; adjust to taste
    return () => clearInterval(id);
  }, [testimonials.length]);

  return (
    <section className="w-full bg-sage py-16 md:py-24 lg:py-32">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-16">
        <div className="max-w-[1000px] mx-auto">
          
          {/* Team card - responsive sizing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative rounded-3xl bg-verdant p-6 md:p-8 min-h-[400px] md:min-h-[472px] w-full"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-between items-center h-full min-h-[350px] md:min-h-[400px]"
              >
                {/* Badge */}
                <div className="flex justify-center items-center w-auto max-w-[200px] px-4 h-7 gap-2 rounded-full bg-white/10">
                  <span className="text-off-white font-outfit text-[10px] md:text-[12px] font-normal leading-[100%] tracking-[-0.24px] uppercase text-center">
                    {testimonials[currentTestimonial].badge}
                  </span>
                </div>

                {/* Main content */}
                <div className="flex flex-col justify-center items-center gap-4 md:gap-6 flex-1 px-2 md:px-8 lg:px-11 pt-3">
                  <h3 className="text-off-white font-outfit text-[10px] md:text-[12px] font-normal leading-[100%] tracking-[-0.24px] uppercase text-center">
                    {testimonials[currentTestimonial].title}
                  </h3>

                  <p className="text-off-white text-center font-outfit text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] font-normal leading-[130%] tracking-[-0.3px] md:tracking-[-0.56px]">
                    {testimonials[currentTestimonial].content}
                  </p>
                </div>

                {/* Doctor info and navigation */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 w-full">
                  <div className="flex items-center gap-4 sm:gap-6 flex-1">
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>

                    <div className="flex flex-col gap-1 md:gap-2 flex-1">
                      <p className="text-off-white font-outfit text-[10px] md:text-[12px] font-normal leading-[100%] tracking-[-0.24px] uppercase">
                        {testimonials[currentTestimonial].name}
                      </p>
                      <p className="text-off-white font-outfit text-[10px] md:text-[12px] font-normal leading-[100%] tracking-[-0.24px] uppercase">
                        {testimonials[currentTestimonial].title_role}
                      </p>
                    </div>
                  </div>

                  {/* Navigation arrows */}
                  <div className="flex items-center justify-center sm:justify-start gap-3">
                    <button
                      type="button"
                      onClick={prevTestimonial}
                      className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <div className="w-4 h-3 md:w-[17px] md:h-[24px]" style={{ transform: 'rotateX(180deg)' }}>
                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                          <path d="M2.78516 9.38232C5.91076 10.552 8.42866 13.6394 9.66797 17.5981L9.12109 17.769C7.5715 12.8191 4.03466 9.4458 0 9.4458V8.72607C4.03096 8.72593 7.56917 5.28631 9.12012 0.230956L9.66699 0.398925C8.41243 4.48806 5.8462 7.66756 2.66211 8.82471L24 8.82471V9.38232L2.78516 9.38232Z" fill="white"/>
                        </svg>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={nextTestimonial}
                      className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      aria-label="Next testimonial"
                    >
                      <div className="w-4 h-3 md:w-[17px] md:h-[24px]">
                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                          <path d="M21.2148 8.61767C18.0892 7.44803 15.5713 4.36064 14.332 0.401855L14.8789 0.230956C16.4285 5.18092 19.9653 8.5542 24 8.5542V9.27392C19.969 9.27407 16.4308 12.7137 14.8799 17.769L14.333 17.6011C15.5876 13.5119 18.1538 10.3324 21.3379 9.17529L0 9.17529L0 8.61768L21.2148 8.61767Z" fill="white"/>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
