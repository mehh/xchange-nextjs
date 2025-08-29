"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Map Framer figma:asset imports to Next.js public assets
const imgSocialMediaIcons1 = "/assets/6a30b3ccdebfd665dd1f1b3627a2663a195c81e1.png";
const imgGettyImages5344255611 = "/assets/7398acc3f9c9b67406888df334c2b992237baaef.png";
const imgGettyImages16193329491 = "/assets/605eadc60cee02ac8517e53a767cbbf0921156d7.png";
const imgTModSustainabilityHero1 = "/assets/ecf9b41fa8b715a21892e50defbfa281e55f0724.png";
const imgTModHomesPageWaytoBuild11 = "/assets/fce4f01d27d80a0d3cdd8ed51c37e89f76144d58.png";
const imgTModHomesPageWaytoBuild21 = "/assets/d24820dc27e6fcc5a188c6ebb3f9ee0cdf871840.png";
const imgTModHomesPageWaytoBuild31 = "/assets/1558181e2bb8faab6f390d681a9e83121ac0b12b.png";


function HeroSection() {
  return (
    <div
      className="absolute bg-center bg-cover bg-no-repeat h-[720px] left-0 top-0 w-[1440px]"
      data-name="TMod_Sustainability_Hero 1"
      style={{ backgroundImage: `url('${imgTModSustainabilityHero1}')` }}
    >
      <div className="absolute font-['Montserrat:Medium',_sans-serif] leading-[normal] left-[720.5px] not-italic text-[56px] text-center text-nowrap text-white top-[356px] translate-x-[-50%] whitespace-pre">
        <p className="mb-0">United by purpose,</p>
        <p>driven by passion</p>
      </div>
    </div>
  );
}

