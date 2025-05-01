import type { Metadata } from 'next'
import Script from 'next/script'
import '../../public/styles/globalicon.css'
import '../../public/styles/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Header from '@/components/layout/header/header'
import Footer from '@/components/layout/footer/footer'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Le Lusso',
    description: '',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <head>
                <Script src="https://cdn.jsdelivr.net/npm/sweetalert2@11" />
            </head>
            <body className={poppins.className}>
                <div className="flex flex-col justify-between">
                    <Header />
                    <main className="">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
