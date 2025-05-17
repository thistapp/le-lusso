interface Props {
    title: string
    onPress?: () => void
}

const ButtonComponent: React.FC<Props> = ({ ...props }) => {
    return (
        <div
            className="px-4 py-2 border-2 border-black bg-[#222E52] text-white rounded-lg uppercase cursor-pointer "
            onClick={props.onPress}
        >
            <p className="text-center tracking-wider">{props.title}</p>
        </div>
    )
}

export default ButtonComponent
