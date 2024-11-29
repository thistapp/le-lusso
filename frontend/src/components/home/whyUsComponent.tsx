/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React from 'react'
import Image from "next/image"
import Link from "next/link";

const WhyUsComponent = (data: any) => {
    console.log(data.data)
    return (
        <section>
            <div className="grid grid-cols-12 bg-[#404145] text-[#D1C7BC]">
                <div className="col-start-2 col-span-5">
                    <div className="flex flex-col p-12 gap-5">
                        <div className="relative gap-2">
                            <h2 className='text-2xl font-cormorant-bold'>{data.data.title}</h2>
                            {/* <div className='border-2 border-solid border-[#D1C7BC] absolute w-7/12 left-0' /> */}
                        </div>
                        <div className=" whitespace-pre-line text-xl" dangerouslySetInnerHTML={{ __html: data.data.desc }} />
                        <div className="text-lg">
                            <Link href={""} className='uppercase our-services'>
                                our services
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-span-6">
                    <Image
                        src={""}
                        alt=''
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </section>
    )
}

export default WhyUsComponent
