import { useEffect } from "react";

interface Props {
    show: boolean;
    onAction?: () => void;
    children?: React.ReactNode
}

const Modal: React.FC<Props> = ({
    show,
    onAction,
    children
}) => {

    useEffect(() => {
    }, [])

    return (
        <div className={`modal-overlay ${show ? "show-modal" : "hide-modal"}`}>
            <div className="modal">
                <button className="close-button" onClick={onAction}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal
