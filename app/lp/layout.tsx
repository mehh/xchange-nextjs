import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tmod.com";

export const metadata: Metadata = {
  title: "Affordable, Healthy Living | TMOD",
  description:
    "Explore TMOD's approach to precision-engineered, affordable, and healthy homes. Learn about our build process, benefits, and team.",
  openGraph: {
    title: "Affordable, Healthy Living | TMOD",
    description:
      "Explore TMOD's approach to precision-engineered, affordable, and healthy homes.",
    url: `${siteUrl}/lp`,
    images: [
      {
        url: "/assets/408db099393db085014ca7f79a9c688bded8623d.png",
        alt: "TMOD Homes - Affordable, Healthy Living",
      },
    ],
    siteName: "TMOD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable, Healthy Living | TMOD",
    description:
      "Explore TMOD's approach to precision-engineered, affordable, and healthy homes.",
    images: [
      "/assets/408db099393db085014ca7f79a9c688bded8623d.png",
    ],
  },
  alternates: {
    canonical: "/lp",
  },
};

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
