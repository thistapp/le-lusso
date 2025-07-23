import type { SVGProps } from 'react'

const IconBuildIn = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width="33"
            height="36"
            viewBox="0 0 33 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M4 2H30V33H4V2Z"
                stroke="currentColor"
                strokeLinejoin="round"
                fill="none"
            />
            <path
                d="M17 2V33"
                stroke="currentColor"
                strokeLinejoin="round"
                fill="none"
            />
            <circle cx="21" cy="19" r="1" stroke="currentColor" fill="none" />
            <circle cx="13" cy="19" r="1" stroke="currentColor" fill="none" />
            <path
                d="M27 34V33M9 34V33"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
            />
        </svg>
    )
}

export default IconBuildIn
