'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import TitleComponents from '@/components/elements/titleComponents'
import { ConstrucContext } from '../Utils/ConstructionContext'
import StepIconComponents from './StepIconComponents'
import { Construction, ConstructionCategory } from '@/config/constructionData'
import data from '@/config/portfolio'
import GalleryComponent from '@/app/[locale]/portfolio/components/galleryComponents'
import { Fade } from 'react-awesome-reveal'
import { getIconPartConstruction } from '@/hooks/getIconPartCon'

const PartConstructionComponent = () => {
    const t = useTranslations('partCon')
    const [cate, setCate] = useState('')

    return (
        <ConstrucContext
            value={{
                isCate: cate,
                setIsCate: setCate,
            }}
        >
            <div className="w-full">
                <TitleComponents
                    title="part construction"
                    className="title-section-part-construction h-[10rem]"
                />
                <div className="max-w-7xl mx-auto w-full flex flex-col gap-3">
                    <Fade className="px-12 text-center my-12" triggerOnce>
                        <p>{t('desc')}</p>
                    </Fade>
                    <Fade className="w-full" triggerOnce>
                        <StepIconComponents category={ConstructionCategory} />
                    </Fade>
                    <div className="w-full mb-3">
                        {Construction.filter((o) => o.value === cate).map(
                            (o, i) => {
                                return (
                                    <Fade key={i} triggerOnce>
                                        <div className="flex flex-col lg:flex-row gap-2">
                                            <div className="w-full flex flex-col items-center">
                                                <div
                                                    className={`w-[95px] p-4 icon-part rounded-full border-2 border-black transition-[0.3s] shadow-lg mb-3`}
                                                >
                                                    {getIconPartConstruction(
                                                        o.value,
                                                        60,
                                                        60
                                                    )}
                                                </div>
                                                <div className="w-full text-center">
                                                    <h2 className="font-bold uppercase mb-2">
                                                        {o.title}
                                                    </h2>
                                                    <div className="w-full flex flex-col gap-3 px-8">
                                                        {o.price && (
                                                            <p className="whitespace-pre-line">
                                                                {o.price}
                                                            </p>
                                                        )}
                                                        <p></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full flex items-center justify-center">
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: o.desc,
                                                    }}
                                                    className="w-full px-12 lg:px-4"
                                                />
                                            </div>
                                        </div>
                                    </Fade>
                                )
                            }
                        )}
                    </div>
                    <Fade
                        className="max-w-7xl mx-auto flex flex-col w-full justify-center my-6"
                        triggerOnce
                    >
                        <h2 className="uppercase p-4 border-2 border-black mx-auto text-2xl font-bold mb-8">
                            portfolio
                        </h2>
                        <GalleryComponent data={data.PortData} isCate={cate} />
                    </Fade>
                </div>
            </div>
        </ConstrucContext>
    )
}

export default PartConstructionComponent
