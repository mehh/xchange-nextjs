"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function BenefitsSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const textItems = ["Care.", "Everything."];
  const sectionRef = useRef<HTMLElement>(null);
  // Refs for the horizontally scrolling viewport and the inner row
  const scrollerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  // Track the maximum amount we need to slide the row so the last card fully traverses
  const [maxShift, setMaxShift] = useState(0);

  // Progress for the cards area specifically, so the row traverses fully while that area is in view
  const { scrollYProgress: cardsProgress } = useScroll({
    target: scrollerRef,
    // Map progress while the scroller crosses the viewport center
    offset: ["start center", "end center"]
  });

  // Window the progress so movement starts later and finishes sooner
  const START = 0.25;
  const END = 0.75;
  const windowedProgress = useTransform(cardsProgress, (v) => {
    const t = (v - START) / (END - START);
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    return t;
  });

  // Transform for horizontal sliding of cards (in pixels), based on measured widths
  const cardSlideX = useTransform(windowedProgress, (v) => -maxShift * v);

  // Progress bar width mirrors the windowed cards progress
  const progressWidth = useTransform(windowedProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    // Measure widths so we can slide the exact distance to reveal all cards
    const measure = () => {
      const viewport = scrollerRef.current;
      const row = rowRef.current;
      if (!viewport || !row) return;
      const viewportWidth = viewport.clientWidth;
      const rowWidth = row.scrollWidth;
      const shift = Math.max(0, rowWidth - viewportWidth);
      setMaxShift(shift);
    };

    measure();
    window.addEventListener("resize", measure);
    // In case fonts/assets affect layout slightly after load
    const t = setTimeout(measure, 0);
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % textItems.length);
    }, 2500);

    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
      clearInterval(interval);
    };
  }, [textItems.length]);

  const benefits = [
    {
      title: "Comes with Fully Inclusive Kit",
      description: "Single-use device with all necessary components included with no additional setup.",
      icon: (
        <svg width="152" height="152" viewBox="0 0 152 152" fill="none">
          <path d="M75.9762 85.9746H29.0225V133H75.9762V85.9746Z" fill="#A0B9C0"/>
          <path d="M122.93 85.9746H75.9761V133H122.93V85.9746Z" fill="#3A5261"/>
          <path d="M130.958 105.117H90.25C89.4777 105.114 88.719 104.914 88.0457 104.536C87.3724 104.158 86.8068 103.614 86.4025 102.956L76 85.9746H122.978L132.691 102.125C132.859 102.429 132.945 102.772 132.942 103.12C132.938 103.468 132.844 103.81 132.67 104.111C132.495 104.412 132.246 104.663 131.946 104.839C131.646 105.015 131.305 105.111 130.958 105.117Z" fill="#5E838F"/>
          <path d="M21.0424 105.117H63.2461C63.5937 105.114 63.9348 105.023 64.2379 104.853C64.5409 104.682 64.7961 104.438 64.9799 104.143L75.9999 85.9746H29.0224L19.3086 102.125C19.1407 102.429 19.0545 102.772 19.0582 103.12C19.062 103.468 19.1556 103.81 19.3301 104.111C19.5046 104.412 19.7539 104.663 20.0539 104.839C20.3539 105.015 20.6944 105.111 21.0424 105.117Z" fill="#E1EAEC"/>
          <path d="M95.2373 22.1106C92.6582 19.9473 89.3525 18.8466 85.9913 19.0318C82.6302 19.2171 79.4655 20.6745 77.1398 23.1081L75.9998 24.2243L74.8598 23.1081C72.534 20.6745 69.3694 19.2171 66.0082 19.0318C62.6471 18.8466 59.3414 19.9473 56.7623 22.1106C55.466 23.2705 54.4203 24.6829 53.6891 26.2612C52.9579 27.8395 52.5567 29.5505 52.51 31.2893C52.4633 33.0282 52.7721 34.7582 53.4175 36.3735C54.063 37.9888 55.0314 39.4552 56.2635 40.6831L74.171 58.6143C74.6623 59.0875 75.3178 59.3518 75.9998 59.3518C76.6818 59.3518 77.3373 59.0875 77.8285 58.6143L95.736 40.6831C96.9681 39.4552 97.9366 37.9888 98.582 36.3735C99.2274 34.7582 99.5363 33.0282 99.4896 31.2893C99.4429 29.5505 99.0416 27.8395 98.3105 26.2612C97.5793 24.6829 96.5335 23.2705 95.2373 22.1106Z" fill="#5E838F"/>
        </svg>
      )
    },
    {
      title: "Compatible with Existing Infrastructure",
      description: "Uses standard equipment including wall oxygen and capnography systems.",
      icon: (
        <svg width="145" height="144" viewBox="0 0 145 144" fill="none">
          <path d="M32.2997 18H74.1947C75.6925 18 77.129 18.595 78.1881 19.6541C79.2472 20.7132 79.8422 22.1497 79.8422 23.6475V120.263H26.7197V23.6475C26.7196 22.1613 27.3053 20.735 28.3499 19.6778C29.3945 18.6206 30.8136 18.0178 32.2997 18Z" fill="#5E838E"/>
          <path d="M79.8423 67.1621H112.535C114.218 67.1621 115.831 67.8306 117.021 69.0205C118.211 70.2104 118.88 71.8243 118.88 73.5071V120.262H79.8423V67.1621Z" fill="#A0B9C0"/>
          <path d="M41.7273 30.2402H40.3548C38.8512 30.2402 37.6323 31.4591 37.6323 32.9627V34.3352C37.6323 35.8388 38.8512 37.0577 40.3548 37.0577H41.7273C43.2309 37.0577 44.4498 35.8388 44.4498 34.3352V32.9627C44.4498 31.4591 43.2309 30.2402 41.7273 30.2402Z" fill="#E1EAEC"/>
          <path d="M120.545 120.262H25.0552C23.6634 120.262 22.5352 121.39 22.5352 122.782V123.457C22.5352 124.848 23.6634 125.977 25.0552 125.977H120.545C121.937 125.977 123.065 124.848 123.065 123.457V122.782C123.065 121.39 121.937 120.262 120.545 120.262Z" fill="#E1EAEC"/>
        </svg>
      )
    },
    {
      title: "No Capital Investment Required",
      description: "Functions without the need for additional hardware and costly equipment purchases.",
      icon: (
        <svg width="169" height="168" viewBox="0 0 169 168" fill="none">
          <path d="M25.2488 103.74H56.4863C57.4541 103.74 58.3821 104.125 59.0664 104.809C59.7507 105.493 60.1351 106.421 60.1351 107.389V147H21.6001V107.389C21.6001 106.421 21.9845 105.493 22.6688 104.809C23.3531 104.125 24.2811 103.74 25.2488 103.74Z" fill="#E1EAEC"/>
          <path d="M112.714 126.604H143.951C144.433 126.604 144.909 126.699 145.354 126.884C145.798 127.069 146.201 127.34 146.541 127.681C146.880 128.023 147.148 128.428 147.33 128.874C147.512 129.32 147.603 129.797 147.6 130.279V147H109.065V130.252C109.065 129.285 109.449 128.356 110.134 127.672C110.818 126.988 111.746 126.604 112.714 126.604Z" fill="#72949E"/>
          <path d="M58.5601 74.8125H110.64C112.262 74.8125 113.818 75.4569 114.965 76.6039C116.112 77.7509 116.756 79.3066 116.756 80.9288V147H52.4438V80.9288C52.4438 79.3066 53.0882 77.7509 54.2353 76.6039C55.3823 75.4569 56.938 74.8125 58.5601 74.8125Z" fill="#C7D6DA"/>
        </svg>
      )
    },
    {
      title: "Rapid Effective Performance",
      description: "Delivers high FiO2 and continuous airway pressure within 20 seconds of application.",
      icon: (
        <svg width="170" height="171" viewBox="0 0 170 171" fill="none">
          <path d="M103.664 21.6538H66.2064C64.668 21.6538 63.4209 22.9009 63.4209 24.4393V53.2755C63.4209 54.8139 64.668 56.061 66.2064 56.061H103.664C105.203 56.061 106.45 54.8139 106.45 53.2755V24.4393C106.45 22.9009 105.203 21.6538 103.664 21.6538Z" fill="#3A5261"/>
          <path d="M84.9354 148.99C117.695 148.99 144.253 122.433 144.253 89.6732C144.253 56.9132 117.695 30.356 84.9354 30.356C52.1754 30.356 25.6182 56.9132 25.6182 89.6732C25.6182 122.433 52.1754 148.99 84.9354 148.99Z" fill="#E1EAEC"/>
          <path d="M139.796 67.0693H106.476L77.9053 99.6195L117.539 139.226C120.904 137.016 124.033 134.464 126.876 131.613C135.162 123.332 140.811 112.784 143.11 101.297C145.409 89.8111 144.256 77.9011 139.796 67.0693Z" fill="#C7D6DA"/>
          <path d="M78.33 83.0664L106.264 67.1494C106.423 67.0437 106.612 66.9961 106.802 67.0147C106.991 67.0333 107.168 67.1171 107.303 67.2516C107.437 67.3862 107.521 67.5632 107.54 67.7526C107.558 67.942 107.511 68.132 107.405 68.2902L91.7268 95.9326C90.686 97.8595 89.0353 99.3867 87.0334 100.275C85.0315 101.163 82.7916 101.362 80.6645 100.84C79.2323 100.461 77.9062 99.7582 76.7884 98.7858C75.6705 97.8134 74.7907 96.5975 74.2167 95.2317C73.6427 93.8658 73.3898 92.3864 73.4774 90.9074C73.565 89.4284 73.9909 87.9893 74.7222 86.7008C75.5841 85.1929 76.8286 83.9393 78.33 83.0664Z" fill="#5E838F"/>
        </svg>
      )
    },
    {
      title: "Ergonomic and Secure",
      description: "Designed for comfort and stability during use on every type of patient.",
      icon: (
        <svg width="169" height="168" viewBox="0 0 169 168" fill="none">
          <path d="M25.2488 103.74H56.4863C57.4541 103.74 58.3821 104.125 59.0664 104.809C59.7507 105.493 60.1351 106.421 60.1351 107.389V147H21.6001V107.389C21.6001 106.421 21.9845 105.493 22.6688 104.809C23.3531 104.125 24.2811 103.74 25.2488 103.74Z" fill="#E1EAEC"/>
          <path d="M112.714 126.604H143.951C144.433 126.604 144.909 126.699 145.354 126.884C145.798 127.069 146.201 127.34 146.541 127.681C146.880 128.023 147.148 128.428 147.33 128.874C147.512 129.32 147.603 129.797 147.6 130.279V147H109.065V130.252C109.065 129.285 109.449 128.356 110.134 127.672C110.818 126.988 111.746 126.604 112.714 126.604Z" fill="#72949E"/>
          <path d="M58.5601 74.8125H110.64C112.262 74.8125 113.818 75.4569 114.965 76.6039C116.112 77.7509 116.756 79.3066 116.756 80.9288V147H52.4438V80.9288C52.4438 79.3066 53.0882 77.7509 54.2353 76.6039C55.3823 75.4569 56.938 74.8125 58.5601 74.8125Z" fill="#C7D6DA"/>
        </svg>
      )
    },
    {
      title: "Quick and Intuitive Application",
      description: "Delivers high FiO2 and continuous airway pressure within 20 seconds of application.",
      icon: (
        <svg width="170" height="171" viewBox="0 0 170 171" fill="none">
          <path d="M103.664 21.6538H66.2064C64.668 21.6538 63.4209 22.9009 63.4209 24.4393V53.2755C63.4209 54.8139 64.668 56.061 66.2064 56.061H103.664C105.203 56.061 106.45 54.8139 106.45 53.2755V24.4393C106.45 22.9009 105.203 21.6538 103.664 21.6538Z" fill="#3A5261"/>
          <path d="M84.9354 148.99C117.695 148.99 144.253 122.433 144.253 89.6732C144.253 56.9132 117.695 30.356 84.9354 30.356C52.1754 30.356 25.6182 56.9132 25.6182 89.6732C25.6182 122.433 52.1754 148.99 84.9354 148.99Z" fill="#E1EAEC"/>
          <path d="M139.796 67.0693H106.476L77.9053 99.6195L117.539 139.226C120.904 137.016 124.033 134.464 126.876 131.613C135.162 123.332 140.811 112.784 143.11 101.297C145.409 89.8111 144.256 77.9011 139.796 67.0693Z" fill="#C7D6DA"/>
          <path d="M78.33 83.0664L106.264 67.1494C106.423 67.0437 106.612 66.9961 106.802 67.0147C106.991 67.0333 107.168 67.1171 107.303 67.2516C107.437 67.3862 107.521 67.5632 107.54 67.7526C107.558 67.942 107.511 68.132 107.405 68.2902L91.7268 95.9326C90.686 97.8595 89.0353 99.3867 87.0334 100.275C85.0315 101.163 82.7916 101.362 80.6645 100.84C79.2323 100.461 77.9062 99.7582 76.7884 98.7858C75.6705 97.8134 74.7907 96.5975 74.2167 95.2317C73.6427 93.8658 73.3898 92.3864 73.4774 90.9074C73.565 89.4284 73.9909 87.9893 74.7222 86.7008C75.5841 85.1929 76.8286 83.9393 78.33 83.0664Z" fill="#5E838F"/>
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="relative w-full bg-off-white py-16 md:py-24 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-16">
        
        {/* Top section with titles */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-16 md:mb-20">
          
          {/* Left side - Better + animated text */}
          <div className="mb-8 lg:mb-0">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-slate font-outfit text-[48px] md:text-[64px] lg:text-[80px] font-normal leading-[100%] tracking-[-1.2px] md:tracking-[-1.6px] mb-4"
            >
              Better
            </motion.h2>

            {/* Animated text with clean transitions */}
            <div className="w-[450px] relative h-[60px] md:h-[80px] lg:h-[100px] overflow-hidden">
              <motion.div
                key={currentTextIndex}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut"
                }}
                className="absolute inset-0"
              >
                <p className=" text-calm font-outfit text-[48px] md:text-[64px] lg:text-[80px] font-normal leading-[100%] tracking-[-1.2px] md:tracking-[-1.6px]">
                  {textItems[currentTextIndex]}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right side - Experience section */}
          <div className="w-full lg:w-[426px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              <span className="text-[#212527] font-outfit text-[12px] md:text-[14px] font-normal leading-[140%] tracking-[-0.28px] uppercase opacity-70">
                The experience
              </span>
              <p className="text-slate font-outfit text-[16px] md:text-[18px] font-normal leading-[130%] tracking-[-0.36px] opacity-70">
                The xchange is a single-use nasal CPAP device designed to perfect continuous positive airway pressure quickly and effectively throughout both the intraprocedural and post- procedural periods.
              </p>
              <Link
                href="/learn-more"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full border border-slate/50 text-slate font-outfit text-[14px] md:text-[16px] font-normal leading-[100%] tracking-[-0.32px] uppercase hover:bg-slate/10 hover:border-slate/70 hover:scale-105 transition-all duration-300"
              >
                learn more
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Horizontally scrolling cards container */}
        <div ref={scrollerRef} className="relative overflow-hidden">
          <motion.div
            ref={rowRef}
            style={{ x: cardSlideX, willChange: "transform" }}
            className="flex gap-4 md:gap-6 w-max pb-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col justify-between p-6 md:p-8 rounded-3xl bg-black/3 w-[280px] md:w-[316px] h-[350px] md:h-[427px] hover:bg-black/5 transition-all duration-300"
              >
                <h3 className="text-slate font-outfit text-[18px] md:text-[20px] lg:text-[24px] font-normal leading-[100%] tracking-[-0.4px] md:tracking-[-0.48px]">
                  {benefit.title}
                </h3>

                {benefit.icon && (
                  <div className="flex justify-center items-center flex-1 py-6 md:py-8">
                    <div className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[152px] lg:h-[152px] flex items-center justify-center">
                      {benefit.icon}
                    </div>
                  </div>
                )}

                <p className="text-slate font-outfit text-[14px] md:text-[15px] lg:text-[16px] font-normal leading-[130%] tracking-[-0.32px]">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Progress bar that tracks cardsProgress */}
        <div className="mt-16 md:mt-20">
          <div className="relative w-full h-0.5">
            <div className="absolute inset-0 bg-black/10 rounded-full" />
            <motion.div style={{ width: progressWidth }} className="absolute left-0 top-0 h-full bg-calm rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
