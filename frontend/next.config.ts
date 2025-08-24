import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
    devIndicators: false,
    sassOptions: {
        implementation: 'sass-embedded',
    },
    output: 'standalone',
    reactStrictMode: true,
    /* config options here */
}
const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
