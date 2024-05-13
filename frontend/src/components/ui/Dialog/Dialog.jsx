import './Dialog.css'
import { IoClose } from "react-icons/io5";


const Dialog = ({ id, title, children }) => {
    const closeDialog = () => {
        const dialog = document.querySelector(`#${id}`)
        dialog.close()
    }

    return (
        <dialog id={id}>
            <button className="dialog__close-btn" title="Close dialog" onClick={closeDialog}><IoClose /></button>
            <h2 className='dialog__title'>{title}</h2>
            {children}
        </dialog>
    )
}

export default Dialog