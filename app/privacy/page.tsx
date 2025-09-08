import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Your Data Protection",
  description: "TMOD's privacy policy outlines how we collect, use, and protect your personal information when you use our website and services.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | TMOD",
    description: "Learn how TMOD protects your personal information and privacy.",
    url: "https://tmod.com/privacy",
  },
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-4 md:px-16 py-16 md:py-24 bg-off-white">
      <div className="max-w-[900px] mx-auto">
        <h1 className="text-slate font-outfit text-[32px] md:text-[48px] font-normal leading-[110%] tracking-[-0.8px] md:tracking-[-1.2px] mb-6">Privacy Policy</h1>
        <p className="text-slate opacity-70 font-outfit text-[14px] md:text-[16px] leading-[150%] mb-12">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-10">
          <section>
            <h2 className="text-slate font-outfit text-[22px] md:text-[26px] font-normal leading-[120%] tracking-[-0.5px] mb-3">1. Introduction</h2>
            <p className="text-slate font-outfit text-[16px] leading-[150%] opacity-80">This Privacy Policy explains how we collect, use, disclose, and protect information in connection with our website and services. By using our site, you agree to the collection and use of information in accordance with this policy.</p>
          </section>

          <section>
            <h2 className="text-slate font-outfit text-[22px] md:text-[26px] font-normal leading-[120%] tracking-[-0.5px] mb-3">2. Information We Collect</h2>
            <ul className="list-disc pl-6 text-slate font-outfit text-[16px] leading-[150%] opacity-80 space-y-2">
              <li>Contact information (e.g., name, email address, phone number) when you submit our contact form.</li>
              <li>Usage data such as pages visited, actions taken, and device information.</li>
              <li>Cookies and similar technologies to improve site performance and experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-slate font-outfit text-[22px] md:text-[26px] font-normal leading-[120%] tracking-[-0.5px] mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-slate font-outfit text-[16px] leading-[150%] opacity-80 space-y-2">
              <li>To respond to inquiries and provide customer support.</li>
              <li>To operate, maintain, and improve our website and services.</li>
              <li>To communicate updates, notices, and administrative messages.</li>
              <li>To analyze site usage and optimize user experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-slate font-outfit text-[22px] md:text-[26px] font-normal leading-[120%] tracking-[-0.5px] mb-3">4. Cookies</h2>
            <p className="text-slate font-outfit text-[16px] leading-[150%] opacity-80">We use cookies and similar technologies to remember your preferences and understand how our site is used. You can control cookies through your browser settings. Disabling cookies may limit certain features.</p>
          </section>

          <section>
            <h2 className="text-slate font-outfit text-[22px] md:text-[26px] font-normal leading-[120%] tracking-[-0.5px] mb-3">5. Sharing of Information</h2>
            <p className="text-slate font-outfit text-[16px] leading-[150%] opacity-80">We do not sell your personal information. We may share information with trusted service providers who assist us in operating our site and services, subject to confidentiality obligations, or when required by law.</p>
          </section>

          <section>
            <h2 className="text-slate font-outfit text-[22px] md:text-[26px] font-normal leading-[120%] tracking-[-0.5px] mb-3">6. Data Retention</h2>
            <p className="text-slate font-outfit text-[16px] leading-[150%] opacity-80">We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.</p>
          </section>

          <section>
            <h2 className="text-slate font-outfit text-[22px] md:text-[26px] font-normal leading-[120%] tracking-[-0.5px] mb-3">7. Security</h2>
            <p className="text-slate font-outfit text-[16px] leading-[150%] opacity-80">We implement reasonable administrative, technical, and physical safeguards to protect your information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-slate font-outfit text-[22px] md:text-[26px] font-normal leading-[120%] tracking-[-0.5px] mb-3">8. Your Rights</h2>
            <p className="text-slate font-outfit text-[16px] leading-[150%] opacity-80">Depending on your location, you may have rights to access, correct, delete, or restrict the use of your personal information. To exercise these rights, please contact us using the information below.</p>
          </section>

          <section>
            <h2 className="text-slate font-outfit text-[22px] md:text-[26px] font-normal leading-[120%] tracking-[-0.5px] mb-3">9. Children’s Privacy</h2>
            <p className="text-slate font-outfit text-[16px] leading-[150%] opacity-80">Our services are not directed to individuals under 16. We do not knowingly collect personal information from children. If you believe a child has provided us information, contact us to request deletion.</p>
          </section>

          <section>
            <h2 className="text-slate font-outfit text-[22px] md:text-[26px] font-normal leading-[120%] tracking-[-0.5px] mb-3">10. Changes to this Policy</h2>
            <p className="text-slate font-outfit text-[16px] leading-[150%] opacity-80">We may update this policy from time to time. We will post the updated version on this page with a new “Last updated” date. Your continued use of the site indicates acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-slate font-outfit text-[22px] md:text-[26px] font-normal leading-[120%] tracking-[-0.5px] mb-3">11. Contact Us</h2>
            <p className="text-slate font-outfit text-[16px] leading-[150%] opacity-80">If you have any questions about this Privacy Policy or our data practices, please contact us at <a href="mailto:info@pneuma.com" className="underline">info@pneuma.com</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
