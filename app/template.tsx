"use client";

import React from "react";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  // Legacy PageLoader removed in favor of PageFade (logo-based) in RootLayout.
  // Render children directly; PageFade handles transitions.
  // Also ensure any SSR initial overlay is removed if present.
  React.useEffect(() => {
    const el = document.getElementById("initial-loader");
    if (el) el.remove();
  }, []);

  return <>{children}</>;
}
