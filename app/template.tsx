"use client";

import React, { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import PageLoader from "./components/PageLoader";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  // The template remounts on each navigation under the same layout segment.
  // Showing the loader on mount ensures it runs for initial load and every route change.
  const pathname = usePathname();

  const drawMs = 1400;
  const fillMs = 400;
  // Start fill much sooner to reduce the visual pause
  const fillDelayMs = Math.round(drawMs * 0.35);
  // Wait until both draw and fill are complete, then add a small buffer
  const totalMs = Math.max(drawMs, fillDelayMs + fillMs) + 180;

  const [show, setShow] = useState(true);

  // Unique key per path to reset SVG animation if needed
  const animateKey = useMemo(() => `${pathname}-${Date.now()}`, [pathname]);

  useEffect(() => {
    setShow(true);
    const t = setTimeout(() => setShow(false), totalMs);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PageLoader
        show={show}
        animateKey={animateKey}
        drawMs={drawMs}
        fillMs={fillMs}
        fillDelayMs={fillDelayMs}
        strokeWidth={2}
      />
      {/* Keep children mounted so layout doesn't jump; overlay blocks interactions while visible */}
      {children}
    </>
  );
}
