import './Measurements.css'
import Button from '../../components/ui/Button/Button'
import { IoAddCircleOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import Tabs from '../../components/ui/Tabs/Tabs';
import Table from '../../components/ui/Table/Table';

const MEASUREMENTS_DATA = [
    {
        id: '1',
        name: 'Weight',
        category: 'Body',
        date: '08-05-2024',
        value: '107.9',
        unit: 'kg',
        ideal: '80'
    },
    {
        id: '2',
        name: 'Height',
        category: 'Body',
        date: '06-05-2024',
        value: '171',
        unit: 'cm'
    },
    {
        id: '3',
        name: 'Waist circumference',
        category: 'Body',
        date: '08-05-2024',
        value: '105',
        unit: 'cm',
        ideal: '90'
    }
]

const Measurements = () => {
    const deleteMeasurement = async (id) => {
        console.log(`Delete item with id ${id}`)
    }

    return (
        <section>
            <div className="action-btns">
                <Button text="Add new measurement" icon={<IoAddCircleOutline size={18} />} />
                <Button text="Create custom measurement" icon={<IoAddCircleOutline size={18} />} />
            </div>

            <Tabs tabs={[
                {
                    label: 'Measurements',
                    element: <Table headers={['Date', 'Name', 'Category', 'Value', 'Unit', 'Ideal value', 'Edit', 'Delete']} search>
                        {MEASUREMENTS_DATA.map(data => <tr key={data.id}>
                            <td>{data.date}</td>
                            <td>{data.name}</td>
                            <td>{data?.category}</td>
                            <td>{data.value}</td>
                            <td>{data.unit}</td>
                            <td>{data?.ideal}</td>
                            <td>Edit</td>
                            <td><Button variant="icon" icon={<RiDeleteBin6Line />} style={{ padding: 0, backgroundColor: 'transparent', color: 'crimson' }} onClick={() => deleteMeasurement(data.id)} /></td>
                        </tr>)}
                    </Table>
                },
                {
                    label: 'Custom measurements',
                    element: <Table headers={['Date', 'Name', 'Value', 'Unit', 'Edit', 'Delete']} search>
                        {MEASUREMENTS_DATA.map(data => <tr key={data.id}>
                            <td>{data.date}</td>
                            <td>{data.name}</td>
                            <td>{data.value}</td>
                            <td>{data.unit}</td>
                            <td>Edit</td>
                            <td><Button variant="icon" icon={<RiDeleteBin6Line />} style={{ padding: 0, backgroundColor: 'transparent', color: 'crimson' }} onClick={() => deleteMeasurement(data.id)} /></td>
                        </tr>)}
                    </Table>
                },
                { label: 'Charts', element: 'Charts element' }]} />

            <p>Tips</p>
        </section>
    )
}

export default Measurements