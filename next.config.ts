import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    // Silence lockfile root warnings by setting an explicit root
    root: __dirname,
  },
};

export default nextConfig;
