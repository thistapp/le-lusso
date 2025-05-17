interface Props {
    title: string
    desc: string
    bgColor: string
    textColor: string
}

const DisplayDetailStep: React.FC<Props> = ({
    title,
    desc,
    bgColor,
    textColor,
}) => {
    return (
        <div
            className={`w-full py-6 px-10 content-center bg-[${bgColor}] max-h-[30rem] h-[30rem] text-[${textColor}]`}
        >
            <div className="">
                <p className="text-lg font-bold">{title}</p>
                <p className="text-base whitespace-pre-line">{desc}</p>
            </div>
        </div>
    )
}

export default DisplayDetailStep
