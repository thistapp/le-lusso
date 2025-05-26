'use client'

import { ServiceProjectType } from '@/models/services/servicestype'
import Image from 'next/image'
import Slider from 'react-slick'
import IconSlideArrow from '../../../../public/icon/navigation/IconSlideArrow'

interface Props {
    data: ServiceProjectType[]
}

const CustomArrow = (props: any) => {
    const { className, style, onClick } = props
    const getDisabled = className.includes('slick-disabled')
    return (
        <div
            className={className}
            style={{
                ...style,
                display: getDisabled ? 'none' : 'block',
            }}
            onClick={onClick}
        >
            test arrow
            {/* <IconSlideArrow /> */}
        </div>
    )
}

const ServicesProjectComponent: React.FC<Props> = ({ data }) => {
    const settings = {
        variableWidth: true,
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 3,
        nextArrow: <CustomArrow />,
        prevArrow: <CustomArrow />,
    }

    return (
        <div className="w-full bg-[#29365F] h-[517px] ">
            <Slider {...settings}>
                {data.map((o, i, r) => {
                    return (
                        <div className={``} key={i}>
                            <div className="">
                                {o.image ? (
                                    <div className="size-full">
                                        <Image
                                            src={o.image}
                                            alt={o.title}
                                            width={1200}
                                            height={500}
                                            className="w-auto h-[517px] object-cover"
                                        />
                                    </div>
                                ) : (
                                    <div
                                        className={`${
                                            i + 1 === r.length
                                                ? ' justify-between px-5 w-[380px]'
                                                : ' justify-end pr-5 w-[300px]'
                                        } text-2xl font-bold uppercase bg-[#29365F] text-white min-h-[517px] flex `}
                                    >
                                        <p className="h-full my-auto flex flex-wrap gap-2 cursor-pointer view-more">
                                            <span className="flex my-auto">
                                                {o.title}
                                            </span>{' '}
                                            {i + 1 === r.length && (
                                                <IconSlideArrow className="my-auto view-more-icon" />
                                            )}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default ServicesProjectComponent
