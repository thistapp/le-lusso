/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Fade } from 'react-awesome-reveal'

const WhyUsComponent = (data: any) => {
    // console.log(data.data)
    return (
        <section className="-mt-2 !z-30 relative">
            <div className="grid grid-cols-12 bg-[#404145] text-[#D1C7BC]">
                <div className="col-start-1 col-span-full lg:col-start-2 lg:col-span-5">
                    <div className="p-12">
                        <div className="mb-12">
                            <Fade direction="left">
                                <h2 className="text-xl lg:text-4xl">
                                    {data.data.title}
                                </h2>
                            </Fade>
                            <Fade
                                direction="left"
                                delay={300}
                                className="border border-solid border-[#D1C7BC] absolute w-[22em] lg:w-[35em] left-0 mt-3"
                            >
                                <div className="" />
                            </Fade>
                        </div>
                        <div className="flex flex-col gap-8">
                            <Fade direction="left" delay={400}>
                                <div
                                    className=" whitespace-pre-line text-base"
                                    dangerouslySetInnerHTML={{
                                        __html: data.data.desc,
                                    }}
                                />
                                <div className="text-lg">
                                    <Link
                                        href={''}
                                        className="uppercase our-services"
                                    >
                                        our services
                                    </Link>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className="col-span-full lg:col-span-6">
                    <Fade>
                        <Image
                            src={'/gallery/LINE_ALBUM_ฝาก_241129_1.jpg'}
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full lg:w-10/12"
                            loading="lazy"
                        />
                    </Fade>
                </div>
            </div>
            <Fade className="w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.645322442667!2d100.49271549999999!3d13.618460899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a39978f74e61%3A0x9e19c3ce70aef06c!2z4Lia4LmJ4Liy4LiZ4Lie4Li04Lio4Liy4LilIOC4m-C4o-C4sOC4iuC4suC4reC4uOC4l-C4tOC4qA!5e0!3m2!1sth!2sth!4v1732955331497!5m2!1sth!2sth"
                    height="450"
                    style={{ width: '100%', border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </Fade>
        </section>
    )
}

export default WhyUsComponent
