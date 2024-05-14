import './Measurements.css'
import Button from '../../components/ui/Button/Button'
import { IoAddCircleOutline } from "react-icons/io5";
import Tabs from '../../components/ui/Tabs/Tabs';
import DefaultMeasurements from '../../components/Measurements/DefaultMeasurements';
import CustomMeasurements from '../../components/Measurements/CustomMeasurements';
import AddNewMeasurement from '../../components/Measurements/AddNewMeasurement';
import CreateCustomMeasurement from '../../components/Measurements/CreateCustomMeasurement';

const Measurements = () => {

    return (
        <>
            <section>
                <div className="action-btns">
                    <Button text="Add new measurement" icon={<IoAddCircleOutline size={18} />} dialogId="add-new-measurement" />
                    <Button text="Create custom measurement" icon={<IoAddCircleOutline size={18} />} dialogId="create-custom-measurement" />
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

            <AddNewMeasurement id="add-new-measurement" />
            <CreateCustomMeasurement id="create-custom-measurement" />
        </>
    )
}

export default Measurements