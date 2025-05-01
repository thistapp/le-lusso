import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false,
  },
  sassOptions: {
    implementation: 'sass-embedded',
  },
  output: "standalone",
  reactStrictMode: true
  /* config options here */
};

export default nextConfig;
