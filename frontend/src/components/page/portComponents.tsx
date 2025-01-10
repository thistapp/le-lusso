"use client"
/* eslint-disable  @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from 'react';
import Masonry from "react-responsive-masonry"
import Modal from '../elements/modal';
import Slider from "react-slick";
import Image from 'next/image';

const PortComponents = ({ data }: any) => {
    const [cate, setCate] = useState("");
    const [open, setOpen] = useState(false);
    const [galleryIMG, setGalleryIMG] = useState<any>();

    const settings = {
        autoplay: false,
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const onSelect = (value: string) => {
        setCate(cate === value ? "" : value)
    }

    const filterData = (value: any) => {
        if (!cate) {
            return true;
        }
        return value.cate === cate
    }

    const openModal = (obj: any) => {
        setGalleryIMG(obj)
        setOpen(true)
    }

    useEffect(() => {
        const query = window.location.search.split("=");
        setCate(query != undefined ? query[1] : "");
    }, [])

    return (
        <>
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
                        <Masonry
                            columnsCount={4}
                            gutter='10px'
                            className='px-6'
                        >
                            {data.portData
                                .filter((cate: any) => filterData(cate))
                                .map((o: any, i: number) => (
                                    <div
                                        className="relative grid-item cursor-pointer"
                                        onClick={() => openModal(o.gallery)}
                                        key={i}
                                    >
                                        <div className="item-card absolute w-full h-full z-10 content-center text-center">
                                            <h3 className='text-xl'>
                                                {o.title}
                                            </h3>
                                            <p className='text-lg truncate w-5/6 mx-auto'>
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
                        </Masonry>
                        <div className="p-3 grid-port">
                        </div>
                    </div>
                </div>
            </div>
            {open &&
                <Modal show={open} onAction={() => setOpen(!open)}>
                    <Slider {...settings} className="">
                        {galleryIMG?.map((o: any, i: number) => (
                            <div className="" key={i}>
                                <Image
                                    src={o.image}
                                    alt={o.id}
                                    width={0}
                                    height={0}
                                    sizes='100vw'
                                    style={{
                                        width: "100%",
                                        height: "auto"
                                    }} />
                            </div>
                        ))}
                    </Slider>
                </Modal>
            }
        </>
    )
}

export default PortComponents;