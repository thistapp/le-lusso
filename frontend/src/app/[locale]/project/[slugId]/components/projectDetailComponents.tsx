'use client'

import { useParams } from 'next/navigation'
import ProjectDetailDesktopMode from './projectDetailDesktopMode'
import { projectType } from '@/models/portfolio'
import { useEffect, useState } from 'react'
import projectData from '@/config/projectDetail'
import ProjectDetailMobileMode from './projectDetailMobileMode'

const ProjectDetailComponents = () => {
    const params = useParams()
    const slugId = params.slugId
    const [projectDetail, setProjectDetail] = useState<projectType>()

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
    console.log(projectDetail)
    return (
        <div className="">
            <ProjectDetailDesktopMode data={projectDetail} />
            <ProjectDetailMobileMode data={projectDetail} />
        </div>
    )
}

export default ProjectDetailComponents
