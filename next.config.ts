import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  presets: ["next/babel"],
  plugins: [["styled-components", { ssr: true }]],
};

export default nextConfig;
