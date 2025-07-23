import type { SVGProps } from 'react'

const IconPainting = (props: SVGProps<SVGSVGElement>) => {
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
                d="M2 8H40V40H2V8Z"
                stroke="currentColor"
                strokeLinejoin="round"
                fill="none"
            />
            <path
                d="M6 12H36V36H6V12Z"
                stroke="currentColor"
                strokeLinejoin="round"
                fill="none"
            />
            <path
                d="M14 7L21 2L28 7"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            <path
                d="M7 28L15.4 20L24.7333 30L29.4 25L35 31"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            <ellipse cx={'27.5'} cy={'19'} rx={'2.5'} ry={'3'} />
        </svg>
    )
}

export default IconPainting