function TeamOverviewSection() {
  return (
    <>
      <div
        className="absolute bg-[0%_1.32%] bg-no-repeat bg-size-[100.74%_147.6%] h-[390px] left-[47px] top-[807px] w-[943px]"
        data-name="GettyImages-534425561 1"
        style={{ backgroundImage: `url('${imgGettyImages5344255611}')` }}
      />
      <div className="absolute flex h-[472px] items-center justify-center left-[1033px] top-[766px] w-[356px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="bg-[#595e48] h-[472px] w-[356px]" />
        </div>
      </div>
      <div
        className="absolute bg-[98.7%_0.95%] bg-no-repeat bg-size-[207.3%_104.25%] h-[472px] left-[1033px] top-[766px] w-[356px]"
        data-name="GettyImages-1619332949 1"
        style={{ backgroundImage: `url('${imgGettyImages16193329491}')` }}
      />

      <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[211px] leading-[normal] left-[118px] not-italic text-[55px] text-black top-[1334px] w-[547px]">
        <p className="mb-0">Behind every</p>
        <p className="mb-0">great dream</p>
        <p>is a great team</p>
      </div>

      <div className="absolute font-['Montserrat:Regular',_sans-serif] h-[162px] leading-[normal] left-[821px] not-italic text-[15px] text-black top-[1359px] w-[500px]">
        <p className="mb-0">
          Our founders bring more than just industry know-how—they bring a shared commitment to reimagining what homeownership can be. By uniting proven leaders in construction, design, finance, and community development, we&apos;re combining best-in-class practices with bold new thinking.
        </p>
        <p className="mb-0">&nbsp;</p>
        <p>
          The result is a holistic approach that not only makes homes more attainable, but also creates vibrant, sustainable communities where people can truly thrive.
        </p>
      </div>
    </>
  );
}

function StatisticsSection() {
  const stats = [
    {
      number: "25+",
      description:
        "Years in complex, commercial, residential and industrial electric & HVAC",
      left: 143,
      top: 1666,
      descLeft: 338,
      descTop: 1705,
      descWidth: 327,
      descHeight: 71,
    },
    {
      number: "30+",
      description:
        "Years and millions of square feet delivered in steel construction",
      left: 791,
      top: 1666,
      descLeft: 990,
      descTop: 1706,
      descWidth: 317,
      descHeight: 38,
    },
    {
      number: "25+",
      description:
        "Years in engineering, systems development, robotics, automation and implementation",
      left: 143,
      top: 1841,
      descLeft: 338,
      descTop: 1872,
      descWidth: 337,
      descHeight: 96,
    },
    {
      number: "30+",
      description:
        "Years in consumer product innovation, entrepreneurship, and real estate development",
      left: 791,
      top: 1841,
      descLeft: 990,
      descTop: 1872,
      descWidth: 306,
      descHeight: 79,
    },
    {
      number: "25+",
      description:
        "Years in finance, loan procurement, JV Deal structures, business development, and real estate development",
      left: 143,
      top: 2016,
      descLeft: 338,
      descTop: 2044,
      descWidth: 382,
      descHeight: 144,
    },
    {
      number: "25+",
      description: "Placeholder text to go right here",
      left: 791,
      top: 2016,
      descLeft: 986,
      descTop: 2054,
      descWidth: 264,
      descHeight: 38,
    },
    {
      number: "25+",
      description: "Placeholder text to go right here",
      left: 143,
      top: 2191,
      descLeft: 338,
      descTop: 2229,
      descWidth: 274,
      descHeight: 38,
    },
    {
      number: "25+",
      description: "Placeholder text to go right here",
      left: 791,
      top: 2191,
      descLeft: 986,
      descTop: 2229,
      descWidth: 264,
      descHeight: 38,
    },
  ] as const;

  return (
    <>
      {stats.map((stat, index) => (
        <div key={index}>
          <div
            className={`absolute font-['Montserrat:Medium',_sans-serif] h-[121px] leading-[0] not-italic text-[80px] text-black w-[163px]`}
            style={{ left: stat.left, top: stat.top }}
          >
            <p className="leading-[125px]">{stat.number}</p>
          </div>
          <div
            className={`absolute font-['Montserrat:Medium',_sans-serif] leading-[0] not-italic text-[20px] text-black`}
            style={{
              left: stat.descLeft,
              top: stat.descTop,
              width: stat.descWidth,
              height: stat.descHeight,
            }}
          >
            <p className="leading-[normal]">{stat.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}

function ProjectsSection() {
  return (
    <div className="absolute contents left-[143px] top-[2783px]">
      <div className="absolute font-['Oswald:Medium',_sans-serif] font-medium leading-[0] left-[427px] text-[38px] text-black text-nowrap top-[2783px]">
        <p className="leading-[normal] whitespace-pre">SOME OTHER THINGS WE&apos;VE BEEN UP TO</p>
      </div>
      <div className="absolute h-0 left-[143px] top-[2887px] w-[1153px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1153 1">
            <line id="Line 13" stroke="var(--stroke-0, black)" x2="1153" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>

      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[227px] left-[47px] top-[2434px] w-[419px]"
        data-name="TMod_HomesPage_WaytoBuild_1 1"
        style={{ backgroundImage: `url('${imgTModHomesPageWaytoBuild11}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[227px] left-[510px] top-[2434px] w-[421px]"
        data-name="TMod_HomesPage_WaytoBuild_2 1"
        style={{ backgroundImage: `url('${imgTModHomesPageWaytoBuild21}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[227px] left-[974px] top-[2434px] w-[419px]"
        data-name="TMod_HomesPage_WaytoBuild_3 1"
        style={{ backgroundImage: `url('${imgTModHomesPageWaytoBuild31}')` }}
      />

      <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[38px] leading-[0] left-[381px] not-italic text-[20px] text-black text-center top-[2983px] translate-x-[-50%] w-[274px]">
        <p className="leading-[normal]">Placeholder text to go right here</p>
      </div>
      <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[38px] leading-[0] left-[720px] not-italic text-[20px] text-black text-center top-[2983px] translate-x-[-50%] w-[274px]">
        <p className="leading-[normal]">Placeholder text to go right here</p>
      </div>
      <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[38px] leading-[0] left-[1059px] not-italic text-[20px] text-black text-center top-[2983px] translate-x-[-50%] w-[274px]">
        <p className="leading-[normal]">Placeholder text to go right here</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute contents left-0 top-[3289px]">
      <div className="absolute bg-[#272719] h-[372px] left-0 top-[3289px] w-[1440px]" />
      <Link
        href="/homes"
        className="absolute font-['Montserrat:Regular',_sans-serif] leading-[0] left-40 not-italic text-[13px] text-nowrap text-white top-[3376px]"
      >
        Homes
      </Link>
      <Link
        href="/health"
        className="absolute font-['Montserrat:Regular',_sans-serif] leading-[0] left-40 not-italic text-[13px] text-nowrap text-white top-[3398px]"
      >
        Health
      </Link>
      <Link
        href="/team"
        className="absolute font-['Montserrat:Regular',_sans-serif] leading-[0] left-40 not-italic text-[13px] text-nowrap text-white top-[3420px]"
      >
        Team
      </Link>
      <div className="absolute font-['Montserrat:Regular',_sans-serif] leading-[0] left-[161px] not-italic text-[13px] text-nowrap text-white top-[3560px]">
        <p className="leading-[normal] whitespace-pre">© 2025 TMOD, Inc. All rights reserved</p>
      </div>
      <Link
        href="/privacy"
        className="absolute font-['Montserrat:Regular',_sans-serif] leading-[0] left-[675px] not-italic text-[13px] text-nowrap text-white top-[3560px]"
      >
        Privacy Policy
      </Link>
      <Link
        href="/terms"
        className="absolute font-['Montserrat:Regular',_sans-serif] leading-[0] left-[1199px] not-italic text-[13px] text-nowrap text-white top-[3560px]"
      >
        Terms of Use
      </Link>
      <div
        className="absolute bg-[1.53%_0%] bg-no-repeat bg-size-[126.78%_100%] h-8 left-[1190px] top-[3370px] w-[104px]"
        data-name="SocialMedia_Icons 1"
        style={{ backgroundImage: `url('${imgSocialMediaIcons1}')` }}
      />
    </div>
  );
}

export default function Team() {
  const [scale, setScale] = useState(1);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const w = outerRef.current?.clientWidth ?? (typeof window !== "undefined" ? window.innerWidth : 1440);
      const s = w / 1440;
      setScale(s);
      if (outerRef.current && innerRef.current) {
        const h = innerRef.current.scrollHeight * s;
        outerRef.current.style.height = `${h}px`;
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div ref={outerRef} className="relative w-screen overflow-x-hidden bg-white">
      <div
        ref={innerRef}
        className="relative origin-top-left"
        style={{ width: 1440, transform: `scale(${scale})` }}
        data-name="Team"
      >
        {/* Canvas height */}
        <div className="absolute inset-0 h-[3661px] w-[1440px]" />

        <HeroSection />
        <TeamOverviewSection />
        <StatisticsSection />
        <ProjectsSection />
      </div>
    </div>
  );
}
