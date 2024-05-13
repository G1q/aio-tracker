import './Measurements.css'
import Button from '../../components/ui/Button/Button'
import { IoAddCircleOutline } from "react-icons/io5";
import Tabs from '../../components/ui/Tabs/Tabs';
import DefaultMeasurements from '../../components/Measurements/DefaultMeasurements';
import CustomMeasurements from '../../components/Measurements/CustomMeasurements';
import Dialog from '../../components/ui/Dialog/Dialog';
import AddNewMeasurement from '../../components/Measurements/AddNewMeasurement';

const Measurements = () => {

    return (
        <>
            <section>
                <div className="action-btns">
                    <Button text="Add new measurement" icon={<IoAddCircleOutline size={18} />} dialogId="add-new-dialog" />
                    <Button text="Create custom measurement" icon={<IoAddCircleOutline size={18} />} dialogId="dial2" />
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

            <AddNewMeasurement id="add-new-dialog" />
            <Dialog id="dial2" >Alt Test</Dialog>

        </>
    )
}

export default Measurements