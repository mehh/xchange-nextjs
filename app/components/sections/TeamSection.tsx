"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type Testimonial = {
  badge: string;
  title: string;
  content: string;
  name: string;
  title_role: string;
  image: string;
  image2?: string;
  name2?: string;
  title_role2?: string;
};

export default function TeamSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      badge: "Key Opinion Leader",
      title: "THE CONTINUUM OF CARE WITH FOCUS",
      content:
        "Dr. Jon Clapp, a prominent physiatrist, specializes in high-risk pain management. He meticulously manages patients before, during and after procedures, integrating xchange for sustained oxygenation and reduced complications. He educates healthcare professionals globally and advocates for xchange adoption in his U.S. lectures and practice.",
      name: "Dr. Jonathan Clapp",
      title_role: "Pain Management",
      image: "/assets/test-jonathan-clapp.png",
    },
    {
      badge: "Anesthesiologist",
      title: "ENHANCED PATIENT SAFETY PROTOCOLS",
      content:
        "Dr. Sarah Mitchell has integrated the xchange device into her anesthesia practice, seeing remarkable improvements in patient outcomes during complex procedures. Her focus on airway management and patient safety has made her a leading advocate for innovative respiratory support technologies.",
      name: "Dr. Sarah Mitchell",
      title_role: "Anesthesiology",
      image: "/assets/test-michael.png", // temporary mapping until exact asset provided
    },
    {
      badge: "Gastroenterology",
      title: "OPTIMIZING SEDATION WORKFLOWS",
      content:
        "In endoscopy suites, consistent oxygenation improves visualization and reduces interventions. xchange helps maintain airway patency and reliable EtCO₂ sampling throughout procedures.",
      name: "Dr. Carlos Ramirez",
      title_role: "Gastroenterology",
      image: "/assets/test-stephen-garber.png",
      image2: "/assets/test-stephen.png",
      name2: "Dr. Stephen Garber",
      title_role2: "Gastroenterology",
    },
    {
      badge: "CRNA",
      title: "RELIABLE EtCO₂ AND AIRWAY CONTROL",
      content:
        "Reliable capnography and a comfortable seal are critical during moderate to deep sedation. xchange provides a stable interface for monitoring and positive pressure support.",
      name: "Jamie Lee, CRNA",
      title_role: "Nurse Anesthetist",
      image: "/assets/test-laura.png", // temporary mapping until exact asset provided
    },
    {
      badge: "Pulmonology",
      title: "BETTER OUTCOMES FOR HIGH‑RISK PATIENTS",
      content:
        "For patients with OSA and obesity, maintaining airway tone and oxygenation reduces desaturation events. xchange enables proactive management rather than reactive rescue.",
      name: "Dr. Jamal Akbar",
      title_role: "Pulmonology",
      image: "/assets/test-mazen.png", // temporary mapping until exact asset provided
    },
    {
      badge: "Nursing Leadership",
      title: "SCALABLE, SAFE, AND TRAINABLE",
      content:
        "Highly standardized devices guide nursing leaders and VHC staff to deliver consistent care. xchange’s ease of use and clear workflow integration support better team adoption and training results.",
      name: "Mindy Patterson, RN",
      title_role: "Clinical Operations",
      image: "/assets/test-mindy.png",
    },
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

                {/* Doctor info, pagination dots, and navigation */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 w-full">
                  <div className="flex items-center gap-4 sm:gap-6 flex-1">
                    {/* Avatar(s) */}
                    <div className="relative flex items-center">
                      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonials[currentTestimonial].image}
                          alt={testimonials[currentTestimonial].name}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      {testimonials[currentTestimonial].image2 ? (
                        <div className="-ml-4 relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-verdant">
                          <Image
                            src={testimonials[currentTestimonial].image2!}
                            alt={testimonials[currentTestimonial].name2 || 'Additional clinician'}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>
                      ) : null}
                    </div>

                    <div className="flex flex-col gap-1 md:gap-2 flex-1">
                      {testimonials[currentTestimonial].name2 ? (
                        <>
                          <p className="text-off-white font-outfit text-[10px] md:text-[12px] font-normal leading-[100%] tracking-[-0.24px] uppercase">
                            {testimonials[currentTestimonial].name}
                          </p>
                          <p className="text-off-white font-outfit text-[10px] md:text-[12px] font-normal leading-[100%] tracking-[-0.24px] uppercase">
                            {testimonials[currentTestimonial].title_role}
                          </p>
                          <p className="text-off-white font-outfit text-[10px] md:text-[12px] font-normal leading-[100%] tracking-[-0.24px] uppercase">
                            {testimonials[currentTestimonial].name2}
                          </p>
                          <p className="text-off-white font-outfit text-[10px] md:text-[12px] font-normal leading-[100%] tracking-[-0.24px] uppercase">
                            {testimonials[currentTestimonial].title_role2}
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="text-off-white font-outfit text-[10px] md:text-[12px] font-normal leading-[100%] tracking-[-0.24px] uppercase">
                            {testimonials[currentTestimonial].name}
                          </p>
                          <p className="text-off-white font-outfit text-[10px] md:text-[12px] font-normal leading-[100%] tracking-[-0.24px] uppercase">
                            {testimonials[currentTestimonial].title_role}
                          </p>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Pagination dots (center on mobile) */}
                  <div className="flex items-center justify-center sm:justify-start gap-2 flex-1">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        aria-label={`Go to testimonial ${i + 1}`}
                        onClick={() => setCurrentTestimonial(i)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          i === currentTestimonial ? 'bg-off-white w-6' : 'bg-white/40 w-2.5'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Navigation arrows */}
                  <div className="flex items-center justify-center sm:justify-start gap-3">
                    <button
                      type="button"
                      onClick={prevTestimonial}
                      className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <div className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center" style={{ transform: 'rotateX(180deg)' }}>
                        <svg className="block" width="24" height="18" viewBox="0 0 24 18" fill="none" preserveAspectRatio="xMidYMid meet">
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
                      <div className="w-6 h-6 md:w-7 md:h-7 flex items-center justify-center">
                        <svg className="block" width="24" height="18" viewBox="0 0 24 18" fill="none" preserveAspectRatio="xMidYMid meet">
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
