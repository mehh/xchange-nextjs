'use client';

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

export default function Health() {
  const features = [
    "Models meet or exceed LEED-certification requirements",
    "Energy-efficient manufacturing methods including steel-frame and structural insulated panels (SIPs)",
    "HFO spray foam insulation, which has 80% lower Global Warming Potential (GWP) compared to HFC",
    "Energy-efficient windows with low-emissivity coating",
    "Double-pane argon gas filled windows",
    "LED lighting for additional energy savings",
    "High efficiency heating and cooling system with mini-splits",
    "Optional solar panels, battery storage, and electric vehicle charging equipment",
  ];

  const stats = [
    { value: "84%", description: "More energy efficient than conventional construction" },
    { value: "12x", description: "More energy efficient than traditional homes" },
    { value: "2.7M", description: "Pounds of carbon dioxide (CO2) avoided in the atmosphere" },
    { value: "10K", description: "Pounds of nitric oxide (NOx) avoided in the atmosphere" },
    { value: "5K", description: "Pounds of sulfuric acid (SOx) avoided in the atmosphere" },
    { value: "80%", description: "Faster construction time compared to local construction" },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[662px] overflow-hidden">
        <motion.img
          src="https://api.builder.io/api/v1/image/assets/TEMP/7118105075098c1a829f7a296795acbe420fef6e?width=2880"
          alt="TMOD Sustainability Hero"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-[56px] font-medium font-[Montserrat] leading-normal max-w-[732px]"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              The Gold Standard of Healthy, Affordable Living
            </motion.h1>
            <div className="mt-12 flex flex-col items-center">
              <motion.div
                className="w-11 h-11 rounded-full border-2 border-white flex items-center justify-center"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: 0.6 }}
              >
                <svg width="20" height="20" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-90">
                  <path d="M7.29289 20.7071C7.68342 21.0976 8.31658 21.0976 8.70711 20.7071L15.0711 14.3431C15.4616 13.9526 15.4616 13.3195 15.0711 12.9289C14.6805 12.5384 14.0474 12.5384 13.6569 12.9289L8 18.5858L2.34315 12.9289C1.95262 12.5384 1.31946 12.5384 0.928932 12.9289C0.538407 13.3195 0.538407 13.9526 0.928932 14.3431L7.29289 20.7071ZM7 -4.37114e-08L7 20L9 20L9 4.37114e-08L7 -4.37114e-08Z" fill="white"/>
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Friendly Section */}
      <section className="w-full py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={liftIn}
            >
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/3a8d1a27aec529602f9a868785c121fd255fba88?width=1308"
                alt="TMOD Climate Friendly"
                className="w-full h-auto"
              />
            </motion.div>
            <div className="order-1 lg:order-2">
              <motion.h2
                className="text-4xl lg:text-[55px] font-medium font-[Montserrat] leading-normal text-black mb-6"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeInUp}
              >
                Climate Friendly Means Healthier Living
              </motion.h2>
              <motion.div
                className="space-y-4 text-[15px] font-[Montserrat] text-black leading-normal"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
              >
                <p>
                  The data is clear, the home construction industry contributes to 42% of global emissions. Traditional
                  home-building methods lead to millions of tons of carbon dioxide and other harmful chemicals in the atmosphere. We must do better.
                </p>
                <p>
                  At Tmod, we are evolving home production. Using intelligent manufacturing methods, robotic automation, advanced materials, and innovative systems, we've created homes to improve the health of the occupants, supply the grid with clean energy and remove millions
                  of tons of chemical waste from entering our ecosystem.
                </p>
                <p>
                  Compared to the traditional construction sector, which produces roughly 40% of landfill waste, a factory-built construction method reduces waste by up to 90%.
                  With our end-to-end platform, we're reducing our impact on the planet by producing sustainable homes.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="w-full bg-[#595E48] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            className="text-white text-xl lg:text-[25px] font-[Montserrat] leading-normal"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            This one change can improve our health and create energy independence.
            It will lower our burden on the healthcare system, decrease the cost
            of housing, and see our homes thrive in climate emergencies.
          </motion.p>
        </div>
      </section>

      {/* Additional Image Section */}
      <section className="w-full py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <motion.div
            className="w-full lg:w-[70%] px-4 sm:px-6 lg:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={liftIn}
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e0c353db254b5386d2fb3a0df3e9049b952ce727?width=1672"
              alt="TMOD Climate Friendly 2"
              className="w-full h-auto"
            />
          </motion.div>
          <motion.div
            className="w-full lg:w-[30%] lg:pr-0"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={liftIn}
            transition={{ delay: 0.1 }}
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/db1dca239e8000a5cced0ad02cb43a4a5c6994fd?width=988"
              alt="TMOD Climate Friendly 3"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Health & Sustainability Section */}
      <section className="w-full py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            className="lg:pl-0"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={liftIn}
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/31e4cdfba724835e6244a90ba8f28f5578deea67?width=1102"
              alt="TMOD Sustainability Comes Standard"
              className="w-full h-auto"
            />
          </motion.div>
          <div className="px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-4xl lg:text-[55px] font-medium font-[Montserrat] leading-normal text-black mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
            >
              Health & Sustainability Comes Standard
            </motion.h2>
            <motion.div
              className="mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-[19px] font-medium font-[Oswald] text-black mb-4">
                STANDARD FEATURES
              </h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="border-b border-black pb-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={fadeInUp}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <p className="text-[19px] font-medium font-[Montserrat] text-black">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.button
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-black rounded-full text-[18px] font-medium font-[Montserrat] text-black hover:bg-black hover:text-white transition-colors"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              Learn more
            </motion.button>
          </div>
        </div>
      </section>

      {/* Modern Approach Section */}
      <section className="w-full bg-[#F0E8E4] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl lg:text-[55px] font-medium font-[Montserrat] leading-normal text-black mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            A Modern Approach to Clean Living
          </motion.h2>

          <motion.div
            className="grid lg:grid-cols-2 gap-16 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={liftIn}
            transition={{ delay: 0.1 }}
          >
            <div>
              <h3 className="text-[19px] font-medium font-[Oswald] text-black mb-4">
                INNOVATION TAKEN TO NEW HEIGHTS
              </h3>
              <p className="text-[15px] font-[Montserrat] text-black leading-normal">
                We only use products and building systems that help you stay healthy and safe. The Self-Healing™ home has raised the standards for what a new home should be capable of. It has material declarations and transparency certificates for all materials used throughout the home. They included GreenGuard and Cradle to Cradle Certificates and items not listed on the Red List of toxic materials. The entire home is produced to a high degree
                of quality so that no moisture builds up–moisture is the home's greatest enemy.
              </p>
            </div>
            <div>
              <h3 className="text-[19px] font-medium font-[Oswald] text-black mb-4">
                DRIVING DOWN CONSUMPTION
              </h3>
              <p className="text-[15px] font-[Montserrat] text-black leading-normal">
                To achieve an extremely high level of reduction of chemicals in the atmosphere, we use a custom‑designed building envelope to prevent thermal bridging—heating and cooling gain/loss—with a Self-Powered™ system— clean energy production and storage—and continuous air circulation resulting in less heating and cooling leading to a home 84 percent more energy efficient than a conventional home. This gives
                you a powerful new way to make a change in the environment.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="border-t border-black pt-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-[38px] font-medium font-[Oswald] text-black mb-12">
              THE RESULTS
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  variants={fadeInUp}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="text-6xl lg:text-[92px] font-medium font-[Montserrat] text-black mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm lg:text-[16px] font-medium font-[Montserrat] text-black">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Image Section */}
      <section className="w-full">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/d31da7cf3114fcc28fcf3c5de03de13bcc185e3a?width=2880" 
          alt="TMOD Modern Approach"
          className="w-full h-auto"
        />
      </section>
    </div>
  );
}
