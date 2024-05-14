import Button from '../Button/Button'
import './Form.css'

const Form = ({ sendFormText, children, onSend }) => {
    return (
        <form className='form'>
            {children}
            <Button text={sendFormText} onClick={onSend} />
        </form>
    )
}

export default Form