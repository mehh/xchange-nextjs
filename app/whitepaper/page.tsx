import type { Metadata } from "next";
import WhitepaperClient from "./WhitepaperClient";

export const metadata: Metadata = {
  title: "Whitepaper – xchange nasal dock",
  description:
    "In-depth whitepaper exploring the xchange nasal dock: clinical need, methodology, data, and outcomes.",
  alternates: { canonical: "/whitepaper" },
};

export default function WhitepaperPage() {
  return <WhitepaperClient />;
}
