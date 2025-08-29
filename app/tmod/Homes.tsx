"use client";

import { useEffect, useRef, useState } from "react";
import svgPaths from "./svg-2w5m10i2ti";
import Parallax from "../components/Parallax";

// Map Framer figma:asset imports to Next.js public assets
const imgGettyImages1455960407 = "/assets/460c543ad5403b2f9a71fbab11a5b874692e316e.png";
const imgScreenShot20241206At65429Am1 = "/assets/408db099393db085014ca7f79a9c688bded8623d.png";
const imgTModHomesPageWaytoBuild11 = "/assets/fce4f01d27d80a0d3cdd8ed51c37e89f76144d58.png";
const imgTModHomesPageWaytoBuild21 = "/assets/d24820dc27e6fcc5a188c6ebb3f9ee0cdf871840.png";
const imgTModHomesPageWaytoBuild31 = "/assets/1558181e2bb8faab6f390d681a9e83121ac0b12b.png";
const imgTModHomesPageHero1 = "/assets/5f3101d8f6b18a05b334511431972e4a26a1f7c5.png";
const imgTModHomesPageSafety11 = "/assets/9f5915d680d070f06ec4c6eb17c296ef98d8b98a.png";
const imgTModHomesPageSafety21 = "/assets/828fafdcd6db456aef9e205e1f02405d45d1435f.png";
const imgTModHomesPageSafety31 = "/assets/cc4074f012183d1fa1d21123febd47cb0e58d392.png";
const imgTModHomesPageAboveBeyond1 = "/assets/c21530d4dbcd92f4cff619b76416c523b0ecd29a.png";


function MobileHomes() {
  return (
    <div className="md:hidden">
      {/* Hero */}
      <section className="relative w-full bg-black text-white">
        <div className="mx-auto max-w-[720px] px-4 py-14 sm:py-16">
          <h1 className="font-heading text-3xl sm:text-4xl leading-tight">Precision Engineered, High Performance Homes</h1>
        </div>
      </section>

      {/* Predictable build */}
      <section className="mx-auto max-w-[720px] px-4 py-8 grid gap-4">
        <h2 className="text-2xl font-semibold">A Predictable Way to Build</h2>
        <p className="text-sm text-black/80">We use a repeatable process for high-performance, prefabricated homes at scale. We standardize assemblies, materials, and designs to reliably produce world-class quality homes in less than 16 weeks.</p>
        <p className="text-sm text-black/80">Our technology and software transforms your home into a detailed manufacturing order ready for production. Each home is made with cutting-edge materials and processes and a precision-engineered steel frame resistant to mold, rot, and termites.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="aspect-[3/2] bg-center bg-cover rounded" style={{ backgroundImage: `url('${imgTModHomesPageWaytoBuild11}')` }} />
          <div className="aspect-[3/2] bg-center bg-cover rounded" style={{ backgroundImage: `url('${imgTModHomesPageWaytoBuild21}')` }} />
          <div className="aspect-[3/2] bg-center bg-cover rounded" style={{ backgroundImage: `url('${imgTModHomesPageWaytoBuild31}')` }} />
        </div>
      </section>

      {/* Safety */}
      <section className="mx-auto max-w-[720px] px-4 py-8 grid gap-4">
        <h2 className="text-2xl font-semibold">Safety for the Future</h2>
        <p className="text-sm text-black/80">Our homes are built for any climate using a standardized production system. They shield you from extreme weather and wildfires, and the metal frame will not deform until temperatures reach 700ºC / 1292ºF.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="aspect-[4/3] bg-center bg-cover rounded" style={{ backgroundImage: `url('${imgTModHomesPageSafety11}')` }} />
          <div className="aspect-[4/3] bg-center bg-cover rounded" style={{ backgroundImage: `url('${imgTModHomesPageSafety21}')` }} />
          <div className="aspect-[4/3] bg-center bg-cover rounded" style={{ backgroundImage: `url('${imgTModHomesPageSafety31}')` }} />
        </div>
      </section>

      {/* Above & Beyond */}
      <section className="mx-auto max-w-[720px] px-4 pb-12">
        <h3 className="font-heading text-xl mb-4">Above and Beyond</h3>
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center"><div className="text-2xl font-semibold">97%</div><p className="text-xs text-black/70 mt-1">Airborne particles captured</p></div>
          <div className="text-center"><div className="text-2xl font-semibold">90%</div><p className="text-xs text-black/70 mt-1">Additional particles captured</p></div>
          <div className="text-center"><div className="text-2xl font-semibold">99.9%</div><p className="text-xs text-black/70 mt-1">Bacteria killed in water</p></div>
        </div>
        <div className="mt-4 aspect-[16/9] bg-center bg-cover rounded" style={{ backgroundImage: `url('${imgTModHomesPageAboveBeyond1}')` }} />
      </section>
    </div>
  );
}


