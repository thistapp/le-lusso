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
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
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
    // console.log(projectDetail)
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
