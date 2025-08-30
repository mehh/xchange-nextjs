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
    <main className="min-h-screen grid place-items-center p-8">
      <div className="prose max-w-2xl">
        <h1>Privacy Policy</h1>
        <p>Placeholder policy page. Content to be added.</p>
      </div>
    </main>
  );
}
