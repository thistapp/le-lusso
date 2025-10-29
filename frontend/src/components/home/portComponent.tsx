/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Fade } from 'react-awesome-reveal'
import Slider from 'react-slick'

const PortComponents = (port: any) => {
    const settings = {
        autoplay: false,
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    }
    return (
        <section className="flex flex-col">
            {/* <div className="le-lusso-caption"> */}
            <div className="grid grid-cols-12 ">
                <div className="col-span-full py-8 px-4 bg-[#CDC3B8]">
                    <Fade cascade triggerOnce>
                        <div className="place-items-center">
                            <Image
                                src={'/logo/logo_text_black.png'}
                                alt="logo"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '20%', height: 'auto' }}
                                loading="lazy"
                            />
                        </div>
                        <div className="text-center">
                            <h1 className="uppercase text-lg lg:text-3xl">
                                {`We don’t just build spaces`}
                                <br />
                                {`we design the way you live.`}
                            </h1>
                        </div>
                    </Fade>
                </div>
                {/* </div> */}
            </div>
            <div className="border-2 border-solid border-white">
                <div className="port-slide">
                    <Slider {...settings}>
                        {port.port?.map((o: any, i: number) => (
                            <div
                                className="relative porfolio-type uppercase"
                                key={i}
                            >
                                <div className="portfolio-card absolute w-full h-full z-10 content-center text-center ">
                                    <p className="text-2xl">{o.title}</p>
                                    <div className="read-more">
                                        <Link
                                            href={o.path}
                                            className="text-sm lg:text-lg"
                                        >
                                            view more
                                        </Link>
                                    </div>
                                </div>
                                <Image
                                    src={o.image}
                                    alt="thumbnail"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="border-2 border-solid border-white"
                                    style={{
                                        width: '100%',
                                        height: '505px',
                                    }}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default PortComponents
