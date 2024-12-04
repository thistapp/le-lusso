"use client"

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const PortComponents = ({ data }: any) => {
    const param = useSearchParams();
    const [cate, setCate] = useState("");

    const onSelect = (value: string) => {
        console.log(value)
        setCate(cate === value ? "" : value)
    }

    const filterData = (value: any) => {
        if (!cate) {
            return true;
        }
        return value.cate === cate
    }

    useEffect(() => {
        setCate(param.get("cate") != null ? String(param.get("cate")) : "")
    }, [])

    return (
        <div className='mt-24'>
            <div className="grid grid-cols-12">
                <div className="col-span-12">
                    <h1 className='text-3xl text-center uppercase'>PortFolio</h1>
                    <div className="p-3 flex flex-wrap justify-center gap-2">
                        {data?.portCategory.map((o: any, i: number) => (
                            <div className="flex flex-wrap" key={i} >
                                {i != 0 && <span className='mx-5 my-auto'>|</span>}
                                <button className="text-xl font-bold" onClick={() => onSelect(o.value)}>
                                    <p className={`port-cate ${cate === o.value ? "active" : ""}`}>
                                        {o.label}
                                    </p>
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="p-3 grid-port">
                        {data.portData
                            .filter((cate: any) => filterData(cate))
                            .map((o: any, i: number) => (
                                <div className="relative grid-item cursor-pointer" key={i}>
                                    <div className="item-card absolute w-full h-full z-10 content-center text-center">
                                        <h3 className='text-xl'>
                                            {o.title}
                                        </h3>
                                        <p className=' truncate w-2/3 mx-auto'>
                                            {o.desc}
                                        </p>
                                    </div>
                                    <Image
                                        src={o.gallery[0].image}
                                        alt='thumbnails'
                                        width={0}
                                        height={0}
                                        sizes='100vw'
                                        style={{
                                            width: "100%",
                                            height: "auto"
                                        }}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortComponents