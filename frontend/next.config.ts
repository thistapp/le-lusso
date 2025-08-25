import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    devIndicators: false,
    sassOptions: {
        implementation: 'sass-embedded',
    },
    output: 'standalone',
    reactStrictMode: true,
    /* config options here */
}

export default nextConfig
