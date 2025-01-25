import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false,
  },
  sassOptions: {
    implementation: 'sass-embedded',
  },
  output: "standalone"
  /* config options here */
};

export default nextConfig;
