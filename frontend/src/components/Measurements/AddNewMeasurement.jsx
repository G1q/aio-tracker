import { useEffect, useState } from "react"
import Dialog from "../ui/Dialog/Dialog"
import Form from "../ui/Form/Form"
import Select from "../ui/Select/Select"
import Input from "../ui/Input/Input"
import DatePicker from "../ui/DatePicker/DatePicker"
import { formatNowTime, formatTodayDate } from "../../utils/formatDates"
import axios from "axios"

const AddNewMeasurement = ({ id }) => {
    const [category, setCategory] = useState(null)
    const [unit, setUnit] = useState(null)
    const [value, setValue] = useState(null)
    const [date, setDate] = useState(formatTodayDate())
    const [time, setTime] = useState(new Date().toLocaleTimeString().slice(0, 5))

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await axios.get('http://localhost:3005/api/v1/measurementCategories')
                setCategories(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        getCategories()
    }, [])

    const changeCategory = (e) => {
        setCategory(e.target.value)
        setUnit(null)
    }

    const sendForm = async (e) => {
        e.preventDefault()
        if (!category) return console.error('Error: No category selected')
        if (!value) return console.error('Error: Value is not added!')
        if (!unit) return console.error('Error: No unit selected!')

        //TODO: Reset values

        const measurementType = categories.filter(item => item.name === category)[0].type
        await axios.post(`http://localhost:3005/api/v1/measurements`, { value, unit, category, date, time, type: measurementType })

        document.querySelector(`#${id}`).close()
    }

    return (
        <Dialog id={id} title="Add new measurement">
            <Form sendFormText="Add new measurement" onSend={sendForm}>
                {
                    category && <p >{categories.filter(item => item.name === category)[0].description}</p>
                }
                <DatePicker label="Select date" onChange={(e) => setDate(e.target.value)} />
                <Select label="Measurement" defaultText="Please select category" values={categories.map(category => category.name)} onChange={changeCategory} />
                <div className="form__flex-group">
                    <Input type="number" label="Value" onChange={(e) => setValue(e.target.value)} />
                    {
                        category && <Select label="Unit" defaultText="Please select unit" values={categories.filter(item => item.name === category)[0].units.map(unit => unit.name)} onChange={(e) => setUnit(e.target.value)} />
                    }
                </div>
                {/* Set multiplier */}
                <Input type="time" defaultValue={formatNowTime().slice(0, 5)} onChange={(e) => setTime(e.target.value)} />
            </Form>
        </Dialog>
    )
}

export default AddNewMeasurement