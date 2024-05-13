import './Dialog.css'
import { IoClose } from "react-icons/io5";


const Dialog = ({ id, open, title, children }) => {
    const closeDialog = () => {
        const dialog = document.querySelector(`#${id}`)
        dialog.close()
    }

    return (
        <dialog id={id} open={open}>
            <button className="close-dialog" title="Close dialog" onClick={closeDialog}><IoClose /></button>
            <h2 className='dialog__title'>{title}</h2>
            {children}
        </dialog>
    )
}

export default Dialog