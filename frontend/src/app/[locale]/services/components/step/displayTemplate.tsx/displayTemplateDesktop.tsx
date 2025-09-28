import Image from 'next/image'
import { ColorStepTextTheme, ColorStepTheme } from '@/Enum/enumColor'
import { ServiceStepType } from '@/models/services/servicestype'
import DisplayDetailStep from '../displayDetailStep'
import { useTranslations } from 'next-intl'

type TFunction = ReturnType<typeof useTranslations>

interface Props {
    step: number
    stepPosition: boolean //true is left text false is rigth text
    data: ServiceStepType
    t: TFunction
}

const DisplayTemplateDesktop: React.FC<Props> = ({ ...props }) => {
    return (
        <div className="w-full lg:flex hidden flex-row relative max-h-[30rem] h-full">
            <div className={`relative w-1/2 h-[30rem]`}>
                {props.stepPosition ? (
                    <DisplayDetailStep
                        title={props.t(props.data.title)}
                        desc={props.t(props.data.desc)}
                        bgColor={ColorStepTheme.left}
                        textColor={ColorStepTextTheme.dark}
                    />
                ) : (
                    <Image
                        src={props.data.image}
                        alt={props.t(props.data.title)}
                        fill
                        className="bg-cover object-cover object-center"
                    />
                )}
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 p-3 rounded-full border border-black bg-[#D9D9D9] z-40">
                <p className="text-center">{props.step}</p>
            </div>
            <div className={`relative w-1/2 h-[30rem]`}>
                {props.stepPosition ? (
                    <Image
                        src={props.data.image}
                        alt={props.t(props.data.title)}
                        fill
                        className="w-full bg-cover object-cover object-bottom"
                    />
                ) : (
                    <DisplayDetailStep
                        title={props.t(props.data.title)}
                        desc={props.t(props.data.desc)}
                        bgColor={ColorStepTheme.right}
                        textColor={ColorStepTextTheme.light}
                    />
                )}
            </div>
        </div>
    )
}
export default DisplayTemplateDesktop
