import type { SVGProps } from 'react'

const CheckIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
                color: 'rgb(34 197 94)',
            }}
            className="lucide lucide-circle-check-big h-5 w-5 mr-2"
            {...props}
        >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <path d="m9 11 3 3L22 4"></path>
        </svg>
    )
}

export default CheckIcon
