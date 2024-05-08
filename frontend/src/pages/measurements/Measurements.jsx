import './Measurements.css'
import Button from '../../components/ui/Button/Button'
import { IoAddCircleOutline } from "react-icons/io5";
import Tabs from '../../components/ui/Tabs/Tabs';

const Measurements = () => {
    return (
        <section>
            <div className="action-btns">
                <Button text="Add new measurement" icon={<IoAddCircleOutline size={18} />} />
                <Button text="Create custom measurement" icon={<IoAddCircleOutline size={18} />} />
            </div>

            <Tabs tabs={[{ label: 'Measurements', element: 'Measurement table' }, { label: 'Custom measurements', element: 'Custom table' }, { label: 'Charts', element: 'Charts element' }]} />

            <p>Tips</p>
        </section>
    )
}

export default Measurements