import { ReactNode } from 'react'
import { SwiperProps } from 'swiper/react'

export interface dataSlideType {
    title: string
    desc?: string
    path: string
    image: string
}

export interface SlideType extends SwiperProps {
    children: ReactNode
}
