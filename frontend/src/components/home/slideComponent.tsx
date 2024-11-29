"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import Image from "next/image"
import Slider from "react-slick";

const SlideComponent = (data: any) => {
    const settings = {
        autoplay: true,
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section>
            <div className="">
                <Slider {...settings}>
                    {data.slide?.map((o: any, i: number) => (
                        <div className="w-full relative" key={i}>
                            <Image
                                src={o.image}
                                alt=""
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-[100vh] "
                            />
                            <div className="absolute">
                                {o.title}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default SlideComponent
