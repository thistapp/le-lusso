import Image from 'next/image'
// import { ColorStepTextTheme, ColorStepTheme } from '@/Enum/enumColor'
import { ServiceStepType } from '@/models/services/servicestype'
import DisplayDetailStep from '../displayDetailStep'
import { ColorStepTextTheme, ColorStepTheme } from '@/Enum/enumColor'

interface Props {
    step: number
    stepPosition: boolean //true is left text false is rigth text
    data: ServiceStepType
}

const DisplayTemplateMobile: React.FC<Props> = ({ ...props }) => {
    return (
        <div className="w-full lg:hidden flex flex-col h-full -mt-2">
            <Image
                src={props.data.image}
                width={200}
                height={200}
                alt={props.data.title}
                className="w-full object-cover section-step-image"
            />
            <DisplayDetailStep
                title={props.data.title}
                desc={props.data.desc}
                bgColor={
                    props.stepPosition
                        ? ColorStepTheme.left
                        : ColorStepTheme.right
                }
                textColor={
                    props.stepPosition
                        ? ColorStepTextTheme.dark
                        : ColorStepTextTheme.light
                }
                className="relative rounded-t-lg -top-2"
            />
        </div>
    )
}
export default DisplayTemplateMobile
