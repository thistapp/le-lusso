'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { projectType } from '@/models/portfolio'
import projectData from '@/config/projectDetail'
import ProjectGalleryComponents from './projectGalleryComponents'
import { useClientLocale } from '@/hooks/getLocale'

const ProjectDetailComponents = () => {
    const locale = useClientLocale()
    const params = useParams()
    const slugId = params.slugId
    const [projectDetail, setProjectDetail] = useState<projectType>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setLoading(false)
        const filterProject = projectData.filter(
            (item) => item.id === slugId
        )[0]
        if (filterProject) {
            setProjectDetail(
                projectData.filter((item) => item.id === slugId)[0]
            )
        }
    }, [])

    if (!projectDetail) return <div></div>

    if (loading && !projectDetail)
        return (
            <div className="max-w-7xl mx-auto w-full flex flex-col gap-3 animate-pulse">
                <div className="w-full flex lg:flex-wrap flex-wrap-reverse relative">
                    <div className="w-full lg:w-5/12 p-4 self-start sticky top-20 lg:pt-10">
                        <div className="h-2.5 bg-gray-400 rounded-full w-72 mb-4" />
                        <div className="h-2 bg-gray-400 rounded-full w-56 mb-4" />
                        <div className="h-2 bg-gray-400 rounded-full w-52 mb-4" />
                        <div className="h-2 bg-gray-400 rounded-full w-48 mb-4" />
                        <div className="h-2 bg-gray-400 rounded-full w-48 mb-4" />
                    </div>
                    <div className="w-full lg:w-7/12 p-4">
                        <div className="h-[500px] bg-gray-400 rounded-md w-full mb-4" />
                    </div>
                </div>
                <div className="w-full p-4 lg:py-6 px-4">
                    <div className="h-2.5 bg-gray-400 rounded-full w-4/12 mb-4" />
                    <div className="h-2 bg-gray-400 rounded-full w-6/12 mb-4" />
                    <div className="h-2 bg-gray-400 rounded-full w-5/12 mb-4" />
                    <div className="h-2 bg-gray-400 rounded-full w-3/12 mb-4" />
                </div>
            </div>
        )

    return (
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-3">
            <div className="w-full flex lg:flex-wrap flex-wrap-reverse relative">
                <div className="w-full lg:w-5/12 p-4 self-start sticky top-20 lg:pt-10">
                    <h1 className="font-bold text-xl underline uppercase mb-6 text-center lg:text-left">
                        {projectDetail.title}
                    </h1>
                    <div
                        dangerouslySetInnerHTML={{
                            __html:
                                locale === 'th'
                                    ? projectDetail.desc1.th
                                    : projectDetail.desc1.en,
                        }}
                    />
                </div>
                <div className="w-full lg:w-7/12 p-4">
                    <ProjectGalleryComponents gallery={projectDetail.gallery} />
                </div>
            </div>
            <div className="w-full p-4 lg:py-6 px-4">
                <div
                    dangerouslySetInnerHTML={{
                        __html:
                            locale === 'th'
                                ? projectDetail.desc2.th
                                : projectDetail.desc2.en,
                    }}
                />
            </div>
        </div>
    )
}

export default ProjectDetailComponents
