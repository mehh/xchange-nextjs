import type { Metadata } from "next";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Affordable, Healthy Living | TMOD",
  description:
    "Explore TMOD's approach to precision-engineered, affordable, and healthy homes. Learn about our build process, benefits, and team.",
  path: "/lp",
});

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
