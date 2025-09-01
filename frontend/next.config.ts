import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin({
    experimental: {
        createMessagesDeclaration: './messages/en.json',
    },
})

const nextConfig: NextConfig = {
    devIndicators: false,
    sassOptions: {
        implementation: 'sass-embedded',
    },
    output: 'standalone',
    reactStrictMode: true,
    /* config options here */
}

export default withNextIntl(nextConfig)
