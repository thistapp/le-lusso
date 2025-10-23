'use client'

import { useEffect, useState, useRef } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import Modal from '@/components/elements/modal'

interface Props {
    gallery: string[]
    customClass?: string
}

const ProjectGalleryComponents: React.FC<Props> = ({
    gallery,
    customClass,
}) => {
    const [album, setAlbum] = useState<string[]>([])
    const [open, setOpen] = useState(false)
    const [modalIMG, setModalIMG] = useState<string>()
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

    const onChangeThumbnail = (index: number) => {
        sliderRef.current?.slickGoTo(index)
    }

    const onClickImage = (data: string) => {
        setModalIMG(data)
        setOpen(true)
    }

    useEffect(() => {
        setAlbum(gallery)
    }, [])

    return (
        <div className={`w-full flex flex-col gap-2 ${customClass}`}>
            <Slider ref={sliderRef} {...settings} className="gallery-slider">
                {gallery.map((o, i) => (
                    <div className="p-4 lg:p-2" key={i}>
                        <Image
                            src={o}
                            alt={o}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                            className="m-auto"
                            onClick={() => onClickImage(o)}
                            loading="lazy"
                        />
                    </div>
                ))}
            </Slider>
            <div className="hidden lg:flex gap-4 overflow-x-scroll">
                {album.map((item, i) => {
                    return (
                        <Image
                            src={item}
                            alt={item}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{
                                width: '25%',
                                height: 'auto',
                            }}
                            className="mx-auto p-2 cursor-pointer"
                            onClick={() => onChangeThumbnail(i)}
                            key={i}
                            loading="lazy"
                        />
                    )
                })}
            </div>
            {open && (
                <Modal show={open} onAction={() => setOpen(!open)}>
                    <Image
                        src={modalIMG || ''}
                        alt={modalIMG || ''}
                        width={0}
                        height={0}
                        sizes="100vh"
                        style={{
                            width: '70%',
                            height: 'auto',
                        }}
                        className="m-auto"
                        loading="lazy"
                    />
                </Modal>
            )}
        </div>
    )
}

export default ProjectGalleryComponents
