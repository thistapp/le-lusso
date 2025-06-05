'use client'

import ServicesSesstion from './servicesSesstionComponent'
import {
    servicesStepData,
    servicesData,
    // servicesProject,
} from '@/config/servicesData'
import ServicesStepComponent from './servicesStepComponent'
// import ServicesProjectComponent from './servicesProjectComponent'

const ServicesComponent = () => {
    return (
        <div className="mt-20 lg:mt-28">
            <div className="w-full flex flex-col items-center justify-center ">
                <ServicesSesstion data={servicesData} />
                <ServicesStepComponent data={servicesStepData} />
                {/* portfolio section waiting for comfirm */}
                {/* <div className="w-full mt-8">
                    <ServicesProjectComponent data={servicesProject} />
                </div> */}
            </div>
        </div>
    )
}

export default ServicesComponent
