'use client'

import {
    servicesStepData,
    servicesData,
    // servicesProject,
} from '@/config/servicesData'
import ServicesStepComponent from './servicesStepComponent'
import ServicesSession from './servicesSessionComponent'
// import ServicesProjectComponent from './servicesProjectComponent'

const ServicesComponent = () => {
    return (
        <div className="">
            <div className="w-full flex flex-col items-center justify-center ">
                <ServicesSession data={servicesData} />
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
