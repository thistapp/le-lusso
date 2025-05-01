'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import { Fade } from 'react-awesome-reveal'

const SlideComponent = (data: any) => {
    const settings = {
        // autoplay: true,
        arrows: true,
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <section>
            <Fade className="new-slide">
                <Slider {...settings}>
                    {data.slide?.map((o: any, i: number) => (
                        <div className="w-full relative" key={i}>
                            <div className="absolute max-w-xs lg:max-w-xl top-[7.5em] lg:top-[21em] left-[3em] lg:left-44 bg-[#d1c7bc] p-2 lg:p-4 rounded-md">
                                <h3 className="text-base lg:text-xl font-bold">
                                    {o.title}
                                </h3>
                                <p className="w-full truncate">{o.desc}</p>
                            </div>
                            <Image
                                src={o.image}
                                alt=""
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-[313px] lg:h-[100vh] "
                            />
                        </div>
                    ))}
                </Slider>
            </Fade>
        </section>
    )
}

export default SlideComponent
