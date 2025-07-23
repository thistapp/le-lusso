const TitleComponents = ({
    title,
    className,
    bgActive,
}: {
    title: string
    className?: string
    bgActive?: boolean
}) => {
    return (
        <div
            className={`${
                bgActive && 'title-section-part-construction'
            } h-[10rem] w-full flex p-4 mx-auto ${className}`}
        >
            <div className="max-w-7xl w-full m-auto">
                <h1 className="uppercase font-bold text-3xl text-center lg:text-left ">
                    {title}
                </h1>
            </div>
        </div>
    )
}

export default TitleComponents
