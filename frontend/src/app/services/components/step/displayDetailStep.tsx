interface Props {
    title: string
    desc: string
    bgColor: string
    textColor: string
    className?: string
}

const DisplayDetailStep: React.FC<Props> = ({
    title,
    desc,
    bgColor,
    textColor,
    className,
}) => {
    return (
        <div
            className={`w-full py-6 px-10 content-center bg-[${bgColor}] lg:max-h-[30rem] lg:h-[30rem] text-[${textColor}] ${className}`}
        >
            <p className="text-lg font-bold">{title}</p>
            <p className="text-base whitespace-pre-line">{desc}</p>
        </div>
    )
}

export default DisplayDetailStep
