import i18next from 'i18next'
import Link from 'next/link'

export default function NotFound() {
    const lang = i18next.language || 'en'
    return (
        <div className="w-full h-[15em] lg:h-[25em] flex flex-col items-center justify-center text-center gap-3 ">
            <h2 className="text-xl lg:text-3xl font-bold ">{`404 – Page Not Found`}</h2>
            <p className="text-sm lg:text-lg text-gray-600 px-8">
                {`Sorry, the page you’re looking for might have been removed, had
                its name changed, or is temporarily unavailable.`}
            </p>
            <Link
                href="/"
                className="p-4 bg-[#D1C6BC] text-[#714D39] rounded-lg ease-in-out hover:bg-[#cdb7a3] transition-[0.3s]"
            >
                Go Back Home
            </Link>
        </div>
    )
}
