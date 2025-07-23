'use client'

import { useEffect } from 'react'
import IconArrow from '../../../public/icon/navigation/IconArrow'
import { RotateEnum } from '@/Enum/enumRotate'

const Collapsible = ({
    title,
    desc,
    onShow,
    onAction,
    index,
}: {
    title: string
    desc: string
    onShow?: boolean
    onAction?: (number: number) => void
    index: number
}) => {
    useEffect(() => {}, [])
    return (
        <div
            className={`w-full flex flex-wrap justify-between uppercase gap-6`}
        >
            <div
                className="w-full flex flex-wrap justify-between"
                onClick={() => onAction?.(index)}
            >
                <div className="font-bold text-base lg:text-xl">{title}</div>
                <IconArrow
                    rotate={onShow ? RotateEnum.BOTTOM : RotateEnum.TOP}
                />
            </div>
            <div
                className={`${
                    onShow ? 'block' : 'hidden'
                } text-sm lg:text-base`}
            >
                {desc}
            </div>
        </div>
    )
}

export default Collapsible
