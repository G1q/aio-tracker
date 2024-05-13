import Button from "../ui/Button/Button"
import Dialog from "../ui/Dialog/Dialog"

const AddNewMeasurement = ({ id }) => {
    return (
        <Dialog id={id} title="Add new measurement">
            {/* Form */}
            <Button text="Add measurement" />
        </Dialog>
    )
}

export default AddNewMeasurement