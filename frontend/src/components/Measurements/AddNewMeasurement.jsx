import { useState } from "react"
import Dialog from "../ui/Dialog/Dialog"
import Form from "../ui/Form/Form"
import Select from "../ui/Select/Select"
import Input from "../ui/Input/Input"
import DatePicker from "../ui/DatePicker/DatePicker"
import { formatTodayDate } from "../../utils/formatDates"

const CATEGORIES = [
    {
        id: 1,
        name: "Weight",
        units: [
            {
                name: "kg",
                multiplicator: 1
            },
            {
                name: 'lbs',
                multiplicator: 0.453
            },
            {
                name: 'st',
                multiplicator: 6.35
            }
        ]
    },
    {
        id: 2,
        name: "Height",
        units: [
            {
                name: "cm",
                multiplicator: 1
            },
            {
                name: 'ft',
                multiplicator: 30.48
            }
        ]
    },
    {
        id: 3,
        name: 'VO2 Max',
        units: [
            {
                name: "ml/kg/min",
                multiplicator: 1
            }
        ]
    }
]

const AddNewMeasurement = ({ id }) => {
    const [category, setCategory] = useState(null)
    const [unit, setUnit] = useState(null)
    const [value, setValue] = useState(null)
    const [date, setDate] = useState(formatTodayDate())
    const [time, setTime] = useState(new Date().toLocaleTimeString().slice(0, 5))

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


        document.querySelector(`#${id}`).close()

        console.log({
            category, value, unit, date, time
        })
    }

    return (
        <Dialog id={id} title="Add new measurement">
            <Form sendFormText="Add new measurement" onSend={sendForm}>
                <DatePicker label="Select date" onChange={(e) => setDate(e.target.value)} />
                <Select label="Measurement" defaultText="Please select category" values={CATEGORIES.map(category => category.name)} onChange={changeCategory} />
                <div className="form__flex-group">
                    <Input type="number" label="Value" onChange={(e) => setValue(e.target.value)} />
                    {
                        category && <Select label="Unit" defaultText="Please select unit" values={CATEGORIES.filter(item => item.name === category)[0].units.map(unit => unit.name)} onChange={(e) => setUnit(e.target.value)} />
                    }
                </div>
                {/* Set multiplicator */}
                <Input type="time" defaultValue={new Date().toLocaleTimeString().slice(0, 5)} onChange={(e) => setTime(e.target.value)} />
            </Form>
        </Dialog>
    )
}

export default AddNewMeasurement