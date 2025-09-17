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
              <div className="space-y-8">
                <Section title="Introduction">
                An estimated 30 million Americans suffer from obstructive sleep apnea (OSA), though 24 million remain undiagnosed—meaning only about 6 million have formal diagnoses.
                OSA is associated with hypertension, cardiac events, metabolic disorders (diabetes, dyslipidemia), and stroke.
Obesity underlies roughly 60 % of OSA prevalence—up to 40 % in males with BMI &gt;30 and nearly 90 % in those with BMI &gt;40 . Over 42 % of U.S. adults are obese.
                </Section>

                <Section title="CPAP Use and Adherence">
                Approximately 6 million Americans use CPAP therapy—this represents the diagnosed population .
                CPAP adherence rates vary widely; around 72 % meet CMS criteria, though younger adults and women are less compliant .
                </Section>

                <Section title="Sedation in Colonoscopies: Scope and Risk">
                Annually, 14–16 million colonoscopies are performed in the U.S. for screening and surveillance .
                While specific data on OSA prevalence in these patients is scarce, general adult prevalence of moderate to severe OSA is around 10–20 % —implying potentially 1.4–3.2 million colonoscopy patients with undiagnosed OSA each year.
                </Section>

                <Section title="Physiological Challenges Under Sedation">
                Sedation (moderate to deep) depresses respiratory drive, relaxes upper airway muscles, and increases OSA risk.
Obese patients with OSA are prone to hypoxemia from airway collapse, decreased functional residual capacity, and alveolar ventilation.
Consequences include arrhythmias, myocardial ischemia, hypertension spikes, stroke, and even arrest—amplified by comorbid cardiac and metabolic disease.
                </Section>

                <Section title="Current Airway Management Tools in GI Suite">
                Nasal cannula and basic face masks are standard but cannot provide continuous positive airway pressure (PAP).
Invasive maneuvers—jaw thrust, chin lift, oral airway insertion—need constant maintenance throughout the procedure. These require skill and hinder procedural access.
Anesthesia machines with PAP are usually unavailable in outpatient GI suites, limiting options when airway collapse occurs.
                </Section>

                <Section title="Proposed Enhancement: Accessible PAP in GI Settings">
                 <ul>
                      <li>1. Maintains baseline airway patency—reduces hypoxemic events.</li>
                      <li>2. Supports alveolar ventilation—better EtCO2 control.</li>
                      <li>3. Stabilizes thoracoabdominal pressures—easing scope passage.</li>
                      <li>4. Decreases need for invasive airway maneuvers—improving workflow and patient safety.</li>
                    </ul>
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
                      <tr>
                        <td className="px-4 md:px-6 py-3 text-slate font-outfit text-[14px] md:text-[16px]">OSA Prevalence in obese</td>
                        <td className="px-4 md:px-6 py-3 text-slate font-outfit text-[14px] md:text-[16px]">Up to 40% (BMI&gt;30) to 90% (BMI &gt;40)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <Section title="Conclusion and Recommendations">
                The combination of obesity, undiagnosed OSA, and deep sedation during high-volume procedures like colonoscopy creates a significant clinical risk.
Provision of non-invasive PAP-capable devices in GI suites could enhance airway safety, reduce hypoxemia, simplify procedures, and potentially diminish cardiopulmonary complications.
Further research should evaluate cost-electiveness, workflow integration, and outcome metrics (e.g., hypoxemic event rate, arrhythmia incidence, procedure eIiciency).
                </Section>

                <Section title="Key References">
                  <ul>
                    <li>1. Sleep apnea prevalence, diagnosis rates, comorbidities</li>
                    <li>2. Obesity–OSA link</li>
                    <li>3. Annual colonoscopies</li>
                    <li>4. Undiagnosed OSA proportions</li>
                  </ul>
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
