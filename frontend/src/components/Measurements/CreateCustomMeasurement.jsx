import { useState } from "react"
import Dialog from "../ui/Dialog/Dialog"
import Form from "../ui/Form/Form"
import Input from "../ui/Input/Input"

const CreateCustomMeasurement = ({ id }) => {
    const [category, setCategory] = useState('')
    const [unit, setUnit] = useState([])

    const sendForm = async (e) => {
        e.preventDefault()
        if (!category) return console.error('Error: no measurement name provided!')
        if (!unit) return console.error('Error: no measurement unit provided!')

        //TODO: Reset values

        document.querySelector(`#${id}`).close()

        console.log({ id: Math.random(), name: category, units: [{ name: unit }] })
    }

    return (
        <Dialog id={id} title="Create custom measurement">
            <Form sendFormText="Create custom measurement" onSend={sendForm}>
                <Input type="text" label="Measurement name" onChange={(e) => setCategory(e.target.value)} />
                <Input type="text" label="Measurement unit" onChange={(e) => setUnit(e.target.value)} />
            </Form>
        </Dialog>
    )
}

export default CreateCustomMeasurement