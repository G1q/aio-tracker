import { useState } from "react"
import Dialog from "../ui/Dialog/Dialog"
import Form from "../ui/Form/Form"
import Input from "../ui/Input/Input"
import DatePicker from "../ui/DatePicker/DatePicker"
import { formatTodayDate, formatNowTime } from "../../utils/formatDates"
import axios from "axios"


const AddWater = ({ id }) => {
    const [quantity, setQuantity] = useState(null)
    const [date, setDate] = useState(formatTodayDate())
    const [time, setTime] = useState(new Date().toLocaleTimeString().slice(0, 5))

    const sendForm = async (e) => {
        e.preventDefault()
        if (!quantity) return console.error('Error: Quantity is not added!')

        //TODO: Reset values

        await axios.post(`http://localhost:3005/api/v1/water`, { quantity, date, time })  // TODO: get user id

        document.querySelector(`#${id}`).close()
    }

    return (
        <Dialog id={id} title="Add water">
            <Form sendFormText="Add water" onSend={sendForm}>
                <DatePicker label="Select date" onChange={(e) => setDate(e.target.value)} />
                <Input type="number" label="Quantity (ml)" onChange={(e) => setQuantity(e.target.value)} />
                <Input label="Select time" type="time" defaultValue={formatNowTime().slice(0, 5)} onChange={(e) => setTime(e.target.value)} />
            </Form>
        </Dialog>
    )
}

export default AddWater