"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface Feature {
  id: string;
  title: string;
  description: string;
  position: {
    x: string;
    y: string;
  };
  cardPosition: {
    x: string;
    y: string;
  };
}

export default function ProductFeaturesSection() {
  const [activeFeature, setActiveFeature] = useState<string>("");
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const features: Feature[] = [
    {
      id: "co2-monitoring",
      title: "End-Tidal CO₂ Monitoring",
      description: "Exhalation sampling to monitor adequacy of patient ventilation.",
      position: {
        x: "72%",
        y: "33%"
      },
      cardPosition: {
        x: "52%",
        y: "35%"
      }
    },
    {
      id: "head-strap",
      title: "3-Point Head Strap",
      description: "Reduces force required to achieve airway seal to increase patient safety.",
      position: {
        x: "18%",
        y: "58%"
      },
      cardPosition: {
        x: "25%",
        y: "78%"
      }
    },
    {
      id: "air-chamber",
      title: "Proprietary Air Chamber",
      description: "Directs flow to minimize EtCO₂ dilution and loss of visual monitoring curve.",
      position: {
        x: "60%",
        y: "80%"
      },
      cardPosition: {
        x: "30%",
        y: "80%"
      }
    },
    {
      id: "nasal-interface",
      title: "Proprietary Nasal Interface",
      description: "Fits a wide range of facial differences to completely seal airway.",
      position: {
        x: "60%",
        y: "75%"
      },
      cardPosition: {
        x: "30%",
        y: "85%"
      }
    },
    {
      id: "oxygen-source",
      title: "Oxygen from Wall Source",
      description: "No additional equipment or workflow changes for pre, intra or post op.",
      position: {
        x: "72%",
        y: "78%"
      },
      cardPosition: {
        x: "52%",
        y: "84%"
      }
    }
  ];

  const currentFeatureIndex = features.findIndex(f => f.id === activeFeature);
  const active = features[currentFeatureIndex] ?? features[0];

  useEffect(() => {
    const checkMobile = () => {
      // Treat widths below 1024px (tablet and below) as slider mode
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Ensure a visible slide on mobile/tablet; hide by default on desktop
  useEffect(() => {
    if (isMobile) {
      if (!activeFeature) setActiveFeature(features[0].id);
    } else {
      // Hide card until user hovers/clicks a dot on desktop
      if (activeFeature && features.every(f => f.id !== activeFeature)) {
        setActiveFeature("");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isMobile || !touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentFeatureIndex < features.length - 1) {
      setActiveFeature(features[currentFeatureIndex + 1].id);
    }
    if (isRightSwipe && currentFeatureIndex > 0) {
      setActiveFeature(features[currentFeatureIndex - 1].id);
    }
  };

  const handleDotClick = (featureId: string) => {
    // Activate on both desktop and mobile
    setActiveFeature(featureId);
  };

  const handleDotHover = (featureId: string) => {
    if (!isMobile) {
      setActiveFeature(featureId);
    }
  };

  return (
    <section className="relative w-full bg-off-white py-16 md:py-24 overflow-hidden">
      {/* Top gradient fade */}
      <div className="absolute left-0 top-0 w-full h-[400px] bg-gradient-fade-bottom pointer-events-none z-10" />

      {/* Main content container */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 md:px-16">
        
        {/* Section header - positioned outside image container */}
        <div className="relative mb-8 md:mb-12 max-w-[648px] z-30">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-slate font-outfit text-[28px] md:text-[40px] font-normal leading-[100%] tracking-[-0.5px] md:tracking-[-0.8px] mb-6 md:mb-10"
            onMouseLeave={() => { if (!isMobile) setActiveFeature(""); }}
        >
            Introducing the xchange nasal dock. The evolution of CPAP devices.
          </motion.h2>

          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="flex items-center justify-start md:justify-center md:w-[165px] pt-2">
              <span className="text-slate font-outfit text-[12px] md:text-[14px] font-normal leading-[140%] tracking-[-0.28px] uppercase opacity-70">
                The product
              </span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-[467px] text-slate font-outfit text-[16px] md:text-[18px] font-normal leading-[130%] tracking-[-0.36px] opacity-70"
            >
              Engineered to perfect positive pressure to deliver high inspired oxygen (FiO₂) continuously throughout the procedure and extend its use into the recovery period if clinically indicated.
            </motion.p>
          </div>
        </div>

        {/* Image container with fixed aspect ratio - dots positioned relative to this */}
        <div
          ref={containerRef}
          className="relative w-full mx-auto"
          style={{
            aspectRatio: '1881/1688', // Original image aspect ratio
            minHeight: isMobile ? '480px' : '600px'
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Background image */}
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/5a65ed19424fdd7140ad1fb2c7596978ec0e57fc?width=3762"
            alt="xchange nasal dock device"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1440px) 100vw, 1440px"
            priority
          />

          {/* Top gradient/blur overlay to soften the image edge */}
          <div
            className="pointer-events-none absolute left-0 top-0 w-full h-24 md:h-32 z-40 bg-gradient-to-b from-off-white/95 to-off-white/40 md:from-off-white md:to-transparent backdrop-blur-[2px]"
          />

          {/* Interactive dots overlay */}
          {(isMobile ? [active] : features).map((feature, index) => (
            <div key={feature.id}>
              {/* Pulsing dot */}
              <motion.div
                className="absolute z-30 cursor-pointer"
                style={{
                  left: feature.position.x,
                  top: feature.position.y,
                  transform: 'translate(-50%, -50%)'
                }}
                initial={false}
                animate={{
                  scale: activeFeature === feature.id ? 1.04 : 1,
                  opacity: activeFeature === feature.id ? 1 : 0.85
                }}
                transition={{
                  duration: activeFeature === feature.id ? 0.25 : 0.4,
                  ease: 'easeOut'
                }}
                onClick={() => handleDotClick(feature.id)}
                onMouseEnter={() => handleDotHover(feature.id)}
              >
                {/* Animated background ring for dot visibility */}
                <motion.div
                  className="absolute inset-0 w-10 h-10 md:w-[110px] md:h-[110px] rounded-full"
                  style={{
                    background: isMobile
                      ? 'radial-gradient(circle, rgba(0, 0, 0, 0.35) 30%, rgba(0, 0, 0, 0) 100%)'
                      : 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 30%, rgba(255, 255, 255, 0) 100%)'
                  }}
                  animate={{
                    opacity: activeFeature === feature.id ? [0.18, 0.35, 0.18] : [0.12, 0.22, 0.12],
                    scale: activeFeature === feature.id ? [1, 1.08, 1] : [1, 1.04, 1]
                  }}
                  transition={{
                    opacity: { duration: activeFeature === feature.id ? 1.6 : 2.2, repeat: Infinity, ease: 'easeInOut' },
                    scale: { duration: activeFeature === feature.id ? 1.6 : 2.2, repeat: Infinity, ease: 'easeInOut' }
                  }}
                />
                
                {/* Dot SVG matching 5-ellipse ring design with dark center */}
                <div className="relative w-10 h-10 md:w-[110px] md:h-[110px] flex items-center justify-center z-40">
                  <svg
                    width={isMobile ? 40 : 110}
                    height={isMobile ? 40 : 110}
                    viewBox="0 0 136 136"
                    fill="none"
                    className="transform"
                  >
                    <defs>
                      <linearGradient id="dotGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.75" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.15" />
                      </linearGradient>
                    </defs>
                    {/* Ring made of 5 ellipses positioned around center */}
                    <motion.g
                      initial={false}
                      animate={{ scale: activeFeature === feature.id ? [1, 1.04, 1] : [1, 1.02, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      {([0, 72, 144, 216, 288] as const).map((deg) => (
                        <g key={deg} transform={`rotate(${deg} 68 68)`}>
                          {/* Position ellipse outward on a radius from center */}
                          <ellipse
                            cx={68}
                            cy={isMobile ? 34 : 30}
                            rx={isMobile ? 3.2 : 4.5}
                            ry={isMobile ? 6.0 : 8.5}
                            fill="url(#dotGrad)"
                          />
                        </g>
                      ))}
                    </motion.g>
                    {/* Subtle outer stroke ring to bind the shape on desktop */}
                    {!isMobile && (
                      <motion.circle
                        cx="68"
                        cy="68"
                        r={52}
                        stroke="rgba(28,28,32,0.85)"
                        strokeWidth="1.05"
                        fill="none"
                        strokeDasharray="40 20"
                        strokeLinecap="round"
                        initial={false}
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    )}
                    {/* Dark center dot */}
                    <circle cx="68" cy="68" r={isMobile ? 5.5 : 7} fill="#1C1C20" />
                  </svg>
                </div>
              </motion.div>

              {/* Feature card near dot (desktop only, visible when active) */}
              {!isMobile && (
                <motion.div
                  className="absolute z-40 w-[280px] md:w-[334px]"
                  style={{
                    left: feature.cardPosition.x,
                    top: feature.cardPosition.y,
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: activeFeature === feature.id ? 'auto' : 'none'
                  }}
                  initial={false}
                  animate={{ opacity: activeFeature === feature.id ? 1 : 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <div className="relative rounded-lg min-h-[115px] shadow-lg">
                    {/* Solid background */}
                    <div className="absolute inset-0 rounded-lg bg-white/90" />
                    {/* Stroke border */}
                    <div className="absolute inset-0 rounded-lg border border-slate/20" />
                    {/* Content */}
                    <div className="relative p-4">
                      <div className="text-verdant font-outfit text-[12px] font-normal leading-[140%] tracking-[-0.24px] uppercase mb-1">
                        {`0${index + 1} / 0${features.length}`}
                      </div>
                      <div className="text-slate font-outfit text-[16px] md:text-[18px] font-normal leading-[120%] tracking-[-0.36px]">
                        {feature.title}
                      </div>
                      <div className="text-slate font-outfit text-[14px] font-normal leading-[140%] tracking-[-0.28px] opacity-70 mt-2">
                        {feature.description}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          ))}

          {/* Decorative connecting lines */}
          <div className="hidden lg:block">
            {/* Line from CO2 monitoring to head strap */}
            <svg 
              className="absolute opacity-20"
              style={{ left: '15%', top: '50%', width: '92px', height: '77px' }}
              width="94" 
              height="79" 
              viewBox="0 0 94 79" 
              fill="none"
            >
              <path 
                opacity="0.2" 
                d="M1 1L6.63825 1.82874C47.9578 7.90215 81.8131 37.7626 93 78V78" 
                stroke="#44695A" 
                strokeLinecap="square" 
                strokeDasharray="2 6"
              />
            </svg>

            {/* Line from air chamber to nasal interface */}
            <svg 
              className="absolute opacity-30 transform rotate-90"
              style={{ left: '74%', top: '73%', width: '92px', height: '77px' }}
              width="79" 
              height="94" 
              viewBox="0 0 79 94" 
              fill="none"
            >
              <path 
                opacity="0.3" 
                d="M78 1L77.1713 6.63825C71.0979 47.9578 41.2374 81.8131 1.00001 93V93" 
                stroke="#44695A" 
                strokeLinecap="square" 
                strokeDasharray="2 6"
              />
            </svg>

            {/* Line from nasal interface to oxygen source */}
            <svg 
              className="absolute opacity-30"
              style={{ left: '78%', top: '82%', width: '79px', height: '94px' }}
              width="79" 
              height="94" 
              viewBox="0 0 79 94" 
              fill="none"
            >
              <path 
                opacity="0.3" 
                d="M78.209 93L77.3802 87.3618C71.3068 46.0422 41.4463 12.1869 1.20899 0.999999V0.999999" 
                stroke="#44695A" 
                strokeLinecap="square" 
                strokeDasharray="2 6"
              />
            </svg>
          </div>
        </div>

        {/* Mobile/tablet: info panel and pagination dots under image */}
        {isMobile && (
          <div className="mt-6 flex flex-col items-center gap-4 px-1">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="w-full max-w-[640px] rounded-2xl border border-slate/20 bg-white p-4"
            >
              <div className="text-verdant font-outfit text-[12px] font-normal leading-[140%] tracking-[-0.24px] uppercase mb-1 text-center">
                {`0${currentFeatureIndex + 1} / 0${features.length}`}
              </div>
              <div className="text-slate font-outfit text-[18px] font-normal leading-[120%] tracking-[-0.36px] text-center">
                {active.title}
              </div>
              <div className="text-slate font-outfit text-[14px] font-normal leading-[140%] tracking-[-0.28px] opacity-70 mt-2 text-center">
                {active.description}
              </div>
            </motion.div>

            <div className="flex items-center gap-2">
              {features.map((f, i) => {
                const isActive = f.id === activeFeature;
                return (
                  <button
                    key={f.id}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setActiveFeature(f.id)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${isActive ? 'bg-verdant w-6' : 'bg-slate/30 w-2.5'}`}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
