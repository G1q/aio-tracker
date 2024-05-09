import './Measurements.css'
import Button from '../../components/ui/Button/Button'
import { IoAddCircleOutline } from "react-icons/io5";
import Tabs from '../../components/ui/Tabs/Tabs';
import DefaultMeasurements from '../../components/Measurements/DefaultMeasurements';
import CustomMeasurements from '../../components/Measurements/CustomMeasurements';

const Measurements = () => {
    return (
        <section>
            <div className="action-btns">
                <Button text="Add new measurement" icon={<IoAddCircleOutline size={18} />} />
                <Button text="Create custom measurement" icon={<IoAddCircleOutline size={18} />} />
            </div>

            <Tabs tabs={[
                {
                    label: 'Measurements',
                    element: <DefaultMeasurements />
                },
                {
                    label: 'Custom measurements',
                    element: <CustomMeasurements />
                },
                { label: 'Charts', element: 'Charts element' }]} />
        </section>
    )
}

export default Measurements