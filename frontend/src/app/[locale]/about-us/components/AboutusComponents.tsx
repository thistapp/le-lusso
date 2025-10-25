'use client'

import Collapsible from '@/components/elements/collapsible'
import {
    GalleryInterface,
    ListGalleryInterface,
} from '@/models/aboutus/aboutus'
import Image from 'next/image'
import React, { FC, useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import CheckIcon from '../../../../../public/icon/global/checkIcon'
import { useTranslations, useLocale } from 'use-intl'

interface Props {
    data: GalleryInterface[]
    listData: ListGalleryInterface[]
}

const AboutusComponent: FC<Props> = ({ data, listData }) => {
    const t = useTranslations('about')
    const lang = useLocale()
    const [isOpen, setIsOpen] = useState<number>(0)

    const handleOpen = (index: number) => {
        setIsOpen(index)
    }

    return (
        <div className="w-full">
            <div className="max-w-7xl w-full my-12 mx-auto uppercase flex flex-col ">
                <section className="flex flex-col lg:flex-row gap-6 justify-center items-center">
                    <div className="lg:w-1/2 w-full px-6">
                        <p className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent hover:bg-primary/80 mb-4 bg-gray-900 text-white">
                            {t('title')}
                        </p>
                        <p
                            className={`text-4xl ${
                                lang === 'en' ? 'lg:text-5xl' : ''
                            } font-bold text-gray-900 mb-6 leading-tight`}
                        >
                            {`"${t('quote')}"`}
                        </p>
                        <p className="text-xl text-gray-600 mb-8">
                            Transforming ideas into elegant, livable realities
                            through exceptional design and precise execution.
                        </p>
                    </div>
                    <div className="lg:w-1/2 w-full place-items-center">
                        <Image
                            src={'/logo/logo_text_black.png'}
                            alt="thumbnails"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{
                                width: '60%',
                                height: 'auto',
                            }}
                            loading="lazy"
                        />
                    </div>
                </section>
                <section className="px-6">
                    <div className="flex items-center mb-8"></div>
                    <div className="flex flex-row gap-6">
                        <div className="w-1/2">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Exceptional Design and Precise Execution
                            </h2>
                            <div className="w-full flex flex-col gap-6 tracking-widest font-light">
                                <p>
                                    {t('at')}{' '}
                                    <span className="!font-bold text-3xl ">
                                        Lelusso
                                    </span>
                                    <span className=" whitespace-pre-line">
                                        {t('desc')}
                                    </span>
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {listData.map((item, index) => (
                                        <div
                                            className="flex items-center gap-2"
                                            key={index}
                                        >
                                            <CheckIcon />
                                            <span className="text-gray-700">
                                                {item.title}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 grid grid-cols-2 gap-4 items-center">
                            <div className="">
                                <Image
                                    src="/gallery/port2/LINE_ALBUM_Rowdy_๒๔๐๘๒๕_16.jpg"
                                    alt="thumbnail"
                                    width={500}
                                    height={500}
                                    className="w-full h-auto rounded-lg object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <div className="">
                                <Image
                                    src="/gallery/port2/LINE_ALBUM_Rowdy_๒๔๐๘๒๕_27.jpg"
                                    alt="thumbnail"
                                    width={500}
                                    height={500}
                                    className="w-full h-auto rounded-lg object-cover mt-10"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="p-8 uppercase">
                <div className="bg-[#404145] py-12 px-16 rounded-2xl text-[#D1C7BC] w-full relative overflow-hidden">
                    <Image
                        src={`/logo/logo_white.png`}
                        alt="logo"
                        width={1000}
                        height={1000}
                        className="absolute -top-[24rem] -right-[25rem] w-[10rem] lg:w-[60rem] opacity-30 rotate-45"
                        loading="lazy"
                    />
                    <div className="max-w-7xl w-full mx-auto justify-center relative flex flex-col gap-16">
                        <div className="w-full relative">
                            <div className="text-2xl lg:text-3xl font-bold">
                                {t('whyus.title')}
                            </div>
                            <Fade
                                delay={300}
                                className="border border-solid border-[#D1C7BC] absolute w-[20em] lg:w-[35em] -left-24 mt-3"
                                triggerOnce
                            >
                                <div className="" />
                            </Fade>
                        </div>
                        <div className="w-full flex flex-col gap-6">
                            {data.map((o, i) => {
                                return (
                                    <div
                                        className="flex flex-col gap-6"
                                        key={i}
                                    >
                                        <Collapsible
                                            title={t(o.title)}
                                            desc={t(o.desc)}
                                            onAction={handleOpen}
                                            onShow={isOpen === i}
                                            index={i}
                                        />
                                        {i !== data.length - 1 && (
                                            <div className="border border-solid border-[#D1C7BC] w-full" />
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutusComponent
