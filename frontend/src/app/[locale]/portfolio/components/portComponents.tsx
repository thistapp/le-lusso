'use client'

import React, { useEffect, useState } from 'react'
import { PortContext } from '../Utils/portfolioContext'
import CategoryComponents from './categoryComponents'
import GalleryComponent from './galleryComponents'
import { useSearchParams } from 'next/navigation'

const PortComponents = ({ data }: any) => {
    const searchParams = useSearchParams()
    const search = searchParams.get('type')
    const [cate, setCate] = useState('')
    const [open, setOpen] = useState(false)
    // const [galleryIMG, setGalleryIMG] = useState<any>()

    // const settings = {
    //     autoplay: false,
    //     arrows: true,
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    // }

    useEffect(() => {
        setCate(search ? search : '')
    }, [search])

    return (
        <PortContext.Provider
            value={{
                isCate: cate,
                setIsCate: setCate,
                isOpen: open,
                setIsOpen: setOpen,
                // setIsGalleryIMG: setGalleryIMG,
            }}
        >
            <div className="max-w-6xl mx-auto grid grid-cols-12">
                <div className="col-span-full">
                    <h1 className="text-3xl text-center uppercase font-bold">
                        PortFolio
                    </h1>
                    <CategoryComponents data={data} />
                    {data && (
                        <GalleryComponent data={data?.portData} isCate={cate} />
                    )}
                    <div className="p-3 grid-port"></div>
                </div>
            </div>
            {/* {open && (
                <Modal show={open} onAction={() => setOpen(!open)}>
                    <Slider {...settings} className="">
                        {galleryIMG?.map((o: any, i: number) => (
                            <div className="" key={i}>
                                <Image
                                    src={o.image}
                                    alt={o.id}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                />
                            </div>
                        ))}
                    </Slider>
                </Modal>
            )} */}
        </PortContext.Provider>
    )
}

export default PortComponents
