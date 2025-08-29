"use client";

import { useEffect, useRef, useState } from "react";

// Map Framer figma:asset imports to Next.js public assets
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

function MobileTeam() {
  const stats = [
    {
      number: "25+",
      description:
        "Years in complex, commercial, residential and industrial electric & HVAC",
    },
    {
      number: "30+",
      description:
        "Years and millions of square feet delivered in steel construction",
    },
    {
      number: "25+",
      description:
        "Years in engineering, systems development, robotics, automation and implementation",
    },
    {
      number: "30+",
      description:
        "Years in consumer product innovation, entrepreneurship, and real estate development",
    },
  ] as const;

  return (
    <div className="md:hidden">
      {/* Hero */}
      <section className="relative w-full bg-black text-white">
        <div className="mx-auto max-w-[720px] px-4 py-14 sm:py-16">
          <h1 className="font-heading text-3xl sm:text-4xl leading-tight">United by purpose, driven by passion</h1>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-[720px] px-4 py-8 grid gap-6">
        <h2 className="text-2xl font-semibold">Behind every great dream is a great team</h2>
        <p className="text-sm text-black/80">
          Our founders bring more than just industry know-how—they bring a shared commitment to reimagining what homeownership can be. By uniting proven leaders in construction, design, finance, and community development, we&apos;re combining best-in-class practices with bold new thinking.
        </p>
        <p className="text-sm text-black/80">
          The result is a holistic approach that not only makes homes more attainable, but also creates vibrant, sustainable communities where people can truly thrive.
        </p>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-[720px] px-4 pb-8">
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="rounded-md border border-black/10 p-4">
              <div className="text-3xl font-semibold text-black">{s.number}</div>
              <p className="mt-2 text-xs text-black/80">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-[720px] px-4 pb-12">
        <h3 className="font-heading text-xl mb-4">Some other things we&apos;ve been up to</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="aspect-[3/2] bg-center bg-cover rounded" style={{ backgroundImage: `url('${imgTModHomesPageWaytoBuild11}')` }} />
          <div className="aspect-[3/2] bg-center bg-cover rounded" style={{ backgroundImage: `url('${imgTModHomesPageWaytoBuild21}')` }} />
          <div className="aspect-[3/2] bg-center bg-cover rounded" style={{ backgroundImage: `url('${imgTModHomesPageWaytoBuild31}')` }} />
        </div>
      </section>
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
        // Measure after the transform is applied, include absolutely positioned descendants
        requestAnimationFrame(() => {
          const outer = outerRef.current;
          const inner = innerRef.current;
          if (!outer || !inner) return;
          const innerRect = inner.getBoundingClientRect();
          let maxBottom = innerRect.bottom;
          const all = inner.querySelectorAll("*");
          all.forEach((node) => {
            if (node instanceof HTMLElement) {
              const r = node.getBoundingClientRect();
              if (!Number.isNaN(r.bottom)) {
                if (r.bottom > maxBottom) maxBottom = r.bottom;
              }
            }
          });
          const height = Math.max(0, maxBottom - innerRect.top);
          outer.style.height = `${height}px`;
        });
      }
    };
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
      window.removeEventListener("scroll", update);
    };
  }, []);

  return (
    <>
      {/* Mobile layout */}
      <MobileTeam />

      {/* Desktop/tablet (original scaled layout) */}
      <div ref={outerRef} className="hidden md:block relative w-screen overflow-x-hidden bg-white">
        <div
          ref={innerRef}
          className="relative origin-top-left"
          style={{ width: 1440, transform: `scale(${scale})` }}
          data-name="Team"
        >
          <HeroSection />
          <TeamOverviewSection />
          <StatisticsSection />
          <ProjectsSection />
        </div>
      </div>
    </>
  );
}
