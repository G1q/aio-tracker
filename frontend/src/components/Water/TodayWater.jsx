import Table from '../ui/Table/Table'
import Button from '../ui/Button/Button'
import { RiDeleteBin6Line } from 'react-icons/ri'
import TodayStats from './TodayStats'
import { useEffect, useState } from 'react'
import axios from 'axios'

const TodayWater = () => {
    const [waterEntries, setWaterEntries] = useState([])

    useEffect(() => {
        const getWaterEntries = async () => {
            try {
                const response = await axios.get(`http://localhost:3005/api/v1/water`)
                // if (!response.data) throw new Error('No data!')

                setWaterEntries(response.data)

            } catch (error) {
                console.log(error)
            }
        }

        getWaterEntries()
    }, [])

    const deleteWaterEntry = async (id) => {
        console.log(`Delete item with id ${id}`)
    }

    return (
        <>
            <TodayStats />

            {
                waterEntries.length !== 0 && <Table headers={['Time', 'Quantity', 'Edit', 'Delete']} >
                    {waterEntries.map(data => <tr key={data._id}>
                        <td>{data.time}</td>
                        <td>{`${data.quantity} ml`}</td>
                        <td>Edit</td>
                        <td><Button variant="icon" icon={<RiDeleteBin6Line />} style={{ padding: 0, backgroundColor: 'transparent', color: 'crimson' }} onClick={() => deleteWaterEntry(data._id)} /></td>
                    </tr>)}
                </Table>
            }

            <p>Tips</p>
        </>
    )
}

export default TodayWater