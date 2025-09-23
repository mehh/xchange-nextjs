import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Website Use",
  description:
    "Read the Terms of Service for www.xchangebypneuma.com. By accessing this website, you agree to these terms, including use license, disclaimers, and limitations.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms of Service | Xchange by Pneuma",
    description:
      "Terms governing the use of www.xchangebypneuma.com, including license, disclaimers, limitations, and governing law.",
    url: "https://www.xchangebypneuma.com/tos",
  },
  alternates: {
    canonical: "/tos",
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen px-4 md:px-16 py-16 md:py-24 bg-off-white">
      <div className="max-w-[900px] mx-auto">
        <h1 className="text-slate font-outfit text-[32px] md:text-[48px] font-normal leading-[110%] tracking-[-0.8px] md:tracking-[-1.2px] mb-6">
          Terms of Service
        </h1>
        <p className="text-slate opacity-70 font-outfit text-[14px] md:text-[16px] leading-[150%] mb-12">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-slate font-outfit text-[22px] md:text-[26px] font-normal leading-[120%] tracking-[-0.5px] mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-slate font-outfit text-[16px] leading-[150%] opacity-80">
              By accessing and using this website www.xchangebypneuma.com, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="text-slate font-outfit text-[22px] md:text-[26px] font-normal leading-[120%] tracking-[-0.5px] mb-3">
              2. Use License
            </h2>
            <p className="text-slate font-outfit text-[16px] leading-[150%] opacity-80 mb-3">
              Permission is granted to temporarily download one copy of the materials (information or software) on www.xchangebypneuma.com's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-slate font-outfit text-[16px] leading-[150%] opacity-80 space-y-2">
              <li>Modify or copy the materials;</li>
              <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>Attempt to decompile or reverse engineer any software contained on www.xchangebypneuma.com's website;</li>
              <li>Remove any copyright or other proprietary notations from the materials; or</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>
            <p className="text-slate font-outfit text-[16px] leading-[150%] opacity-80 mt-3">
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by www.xchangebypneuma.com at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
            </p>
          </section>

          <section>
            <h2 className="text-slate font-outfit text-[22px] md:text-[26px] font-normal leading-[120%] tracking-[-0.5px] mb-3">
              3. Disclaimer
            </h2>
            <p className="text-slate font-outfit text-[16px] leading-[150%] opacity-80">
              The materials on www.xchangebypneuma.com's website are provided on an 'as is' basis. www.xchangebypneuma.com makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p className="text-slate font-outfit text-[16px] leading-[150%] opacity-80 mt-3">
              Further, www.xchangebypneuma.com does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
            </p>
          </section>

          <section>
            <h2 className="text-slate font-outfit text-[22px] md:text-[26px] font-normal leading-[120%] tracking-[-0.5px] mb-3">
              4. Limitations
            </h2>
            <p className="text-slate font-outfit text-[16px] leading-[150%] opacity-80">
              In no event shall www.xchangebypneuma.com or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on www.xchangebypneuma.com's website, even if www.xchangebypneuma.com or a www.xchangebypneuma.com authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
            </p>
          </section>

          <section>
            <h2 className="text-slate font-outfit text-[22px] md:text-[26px] font-normal leading-[120%] tracking-[-0.5px] mb-3">
              5. Accuracy of Materials
            </h2>
            <p className="text-slate font-outfit text-[16px] leading-[150%] opacity-80">
              The materials appearing on www.xchangebypneuma.com's website could include technical, typographical, or photographic errors. www.xchangebypneuma.com does not warrant that any of the materials on its website are accurate, complete or current. www.xchangebypneuma.com may make changes to the materials contained on its website at any time without notice. However www.xchangebypneuma.com does not make any commitment to update the materials.
            </p>
          </section>

          <section>
            <h2 className="text-slate font-outfit text-[22px] md:text-[26px] font-normal leading-[120%] tracking-[-0.5px] mb-3">
              6. Links
            </h2>
            <p className="text-slate font-outfit text-[16px] leading-[150%] opacity-80">
              www.xchangebypneuma.com has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by www.xchangebypneuma.com of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-slate font-outfit text-[22px] md:text-[26px] font-normal leading-[120%] tracking-[-0.5px] mb-3">
              7. Modifications
            </h2>
            <p className="text-slate font-outfit text-[16px] leading-[150%] opacity-80">
              www.xchangebypneuma.com may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-slate font-outfit text-[22px] md:text-[26px] font-normal leading-[120%] tracking-[-0.5px] mb-3">
              8. Governing Law
            </h2>
            <p className="text-slate font-outfit text-[16px] leading-[150%] opacity-80">
              These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
