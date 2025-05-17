'use client'

import ServicesSesstion from './servicesSesstionComponent'
import {
    servicesStepData,
    servicesData,
    servicesProject,
} from '@/config/servicesData'
import ServicesStepComponent from './servicesStepComponent'
import ServicesProjectComponent from './servicesProjectComponent'

const ServicesComponent = () => {
    return (
        <div className="mt-28">
            <div className="w-full flex flex-col items-center justify-center ">
                <h1 className="text-5xl font-bold text-center uppercase underline">
                    services
                </h1>
                <ServicesSesstion data={servicesData} />
                <div className="w-full flex flex-col">
                    <h1 className="text-5xl font-bold text-center uppercase underline my-12">
                        process
                    </h1>
                    {servicesStepData.map((o, i: number) => (
                        <ServicesStepComponent
                            key={i}
                            step={i + 1}
                            stepPosition={(i + 1) % 2 === 0}
                            data={o}
                        />
                    ))}
                </div>
                {/* portfolio section waiting for comfirm */}
                <div className="w-full mt-8">
                    <ServicesProjectComponent data={servicesProject} />
                </div>
            </div>
        </div>
    )
}

export default ServicesComponent
