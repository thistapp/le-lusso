import type { SVGProps } from 'react'

const IconSlideArrow = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            width="37"
            height="37"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M18.3333 14L24.8333 20.5L18.3333 27M40 20.5C40 9.73045 31.2696 1 20.5 1C9.73045 1 1 9.73045 1 20.5C1 31.2696 9.73045 40 20.5 40C31.2696 40 40 31.2696 40 20.5Z"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
            />
        </svg>
    )
}

export default IconSlideArrow
