"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import svgPaths from "./svg-gd3lqm9jn9";
import Parallax from "../components/Parallax";

// Map figma:asset imports to Next.js public assets. Some may need adding to /public/assets.
const imgTModHomesPageHealthyLiving1 = 
  "/assets/ec0ef60ac25a9bb66629761953013857711101f6.png"; // TODO: ensure exists
const imgHomeAmericanFlag1 = 
  "/assets/fae8309e43a3c34f5828b3625bf2aa57f63c8d8d.png"; // TODO: ensure exists
const imgTModHomePageBetterWaytoBuild1 = 
  "/assets/b082f62ea4b59acf903bbf73674d055ec2fc6e33.png"; // TODO: ensure exists
const imgTModHomePageTheDreamTeam1 = 
  "/assets/baf75f6314c1f974e3cef252eba31c788e31fe51.png"; // TODO: ensure exists
const imgMcArrow1 = "/assets/33c77a449be6ec80d056fd42dda2a2fdc5944be8.png"; // TODO: ensure exists
const imgTModHomePageDreamTeamOffice1 = 
  "/assets/e8ca0cfb3c3458df280358144522ec1e2445fca9.png"; // TODO: ensure exists


// Reusable animation variants for scroll-triggered effects
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


function Group4() {
  return (
    <div className="absolute left-[882px] top-[590px] w-14 h-14 z-30 pointer-events-none">
      <svg className="block w-full h-full drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        {/* subtle dark background for contrast on light images */}
        <circle cx="22" cy="22" r="22" fill="rgba(0,0,0,0.35)" />
        <g id="Group 4">
          <path d={svgPaths.p1a6a9000} fill="white" id="Arrow 1" />
          <circle cx="22" cy="22" id="Ellipse 1" r="21" stroke="white" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1({ scale }: { scale: number }) {
  return (
    <div className="absolute h-[3057px] left-[-23px] top-0 w-[1575px]">
      <motion.div
        className="absolute bg-center bg-cover bg-no-repeat h-[478px] left-0 top-[2579px] w-[1575px]"
        data-name="TMod_HomesPage_HealthyLiving 1"
        style={{ backgroundImage: `url('${imgTModHomesPageHealthyLiving1}')` }}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={liftIn}
      />
      <Parallax
        speed={0.15}
        scale={scale}
        className="absolute bg-[51.76%_77.7%] bg-no-repeat bg-size-[106.27%_122.36%] h-[662px] left-[67px] top-0 w-[1352px] z-0 pointer-events-none"
        data-name="Home_AmericanFlag 1"
        style={{ backgroundImage: `url('${imgHomeAmericanFlag1}')` }}
      />
      <motion.div
        className="absolute font-['Montserrat:Medium',_sans-serif] leading-[normal] left-[882px] not-italic text-[56px] text-nowrap text-white top-[420px] whitespace-pre z-10"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
      >
        <p className="mb-0">Restoring the</p>
        <p>American Dream</p>
      </motion.div>
      <motion.div
        className="absolute font-['Montserrat:Medium',_sans-serif] leading-[0] left-[882px] not-italic text-[17px] text-nowrap text-white top-[556px]"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
        transition={{ delay: 0.05 }}
      >
        <p className="leading-[normal] whitespace-pre">one truly affordable home at a time...</p>
      </motion.div>
      <div className="absolute font-['Montserrat:Medium',_sans-serif] leading-[0] left-[169px] not-italic text-[55px] text-nowrap text-white top-[2790px]">
        <p className="leading-[normal] whitespace-pre">Healthy Living Shouldn’t be Unaffordable</p>
      </div>
      <div className="absolute bg-[rgba(0,0,0,0)] h-[46px] left-[644px] rounded-[29px] top-[2895px] w-[197px]">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[29px]" />
      </div>
      <motion.div
        className="absolute font-['Montserrat:Medium',_sans-serif] leading-[0] left-[690px] not-italic text-[18px] text-nowrap text-white top-[2907px]"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
      >
        <p className="leading-[normal] whitespace-pre">Learn more</p>
      </motion.div>
      <div className="absolute font-['Oswald:Medium',_sans-serif] font-medium leading-[0] left-[682px] text-[19px] text-nowrap text-white top-[2754px]">
        <p className="leading-[normal] whitespace-pre">WE BELIEVE THAT</p>
      </div>
      <motion.div
        className="absolute bg-center bg-cover bg-no-repeat h-[674px] left-[692px] top-[1863px] w-[771px]"
        data-name="TMod_HomePage_BetterWaytoBuild 1"
        style={{ backgroundImage: `url('${imgTModHomePageBetterWaytoBuild1}')` }}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={liftIn}
      />
      <div className="absolute bg-[#595e48] h-[608px] left-[23px] top-[1213px] w-[1440px]" />
      <motion.div
        className="absolute font-['Oswald:Medium',_sans-serif] font-medium leading-[0] left-[692px] text-[19px] text-black text-nowrap top-[858px]"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
      >
        <p className="leading-[normal] whitespace-pre">WE BELIEVE IN</p>
      </motion.div>
      <motion.div
        className="absolute font-['Montserrat:Medium',_sans-serif] leading-[0] left-[462px] not-italic text-[55px] text-black text-nowrap top-[889px]"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
        transition={{ delay: 0.05 }}
      >
        <p className="leading-[normal] whitespace-pre">A Better Way to Live</p>
      </motion.div>
      <motion.div
        className="absolute font-['Montserrat:Regular',_sans-serif] leading-[normal] not-italic text-[15px] text-black text-center top-[974px] translate-x-[-50%] w-[844px]"
        style={{ left: "calc(50% - 44.5px)" }}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
        transition={{ delay: 0.1 }}
      >
        <p className="mb-0">Affordable places to live are essential to a well-functioning society and are at the center of our families’ development and growth.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Our value-engineered approach to building unlocks efficiencies to create pricing the market hasn’t seen in decades—so families and communities can flourish on a foundation of innovation, sustainability, and possibility.</p>
        <p className="mb-0">&nbsp;</p>
        <p>At Tmod, we craft precision-engineered homes that elevate daily living and radically reduce cost to provide a better future for the ones we love most.</p>
      </motion.div>
      <motion.div
        className="absolute font-['Montserrat:Medium',_sans-serif] leading-[0] left-[570px] not-italic text-[44px] text-nowrap text-white top-[1317px]"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
      >
        <p className="leading-[normal] whitespace-pre">Our Homes Are</p>
      </motion.div>
      <div className="absolute h-0 left-[167px] top-[1402px] w-[1151px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1151 1">
            <line id="Line 1" stroke="var(--stroke-0, white)" x2="1151" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute font-['Oswald:Medium',_sans-serif] font-medium leading-[0] left-[234px] text-[24px] text-nowrap text-white top-[1444px]">
        <p className="leading-[normal] whitespace-pre">AFFORDABLE</p>
      </div>
      <div className="absolute font-['Montserrat:Regular',_sans-serif] h-[108px] leading-[normal] left-[294px] not-italic text-[15px] text-center text-white top-[1488px] translate-x-[-50%] w-[234px]">
        <p className="mb-0">{`We are redefining Affordable Housing by offering universal accessibility, attractive financing, and all of the warmth and comforts of `}</p>
        <p>a traditional home.</p>
      </div>
      <div className="absolute font-['Oswald:Medium',_sans-serif] font-medium leading-[0] left-[526px] text-[24px] text-nowrap text-white top-[1444px]">
        <p className="leading-[normal] whitespace-pre">TECH-ENABLED</p>
      </div>
      <div className="absolute font-['Montserrat:Regular',_sans-serif] h-[108px] leading-[0] left-[596px] not-italic text-[15px] text-center text-white top-[1488px] translate-x-[-50%] w-[252px]">
        <p className="leading-[normal]">Our tech-enabled manufacturing methods allow us to build high quality homes in a matter of weeks with consistent quality and cost control.</p>
      </div>
      <div className="absolute font-['Oswald:Medium',_sans-serif] font-medium leading-[0] left-[831px] text-[24px] text-nowrap text-white top-[1444px]">
        <p className="leading-[normal] whitespace-pre">SUSTAINABLE</p>
      </div>
      <div className="absolute font-['Montserrat:Regular',_sans-serif] h-[108px] leading-[normal] left-[894px] not-italic text-[15px] text-center text-white top-[1488px] translate-x-[-50%] w-[252px]">
        <p className="mb-0">{`All of our homes are steel-built, energy efficient, and constructed to LEED-certified standards for optimal health and near `}</p>
        <p>zero waste.</p>
      </div>
      <div className="absolute font-['Oswald:Medium',_sans-serif] font-medium leading-[0] left-[1153px] text-[24px] text-nowrap text-white top-[1444px]">
        <p className="leading-[normal] whitespace-pre">MODERN</p>
      </div>
      <div className="absolute font-['Montserrat:Regular',_sans-serif] h-[108px] leading-[normal] left-[1194px] not-italic text-[15px] text-center text-white top-[1488px] translate-x-[-50%] w-[252px]">
        <p className="mb-0">{`Our homes are meticulously designed and crafted to incorporate the very best `}</p>
        <p className="mb-0">{`of modern architectural `}</p>
        <p>design and function.</p>
      </div>
      <div className="absolute bg-[rgba(0,0,0,0)] h-[46px] left-[644px] rounded-[29px] top-[1658px] w-[197px]">
        <div aria-hidden="true" className="absolute border-2 border-white border-solid inset-0 pointer-events-none rounded-[29px]" />
      </div>
      <motion.div
        className="absolute font-['Montserrat:Medium',_sans-serif] leading-[0] left-[690px] not-italic text-[18px] text-nowrap text-white top-[1670px]"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
      >
        <p className="leading-[normal] whitespace-pre">Learn more</p>
      </motion.div>
      <div className="absolute bg-[rgba(0,0,0,0)] h-[51px] left-[758px] rounded-[29px] top-[2273px] w-[305px]">
        <div aria-hidden="true" className="absolute border-2 border-white border-solid inset-0 pointer-events-none rounded-[29px]" />
      </div>
      <motion.div
        className="absolute font-['Montserrat:Medium',_sans-serif] leading-[0] left-[797px] not-italic text-[18px] text-nowrap text-white top-[2288px]"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
      >
        <p className="leading-[normal] whitespace-pre">Watch how we do it</p>
      </motion.div>
      <motion.div
        className="absolute font-['Oswald:Medium',_sans-serif] font-medium leading-[0] left-[165px] text-[19px] text-black text-nowrap top-[2010px]"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
      >
        <p className="leading-[normal] whitespace-pre">WE BELIEVE IN</p>
      </motion.div>
      <motion.div
        className="absolute font-['Montserrat:Medium',_sans-serif] leading-[normal] left-[165px] not-italic text-[55px] text-black text-nowrap top-[2045px] whitespace-pre"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
        transition={{ delay: 0.05 }}
      >
        <p className="mb-0">A Better</p>
        <p>Way to Build</p>
      </motion.div>
      <motion.div
        className="absolute font-['Montserrat:Regular',_sans-serif] h-[161px] leading-[normal] left-[165px] not-italic text-[15px] text-black top-[2220px] w-[431px]"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
        transition={{ delay: 0.1 }}
      >
        <p className="mb-0">{`Tmod homes are built to last 100 years. Our homes `}</p>
        <p className="mb-0">{`are efficiently constructed, require minimal `}</p>
        <p className="mb-0">maintenance, and are staggeringly affordable.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">We do this by combining advanced robotics and</p>
        <p className="mb-0">{`manufacturing technology with 100+ years of `}</p>
        <p className="mb-0">{`collective experience in home building and real `}</p>
        <p className="mb-0">{`estate development to forge a new path for `}</p>
        <p>affordable home construction.</p>
      </motion.div>
      <motion.div
        className="absolute font-['Montserrat:Medium',_sans-serif] h-[161px] leading-[normal] left-[758px] not-italic text-[28px] text-white top-[2058px] w-[601px]"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
      >
        <p className="mb-0">{`We've removed countless layers `}</p>
        <p className="mb-0">{`of cost while incorporating smart materials and features to provide `}</p>
        <p className="mb-0">{`a healthy, scalable solution to the `}</p>
        <p>housing crisis.</p>
      </motion.div>
      <div className="absolute h-0 left-[993px] top-[2299px] w-5">
        <div className="absolute bottom-[-7.36px] left-0 right-[-5%] top-[-7.36px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 16">
            <path d={svgPaths.p246be700} fill="var(--stroke-0, white)" id="Arrow 2" />
          </svg>
        </div>
      </div>
      <Group4 />
    </div>
  );
}

export default function Landing() {
  const [scale, setScale] = useState(1);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const w = outerRef.current?.clientWidth ?? (typeof window !== "undefined" ? window.innerWidth : 1440);
      const s = w / 1440;
      setScale(s);
      if (outerRef.current && innerRef.current) {
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
    <div ref={outerRef} className="relative w-screen overflow-x-hidden bg-white">
      <div
        ref={innerRef}
        className="relative origin-top-left"
        style={{ width: 1440, transform: `scale(${scale})` }}
        data-name="Landing Page"
      >
        <div
          className="absolute bg-[rgba(0,0,0,0)] h-[46px] left-[858px] rounded-[29px] top-[3457px] w-[197px]"
        >
          <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[29px]" />
        </div>
        <motion.div
          className="absolute font-['Montserrat:Medium',_sans-serif] leading-[0] left-[904px] not-italic text-[18px] text-black text-nowrap top-[3469px]"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <p className="leading-[normal] whitespace-pre">Learn more</p>
        </motion.div>
        <motion.div
          className="absolute bg-center bg-cover bg-no-repeat h-[1046px] left-[849px] top-[3680px] w-[593px]"
          data-name="TMod_HomePage_TheDreamTeam 1"
          style={{ backgroundImage: `url('${imgTModHomePageTheDreamTeam1}')` }}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={liftIn}
        />
        <div className="absolute font-['Oswald:Medium',_sans-serif] font-medium leading-[0] left-[115px] text-[19px] text-black text-nowrap top-[3185px]">
          <p className="leading-[normal] whitespace-pre">MORTGAGE CALCULATOR</p>
        </div>
        <div className="absolute font-['Oswald:Medium',_sans-serif] font-medium leading-[0] left-[867px] text-[19px] text-black text-nowrap top-[3187px]">
          <p className="leading-[normal] whitespace-pre">STARTING FROM</p>
        </div>
        <motion.div
          className="absolute font-['Montserrat:Medium',_sans-serif] leading-[0] left-[142px] not-italic text-[55px] text-black text-nowrap top-[4201px]"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <p className="leading-[normal] whitespace-pre">The Dream Team</p>
        </motion.div>
        <div className="absolute bg-[rgba(255,255,255,0)] h-[30px] left-[533px] rounded-[3px] top-[3185px] w-[187px]">
          <div aria-hidden className="absolute border border-[#919191] border-solid inset-0 pointer-events-none rounded-[3px]" />
        </div>
        <div className="absolute bg-[rgba(255,255,255,0)] h-[30px] left-[571px] rounded-[3px] top-[3265px] w-[149px]">
          <div aria-hidden className="absolute border border-[#919191] border-solid inset-0 pointer-events-none rounded-[3px]" />
        </div>
        <div
          className="absolute bg-center bg-cover bg-no-repeat h-[7px] left-[695px] top-[3197px] w-3.5"
          data-name="MC_Arrow 1"
          style={{ backgroundImage: `url('${imgMcArrow1}')` }}
        />
        <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[17px] leading-[0] left-[545px] not-italic text-[15px] text-black top-[3192px] w-[87px]">
          <p className="leading-[normal]">Tmod Two</p>
        </div>
        <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[129px] leading-[normal] left-[865px] not-italic text-[45px] text-black top-[3220px] w-[448px]">
          <p className="mb-0">$250,000 or</p>
          <p>less than $1,500/mo</p>
        </div>
        <div className="absolute font-['Montserrat:Medium',_sans-serif] h-7 leading-[0] left-[115px] not-italic text-[21px] text-black top-[3266px] w-[201px]">
          <p className="leading-[normal]">Base Home Price</p>
        </div>
        <div className="absolute font-['Montserrat:Medium',_sans-serif] h-7 leading-[0] left-[115px] not-italic text-[21px] text-black top-[3316px] w-[201px]">
          <p className="leading-[normal]">Interest Rate</p>
        </div>
        <div className="absolute font-['Montserrat:Medium',_sans-serif] h-7 leading-[0] left-[115px] not-italic text-[21px] text-black top-[3416px] w-[326px]">
          <p className="leading-[normal]">Down Payment Percentage</p>
        </div>
        <div className="absolute font-['Montserrat:Medium',_sans-serif] h-7 leading-[0] left-[115px] not-italic text-[21px] text-black top-[3512px] w-[326px]">
          <p className="leading-[normal]">Total Monthly Payment</p>
        </div>
        <div className="absolute font-['Montserrat:Medium',_sans-serif] h-7 leading-[0] left-[115px] not-italic text-[21px] text-black top-[3364px] w-[201px]">
          <p className="leading-[normal]">Down Payment</p>
        </div>
        <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[17px] leading-[0] left-[583px] not-italic text-[15px] text-black top-[3271px] w-2.5">
          <p className="leading-[normal]">$</p>
        </div>
        <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[17px] leading-[0] left-[708px] not-italic text-[15px] text-black text-right top-[3271px] translate-x-[-100%] w-[70px]">
          <p className="leading-[normal]">250,000</p>
        </div>
        <div className="absolute bg-[rgba(255,255,255,0)] h-[30px] left-[571px] rounded-[3px] top-[3365px] w-[149px]">
          <div aria-hidden className="absolute border border-[#919191] border-solid inset-0 pointer-events-none rounded-[3px]" />
        </div>
        <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[17px] leading-[0] left-[583px] not-italic text-[15px] text-black top-[3371px] w-2.5">
          <p className="leading-[normal]">$</p>
        </div>
        <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[17px] leading-[0] left-[708px] not-italic text-[15px] text-black text-right top-[3371px] translate-x-[-100%] w-[70px]">
          <p className="leading-[normal]">17,500</p>
        </div>
        <div className="absolute bg-[rgba(255,255,255,0)] h-[30px] left-[571px] rounded-[3px] top-[3415px] w-[149px]">
          <div aria-hidden className="absolute border border-[#919191] border-solid inset-0 pointer-events-none rounded-[3px]" />
        </div>
        <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[17px] leading-[0] left-[708px] not-italic text-[15px] text-black text-right top-[3421px] translate-x-[-100%] w-[70px]">
          <p className="leading-[normal]">7 %</p>
        </div>
        <div className="absolute bg-[rgba(255,255,255,0)] h-[30px] left-[571px] rounded-[3px] top-[3514px] w-[149px]">
          <div aria-hidden className="absolute border border-[#919191] border-solid inset-0 pointer-events-none rounded-[3px]" />
        </div>
        <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[17px] leading-[0] left-[708px] not-italic text-[15px] text-black text-right top-[3520px] translate-x-[-100%] w-[70px]">
          <p className="leading-[normal]">$1,470</p>
        </div>
        <div className="absolute bg-[rgba(255,255,255,0)] h-[30px] left-[571px] rounded-[3px] top-[3315px] w-[149px]">
          <div aria-hidden className="absolute border border-[#919191] border-solid inset-0 pointer-events-none rounded-[3px]" />
        </div>
        <div className="absolute font-['Montserrat:Medium',_sans-serif] h-[17px] leading-[0] left-[708px] not-italic text-[15px] text-black text-right top-[3321px] translate-x-[-100%] w-[70px]">
          <p className="leading-[normal]">6.5 %</p>
        </div>
        <div className="absolute h-0 left-[115px] top-[3238px] w-[605px]">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 605 1">
              <line id="Line 2" stroke="var(--stroke-0, black)" x2="605" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <div className="absolute h-0 left-[115px] top-[3477px] w-[605px]">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 605 1">
              <line id="Line 2" stroke="var(--stroke-0, black)" x2="605" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <div className="absolute font-['Montserrat:Regular',_sans-serif] h-[26px] leading-[0] left-[866px] not-italic text-[21px] text-black top-[3355px] w-[454px]">
          <p className="leading-[normal]">With flexible in-house financing and attractive Lease to Purchase options.</p>
        </div>
        <motion.div
          className="absolute font-['Montserrat:Regular',_sans-serif] h-[180px] leading-[normal] left-[142px] not-italic text-[15px] text-black top-[4313px] w-[618px]"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeInUp}
        >
          <p className="mb-0">{`Today, housing affordability is one of society’s greatest challenges. Building more apartments or cheaply built homes doesn’t solve the problem. New solutions are needed to restore that American Dream and it will require innovation, tenacity, and a passion for positive change. `}</p>
          <p className="mb-0">&nbsp;</p>
          <p>Each and every one of our founders are existing leaders of highly successful organizations that represent years of experience in each of the most important components of how we build and sell our homes. Together, we’re building an enterprise that dramatically decreases the cost of homeownership, promotes healthy living, all while positively impacting society and the environment.</p>
        </motion.div>
        <div className="absolute bg-[rgba(0,0,0,0)] h-[46px] left-[142px] rounded-[46px] top-[4532px] w-[227px]">
          <div aria-hidden className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[46px]" />
        </div>
        <div className="absolute font-['Montserrat:Medium',_sans-serif] leading-[0] left-[188px] not-italic text-[18px] text-black text-nowrap top-[4544px]">
          <p className="leading-[normal] whitespace-pre">Meet the team</p>
        </div>

        <motion.div
          className="absolute bg-center bg-cover bg-no-repeat h-[396px] left-[95px] top-[3680px] w-[712px]"
          data-name="TMod_HomePage_DreamTeam_Office 1"
          style={{ backgroundImage: `url('${imgTModHomePageDreamTeamOffice1}')` }}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={liftIn}
        />
        <Frame1 scale={scale} />
      </div>
    </div>
  );
}
