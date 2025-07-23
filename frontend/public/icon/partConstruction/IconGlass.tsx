import type { SVGProps } from 'react'

const IconGlass = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M26 13L18 21M23 23L19 27"
                stroke="currentColor"
                strokeLinecap="round"
                fill="none"
            />
            <circle
                cx="21"
                cy="21"
                r="19"
                stroke="currentColor"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default IconGlass
