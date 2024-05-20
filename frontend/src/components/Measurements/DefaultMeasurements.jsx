import Table from '../ui/Table/Table'
import Button from '../ui/Button/Button'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useEffect, useState } from 'react'
import axios from 'axios'

const MEASUREMENTS_DATA = [
    {
        id: '1',
        name: 'Weight',
        date: '08-05-2024',
        value: '107.9',
        unit: 'kg',
        ideal: '80'
    },
    {
        id: '2',
        name: 'Height',
        date: '06-05-2024',
        value: '171',
        unit: 'cm'
    },
    {
        id: '3',
        name: 'Waist circumference',
        date: '08-05-2024',
        value: '105',
        unit: 'cm',
        ideal: '90'
    }
]

const DefaultMeasurements = () => {
    const [measurements, setMeasurements] = useState([])

    // TODO: add params for default type
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
        <>
            <Table headers={['Date', 'Name', 'Value', 'Unit', 'Ideal value', 'Edit', 'Delete']} search >
                {measurements.map(data => <tr key={data._id}>
                    <td>{data.date}</td>
                    <td>{data.category}</td>
                    <td>{data.value}</td>
                    <td>{data.unit}</td>
                    <td>{data?.ideal}</td>
                    <td>Edit</td>
                    <td><Button variant="icon" icon={<RiDeleteBin6Line />} style={{ padding: 0, backgroundColor: 'transparent', color: 'crimson' }} onClick={() => deleteMeasurement(data.id)} /></td>
                </tr>)}
            </Table>

            <p>Tips</p>
        </>
    )
}

export default DefaultMeasurements