import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use - Website Terms & Conditions",
  description: "TMOD's terms of use outline the conditions for using our website and services. Please read these terms carefully before using our platform.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms of Use | TMOD",
    description: "Read TMOD's terms and conditions for using our website and services.",
    url: "https://tmod.com/terms",
  },
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen grid place-items-center p-8">
      <div className="prose max-w-2xl">
        <h1>Terms of Use</h1>
        <p>Placeholder terms page. Content to be added.</p>
      </div>
    </main>
  );
}
