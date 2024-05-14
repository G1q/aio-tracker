import './Select.css'

const Select = ({ values, defaultText, label, onChange }) => {
    const selectId = `input-${Math.floor(Math.random() * 10000 + 1)}`

    return (
        <div className="input__group">
            {
                label && <label htmlFor={selectId}>{label}</label>
            }
            <select id={selectId} onChange={onChange} defaultValue={""}>
                {
                    defaultText && <option value="" hidden>{defaultText}</option>
                }
                {
                    values.map(value => <option key={value} value={value}>{value}</option>)
                }
            </select>
        </div>
    )
}

export default Select