'use client'

import { FC } from 'react'
import { projectType } from '@/models/portfolio'
import ProjectGalleryComponents from './projectGalleryComponents'

interface Props {
    data: projectType
}

const ProjectDetailDesktopMode: FC<Props> = ({ data }) => {
    return (
        <div className="max-w-7xl mx-auto w-full hidden lg:flex flex-col gap-3">
            <div className="w-full flex flex-wrap relative">
                <div className="w-5/12 p-4 self-start sticky top-20 pt-10">
                    <h1 className="font-bold text-xl underline uppercase mb-6">
                        {data.title}
                    </h1>
                    <p className="text-justify">{data.desc1}</p>
                </div>
                <div className="w-7/12 p-4">
                    <ProjectGalleryComponents gallery={data.gallery} />
                </div>
            </div>
            <div className="w-full py-6 px-4">
                <h2 className="font-bold text-xl underline uppercase mb-6">
                    {data.titleDesc}
                </h2>
                <p className="text-justify">{data.desc2}</p>
            </div>
        </div>
    )
}

export default ProjectDetailDesktopMode
