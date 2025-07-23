'use client'

import { RotateEnum } from '@/Enum/enumRotate'
import { type SVGProps } from 'react'

interface IconSlideArrowProps extends SVGProps<SVGSVGElement> {
    rotate?: RotateEnum
}

const IconArrow = ({
    rotate = RotateEnum.TOP,
    className,
    style,
    ...props
}: IconSlideArrowProps) => {
    const setRotate = () => {
        switch (rotate) {
            case RotateEnum.TOP:
                return 0
            case RotateEnum.LEFT:
                return 90
            case RotateEnum.BOTTOM:
                return 180
            case RotateEnum.RIGHT:
                return 270
            default:
                return 0
        }
    }

    return (
        <svg
            width="26"
            height="17"
            viewBox="0 0 26 17"
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={{
                transform: `rotate(${setRotate()}deg)`,
                transition: `0.3s ease-in-out`,
                ...style,
            }}
            {...props}
        >
            <path
                d="M3.4375 16.1042L13 6.56258L22.5625 16.1042L25.5 13.1667L13 0.666748L0.5 13.1667L3.4375 16.1042Z"
                stroke="currentColor"
                strokeWidth="2"
                fill="currentcolor"
            />
        </svg>
    )
}

export default IconArrow
