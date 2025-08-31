"use client";

import { motion } from "framer-motion";

type Direction = "down" | "up" | "left" | "right";

type ScrollCircleProps = {
  size?: number; // diameter in px
  color?: "white" | "black"; // arrow and border color
  direction?: Direction; // arrow direction
  animate?: boolean; // loop bounce animation
  className?: string; // additional outer classes (e.g., margins)
};

export default function ScrollCircle({
  size = 44,
  color = "white",
  direction = "down",
  animate = true,
  className = "",
}: ScrollCircleProps) {
  const textClass = color === "white" ? "text-white" : "text-black";
  const borderClass = color === "white" ? "border-white" : "border-black";

  const rotation =
    direction === "down"
      ? 0
      : direction === "right"
      ? 90
      : direction === "left"
      ? -90
      : 180; // up

  return (
    <div className={className}>
      <div
        className={`flex items-center justify-center rounded-full border-2 ${borderClass}`}
        style={{ width: size, height: size }}
      >
        <motion.svg
          width={Math.round(size * 0.45)}
          height={Math.round(size * 0.45)}
          viewBox="0 0 20 20"
          fill="none"
          className={textClass}
          animate={animate ? { y: [0, 4, 0] } : undefined}
          transition={
            animate
              ? { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
              : undefined
          }
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {/* Down arrow with a line; uses currentColor for fill */}
          <path
            d="M9.29289 13.7071C9.68342 14.0976 10.3166 14.0976 10.7071 13.7071L17.0711 7.34315C17.4616 6.95262 17.4616 6.31946 17.0711 5.92893C16.6805 5.53841 16.0474 5.53841 15.6569 5.92893L10 11.5858L4.34315 5.92893C3.95262 5.53841 3.31946 5.53841 2.92893 5.92893C2.53841 6.31946 2.53841 6.95262 2.92893 7.34315L9.29289 13.7071ZM9 1V13H11V1H9Z"
            fill="currentColor"
          />
        </motion.svg>
      </div>
    </div>
  );
}
