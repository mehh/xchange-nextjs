'use client';

import { useEffect, useRef, useState } from "react";
import svgPaths from "./svg-2w5m10i2ti";
import Parallax from "../components/Parallax";

// Adapted Vite 'figma:asset' imports to Next.js public assets
const imgTModSustainabilityComesStandard1 = "/assets/9fab228098d8a44a5ca62df78dc268fdf5e8cb0a.png";
const imgTModSustainabilityClimateFriendly11 = "/assets/5e620e15764a47847a9a0398c3ce77398a76459e.png";
const imgTModSustainabilityHero1 = "/assets/ad9acda577c86e2dd823bbc0d2ad947c2cddca84.png";
const imgTModSustainabilityClimateFriendly21 = "/assets/6e98b085ecffad9d16a2aa984758c0da0d498f7d.png";
const imgTModSustainabilityModernApproach1 = "/assets/f79b9c0a2f1a65591c12fce25ff74ef3c1c9334c.png";
const imgTModSustainabilityClimateFriendly31 = "/assets/7bc427118ad5f88fa7ce46dab6e16416862c7800.png";

function MobileHealth() {
  const features = [
    "Models meet or exceed LEED-certification requirements",
    "Energy-efficient manufacturing methods including steel-frame and structural insulated panels (SIPs)",
    "HFO spray foam insulation with 80% lower Global Warming Potential (GWP) compared to HFC",
    "Energy-efficient windows with low-emissivity coating",
    "Double-pane argon gas filled windows",
    "LED lighting for additional energy savings",
    "High efficiency heating and cooling system with mini-splits",
    "Optional solar panels, battery storage, and electric vehicle charging equipment",
  ];

  const results = [
    { value: "84%", label: "More energy efficient than conventional construction" },
    { value: "12x", label: "More energy efficient than traditional homes" },
    { value: "10K", label: "Pounds of nitric oxide (NOx) avoided in the atmosphere" },
    { value: "5K", label: "Pounds of sulfuric acid (SOx) avoided in the atmosphere" },
    { value: "80%", label: "Faster construction time compared to local construction" },
    { value: "2.7M", label: "Pounds of carbon dioxide (CO2) avoided in the atmosphere" },
  ] as const;

  return (
    <div className="md:hidden">
      {/* Hero */}
      <section className="relative w-full text-white min-h-[220px] sm:min-h-[280px] overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-cover z-0 pointer-events-none"
          style={{ backgroundImage: `url('${imgTModSustainabilityHero1}')` }}
        />
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-black/35 via-black/15 to-transparent" />
        <div className="relative z-10 mx-auto max-w-[720px] px-4 py-14 sm:py-16">
          <h1 className="font-heading text-3xl sm:text-4xl leading-tight">The Gold Standard of Healthy, Affordable Living</h1>
        </div>
      </section>

      {/* Climate Friendly */}
      <section className="mx-auto max-w-[720px] px-4 py-8 grid gap-6">
        <h2 className="text-2xl font-semibold">Climate Friendly Means Healthier Living</h2>
        <div className="aspect-[4/3] bg-center bg-cover rounded" style={{ backgroundImage: `url('${imgTModSustainabilityClimateFriendly11}')` }} />
        <p className="text-sm text-black/80">The home construction industry contributes to 42% of global emissions. Traditional methods lead to millions of tons of CO₂ and other harmful chemicals. We believe there&apos;s a better way.</p>
        <p className="text-sm text-black/80">Using intelligent manufacturing, automation, advanced materials, and innovative systems, we build homes that improve occupant health, support the grid with clean energy, and dramatically reduce waste.</p>
      </section>

      {/* Standard Features */}
      <section className="mx-auto max-w-[720px] px-4 py-8">
        <h3 className="font-heading text-xl mb-4">Health & Sustainability Comes Standard</h3>
        <ul className="grid grid-cols-1 gap-3 list-disc pl-5 text-sm text-black/80">
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </section>

      {/* Learn more */}
      <section className="mx-auto max-w-[720px] px-4 pb-8">
        <button className="inline-flex items-center rounded-full border border-black/20 px-4 py-2 text-sm">Learn more</button>
      </section>

      {/* Modern Approach */}
      <section className="mx-auto max-w-[720px] px-4 pb-8">
        <h3 className="font-heading text-xl mb-4">A Modern Approach to Clean Living</h3>
        <div className="aspect-[16/9] bg-center bg-cover rounded" style={{ backgroundImage: `url('${imgTModSustainabilityModernApproach1}')` }} />
      </section>

      {/* Results */}
      <section className="mx-auto max-w-[720px] px-4 pb-12">
        <h4 className="font-heading text-lg mb-4">The Results</h4>
        <div className="grid grid-cols-2 gap-4">
          {results.map((r, i) => (
            <div key={i} className="rounded-md border border-black/10 p-4">
              <div className="text-3xl font-semibold text-black">{r.value}</div>
              <p className="mt-2 text-xs text-black/80">{r.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function Health() {
  const [scale, setScale] = useState(1);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const w = outerRef.current?.clientWidth ?? (typeof window !== "undefined" ? window.innerWidth : 1440);
      const s = w / 1440; // scale-to-fill: grow and shrink with viewport
      setScale(s);
      if (outerRef.current && innerRef.current) {
        // Measure after the transform is applied, including absolutely positioned descendants
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
      <MobileHealth />

      {/* Desktop/tablet (original scaled layout) */}
      <div ref={outerRef} className="hidden md:block relative w-screen overflow-x-hidden bg-white">
        <div
          ref={innerRef}
          className="relative origin-top-left"
          style={{ width: 1440, transform: `scale(${scale})` }}
          data-name="Health"
        >
      <div
        className="absolute bg-[34.87%_43.11%] bg-no-repeat bg-size-[109.92%_109.77%] h-[965px] left-0 top-[2473px] w-[551px]"
        data-name="TMod_Sustainability_ComesStandard 1"
        style={{ backgroundImage: `url('${imgTModSustainabilityComesStandard1}')` }}
      />
      <div className="absolute bg-[#f0e8e4] h-[676px] left-0 top-[3821px] w-[1440px]" />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[778px] left-[66px] top-[845px] w-[654px]"
        data-name="TMod_Sustainability_ClimateFriendly_1 1"
        style={{ backgroundImage: `url('${imgTModSustainabilityClimateFriendly11}')` }}
      />
      <div className="absolute bg-[#595e48] h-[226px] left-0 top-[1691px] w-[1440px]" />
      <Parallax
        speed={0.15}
        scale={scale}
        className="absolute bg-bottom bg-no-repeat bg-size-[107.55%_116.92%] h-[662px] left-0 top-0 w-[1440px] z-0 pointer-events-none"
        data-name="TMod_Sustainability_Hero 1"
        style={{ backgroundImage: `url('${imgTModSustainabilityHero1}')` }}
      />
      <div
        className="absolute bg-[54.58%_49.12%] bg-no-repeat bg-size-[104.75%_107.53%] h-[444px] left-[66px] top-[1983px] w-[836px]"
        data-name="TMod_Sustainability_ClimateFriendly_2 1"
        style={{ backgroundImage: `url('${imgTModSustainabilityClimateFriendly21}')` }}
      />
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[416px] left-0 top-[5213px] w-[1440px]"
        data-name="TMod_Sustainability_ModernApproach 1"
        style={{ backgroundImage: `url('${imgTModSustainabilityModernApproach1}')` }}
      />
      <div className="absolute font-['Montserrat:Medium',_sans-serif] leading-[normal] left-[722px] not-italic text-[56px] text-center text-nowrap text-white top-[336px] translate-x-[-50%] whitespace-pre z-10">
        <p className="mb-0">The Gold Standard of</p>
        <p>Healthy, Affordable Living</p>
      </div>
      <div className="absolute flex h-[20px] items-center justify-center left-[722px] top-[518px] w-[0px] z-10">
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-5">
            <div className="absolute bottom-[-7.36px] left-0 right-[-5%] top-[-7.36px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16">
                <path d={svgPaths.p246be700} fill="var(--stroke-0, white)" id="Arrow 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[700px] size-11 top-[506px] z-10">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
          <circle cx="22" cy="22" id="Ellipse 1" r="21" stroke="var(--stroke-0, white)" strokeWidth="2" />
        </svg>
      </div>
      <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[211px] leading-[normal] left-[863px] not-italic text-[55px] text-black top-[960px] w-[491px]">
        <p className="mb-0">Climate Friendly</p>
        <p className="mb-0">Means Healthier</p>
        <p>Living</p>
      </div>
      <div className="absolute font-['Montserrat:Regular',_sans-serif] h-[330px] leading-[normal] left-[863px] not-italic text-[15px] text-black top-[1204px] w-[430px]">
        <p className="mb-0">{`The data is clear, the home construction industry contributes to 42% of global emissions. Traditional `}</p>
        <p className="mb-0">{`home-building methods lead to millions of tons of carbon dioxide and other harmful chemicals in the atmosphere. We must do better. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{`At Tmod, we are evolving home production. Using intelligent manufacturing methods, robotic automation, advanced materials, and innovative systems, we’ve created homes to improve the health of the occupants, supply the grid with clean energy and remove millions `}</p>
        <p className="mb-0">of tons of chemical waste from entering our ecosystem.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{`Compared to the traditional construction sector, which produces roughly 40% of landfill waste, a factory-built construction method reduces waste by up to 90%. `}</p>
        <p>{`With our end-to-end platform, we’re reducing our impact on the planet by producing sustainable homes. `}</p>
      </div>
      <div className="absolute font-['Montserrat:Regular',_sans-serif] h-[103px] leading-[normal] left-[719.5px] not-italic text-[25px] text-center text-white top-[1754px] translate-x-[-50%] w-[999px]">
        <p className="mb-0">This one change can improve our health and create energy independence.</p>
        <p className="mb-0">{`It will lower our burden on the healthcare system, decrease the cost `}</p>
        <p>of housing, and see our homes thrive in climate emergencies.</p>
      </div>
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[311px] left-[946px] top-[2118px] w-[494px]"
        data-name="TMod_Sustainability_ClimateFriendly_3 1"
        style={{ backgroundImage: `url('${imgTModSustainabilityClimateFriendly31}')` }}
      />
      <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[211px] leading-[normal] left-[720px] not-italic text-[55px] text-black top-[2605px] w-[491px]">
        <p className="mb-0">Health</p>
        <p className="mb-0">{`& Sustainability`}</p>
        <p>Comes Standard</p>
      </div>
      <div className="absolute font-['Oswald:Medium',_sans-serif] font-medium leading-[0] left-[720px] text-[19px] text-black text-nowrap top-[2843px]">
        <p className="leading-[normal] whitespace-pre">STANDARD FEATURES</p>
      </div>
      <div className="absolute h-0 left-[720px] top-[2897px] w-[542px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 542 1">
            <line id="Line 4" stroke="var(--stroke-0, black)" x2="542" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[720px] top-[2968px] w-[542px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 542 1">
            <line id="Line 4" stroke="var(--stroke-0, black)" x2="542" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[720px] top-[3062px] w-[542px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 542 1">
            <line id="Line 4" stroke="var(--stroke-0, black)" x2="542" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[720px] top-[3156px] w-[542px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 542 1">
            <line id="Line 4" stroke="var(--stroke-0, black)" x2="542" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[720px] top-[3226px] w-[542px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 542 1">
            <line id="Line 4" stroke="var(--stroke-0, black)" x2="542" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[720px] top-[3295px] w-[542px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 542 1">
            <line id="Line 4" stroke="var(--stroke-0, black)" x2="542" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[720px] top-[3365px] w-[542px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 542 1">
            <line id="Line 4" stroke="var(--stroke-0, black)" x2="542" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[720px] top-[3458px] w-[542px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 542 1">
            <line id="Line 4" stroke="var(--stroke-0, black)" x2="542" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[720px] top-[3552px] w-[542px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 542 1">
            <line id="Line 4" stroke="var(--stroke-0, black)" x2="542" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute bg-[rgba(0,0,0,0)] h-[46px] left-[720px] rounded-[29px] top-[3602px] w-[197px]">
        <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[29px]" />
      </div>
      <div className="absolute font-['Montserrat:Medium',_sans-serif] leading-[0] left-[766px] not-italic text-[18px] text-black text-nowrap top-[3614px]">
        <p className="leading-[normal] whitespace-pre">Learn more</p>
      </div>
      <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[134px] leading-[normal] left-[720.5px] not-italic text-[55px] text-black text-center top-[3948px] translate-x-[-50%] w-[597px]">
        <p className="mb-0">A Modern Approach</p>
        <p>to Clean Living</p>
      </div>
      <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[134px] leading-[0] left-60 not-italic text-[92px] text-black text-center top-[4805px] translate-x-[-50%] w-[226px]">
        <p className="leading-[normal]">84%</p>
      </div>
      <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[134px] leading-[0] left-[257px] not-italic text-[92px] text-black text-center top-[4974px] translate-x-[-50%] w-[226px]">
        <p className="leading-[normal]">10K</p>
      </div>
      <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[134px] leading-[0] left-[622px] not-italic text-[92px] text-black text-center top-[4974px] translate-x-[-50%] w-[226px]">
        <p className="leading-[normal]">5K</p>
      </div>
      <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[134px] leading-[0] left-[1006px] not-italic text-[92px] text-black text-center top-[4974px] translate-x-[-50%] w-[226px]">
        <p className="leading-[normal]">80%</p>
      </div>
      <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[134px] leading-[0] left-[614px] not-italic text-[92px] text-black text-center top-[4805px] translate-x-[-50%] w-[226px]">
        <p className="leading-[normal]">12x</p>
      </div>
      <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[134px] leading-[0] left-[1001px] not-italic text-[92px] text-black text-center top-[4805px] translate-x-[-50%] w-[226px]">
        <p className="leading-[normal]">2.7M</p>
      </div>
      <div className="absolute font-['Oswald:Medium',_sans-serif] font-medium leading-[0] left-[132px] text-[19px] text-black text-nowrap top-[4181px]">
        <p className="leading-[normal] whitespace-pre">INNOVATION TAKEN TO NEW HEIGHTS</p>
      </div>
      <div className="absolute font-['Oswald:Medium',_sans-serif] font-medium leading-[0] left-[624px] text-[38px] text-black text-nowrap top-[4624px]">
        <p className="leading-[normal] whitespace-pre">THE RESULTS</p>
      </div>
      <div className="absolute font-['Montserrat:Regular',_sans-serif] h-[150px] leading-[normal] left-[132px] not-italic text-[15px] text-black top-[4225px] w-[563px]">
        <p className="mb-0">{`We only use products and building systems that help you stay healthy and safe. The Self-Healing™ home has raised the standards for what a new home should be capable of. It has material declarations and transparency certificates for all materials used throughout the home. They included GreenGuard and Cradle to Cradle Certificates and items not listed on the Red List of toxic materials. The entire home is produced to a high degree `}</p>
        <p className="mb-0">{`of quality so that no moisture builds up–moisture is the home’s `}</p>
        <p>greatest enemy.</p>
      </div>
      <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[70px] leading-[normal] left-[373px] not-italic text-[16px] text-black top-[4818px] w-[117px]">
        <p className="mb-0">More energy</p>
        <p className="mb-0">efficient than</p>
        <p className="mb-0">conventional</p>
        <p>construction</p>
      </div>
      <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[70px] leading-[0] left-[373px] not-italic text-[15px] text-black top-[4995px] w-[136px]">
        <p className="leading-[normal]">Pounds of nitric oxide (NOx) avoided in the atmosphere</p>
      </div>
      <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[70px] leading-[0] left-[719px] not-italic text-[16px] text-black top-[5007px] w-[163px]">
        <p className="leading-[normal]">Pounds of sulfuric acid (SOx) avoided in the atmosphere</p>
      </div>
      <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[70px] leading-[0] left-[1139px] not-italic text-[16px] text-black top-[4987px] w-[151px]">
        <p className="leading-[normal]">Faster construction time compared to local construction</p>
      </div>
      <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[57px] leading-[normal] left-[719px] not-italic text-[16px] text-black top-[4838px] w-[145px]">
        <p className="mb-0">More energy</p>
        <p className="mb-0">efficient than</p>
        <p>traditional homes</p>
      </div>
      <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[76px] leading-[normal] left-[1139px] not-italic text-[16px] text-black top-[4818px] w-[145px]">
        <p className="mb-0">Pounds of carbon</p>
        <p className="mb-0">{`dioxide (CO2) avoided in the `}</p>
        <p>atmosphere</p>
      </div>
      <div className="absolute font-['Oswald:Medium',_sans-serif] font-medium leading-[0] left-[752px] text-[19px] text-black text-nowrap top-[4181px]">
        <p className="leading-[normal] whitespace-pre">DRIVING DOWN CONSUMPTION</p>
      </div>
      <div className="absolute font-['Montserrat:Regular',_sans-serif] h-[150px] leading-[normal] left-[752px] not-italic text-[15px] text-black top-[4225px] w-[563px]">
        <p className="mb-0 whitespace-pre-wrap">{`To achieve an extremely high level of reduction of chemicals in the atmosphere, we use a custom‑designed building envelope to prevent thermal bridging—heating and cooling gain/loss—with a Self-Powered™ system— clean energy production and storage—and continuous air circulation resulting in less heating and cooling leading to a home 84 percent more energy efficient than a conventional home. This gives  `}</p>
        <p>you a powerful new way to make a change in the environment.</p>
      </div>
      <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[18px] leading-[0] left-[720px] not-italic text-[19px] text-black top-[2921px] w-[561px]">
        <p className="leading-[normal]">Models meet or exceed LEED-certification requirements</p>
      </div>
      <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[18px] leading-[0] left-[720px] not-italic text-[19px] text-black top-[3250px] w-[561px]">
        <p className="leading-[normal]">Double-pane argon gas filled windows</p>
      </div>
      <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[18px] leading-[0] left-[720px] not-italic text-[19px] text-black top-[3318px] w-[561px]">
        <p className="leading-[normal]">LED lighting for additional energy savings</p>
      </div>
      <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[46px] leading-[normal] left-[720px] not-italic text-[19px] text-black top-[3389px] w-[561px]">
        <p className="mb-0">High efficiency heating and cooling system</p>
        <p>with mini-splits</p>
      </div>
      <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[46px] leading-[normal] left-[720px] not-italic text-[19px] text-black top-[3482px] w-[561px]">
        <p className="mb-0">Optional solar panels, battery storage, and electric</p>
        <p>vehicle charging equipment</p>
      </div>
      <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[45px] leading-[normal] left-[720px] not-italic text-[19px] text-black top-[2994px] w-[561px]">
        <p className="mb-0">Energy-efficient manufacturing methods including</p>
        <p>steel-frame and structural insulated panels (SIPs)</p>
      </div>
      <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[45px] leading-[normal] left-[720px] not-italic text-[19px] text-black top-[3086px] w-[561px]">
        <p className="mb-0">HFO spray foam insulation, which has 80% lower Global</p>
        <p>Warming Potential (GWP) compared to HFC</p>
      </div>
      <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[26px] leading-[0] left-[720px] not-italic text-[19px] text-black top-[3179px] w-[561px]">
        <p className="leading-[normal]">Energy-efficient windows with low-emissivity coating</p>
      </div>
      <div className="absolute h-0 left-[143px] top-[4728px] w-[1153px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1153 1">
            <line id="Line 13" stroke="var(--stroke-0, black)" x2="1153" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      
        </div>
      </div>
    </>
  );
}
