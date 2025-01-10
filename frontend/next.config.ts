import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false,
  },
  output: "standalone"
  /* config options here */
};

export default nextConfig;
