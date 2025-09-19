import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
    locales: ['en', 'th'],
    defaultLocale: 'th',
    // Optional: hide the default locale in the URL
    // localePrefix: 'as-needed',
    pathnames: {
        '/': '/',
        '/pathnames': {},
    },
})
