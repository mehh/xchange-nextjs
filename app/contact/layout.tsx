import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pneuma.health";

export const metadata: Metadata = {
  title: "Contact Us | Pneuma",
  description:
    "Have questions about Pneuma? Tell us a little about yourself and we’ll get back to you shortly.",
  keywords: [
    "Pneuma contact",
    "contact Pneuma",
    "Pneuma health",
    "medical technology contact",
    "get in touch",
    "sales inquiry",
    "support inquiry",
  ],
  openGraph: {
    title: "Contact Us | Pneuma",
    description:
      "Have questions about Pneuma? Tell us a little about yourself and we’ll get back to you shortly.",
    url: `${siteUrl}/contact`,
    images: [
      {
        url: "/assets/408db099393db085014ca7f79a9c688bded8623d.png",
        alt: "Contact Pneuma",
      },
    ],
  },
  twitter: {
    title: "Contact Us | Pneuma",
    description:
      "Have questions about Pneuma? Tell us a little about yourself and we’ll get back to you shortly.",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