export default function Homes() {
  const [scale, setScale] = useState(1);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const w = outerRef.current?.clientWidth ?? (typeof window !== "undefined" ? window.innerWidth : 1440);
      const s = w / 1440; // scale-to-fill width
      setScale(s);
      if (outerRef.current && innerRef.current) {
        // Measure after transform is applied, include absolutely positioned descendants
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
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  return (
    <>
      {/* Mobile layout */}
      <MobileHomes />

      {/* Desktop/tablet (original scaled layout) */}
      <div ref={outerRef} className="hidden md:block relative w-screen overflow-x-hidden bg-white">
        <div
          ref={innerRef}
          className="relative origin-top-left"
          style={{ width: 1440, transform: `scale(${scale})` }}
          data-name="Homes"
        >
        <div className="absolute bg-[40.91%_50.02%] bg-no-repeat bg-size-[233.33%_100.03%] h-[653px] left-[49px] top-[2363px] w-[420px]" data-name="GettyImages-1455960407" style={{ backgroundImage: `url('${imgGettyImages1455960407}')` }} />
        <div className="absolute bg-[40.91%_50.02%] bg-no-repeat bg-size-[233.33%_100.03%] h-[653px] left-1/2 top-[2363px] translate-x-[-50%] w-[420px]" data-name="GettyImages-1455960407" style={{ backgroundImage: `url('${imgGettyImages1455960407}')` }} />
        <div className="absolute bg-[40.91%_50.02%] bg-no-repeat bg-size-[233.33%_100.03%] h-[653px] top-[2363px] translate-x-[-50%] w-[420px]" data-name="GettyImages-1455960407" style={{ backgroundImage: `url('${imgGettyImages1455960407}')`, left: "calc(50% + 465px)" }} />
        <div className="absolute bg-[#595e48] h-[390px] left-0 top-[1489px] w-[1440px]" />
        <div className="absolute bg-center bg-cover bg-no-repeat h-[765px] left-0 top-[5329px] w-[1440px]" data-name="Screen Shot 2024-12-06 at 6.54.29 AM 1" style={{ backgroundImage: `url('${imgScreenShot20241206At65429Am1}')` }} />
        <div className="absolute bg-[#595e48] h-[712px] left-0 top-[5329px] w-[1440px]" />
        <div className="absolute bg-center bg-cover bg-no-repeat h-[227px] left-[49px] top-[1217px] w-[419px]" data-name="TMod_HomesPage_WaytoBuild_1 1" style={{ backgroundImage: `url('${imgTModHomesPageWaytoBuild11}')` }} />
        <div className="absolute bg-center bg-cover bg-no-repeat h-[227px] left-[512px] top-[1217px] w-[421px]" data-name="TMod_HomesPage_WaytoBuild_2 1" style={{ backgroundImage: `url('${imgTModHomesPageWaytoBuild21}')` }} />
        <div className="absolute bg-center bg-cover bg-no-repeat h-[227px] left-[976px] top-[1217px] w-[419px]" data-name="TMod_HomesPage_WaytoBuild_3 1" style={{ backgroundImage: `url('${imgTModHomesPageWaytoBuild31}')` }} />
        <Parallax
          speed={0.15}
          scale={scale}
          className="absolute bg-left bg-no-repeat bg-size-[100%_100.05%] h-[800px] left-[-131px] top-[-26px] w-[1600px] z-0 pointer-events-none"
          data-name="TMod_HomesPage_Hero 1"
          style={{ backgroundImage: `url('${imgTModHomesPageHero1}')` }}
        />
        <div className="absolute font-['Montserrat:Medium',_sans-serif] leading-[normal] left-[720px] not-italic text-[56px] text-center text-nowrap text-white top-[463px] translate-x-[-50%] whitespace-pre z-10">
          <p className="mb-0">Precision Engineered,</p>
          <p>High Performance Homes</p>
        </div>
        <div className="absolute font-['Montserrat:Medium',_sans-serif] leading-[normal] left-[143px] not-italic text-[55px] text-black text-nowrap top-[851px] whitespace-pre">
          <p className="mb-0">A Predictable</p>
          <p>Way to Build</p>
        </div>
        <div className="absolute font-['Montserrat:Medium',_sans-serif] leading-[normal] left-[143px] not-italic text-[55px] text-black text-nowrap top-[3235px] whitespace-pre">
          <p className="mb-0">Safety for</p>
          <p>the Future</p>
        </div>
        <div className="absolute flex h-[20px] items-center justify-center left-[165px] top-[1047px] w-[0px]">
          <div className="flex-none rotate-[90deg]">
            <div className="h-0 relative w-5">
              <div className="absolute bottom-[-7.36px] left-0 right-[-5%] top-[-7.36px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16">
                  <path d={svgPaths.p246be700} fill="var(--stroke-0, black)" id="Arrow 1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[143px] size-11 top-[1035px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
            <circle cx="22" cy="22" id="Ellipse 1" r="21" stroke="var(--stroke-0, black)" strokeWidth="2" />
          </svg>
        </div>
        <div className="absolute font-['Oswald:Medium',_sans-serif] font-medium leading-[0] left-[722px] text-[19px] text-black text-nowrap top-[871px]">
          <p className="leading-[normal] whitespace-pre">ADVANCED MANUFACTURING</p>
        </div>
        <div className="absolute font-['Montserrat:Regular',_sans-serif] leading-[normal] left-[720px] not-italic text-[15px] text-black text-nowrap top-[913px] whitespace-pre">
          <p className="mb-0">We use a repeatable process for high-performance, prefabricated homes</p>
          <p className="mb-0">at scale. We standardize assemblies, materials, and designs to reliably</p>
          <p className="mb-0">produce world-class quality homes in less than 16 weeks.</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">{`Our technology and software transforms your home into a detailed `}</p>
          <p className="mb-0">{`manufacturing order ready for production. Each home is made with `}</p>
          <p className="mb-0">{`cutting-edge materials and processes that aren’t readily available to local `}</p>
          <p className="mb-0">{`builders. It's built to last with a precision-engineered steel frame resistant `}</p>
          <p className="mb-0">to mold, rot, and termites. As a result, you get a home with less worry and</p>
          <p>less maintenance—now and in the future.</p>
        </div>
        <div className="absolute font-['Montserrat:Regular',_sans-serif] h-[246px] leading-[normal] left-[143px] not-italic text-[15px] text-black top-[3392px] w-[491px]">
          <p className="mb-0">{`Weather has become unpredictable, and it’s not the same climate we grew up with. The next several decades will bring cold temperatures to warm climates and excessive water to dry regions. Being ready–at home–for these weather variations is the safest way to protect yourself. Our homes are built for any climate using a standardized production system. They will shield you from Category-5 hurricanes, heat waves, freezing temperatures, and even earthquakes. When there are wildfires, the home will be safe. Embers cannot enter an attic–we use flat roofs–or enter the crawlspace–it’s internally ventilated–and the metal frame will not deform until temperatures are 700º C / 1292º F, making it `}</p>
          <p className="mb-0">{`a Class-A fire-rated home. Having one universal building code `}</p>
          <p>for residential homes will keep people safe.</p>
        </div>
        <div className="absolute bg-[0%_5.8%] bg-no-repeat bg-size-[100%_101.58%] h-[788px] left-[722px] top-[3170px] w-[734px]" data-name="TMod_HomesPage_Safety_1 1" style={{ backgroundImage: `url('${imgTModHomesPageSafety11}')` }} />
        <div className="absolute bg-[10.93%_46.02%] bg-no-repeat bg-size-[117.27%_102.24%] h-[582px] left-[119px] top-[3728px] w-[561px]" data-name="TMod_HomesPage_Safety_2 1" style={{ backgroundImage: `url('${imgTModHomesPageSafety21}')` }} />
        <div className="absolute bg-[0%_6.37%] bg-no-repeat bg-size-[100%_102.59%] h-[310px] left-[722px] top-[4000px] w-[406px]" data-name="TMod_HomesPage_Safety_3 1" style={{ backgroundImage: `url('${imgTModHomesPageSafety31}')` }} />
        <div className="absolute font-['Oswald:Medium',_sans-serif] font-medium leading-[0] left-[120px] text-[19px] text-black text-nowrap top-[4418px]">
          <p className="leading-[normal] whitespace-pre">ENVIRONMENTALLY RESPONSIBLE</p>
        </div>
        <div className="absolute font-['Montserrat:Regular',_sans-serif] h-[150px] leading-[normal] left-[119px] not-italic text-[15px] text-black top-[4462px] w-[337px]">
          <p className="mb-0">{`Each Tmod home is built to last 100 years, significantly reducing the environmental impact. Using high-quality materials and product design-based science, your home will require less maintenance, won't begin `}</p>
          <p>to rot in a matter of years, and will consume a fraction of the energy a typical home uses each year – for the lifetime of the home.</p>
        </div>
        <div className="absolute font-['Oswald:Medium',_sans-serif] font-medium leading-[0] left-[554px] text-[19px] text-black text-nowrap top-[4418px]">
          <p className="leading-[normal] whitespace-pre">READY FOR MOTHER NATURE</p>
        </div>
        <div className="absolute font-['Montserrat:Regular',_sans-serif] h-[216px] leading-[0] left-[553px] not-italic text-[15px] text-black top-[4462px] w-[337px]">
          <p className="leading-[normal]">We crafted every square foot using material science for unparalleled performance to build the ultimate climate-resilient home. Recycled light-gauge steel strikes the perfect balance of being resistant to mold, rot, insects, and fires. While the airtight and waterproof liquid membrane wrap the entire home in one continuous seal to reduce temperature change. And the double-layered insulation further prevents extreme climates from entering the home. You can take this home almost anywhere.</p>
        </div>
        <div className="absolute font-['Oswald:Medium',_sans-serif] font-medium leading-[0] left-[994px] text-[19px] text-black text-nowrap top-[4418px]">
          <p className="leading-[normal] whitespace-pre">BENEATH THE SURFACE</p>
        </div>
        <div className="absolute font-['Montserrat:Regular',_sans-serif] h-[150px] leading-[0] left-[993px] not-italic text-[15px] text-black top-[4462px] w-[337px]">
          <p className="leading-[normal]">The most climate-resilient home pushes the limits of Passive House Standards. Robotic automation increases the precision and speed of production. Building science ensures each home is created for durability and to improve the health of the occupants. And an intelligent home operating system connects it all.</p>
        </div>
        <div className="absolute flex h-[237px] items-center justify-center left-[503px] top-[4424px] w-[0px]">
          <div className="flex-none rotate-[90deg]">
            <div className="h-0 relative w-[237px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 1">
                  <line id="Line 6" stroke="var(--stroke-0, black)" x2="237" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[237px] items-center justify-center left-[942px] top-[4424px] w-[0px]">
          <div className="flex-none rotate-[90deg]">
            <div className="h-0 relative w-[237px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237 1">
                  <line id="Line 6" stroke="var(--stroke-0, black)" x2="237" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-center bg-cover bg-no-repeat h-[547px] left-[722px] top-[4782px] w-[718px]" data-name="TMod_HomesPage_AboveBeyond 1" style={{ backgroundImage: `url('${imgTModHomesPageAboveBeyond1}')` }} />
        <div className="absolute font-['Montserrat:Medium',_sans-serif] leading-[0] left-[143px] not-italic text-[55px] text-black text-nowrap top-[4908px]">
          <p className="leading-[normal] whitespace-pre">Above and<br aria-hidden="true" />Beyond</p>
        </div>
        <div className="absolute font-['Montserrat:Medium',_sans-serif] leading-[0] left-[143px] not-italic text-[74px] text-nowrap text-white top-[5722px]">
          <p className="leading-[normal] whitespace-pre">97%</p>
        </div>
        <div className="absolute font-['Montserrat:Medium',_sans-serif] leading-[0] left-[543px] not-italic text-[74px] text-nowrap text-white top-[5722px]">
          <p className="leading-[normal] whitespace-pre">90%</p>
        </div>
        <div className="absolute font-['Montserrat:Medium',_sans-serif] leading-[0] left-[918px] not-italic text-[74px] text-nowrap text-white top-[5722px]">
          <p className="leading-[normal] whitespace-pre">99.9%</p>
        </div>
        <div className="absolute font-['Montserrat:Regular',_sans-serif] h-[118px] leading-[normal] left-[146px] not-italic text-[15px] text-black top-[5085px] w-[491px]">
          <p className="mb-0 whitespace-pre-wrap">{`A health-promoting home is crucial to your mental and physical well-being. But what about your connection to the outdoors?  `}</p>
          <p className="mb-0">&nbsp;</p>
          <p>Our homes are designed to make it easier to see nature, use the sun’s natural light to illuminate your home, and step outside to enjoy the weather. This is what’s called a biophilic design.</p>
        </div>
        <div className="absolute font-['Montserrat:Regular',_sans-serif] h-[118px] leading-[0] left-[724.5px] not-italic text-[15px] text-center text-white top-[5511px] translate-x-[-50%] w-[683px]">
          <p className="leading-[normal]">Most people don’t realize the magnitude of a home’s contribution as a positive influence on our daily lives. And while people invest in their personal future in many ways, few investments pay off more than a healthy lifestyle promoted by a healthy home. From the quality of the air we breathe to the water we drink, cook, and bathe with, we’ve used our background as building scientists to design a home with systems we can rely on to provide a positively healthier living experience.</p>
        </div>
        <div className="absolute font-['Montserrat:Regular',_sans-serif] h-[90px] leading-[normal] left-[325px] not-italic text-[12px] text-white top-[5740px] w-[157px]">
          <p className="mb-0">Effective at capturing airborne particles–dust, pollen, and mold</p>
          <p className="mb-0">spores–between</p>
          <p>3-10 microns</p>
        </div>
        <div className="absolute font-['Montserrat:Regular',_sans-serif] h-[90px] leading-[0] left-[726px] not-italic text-[12px] text-white top-[5740px] w-[157px]">
          <p className="leading-[normal]">Effective at capturing airborne particles–CO2, NOx, SOx, and metals– between 3‑10 microns</p>
        </div>
        <div className="absolute font-['Montserrat:Regular',_sans-serif] h-[90px] leading-[0] left-[1159px] not-italic text-[12px] text-white top-[5740px] w-[157px]">
          <p className="leading-[normal]">Of viruses and bacteria killed in water with in-line UV (ultraviolet light) filtration</p>
        </div>
        <div className="absolute font-['Oswald:Medium',_sans-serif] font-medium leading-[0] left-[408px] text-[24px] text-nowrap text-white top-[5460px]">
          <p className="leading-[normal] whitespace-pre">HOW YOUR HOME IS CONFIGURED DIRECTLY IMPACTS YOUR HEALTH</p>
        </div>
        <div className="absolute bg-[rgba(0,0,0,0)] h-[46px] left-[430px] rounded-[29px] top-[5861px] w-[580px]">
          <div aria-hidden className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[29px]" />
        </div>
        <div className="absolute font-['Montserrat:Medium',_sans-serif] leading-[0] left-[470px] not-italic text-[18px] text-nowrap text-white top-[5873px]">
          <p className="leading-[normal] whitespace-pre">{`Learn more about our health & sustainability standards`}</p>
        </div>
        <div className="absolute h-0 left-[143px] top-[5673px] w-[1155px]">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1155 1">
              <line id="Line 8" stroke="var(--stroke-0, white)" x2="1155" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <div className="absolute font-['Oswald:Medium',_sans-serif] font-medium leading-[0] text-[19px] text-center text-nowrap text-white top-[1569px] translate-x-[-50%]" style={{ left: "calc(50% + 0.5px)" }}>
          <p className="leading-[normal] whitespace-pre">WE ARE</p>
        </div>
        <div className="absolute font-['Montserrat:Medium',_sans-serif] leading-[0] not-italic text-[55px] text-center text-nowrap text-white top-[1600px] translate-x-[-50%]" style={{ left: "calc(50% + 0.5px)" }}>
          <p className="leading-[normal] whitespace-pre">The Very Best at One Thing</p>
        </div>
        <div className="absolute font-['Montserrat:Regular',_sans-serif] h-[90px] leading-[0] left-1/2 not-italic text-[15px] text-center text-white top-[1685px] translate-x-[-50%] w-[786px]">
          <p className="leading-[normal]">Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean. Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu.</p>
        </div>
        <div className="absolute font-['Montserrat:Regular',_sans-serif] h-[90px] leading-[0] left-[708px] not-italic text-[15px] text-black text-center top-[2138px] translate-x-[-50%] w-[786px]">
          <p className="leading-[normal]">Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu aenean. Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id. Placerat in id cursus mi pretium tellus duis. Pretium tellus duis convallis tempus leo eu.</p>
        </div>
        <div className="absolute font-['Oswald:Medium',_sans-serif] font-medium leading-[0] text-[19px] text-black text-center text-nowrap top-[1998px] translate-x-[-50%]" style={{ left: "calc(50% + 0.5px)" }}>
          <p className="leading-[normal] whitespace-pre">2,500 SQ FT DUPLEX</p>
        </div>
        <div className="absolute font-['Montserrat:Medium',_sans-serif] leading-[0] not-italic text-[55px] text-black text-center text-nowrap top-[2033px] translate-x-[-50%]" style={{ left: "calc(50% + 0.5px)" }}>
          <p className="leading-[normal] whitespace-pre">Tmod Two</p>
        </div>


        </div>
      </div>
    </>
  );
}
