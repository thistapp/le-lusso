import type { Metadata } from 'next'
import Script from 'next/script'
import '../../../public/styles/globalicon.css'
import '../../../public/styles/globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Header from '@/components/layout/header/header'
import Footer from '@/components/layout/footer/footer'
import { Poppins } from 'next/font/google'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import { Locale, hasLocale, NextIntlClientProvider } from 'next-intl'
import {
    getTranslations,
    setRequestLocale,
    getMessages,
} from 'next-intl/server'

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
})

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params

    const t = await getTranslations({
        locale: locale as Locale,
        namespace: 'LocaleLayout',
    })

    return {
        title: t('title') || 'Le Lusso',
        description: t('description') || '',
    }
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params

    if (!hasLocale(routing.locales, locale)) {
        notFound()
    }
    setRequestLocale(locale)

    const messages = await getMessages()

    return (
        <html lang={locale}>
            <head>
                <Script
                    src="https://cdn.jsdelivr.net/npm/sweetalert2@11"
                    strategy="beforeInteractive"
                />
            </head>
            <body className={poppins.className}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <div className="flex flex-col justify-between">
                        <Header />
                        <main className="min-h-screen ">{children}</main>
                        <Footer />
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
