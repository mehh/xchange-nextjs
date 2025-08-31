"use client";

import React, { useEffect, useState } from "react";
import PageLoader from "./components/PageLoader";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  // The template remounts on each navigation under the same layout segment.
  // Showing the loader on mount ensures it runs for initial load and every route change.

  const drawMs = 1400;
  const fillMs = 400;
  // Start fill sooner to reduce the visual pause
  const fillDelayMs = Math.round(drawMs * 0.35);

  const [show, setShow] = useState(true);
  // Template remounts per navigation; we show loader on mount and hide when animation completes.

  // Fallback: in case CSS events don't fire (e.g., reduced motion or race), hide after expected duration
  useEffect(() => {
    const fallbackTotal = Math.max(drawMs, fillDelayMs + fillMs) + 250;
    const t = setTimeout(() => setShow(false), fallbackTotal);
    return () => clearTimeout(t);
  }, [drawMs, fillDelayMs, fillMs]);

  return (
    <>
      <PageLoader
        show={show}
        drawMs={drawMs}
        fillMs={fillMs}
        fillDelayMs={fillDelayMs}
        strokeWidth={2}
        onComplete={() => setShow(false)}
      />
      {/* Mount children only after loader completes to ensure consistent first-load vs transitions */}
      {!show && children}
    </>
  );
}
