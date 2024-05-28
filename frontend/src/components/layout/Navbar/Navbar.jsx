import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='primary__navigation'>
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Register</Link>
                </li>
                <li>
                    <NavLink to="/measurements">Measurements</NavLink>
                </li>
                <li>
                    <NavLink to="/water">Water</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar