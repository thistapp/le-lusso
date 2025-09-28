/* eslint-disable react-hooks/exhaustive-deps */
import { ServiceStepType } from '@/models/services/servicestype'
import DisplayTemplateDesktop from './step/displayTemplate.tsx/displayTemplateDesktop'
import DisplayTemplateMobile from './step/displayTemplate.tsx/displayTemplateMobile'
import { useTranslations } from 'next-intl'

interface Props {
    // step: number
    // stepPosition: boolean //true is left text false is rigth text
    data: ServiceStepType[]
}
const ServicesStepComponent: React.FC<Props> = ({ data }) => {
    const t = useTranslations('services')

    return (
        <div className="w-full flex flex-col">
            <h1 className="text-2xl lg:text-5xl font-bold text-center uppercase underline mt-12 mb-4">
                {t('title')}
            </h1>
            {data.map((items, index) => {
                return (
                    <div key={index}>
                        <DisplayTemplateDesktop
                            step={index + 1}
                            stepPosition={(index + 1) % 2 === 0}
                            data={items}
                            t={t}
                        />
                        <DisplayTemplateMobile
                            step={index + 1}
                            stepPosition={(index + 1) % 2 === 0}
                            data={items}
                            t={t}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default ServicesStepComponent
