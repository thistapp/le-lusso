'use client'

import { galleryData } from '@/models/portfolio'
import { useEffect, useState, useRef } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import Modal from '@/components/elements/modal'

interface Props {
    gallery: galleryData[]
}

const ProjectGalleryComponents: React.FC<Props> = ({ gallery }) => {
    const [album, setAlbum] = useState<galleryData[]>([])
    const [open, setOpen] = useState(false)
    const [modalIMG, setModalIMG] = useState<galleryData>()
    const sliderRef = useRef<Slider>(null)

    const settings = {
        autoplay: false,
        variableWidth: false,
        arrows: false,
        dots: false,
        infinite: false,
        centerMode: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    variableWidth: true,
                    centerMode: true,
                    infinite: false,
                    slidesToShow: 1,
                },
            },
        ],
    }

    const onChangeThumbnail = (data: galleryData) => {
        sliderRef.current?.slickGoTo(data.id)
    }

    const onClickImage = (data: galleryData) => {
        setModalIMG(data)
        setOpen(true)
    }

    useEffect(() => {
        setAlbum(gallery)
    }, [])
    console.log(open)
    return (
        <div className="w-full flex flex-col gap-2">
            <Slider ref={sliderRef} {...settings} className="gallery-slider">
                {gallery.map((item) => (
                    <div className="p-4 lg:p-2" key={item.id}>
                        <Image
                            src={item.image}
                            alt={item.image}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                            className="m-auto"
                            onClick={() => onClickImage(item)}
                        />
                    </div>
                ))}
            </Slider>
            <div className="hidden lg:flex gap-4 overflow-x-scroll">
                {album.map((item, i) => {
                    return (
                        <Image
                            src={item.image}
                            alt={item.image}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{
                                width: '25%',
                                height: 'auto',
                            }}
                            className="mx-auto p-2 cursor-pointer"
                            onClick={() => onChangeThumbnail(item)}
                            key={i}
                        />
                    )
                })}
            </div>
            {open && (
                <Modal show={open} onAction={() => setOpen(!open)}>
                    <Image
                        src={modalIMG?.image || ''}
                        alt={modalIMG?.image || ''}
                        width={0}
                        height={0}
                        sizes="100vh"
                        style={{
                            width: '70%',
                            height: 'auto',
                        }}
                        className="m-auto"
                    />
                </Modal>
            )}
        </div>
    )
}

export default ProjectGalleryComponents
