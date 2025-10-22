'use client'

import { projectType } from '@/models/portfolio'
import { FC } from 'react'
import ProjectGalleryComponents from './projectGalleryComponents'

interface Props {
    data: projectType
}

const ProjectDetailMobileMode: FC<Props> = ({ data }) => {
    return (
        <div className="max-w-7xl mx-auto w-full flex lg:hidden flex-col gap-3">
            <ProjectGalleryComponents gallery={data.gallery} />
            <div className="w-full px-8 pb-8">
                <div className="w-full">
                    <h1 className="font-bold text-lg text-center underline mb-6">
                        {data.title}
                    </h1>
                    {/* <p className="text-justify">{data.desc1}</p> */}
                </div>
                <div className="w-full mb-6">
                    <h2 className="font-bold text-lg text-center underline mb-6">
                        {data.titleDesc}
                    </h2>
                    {/* <p className="text-justify">{data.desc2}</p> */}
                </div>
            </div>
        </div>
    )
}

export default ProjectDetailMobileMode
