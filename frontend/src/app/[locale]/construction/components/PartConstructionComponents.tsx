'use client'

import { useCallback, useState } from 'react'
import { useTranslations } from 'next-intl'
import TitleComponents from '@/components/elements/titleComponents'
import { ConstrucContext } from '../Utils/ConstructionContext'
import StepIconComponents from './StepIconComponents'
import {
    ConstructionMockup,
    ConstructionCategory,
} from '@/config/constructionData'
import data from '@/config/portfolio'
import GalleryComponent from '@/app/[locale]/portfolio/components/galleryComponents'

import IconBuildIn from '../../../../../public/icon/partConstruction/IconBuildin'
import IconRenovation from '../../../../../public/icon/partConstruction/IconRenovation'
import IconPartitioning from '../../../../../public/icon/partConstruction/IconPartitioning'
import IconPainting from '../../../../../public/icon/partConstruction/IconPainting'
import IconCeiling from '../../../../../public/icon/partConstruction/IconCeiling'
import IconGlass from '../../../../../public/icon/partConstruction/IconGlass'
import IconStainlessSteel from '../../../../../public/icon/partConstruction/IconStainlessSteel'
import IconStructureDemolition from '../../../../../public/icon/partConstruction/IconStructureDemolition'
import IconMaintenance from '../../../../../public/icon/partConstruction/IconMaintenance'
import IconFlooringAndTiling from '../../../../../public/icon/partConstruction/IconFlooringAndTiling'

const PartConstructionComponent = () => {
    const t = useTranslations('partCon')
    const [cate, setCate] = useState('')

    const handleIcon = useCallback(
        (title: string, width?: number, height?: number) => {
            const widthDefault = 40
            const heightDefault = 40
            switch (title) {
                case 'renovation':
                    return (
                        <IconRenovation
                            width={width ? width : widthDefault}
                            height={height ? height : heightDefault}
                        />
                    )
                case 'work-flow':
                    return (
                        <IconRenovation
                            width={width ? width : widthDefault}
                            height={height ? height : heightDefault}
                        />
                    )
                case 'buildin':
                    return (
                        <IconBuildIn
                            width={width ? width : widthDefault}
                            height={height ? height : heightDefault}
                        />
                    )
                case 'partitioning':
                    return (
                        <IconPartitioning
                            width={width ? width : widthDefault}
                            height={height ? height : heightDefault}
                        />
                    )
                case 'painting':
                    return (
                        <IconPainting
                            width={width ? width : widthDefault}
                            height={height ? height : heightDefault}
                        />
                    )
                case 'ceiling':
                    return (
                        <IconCeiling
                            width={width ? width : widthDefault}
                            height={height ? height : heightDefault}
                        />
                    )
                case 'glass':
                    return (
                        <IconGlass
                            width={width ? width : widthDefault}
                            height={height ? height : heightDefault}
                        />
                    )
                case 'stainless-steel':
                    return (
                        <IconStainlessSteel
                            width={width ? width : widthDefault}
                            height={height ? height : heightDefault}
                        />
                    )
                case 'structure-demolition':
                    return (
                        <IconStructureDemolition
                            width={width ? width : widthDefault}
                            height={height ? height : heightDefault}
                        />
                    )
                case 'maintenance':
                    return (
                        <IconMaintenance
                            width={width ? width : widthDefault}
                            height={height ? height : heightDefault}
                        />
                    )
                case 'flooring-and-tiling':
                    return (
                        <IconFlooringAndTiling
                            width={width ? width : widthDefault}
                            height={height ? height : heightDefault}
                        />
                    )
                default:
                    return null
            }
        },
        []
    )
    console.log(cate)
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
                    <div className="px-12 text-center my-12">
                        <p>{t('desc')}</p>
                    </div>
                    <div className="w-full">
                        <StepIconComponents
                            category={ConstructionCategory}
                            IconFunc={handleIcon}
                        />
                    </div>
                    <div className="w-full mb-3">
                        {ConstructionMockup.filter((o) => o.value === cate).map(
                            (o, i) => {
                                return (
                                    <div
                                        className="flex flex-col lg:flex-row gap-2"
                                        key={i}
                                    >
                                        <div className="w-full flex flex-col items-center">
                                            <div
                                                className={`w-[95px] p-4 icon-part rounded-full border-2 border-black transition-[0.3s] shadow-lg mb-3`}
                                            >
                                                {handleIcon(o.value, 60, 60)}
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
                                )
                            }
                        )}
                    </div>
                    <div className="max-w-7xl mx-auto flex flex-col w-full justify-center mt-6">
                        <h2 className="uppercase p-4 border-2 border-black mx-auto text-2xl font-bold mb-8">
                            portfolio
                        </h2>
                        <GalleryComponent data={data.PortData} isCate={cate} />
                    </div>
                </div>
            </div>
        </ConstrucContext>
    )
}

export default PartConstructionComponent
