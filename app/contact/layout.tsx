import type { Metadata } from "next";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us | Pneuma",
  description:
    "Have questions about Pneuma? Tell us a little about yourself and we’ll get back to you shortly.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
