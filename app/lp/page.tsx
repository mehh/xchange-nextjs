"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Local image assets
const imgTModHomesPageHealthyLiving1 = "/assets/ec0ef60ac25a9bb66629761953013857711101f6.png";
const imgHomeAmericanFlag1 = "/assets/fae8309e43a3c34f5828b3625bf2aa57f63c8d8d.png";
const imgTModHomePageBetterWaytoBuild1 = "/assets/b082f62ea4b59acf903bbf73674d055ec2fc6e33.png";
const imgTModHomePageTheDreamTeam1 = "/assets/baf75f6314c1f974e3cef252eba31c788e31fe51.png";
const imgMcArrow1 = "/assets/33c77a449be6ec80d056fd42dda2a2fdc5944be8.png";
const imgTModHomePageDreamTeamOffice1 = "/assets/e8ca0cfb3c3458df280358144522ec1e2445fca9.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
} as const;

const liftIn = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
} as const;

const viewportOnce = { once: true, amount: 0.3 } as const;

function HeroSection() {
  return (
    <section className="relative h-[774px] w-full overflow-hidden">
      {/* American Flag Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${imgHomeAmericanFlag1}')`,
          backgroundPosition: "51.76% 77.7%",
        }}
      />
      
      {/* Hero Text */}
      <div className="absolute right-[140px] top-[458px] z-10">
        <motion.h1
          className="font-montserrat text-[56px] font-medium leading-[1.2] text-white"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          Restoring the<br />American Dream
        </motion.h1>
        <motion.p
          className="mt-4 font-montserrat text-[17px] font-medium text-white"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
        >
          one truly affordable home at a time...
        </motion.p>

        {/* Scroll Indicator - below text within same container */}
        <motion.div
          className="mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white">
              <path d="M9.29289 13.7071C9.68342 14.0976 10.3166 14.0976 10.7071 13.7071L17.0711 7.34315C17.4616 6.95262 17.4616 6.31946 17.0711 5.92893C16.6805 5.53841 16.0474 5.53841 15.6569 5.92893L10 11.5858L4.34315 5.92893C3.95262 5.53841 3.31946 5.53841 2.92893 5.92893C2.53841 6.31946 2.53841 6.95262 2.92893 7.34315L9.29289 13.7071ZM9 1V13H11V1H9Z" fill="currentColor"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function BetterWayToLiveSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <motion.p 
            className="font-oswald text-[19px] font-medium text-black tracking-wide"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            WE BELIEVE IN
          </motion.p>
          <motion.h2 
            className="mt-2 font-montserrat text-[55px] font-medium leading-[1.2] text-black"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            A Better Way to Live
          </motion.h2>
          <motion.div 
            className="mx-auto mt-8 max-w-4xl font-montserrat text-[15px] leading-relaxed text-black"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <p className="mb-4">
              Affordable places to live are essential to a well-functioning society and are at the center of our families' development and growth.
            </p>
            <p className="mb-4">
              Our value-engineered approach to building unlocks efficiencies to create pricing the market hasn't seen in decades—so families and communities can flourish on a foundation of innovation, sustainability, and possibility.
            </p>
            <p>
              At Tmod, we craft precision-engineered homes that elevate daily living and radically reduce cost to provide a better future for the ones we love most.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function OurHomesSection() {
  const features = [
    {
      title: "AFFORDABLE",
      description: "We are redefining Affordable Housing by offering universal accessibility, attractive financing, and all of the warmth and comforts of a traditional home."
    },
    {
      title: "TECH-ENABLED", 
      description: "Our tech-enabled manufacturing methods allow us to build high quality homes in a matter of weeks with consistent quality and cost control."
    },
    {
      title: "SUSTAINABLE",
      description: "All of our homes are steel-built, energy efficient, and constructed to LEED-certified standards for optimal health and near zero waste."
    },
    {
      title: "MODERN",
      description: "Our homes are meticulously designed and crafted to incorporate the very best of modern architectural design and function."
    }
  ];

  return (
    <section className="bg-[#595E48] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 
          className="text-center font-montserrat text-[44px] font-medium text-white"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          Our Homes Are
        </motion.h2>
        
        <div className="mt-8 h-px w-full bg-white"></div>
        
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="text-center text-white"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="font-oswald text-[24px] font-medium">{feature.title}</h3>
              <p className="mt-4 font-montserrat text-[15px] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <button className="rounded-full border-2 border-white bg-transparent px-8 py-3 font-montserrat text-[18px] font-medium text-white transition-colors hover:bg-white hover:text-[#595E48]">
            Learn more
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function BetterWayToBuildSection() {
  return (
    <section className="bg-white py-20">
      {/* Desktop Layout */}
      <div className="hidden lg:flex">
        {/* Left content with max-width container */}
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-16">
            <div>
              <motion.p
                className="font-oswald text-[19px] font-medium text-black tracking-wide"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeInUp}
              >
                WE BELIEVE IN
              </motion.p>
              <motion.h2
                className="mt-2 font-montserrat text-[55px] font-medium leading-[1.2] text-black"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
              >
                A Better<br />Way to Build
              </motion.h2>
              <motion.div
                className="mt-8 font-montserrat text-[15px] leading-relaxed text-black"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <p className="mb-4">
                  Tmod homes are built to last 100 years. Our homes are efficiently constructed, require minimal maintenance, and are staggeringly affordable.
                </p>
                <p>
                  We do this by combining advanced robotics and manufacturing technology with 100+ years of collective experience in home building and real estate development to forge a new path for affordable home construction.
                </p>
              </motion.div>
            </div>

            {/* Spacer for the right column */}
            <div></div>
          </div>
        </div>

        {/* Right content extending to screen edge */}
        <div className="relative w-[601px] flex-shrink-0">
          <motion.div
            className="h-[674px] w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${imgTModHomePageBetterWaytoBuild1}')`
            }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={liftIn}
          />
          <div className="absolute inset-0 bg-[#595E48] bg-opacity-90 flex items-center justify-center">
            <div className="max-w-lg px-6 text-center text-white">
              <motion.h3
                className="font-montserrat text-[28px] font-medium leading-relaxed"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeInUp}
              >
                We've removed countless layers of cost while incorporating smart materials and features to provide a healthy, scalable solution to the housing crisis.
              </motion.h3>
              <motion.div
                className="mt-8 flex justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
              >
                <button className="flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-3 font-montserrat text-[18px] font-medium text-white transition-colors hover:bg-white hover:text-[#595E48]">
                  Watch how we do it
                  <svg width="20" height="16" viewBox="0 0 21 16" fill="none" className="ml-2">
                    <path d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z" fill="currentColor"/>
                  </svg>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="mx-auto max-w-7xl px-6 lg:hidden">
        <div className="space-y-16">
          <div>
            <motion.p
              className="font-oswald text-[19px] font-medium text-black tracking-wide"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
            >
              WE BELIEVE IN
            </motion.p>
            <motion.h2
              className="mt-2 font-montserrat text-[42px] font-medium leading-[1.2] text-black"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              A Better<br />Way to Build
            </motion.h2>
            <motion.div
              className="mt-8 font-montserrat text-[15px] leading-relaxed text-black"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <p className="mb-4">
                Tmod homes are built to last 100 years. Our homes are efficiently constructed, require minimal maintenance, and are staggeringly affordable.
              </p>
              <p>
                We do this by combining advanced robotics and manufacturing technology with 100+ years of collective experience in home building and real estate development to forge a new path for affordable home construction.
              </p>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              className="h-[400px] w-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${imgTModHomePageBetterWaytoBuild1}')`
              }}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={liftIn}
            />
            <div className="absolute inset-0 bg-[#595E48] bg-opacity-90 flex items-center justify-center">
              <div className="max-w-lg px-6 text-center text-white">
                <motion.h3
                  className="font-montserrat text-[24px] font-medium leading-relaxed"
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  variants={fadeInUp}
                >
                  We've removed countless layers of cost while incorporating smart materials and features to provide a healthy, scalable solution to the housing crisis.
                </motion.h3>
                <motion.div
                  className="mt-6 flex justify-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  variants={fadeInUp}
                  transition={{ delay: 0.1 }}
                >
                  <button className="flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-6 py-2 font-montserrat text-[16px] font-medium text-white transition-colors hover:bg-white hover:text-[#595E48]">
                    Watch how we do it
                    <svg width="16" height="12" viewBox="0 0 21 16" fill="none" className="ml-1">
                      <path d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9H20V7H0V9Z" fill="currentColor"/>
                    </svg>
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HealthyLivingSection() {
  return (
    <section className="relative h-[478px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${imgTModHomesPageHealthyLiving1}')`
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="relative flex h-full items-center justify-center">
        <div className="text-center text-white">
          <motion.p 
            className="font-oswald text-[19px] font-medium tracking-wide"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
          >
            WE BELIEVE THAT
          </motion.p>
          <motion.h2 
            className="mt-2 font-montserrat text-[55px] font-medium leading-[1.2]"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
          >
            Healthy Living Shouldn't be Unaffordable
          </motion.h2>
          <motion.div 
            className="mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <button className="rounded-full border-2 border-white bg-transparent px-8 py-3 font-montserrat text-[18px] font-medium text-white transition-colors hover:bg-white hover:text-black">
              Learn more
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MortgageCalculatorSection() {
  const [formData, setFormData] = useState({
    homePrice: "250000",
    interestRate: "6.5",
    downPayment: "17500",
    downPaymentPercentage: "7",
    monthlyPayment: "1470"
  });

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <motion.p 
              className="font-oswald text-[19px] font-medium text-black tracking-wide"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
            >
              MORTGAGE CALCULATOR
            </motion.p>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="rounded border border-gray-400 bg-transparent p-2 text-center">
                  <select className="bg-transparent text-[15px] font-medium text-black focus:outline-none">
                    <option>Tmod Two</option>
                  </select>
                </div>
                <img
                  src={imgMcArrow1}
                  alt=""
                  className="h-2 w-4"
                />
              </div>
              
              <div className="h-px w-full bg-black"></div>
              
              <div className="space-y-4">
                {[
                  { label: "Base Home Price", value: formData.homePrice, key: "homePrice", prefix: "$" },
                  { label: "Interest Rate", value: formData.interestRate, key: "interestRate", suffix: "%" },
                  { label: "Down Payment", value: formData.downPayment, key: "downPayment", prefix: "$" },
                  { label: "Down Payment Percentage", value: formData.downPaymentPercentage, key: "downPaymentPercentage", suffix: "%" },
                  { label: "Total Monthly Payment", value: formData.monthlyPayment, key: "monthlyPayment", prefix: "$" },
                ].map((field) => (
                  <div key={field.key} className="flex items-center justify-between">
                    <label className="font-montserrat text-[21px] font-medium text-black">
                      {field.label}
                    </label>
                    <div className="flex items-center gap-2 rounded border border-gray-400 bg-transparent px-3 py-2">
                      {field.prefix && <span className="font-montserrat text-[15px] text-black">{field.prefix}</span>}
                      <input
                        type="text"
                        value={field.value}
                        onChange={(e) => setFormData(prev => ({ ...prev, [field.key]: e.target.value }))}
                        className="w-20 bg-transparent text-right font-montserrat text-[15px] font-medium text-black focus:outline-none"
                      />
                      {field.suffix && <span className="font-montserrat text-[15px] text-black">{field.suffix}</span>}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="h-px w-full bg-black"></div>
            </div>
          </div>
          
          <div>
            <motion.p 
              className="font-oswald text-[19px] font-medium text-black tracking-wide"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
            >
              STARTING FROM
            </motion.p>
            <motion.h3 
              className="mt-2 font-montserrat text-[45px] font-medium leading-[1.2] text-black"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              $250,000 or<br />less than $1,500/mo
            </motion.h3>
            <motion.p 
              className="mt-4 font-montserrat text-[21px] text-black"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              With flexible in-house financing and attractive Lease to Purchase options.
            </motion.p>
            <motion.div 
              className="mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <button className="rounded-full border-2 border-black bg-transparent px-8 py-3 font-montserrat text-[18px] font-medium text-black transition-colors hover:bg-black hover:text-white">
                Learn more
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DreamTeamSection() {
  return (
    <section className="bg-white py-20">
      {/* Desktop Layout */}
      <div className="hidden lg:flex">
        {/* Left content with margins - First image and text */}
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="space-y-8">
            {/* First image above text */}
            <motion.div
              className="h-[396px] w-[712px] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${imgTModHomePageDreamTeamOffice1}')`
              }}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={liftIn}
            />

            {/* Text content below first image */}
            <div className="max-w-[618px]">
              <motion.h2
                className="font-montserrat text-[55px] font-medium leading-[1.2] text-black"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeInUp}
              >
                The Dream Team
              </motion.h2>
              <motion.div
                className="mt-8 font-montserrat text-[15px] leading-relaxed text-black"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
              >
                <p className="mb-4">
                  Today, housing affordability is one of society's greatest challenges. Building more apartments or cheaply built homes doesn't solve the problem. New solutions are needed to restore that American Dream and it will require innovation, tenacity, and a passion for positive change.
                </p>
                <p>
                  Each and every one of our founders are existing leaders of highly successful organizations that represent years of experience in each of the most important components of how we build and sell our homes. Together, we're building an enterprise that dramatically decreases the cost of homeownership, promotes healthy living, all while positively impacting society and the environment.
                </p>
              </motion.div>
              <motion.div
                className="mt-8"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <button className="rounded-full border-2 border-black bg-transparent px-8 py-3 font-montserrat text-[18px] font-medium text-black transition-colors hover:bg-black hover:text-white">
                  Meet the team
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right image extending to screen edge */}
        <div className="relative w-[593px] flex-shrink-0">
          <motion.div
            className="h-[1046px] w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${imgTModHomePageTheDreamTeam1}')`
            }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={liftIn}
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="mx-auto max-w-7xl px-6 lg:hidden">
        <div className="space-y-16">
          {/* First image */}
          <motion.div
            className="h-[300px] w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${imgTModHomePageDreamTeamOffice1}')`
            }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={liftIn}
          />

          {/* Text content */}
          <div>
            <motion.h2
              className="font-montserrat text-[42px] font-medium leading-[1.2] text-black"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
            >
              The Dream Team
            </motion.h2>
            <motion.div
              className="mt-8 font-montserrat text-[15px] leading-relaxed text-black"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              <p className="mb-4">
                Today, housing affordability is one of society's greatest challenges. Building more apartments or cheaply built homes doesn't solve the problem. New solutions are needed to restore that American Dream and it will require innovation, tenacity, and a passion for positive change.
              </p>
              <p>
                Each and every one of our founders are existing leaders of highly successful organizations that represent years of experience in each of the most important components of how we build and sell our homes. Together, we're building an enterprise that dramatically decreases the cost of homeownership, promotes healthy living, all while positively impacting society and the environment.
              </p>
            </motion.div>
            <motion.div
              className="mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <button className="rounded-full border-2 border-black bg-transparent px-6 py-2 font-montserrat text-[16px] font-medium text-black transition-colors hover:bg-black hover:text-white">
                Meet the team
              </button>
            </motion.div>
          </div>

          {/* Second tall image */}
          <motion.div
            className="h-[500px] w-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${imgTModHomePageTheDreamTeam1}')`
            }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={liftIn}
          />
        </div>
      </div>
    </section>
  );
}

export default function LP() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <BetterWayToLiveSection />
      <OurHomesSection />
      <BetterWayToBuildSection />
      <HealthyLivingSection />
      <MortgageCalculatorSection />
      <DreamTeamSection />
    </main>
  );
}
