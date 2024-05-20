import { useState } from "react"
import Dialog from "../ui/Dialog/Dialog"
import Form from "../ui/Form/Form"
import Input from "../ui/Input/Input"
import DatePicker from "../ui/DatePicker/DatePicker"
import { formatTodayDate } from "../../utils/formatDates"


const AddWater = ({ id }) => {
    const [value, setValue] = useState(null)
    const [date, setDate] = useState(formatTodayDate())
    const [time, setTime] = useState(new Date().toLocaleTimeString().slice(0, 5))

    const sendForm = async (e) => {
        e.preventDefault()
        if (!value) return console.error('Error: Value is not added!')

        //TODO: Reset values

        document.querySelector(`#${id}`).close()

        console.log({value, date, time})
    }

    return (
        <Dialog id={id} title="Add water">
            <Form sendFormText="Add water" onSend={sendForm}>
                <DatePicker label="Select date" onChange={(e) => setDate(e.target.value)} />
                <Input type="number" label="Value (ml)" onChange={(e) => setValue(e.target.value)} />
                <Input label="Select time" type="time" defaultValue={new Date().toLocaleTimeString().slice(0, 5)} onChange={(e) => setTime(e.target.value)} />
            </Form>
        </Dialog>
    )
}

export default AddWater