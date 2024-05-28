import './Logo.css'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div className="logo">
            <Link to='/'>AIO Tracker</Link>
        </div>
    )
}

export default Logo