import { formatTodayDate } from '../../../utils/formatDates'
import './DatePicker.css'

const DatePicker = ({ onChange, label }) => {
    const dateId = `date-${Math.floor(Math.random() * 10000 + 1)}`

    return (
        <div className="input__group">
            {
                label && <label htmlFor={dateId}>{label}</label>
            }
            <input id={dateId} onChange={onChange} type="date" defaultValue={formatTodayDate()} />
        </div>
    )
}

export default DatePicker