import { RiDeleteBin6Line } from "react-icons/ri"
import Button from "../ui/Button/Button"
import Table from "../ui/Table/Table"
import axios from 'axios'
import { useEffect, useState } from "react"

const CustomMeasurements = () => {
    const [measurements, setMeasurements] = useState([])

    // TODO: add params for custom type
    useEffect(() => {
        const getMeasurements = async () => {
            try {
                const response = await axios.get('http://localhost:3005/api/v1/measurements')
                setMeasurements(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getMeasurements()
    }, [])


    const deleteMeasurement = async (id) => {
        console.log(`Delete item with id ${id}`)
    }

    return (
        <Table headers={['Date', 'Name', 'Value', 'Unit', 'Edit', 'Delete']}>
            {measurements.map(data => <tr key={data._id}>
                <td>{data.date}</td>
                <td>{data.category}</td>
                <td>{data.value}</td>
                <td>{data.unit}</td>
                <td>Edit</td>
                <td><Button variant="icon" icon={<RiDeleteBin6Line />} style={{ padding: 0, backgroundColor: 'transparent', color: 'crimson' }} onClick={() => deleteMeasurement(data._id)} /></td>
            </tr>)}
        </Table>
    )
}

export default CustomMeasurements