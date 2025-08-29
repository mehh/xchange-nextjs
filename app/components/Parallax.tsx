"use client";

import { useEffect, useRef } from "react";

type ParallaxProps = React.HTMLAttributes<HTMLDivElement> & {
  speed?: number; // 0.1 - 0.4 typical
  scale?: number; // parent page scale factor to compensate transforms
};

export default function Parallax({ speed = 0.2, scale = 1, style, ...rest }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const baseYRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measureBase = () => {
      const rect = el.getBoundingClientRect();
      baseYRef.current = rect.top + window.scrollY;
    };

    const update = () => {
      if (!ref.current) return;
      const curr = window.scrollY;
      const delta = curr - baseYRef.current;
      const offset = (delta * speed) / (scale || 1);
      ref.current.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        update();
      });
    };

    const onResize = () => {
      measureBase();
      update();
    };

    // initial
    measureBase();
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [speed, scale]);

  return <div ref={ref} {...rest} style={{ ...style, willChange: "transform" }} />;
}
