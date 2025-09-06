"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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
  const [activeFeature, setActiveFeature] = useState<string>("co2-monitoring");
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const features: Feature[] = [
    {
      id: "co2-monitoring",
      title: "End-Tidal CO2 Monitoring",
      description: "Exhalation sampling to monitor adequacy of patient ventilation.",
      position: {
        x: "72%",
        y: "33%"
      },
      cardPosition: {
        x: "72%",
        y: "33%"
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
        x: "5%",
        y: "58%"
      }
    },
    {
      id: "air-chamber",
      title: "Proprietary Air Chamber",
      description: "Directs flow to minimize EtCO2 dilution and loss of visual monitoring curve.",
      position: {
        x: "60%",
        y: "80%"
      },
      cardPosition: {
        x: "60%",
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
        x: "50%",
        y: "95%"
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
        x: "62%",
        y: "98%"
      }
    }
  ];

  const currentFeatureIndex = features.findIndex(f => f.id === activeFeature);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    if (isMobile) {
      setActiveFeature(featureId);
    }
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
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 md:px-0">
        
        {/* Section header - positioned outside image container */}
        <div className="relative mb-8 md:mb-12 max-w-[648px] z-30">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-slate font-outfit text-[28px] md:text-[40px] font-normal leading-[100%] tracking-[-0.5px] md:tracking-[-0.8px] mb-6 md:mb-10"
          >
            Introducing the xchange nasal dock. The evolution of CPAP devices.
          </motion.h2>

          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="flex items-center justify-center md:w-[165px] pt-2">
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
              Engineered to perfect positive pressure to deliver high inspired oxygen (FiO2) continuously throughout the procedure and extend its use into the recovery period if clinically indicated.
            </motion.p>
          </div>
        </div>

        {/* Image container with fixed aspect ratio - dots positioned relative to this */}
        <div
          ref={containerRef}
          className="relative w-full mx-auto"
          style={{
            aspectRatio: '1881/1688', // Original image aspect ratio
            minHeight: '600px'
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

          {/* Interactive dots positioned on the device */}
          {features.map((feature, index) => (
            <div key={feature.id}>
              {/* Pulsing dot */}
              <motion.div
                className="absolute z-30 cursor-pointer"
                style={{
                  left: feature.position.x,
                  top: feature.position.y,
                  transform: 'translate(-50%, -50%)'
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                onClick={() => handleDotClick(feature.id)}
                onMouseEnter={() => handleDotHover(feature.id)}
              >
                {/* Simple static background for dot visibility */}
                <div
                  className="absolute inset-0 w-[110px] h-[110px] rounded-full opacity-20"
                  style={{
                    background: 'radial-gradient(circle, rgba(255,255,255,0.5) 30%, rgba(255,255,255,0) 100%)'
                  }}
                />
                
                {/* Dot SVG */}
                <div className="relative w-[110px] h-[110px] flex items-center justify-center">
                  <svg 
                    width="110" 
                    height="110" 
                    viewBox="0 0 136 136" 
                    fill="none"
                    className={`transform ${feature.id === 'co2-monitoring' ? 'rotate-[15deg]' : ''}`}
                  >
                    <path 
                      opacity="0.3" 
                      d="M100.507 47.738C103.716 52.8534 105.669 58.6559 106.205 64.6707C106.74 70.6855 105.844 76.7418 103.59 82.3438" 
                      stroke="#44695A" 
                      strokeWidth="1.5"
                    />
                    <path 
                      d="M58.3234 31.1193C64.1613 29.5753 70.2818 29.4355 76.1842 30.7113C82.0865 31.987 87.6029 34.6421 92.2821 38.4593" 
                      stroke="#44695A" 
                      strokeWidth="1.5"
                    />
                    <path 
                      opacity="0.3" 
                      d="M29.8949 66.3484C30.1713 60.3161 31.8719 54.435 34.8576 49.1861C37.8434 43.9373 42.0295 39.47 47.0734 36.1497" 
                      stroke="#44695A" 
                      strokeWidth="1.5"
                    />
                    <g opacity="0.8">
                      <circle cx="68" cy="68" r="38" fill="url(#paint0_radial)" />
                    </g>
                    <motion.circle 
                      cx="68.104" 
                      cy="68.0968" 
                      r="6.75" 
                      fill="#44695A" 
                      stroke="#44695A" 
                      strokeWidth="1.5"
                      animate={{
                        scale: activeFeature === feature.id ? [1, 1.2, 1] : 1,
                      }}
                      transition={{
                        duration: 2,
                        repeat: activeFeature === feature.id ? Infinity : 0,
                        ease: "easeInOut"
                      }}
                    />
                    <defs>
                      <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse">
                        <stop offset="0.302885" stopColor="white"/>
                        <stop offset="1" stopColor="white" stopOpacity="0"/>
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </motion.div>

              {/* Feature card */}
              <AnimatePresence>
                {activeFeature === feature.id && (
                  <motion.div
                    className="absolute z-40 w-[280px] md:w-[334px]"
                    style={{
                      left: isMobile ? '50%' : feature.cardPosition.x,
                      top: isMobile ? '15%' : feature.cardPosition.y,
                      transform: 'translate(-50%, -50%)'
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <div 
                      className="p-6 md:p-7 flex flex-col justify-center items-center gap-4 rounded-lg min-h-[115px]"
                      style={{
                        background: 'rgba(0, 0, 0, 0.05)',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <h3 className="w-full text-[#212527] font-outfit text-[13px] md:text-[14px] font-normal leading-[140%] tracking-[-0.28px] uppercase">
                        {feature.title}
                      </h3>
                      <p className="w-full text-[#212527] font-outfit text-[15px] md:text-[16px] font-normal leading-[140%] tracking-[-0.32px]">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
      </div>

      {/* Mobile navigation indicators */}
      {isMobile && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-50">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              className={`w-3 h-3 rounded-full transition-all duration-300 border border-white/20 ${
                activeFeature === feature.id ? 'bg-verdant scale-125' : 'bg-white/30'
              }`}
              onClick={() => setActiveFeature(feature.id)}
            />
          ))}
        </div>
      )}

      {/* Mobile swipe hint */}
      {isMobile && (
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-50">
          <p className="text-slate/60 font-outfit text-xs text-center bg-white/80 px-3 py-1 rounded-full backdrop-blur-sm">
            Swipe to explore features
          </p>
        </div>
      )}
    </section>
  );
}
