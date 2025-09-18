import { useLocale } from 'next-intl'

import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
    const lang = useLocale() || 'en'
    return (
        <>
            <Link
                href={`/${lang}`}
                className="absolute -top-[10px] lg:-top-[30px] "
            >
                <Image
                    src={'/logo/logo_black.png'}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full relative z-50"
                />
            </Link>
        </>
    )
}

export default Logo
