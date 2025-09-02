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

  const disableLoader =
    process.env.NEXT_PUBLIC_DISABLE_LOADER === "1" ||
    process.env.NEXT_PUBLIC_DISABLE_LOADER === "true";

  const [show, setShow] = useState(!disableLoader);
  // Template remounts per navigation; we show loader on mount and hide when animation completes.

  // Fallback: in case CSS events don't fire (e.g., reduced motion or race), hide after expected duration
  useEffect(() => {
    if (disableLoader) return;
    const fallbackTotal = Math.max(drawMs, fillDelayMs + fillMs) + 250;
    const t = setTimeout(() => {
      setShow(false);
      const el = document.getElementById("initial-loader");
      if (el) el.remove();
    }, fallbackTotal);
    return () => clearTimeout(t);
  }, [drawMs, fillDelayMs, fillMs, disableLoader]);

  // If loader is disabled, ensure SSR initial overlay is removed on mount
  useEffect(() => {
    if (!disableLoader) return;
    const el = document.getElementById("initial-loader");
    if (el) el.remove();
  }, [disableLoader]);

  return (
    <>
      {!disableLoader && (
        <PageLoader
          show={show}
          drawMs={drawMs}
          fillMs={fillMs}
          fillDelayMs={fillDelayMs}
          strokeWidth={2}
          onComplete={() => {
            setShow(false);
            const el = document.getElementById("initial-loader");
            if (el) el.remove();
          }}
        />
      )}
      {/* Always render children to keep server and client trees consistent; overlay visually blocks until animation completes */}
      {children}
    </>
  );
}
