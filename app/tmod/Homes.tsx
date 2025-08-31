"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollCircle from "../components/ScrollCircle";

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

// Image assets for the homes page
const heroImage = "https://api.builder.io/api/v1/image/assets/TEMP/b906bf7e4e11682059cc94ec5b0726e05038bc9d?width=3200";
const buildImage1 = "https://api.builder.io/api/v1/image/assets/TEMP/a3075adb0eac99bbb0f379e65bc5e4aa575e94ef?width=838";
const buildImage2 = "https://api.builder.io/api/v1/image/assets/TEMP/aec4fd675755cbf4e9f60757135b7a3c9237876b?width=842";
const buildImage3 = "https://api.builder.io/api/v1/image/assets/TEMP/132792466899c8813b6212edfb3405d4cf74182a?width=838";
const homeImage1 = "https://api.builder.io/api/v1/image/assets/TEMP/12e175392bcc8459ce8b26bd384c5226349a36f7?width=840";
const safetyImage1 = "https://api.builder.io/api/v1/image/assets/TEMP/d899118f6b35b4b8fabf086c13b9567e9d89bbc7?width=1468";
const safetyImage2 = "https://api.builder.io/api/v1/image/assets/TEMP/b74b6b66928d06561417bd6ae64bebf3a5d26b9b?width=1122";
const safetyImage3 = "https://api.builder.io/api/v1/image/assets/TEMP/275b65631c6f6eda0ae0b690aad4b9c68db73dee?width=812";
const aboveBeyondImage = "https://api.builder.io/api/v1/image/assets/TEMP/a54c7fca1704a99c68708f24340079ca0f08ba12?width=1436";
// Removed unused variable `healthBackgroundImage`

