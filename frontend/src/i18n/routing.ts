import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
    locales: ['en', 'th'],
    defaultLocale: 'th',
    localePrefix: 'as-needed',
    pathnames: {
        '/': '/',
        '/pathnames': {},
    },
})
