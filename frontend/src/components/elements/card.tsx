import Image from 'next/image'
import ButtonComponent from './button'

interface Props {
    image: string
    title: string
    desc: string
    actionButton?: boolean
    actionFunction?: () => void
    customClassNameTitle?: string
    customClassNameDesc?: string
}

const CardComponent: React.FC<Props> = ({ ...props }) => {
    return (
        <div className="w-[350px] h-[500px] border-2 border-[#714E39] rounded-lg bg-[#CDC3B8] flex flex-col justify-between mx-auto">
            <div className="w-full ">
                {props.image && (
                    <Image
                        src={props.image}
                        alt={props.title || ''}
                        width={500}
                        height={500}
                        className="w-full h-[250px] object-cover rounded-t-lg"
                    />
                )}
                <div className="text-[#714E39] px-3 py-5">
                    <p
                        className={`${
                            props.customClassNameTitle
                                ? props.customClassNameTitle
                                : 'text-lg font-bold'
                        } tracking-wider truncate`}
                    >
                        {props.title}
                    </p>
                    <div
                        className={`${
                            props.customClassNameDesc
                                ? props.customClassNameDesc
                                : 'text-base'
                        } tracking-wider line-clamp-4 overflow-hidden text-ellipsis list-disc pl-4`}
                        dangerouslySetInnerHTML={{ __html: props.desc }}
                    />
                </div>
            </div>
            <div className="max-w-[10rem] mx-auto mb-4">
                <ButtonComponent
                    title="view more"
                    onPress={props.actionFunction}
                />
            </div>
        </div>
    )
}

export default CardComponent
