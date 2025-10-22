import { useLocale } from 'next-intl'

export function useClientLocale() {
    const locale = useLocale()
    return locale
}
