import type { SVGProps } from 'react'

const IconCeiling = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width="40"
            height="35"
            viewBox="0 0 40 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M8 2H32L35 17H5L8 2Z"
                stroke="currentColor"
                strokeLinejoin="round"
                fill="none"
            />
            <path
                d="M20 29V18"
                stroke="currentColor"
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
            />
            <rect
                x="13"
                y="30"
                width="14"
                height="5"
                stroke="currentColor"
                strokeLinejoin="round"
                fill="none"
            />
        </svg>
    )
}

export default IconCeiling
