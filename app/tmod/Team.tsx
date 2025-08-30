"use client";

import { motion, useScroll, useTransform } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
} as const;

const liftIn = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
} as const;

const viewportOnce = { once: true, amount: 0.3 } as const;

// Hero background image
const heroImage = "https://api.builder.io/api/v1/image/assets/TEMP/38462d11231daacd76e76b99383bd948c58c94d7?width=2880";

// Team section images
const teamImage1 = "https://api.builder.io/api/v1/image/assets/TEMP/046b93112d3ab8e78a2d8f52d8c3a7b2dc46626a?width=1886";
const teamImage2 = "https://api.builder.io/api/v1/image/assets/TEMP/3c237873569b3b9ca3408b8d619f2d9057e01700?width=712";

// Project images
const projectImage1 = "https://api.builder.io/api/v1/image/assets/TEMP/a3075adb0eac99bbb0f379e65bc5e4aa575e94ef?width=838";
const projectImage2 = "https://api.builder.io/api/v1/image/assets/TEMP/aec4fd675755cbf4e9f60757135b7a3c9237876b?width=842";
const projectImage3 = "https://api.builder.io/api/v1/image/assets/TEMP/132792466899c8813b6212edfb3405d4cf74182a?width=838";

function HeroSection() {
  return (
    <section
      className="relative w-full h-[720px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${heroImage}')` }}
    >
      <div className="text-center text-white px-4">
        <h1 className="text-4xl md:text-[56px] font-medium leading-tight">
          United by purpose,<br />driven by passion
        </h1>
      </div>
    </section>
  );
}

function TeamOverviewSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Images section */}
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 mb-16">
          <div className="lg:col-span-7">
            <img
              src={teamImage1}
              alt="Team collaboration"
              className="w-full h-[300px] md:h-[390px] object-cover rounded-lg"
            />
          </div>
          <div className="lg:col-span-3 flex lg:justify-end">
            <div className="relative w-full lg:max-w-[356px]">
              <div className="absolute inset-0 bg-[#595E48] rounded-lg"></div>
              <img
                src={teamImage2}
                alt="Team member"
                className="relative w-full h-[300px] md:h-[472px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <motion.h2
              className="text-3xl md:text-[55px] font-medium leading-tight text-black mb-8 max-w-[420px]"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
            >
              Behind every great dream is a great team
            </motion.h2>
          </div>
          <div>
            <motion.p
              className="text-[15px] leading-relaxed text-black"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              Our founders bring more than just industry know-how—they bring a shared commitment to reimagining what homeownership can be. By uniting proven leaders in construction, design, finance, and community development, we&apos;re combining best-in-class practices with bold new thinking.
            </motion.p>
            <br />
            <motion.p
              className="text-[15px] leading-relaxed text-black"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              The result is a holistic approach that not only makes homes more attainable, but also creates vibrant, sustainable communities where people can truly thrive.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatisticsSection() {
  const stats = [
    {
      number: "25+",
      description: "Years in complex, commercial, residential and industrial electric & HVAC"
    },
    {
      number: "30+", 
      description: "Years and millions of square feet delivered in steel construction"
    },
    {
      number: "25+",
      description: "Years in engineering, systems development, robotics, automation and implementation"
    },
    {
      number: "30+",
      description: "Years in consumer product innovation, entrepreneurship, and real estate development"
    },
    {
      number: "25+",
      description: "Years in finance, loan procurement, JV Deal structures, business development, and real estate development"
    },
    {
      number: "25+",
      description: "Placeholder text to go right here"
    },
    {
      number: "25+", 
      description: "Placeholder text to go right here"
    },
    {
      number: "25+",
      description: "Placeholder text to go right here"
    }
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={liftIn}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-[80px] font-medium leading-[125px] text-black">
                {stat.number}
              </div>
              <p className="text-[20px] font-medium leading-normal text-black">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projectImages = [projectImage1, projectImage2, projectImage3];
  const placeholderTexts = [
    "Placeholder text to go right here",
    "Placeholder text to go right here",
    "Placeholder text to go right here"
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4">
        {/* Images row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {projectImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Project ${index + 1}`}
              className="w-full h-[227px] object-cover rounded-lg"
            />
          ))}
        </div>

        {/* Section header */}
        <div className="text-center mb-12">
          <h3 className="font-heading text-[38px] font-medium text-black mb-8">
            SOME OTHER THINGS WE&apos;VE BEEN UP TO
          </h3>
          <div className="w-full h-px bg-black"></div>
        </div>

        {/* Placeholder text columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {placeholderTexts.map((text, index) => (
            <p key={index} className="text-[20px] font-medium text-center text-black">
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Team() {
  return (
    <div className="w-full bg-white">
      <HeroSection />
      <TeamOverviewSection />
      <StatisticsSection />
      <ProjectsSection />
    </div>
  );
}
