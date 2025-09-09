"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function WhitepaperClient() {
  return (
    <main id="main" className="min-h-screen bg-off-white">
      {/* Hero Card */}
      <section className="px-4 md:px-16 pt-16 md:pt-24 pb-10">
        <div className="max-w-[1090px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative overflow-hidden rounded-2xl border border-slate/20 bg-slate/5"
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-70"
              style={{ backgroundImage: "url(/assets/the-science-hero.png)" }}
              aria-hidden="true"
            />
            {/* Overlay gradient for legibility */}
            <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

            <div className="relative p-6 md:p-10 lg:p-12 flex flex-col gap-6">
              <div className="max-w-[740px]">
                <h1 className="text-white font-outfit text-[24px] md:text-[36px] lg:text-[40px] font-normal leading-[120%] tracking-[-0.8px]">
                  Challenges in Airway Management During Moderate to Deep Sedation of Patients with Obstructive Sleep Apnea and Comorbidities
                </h1>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="#download"
                  className="inline-flex h-10 md:h-12 px-5 md:px-6 items-center justify-center rounded-full bg-black text-white font-outfit text-[13px] md:text-[16px] tracking-[-0.32px] uppercase hover:bg-white/90 transition-colors"
                >
                  Download
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 md:px-16 pb-16 md:pb-24">
        <div className="max-w-[1090px] mx-auto grid gap-12">
          {/* Two-column layout with vertical accent rule on large screens */}
          <div className="grid md:grid-cols-[1fr] lg:grid-cols-[1fr] gap-12">
            <div className="relative">
              <div className="absolute left-[calc(50%-1px)] top-0 bottom-0 hidden md:block w-px bg-verdant/50" aria-hidden="true" />

              <div className="space-y-8">
                <Section title="Introduction">
                  An estimated 30 million Americans suffer from obstructive sleep apnea (OSA). Roughly 26 million remain undiagnosed—meaning care is limited to those who have been diagnosed.
                </Section>

                <Section title="CPAP Use and Adherence">
                  Approximately 9 million Americans use CPAP therapy—the remainder do not receive ideal care or fail adherence.
                </Section>

                <Section title="Sedation in Colonoscopies: Scope and Risk">
                  19M+ colonoscopies occur yearly. Moderate to deep sedation is common; patients with OSA or obesity are at greater risk of airway obstruction and oxygen desaturation.
                </Section>

                <Section title="Physiological Challenges Under Sedation">
                  Sedation depresses respiratory drive and airway tone; obese airways, macroglossia, and reduced chest wall compliance compound risk. Positive pressure support can counter these effects and improve oxygenation and ventilation.
                </Section>

                <Section title="Current Airway Management Tools in GI Suite">
                  Conventional nasal cannula delivers oxygen but provides no meaningful positive pressure. Oral airways are reactive interventions and can complicate procedures.
                </Section>

                <Section title="Proposed Enhancement: Accessible PAP in GI Settings">
                  Integrate low-profile, comfortable positive airway pressure (PAP) interfaces (e.g., xchange nasal dock) to maintain airway patency and reduce hypoxic events.
                </Section>

                <h3 className="text-slate font-outfit text-[20px] md:text-[22px] font-normal tracking-[-0.4px]">Scope of Unmet need</h3>
                <div className="overflow-hidden rounded-2xl border border-slate/20 bg-white">
                  <table className="min-w-full text-left">
                    <thead>
                      <tr className="bg-off-white/70">
                        <th className="px-4 md:px-6 py-3 text-slate/70 font-outfit text-[12px] md:text-[13px] uppercase tracking-[-0.24px]">Metric</th>
                        <th className="px-4 md:px-6 py-3 text-slate/70 font-outfit text-[12px] md:text-[13px] uppercase tracking-[-0.24px]">Data</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate/10">
                      <tr>
                        <td className="px-4 md:px-6 py-3 text-slate font-outfit text-[14px] md:text-[16px]">U.S. Adults with OSA</td>
                        <td className="px-4 md:px-6 py-3 text-slate font-outfit text-[14px] md:text-[16px]">~30 Million</td>
                      </tr>
                      <tr>
                        <td className="px-4 md:px-6 py-3 text-slate font-outfit text-[14px] md:text-[16px]">Undiagnosed Proportion</td>
                        <td className="px-4 md:px-6 py-3 text-slate font-outfit text-[14px] md:text-[16px]">~26 Million</td>
                      </tr>
                      <tr>
                        <td className="px-4 md:px-6 py-3 text-slate font-outfit text-[14px] md:text-[16px]">Annual Colonoscopies</td>
                        <td className="px-4 md:px-6 py-3 text-slate font-outfit text-[14px] md:text-[16px]">~16–18M</td>
                      </tr>
                      <tr>
                        <td className="px-4 md:px-6 py-3 text-slate font-outfit text-[14px] md:text-[16px]">Estimated Colonoscopies with Undiagnosed OSA</td>
                        <td className="px-4 md:px-6 py-3 text-slate font-outfit text-[14px] md:text-[16px]">~4–5.2M/year</td>
                      </tr>
                      <tr>
                        <td className="px-4 md:px-6 py-3 text-slate font-outfit text-[14px] md:text-[16px]">Adult Obesity rate</td>
                        <td className="px-4 md:px-6 py-3 text-slate font-outfit text-[14px] md:text-[16px]">~42%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <Section title="Conclusion and Recommendations">
                  Enabling comfortable PAP during moderate to deep sedation may reduce desaturation and hypercapnic events, simplify procedures, and improve patient safety—particularly in patients with obesity or suspected OSA.
                </Section>

                <Section title="Key References">
                  Links cover: prevalence, diagnostics, OSA comorbidities, colonoscopy statistics, and PAP evidence.
                </Section>
              </div>
            </div>
          </div>

          {/* Bottom nav like the design (links already exist in footer, optional duplication) */}
          <div className="pt-6" />
        </div>
      </section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-slate font-outfit text-[20px] md:text-[22px] font-normal tracking-[-0.4px] mb-2">{title}</h3>
      <p className="text-slate/80 font-outfit text-[16px] md:text-[18px] leading-[170%]">
        {children}
      </p>
    </div>
  );
}