export default function Homes() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative min-h-[500px] lg:min-h-[700px] bg-black text-white overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url('${heroImage}')` }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 flex items-center justify-center min-h-[500px] lg:min-h-[700px] px-4">
          <motion.h1
            className="text-center text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight max-w-4xl"
            style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Precision Engineered,<br />
            High Performance Homes
          </motion.h1>
        </div>
      </section>

      {/* A Predictable Way to Build */}
      <section className="bg-white text-black px-4 lg:px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            <div>
              <motion.h2
                className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-8 leading-tight"
                style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeInUp}
              >
                A Predictable<br />
                Way to Build
              </motion.h2>
              <motion.div
                className=""
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
              >
                <ScrollCircle size={44} color="black" direction="right" />
              </motion.div>
            </div>

            <div>
              <motion.h3
                className="text-lg lg:text-xl font-medium mb-6"
                style={{ fontFamily: 'Oswald, -apple-system, Roboto, Helvetica, sans-serif' }}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
              >
                ADVANCED MANUFACTURING
              </motion.h3>
              <motion.div
                className="text-sm lg:text-base leading-relaxed space-y-6"
                style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <p>We use a repeatable process for high-performance, prefabricated homes at scale. We standardize assemblies, materials, and designs to reliably produce world-class quality homes in less than 16 weeks.</p>
                <p>Our technology and software transforms your home into a detailed manufacturing order ready for production. Each home is made with cutting-edge materials and processes that aren&apos;t readily available to local builders. It&apos;s built to last with a precision-engineered steel frame resistant to mold, rot, and termites. As a result, you get a home with less worry and less maintenance—now and in the future.</p>
              </motion.div>
            </div>
          </div>

          {/* Manufacturing Images Row */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={liftIn}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="w-full aspect-[4/3] relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={buildImage1}
                alt="Manufacturing process 1"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
            <motion.div
              className="w-full aspect-[4/3] relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={buildImage2}
                alt="Manufacturing process 2"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
            <motion.div
              className="w-full aspect-[4/3] relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={buildImage3}
                alt="Manufacturing process 3"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WE ARE */}
      <section className="bg-[#595E48] text-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-6 text-center">
          <motion.h3
            className="text-lg lg:text-xl font-medium mb-6"
            style={{ fontFamily: 'Oswald, -apple-system, Roboto, Helvetica, sans-serif' }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            WE ARE
          </motion.h3>
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-8 leading-tight"
            style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            The Very Best at One Thing
          </motion.h2>
          <motion.p
            className="text-sm lg:text-base leading-relaxed max-w-4xl mx-auto"
            style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean. Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu.
          </motion.p>
        </div>
      </section>

      {/* Tmod Two */}
      <section className="bg-white text-black px-4 lg:px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <motion.h3
            className="text-lg lg:text-xl font-medium mb-6"
            style={{ fontFamily: 'Oswald, -apple-system, Roboto, Helvetica, sans-serif' }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            2,500 SQ FT DUPLEX
          </motion.h3>
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-8 leading-tight"
            style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            Tmod Two
          </motion.h2>
          <motion.p
            className="text-sm lg:text-base leading-relaxed max-w-4xl mx-auto mb-12 lg:mb-16"
            style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean. Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu.
          </motion.p>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={liftIn}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="w-full aspect-[2/3] relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={homeImage1}
                alt="Tmod home view 1"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
            <motion.div
              className="w-full aspect-[2/3] relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={homeImage1}
                alt="Tmod home view 2"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
            <motion.div
              className="w-full aspect-[2/3] relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={homeImage1}
                alt="Tmod home view 3"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Safety for the Future */}
      <section className="bg-white text-black px-4 lg:px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-8 leading-tight" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Safety for<br />
                the Future
              </h2>
              <div className="text-sm lg:text-base leading-relaxed mb-8" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                <p>Weather has become unpredictable, and it&apos;s not the same climate we grew up with. The next several decades will bring cold temperatures to warm climates and excessive water to dry regions. Being ready–at home–for these weather variations is the safest way to protect yourself. Our homes are built for any climate using a standardized production system. They will shield you from Category-5 hurricanes, heat waves, freezing temperatures, and even earthquakes. When there are wildfires, the home will be safe. Embers cannot enter an attic–we use flat roofs or enter the crawlspace–it&apos;s internally ventilated–and the metal frame will not deform until temperatures are 700º C / 1292º F, making it a Class-A fire-rated home. Having one universal building code for residential homes will keep people safe.</p>
              </div>
              <div className="w-full aspect-square relative">
                <Image src={safetyImage2} alt="Safety feature 2" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="w-full aspect-[4/3] relative">
                <Image src={safetyImage1} alt="Safety feature 1" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="w-1/2 aspect-[4/3] relative">
                <Image src={safetyImage3} alt="Safety feature 3" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Responsibility */}
      <section className="bg-white text-black px-4 lg:px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <h3 className="text-lg lg:text-xl font-medium mb-6" style={{ fontFamily: 'Oswald, -apple-system, Roboto, Helvetica, sans-serif' }}>
                ENVIRONMENTALLY RESPONSIBLE
              </h3>
              <p className="text-sm lg:text-base leading-relaxed" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Each Tmod home is built to last 100 years, significantly reducing the environmental impact. Using high-quality materials and product design-based science, your home will require less maintenance, won&apos;t begin to rot in a matter of years, and will consume a fraction of the energy a typical home uses each year – for the lifetime of the home.
              </p>
            </div>
            <div className="relative px-8 before:absolute before:left-0 before:top-0 before:bottom-8 before:w-px before:bg-black after:absolute after:right-0 after:top-0 after:bottom-8 after:w-px after:bg-black">
              <h3 className="text-lg lg:text-xl font-medium mb-6" style={{ fontFamily: 'Oswald, -apple-system, Roboto, Helvetica, sans-serif' }}>
                READY FOR MOTHER NATURE
              </h3>
              <p className="text-sm lg:text-base leading-relaxed" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                We crafted every square foot using material science for unparalleled performance to build the ultimate climate-resilient home. Recycled light-gauge steel strikes the perfect balance of being resistant to mold, rot, insects, and fires. While the airtight and waterproof liquid membrane wrap the entire home in one continuous seal to reduce temperature change. And the double-layered insulation further prevents extreme climates from entering the home. You can take this home almost anywhere.
              </p>
            </div>
            <div>
              <h3 className="text-lg lg:text-xl font-medium mb-6" style={{ fontFamily: 'Oswald, -apple-system, Roboto, Helvetica, sans-serif' }}>
                BENEATH THE SURFACE
              </h3>
              <p className="text-sm lg:text-base leading-relaxed" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                The most climate-resilient home pushes the limits of Passive House Standards. Robotic automation increases the precision and speed of production. Building science ensures each home is created for durability and to improve the health of the occupants. And an intelligent home operating system connects it all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Above and Beyond */}
      <section className="bg-white text-black px-4 lg:px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium mb-8 leading-tight" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Above and<br />
                Beyond
              </h2>
              <div className="text-sm lg:text-base leading-relaxed space-y-6" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                <p>A health-promoting home is crucial to your mental and physical well-being. But what about your connection to the outdoors?</p>
                <p>Our homes are designed to make it easier to see nature, use the sun&apos;s natural light to illuminate your home, and step outside to enjoy the weather. This is what&apos;s called a biophilic design.</p>
              </div>
            </div>
            <div>
              <div className="w-full aspect-[4/3] relative">
                <Image src={aboveBeyondImage} alt="Above and Beyond" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Statistics */}
      <section className="bg-[#595E48] text-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-6 text-center">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium mb-8 leading-tight" style={{ fontFamily: 'Oswald, -apple-system, Roboto, Helvetica, sans-serif' }}>
            HOW YOUR HOME IS CONFIGURED DIRECTLY IMPACTS YOUR HEALTH
          </h3>
          <p className="text-sm lg:text-base leading-relaxed max-w-4xl mx-auto mb-12 lg:mb-16" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
            Most people don&apos;t realize the magnitude of a home&apos;s contribution as a positive influence on our daily lives. And while people invest in their personal future in many ways, few investments pay off more than a healthy lifestyle promoted by a healthy home. From the quality of the air we breathe to the water we drink, cook, and bathe with, we&apos;ve used our background as building scientists to design a home with systems we can rely on to provide a positively healthier living experience.
          </p>
          
          <div className="border-t border-white/30 pt-12 lg:pt-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 mb-12 lg:mb-16">
              <div>
                <div className="text-5xl sm:text-6xl lg:text-7xl font-medium mb-4" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>97%</div>
                <p className="text-xs lg:text-sm leading-relaxed" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Effective at capturing airborne particles–dust, pollen, and mold spores–between 3-10 microns
                </p>
              </div>
              <div>
                <div className="text-5xl sm:text-6xl lg:text-7xl font-medium mb-4" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>90%</div>
                <p className="text-xs lg:text-sm leading-relaxed" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Effective at capturing airborne particles–CO2, NOx, SOx, and metals–between 3‑10 microns
                </p>
              </div>
              <div>
                <div className="text-5xl sm:text-6xl lg:text-7xl font-medium mb-4" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>99.9%</div>
                <p className="text-xs lg:text-sm leading-relaxed" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
                  Of viruses and bacteria killed in water with in-line UV (ultraviolet light) filtration
                </p>
              </div>
            </div>
            
            <Link href="/health" className="inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-8 lg:px-12 py-3 lg:py-4 text-lg font-medium text-white hover:bg-white hover:text-[#595E48] transition-colors" style={{ fontFamily: 'Montserrat, -apple-system, Roboto, Helvetica, sans-serif' }}>
              Learn more about our health & sustainability standards
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
