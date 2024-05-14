import './Input.css'

const Input = ({ type = 'text', label, defaultValue, onChange }) => {
    const inputId = `input-${Math.floor(Math.random() * 10000 + 1)}`

    return (
        <div className="input__group">
            {label && (<label htmlFor={inputId}>{label}</label>)}
            <input id={inputId} type={type} onChange={onChange} defaultValue={defaultValue} />
        </div>
    )
}

export default Input