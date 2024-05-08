import './Tabs.css'
import Button from '../Button/Button'

const Tab = ({ label, active, onClick }) => {
    return (
        <Button text={label} variant={active ? '' : 'ghost'} onClick={onClick} />
    )
}

export default Tab