import { useAuth } from '../../../contexts/AuthContext';
import LogoutButton from '../../LogoutButton/LogoutButton';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
	const { isLoggedIn, getUserName } = useAuth();

	return (
		<nav className="primary__navigation">
			<ul>
				{isLoggedIn() && (
					<>
						<li>
							<NavLink to="/measurements">Measurements</NavLink>
						</li>
						<li>
							<NavLink to="/water">Water</NavLink>
						</li>
						<p>Hi, {getUserName()}</p>
						<LogoutButton />
					</>
				)}

				{!isLoggedIn() && (
					<>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/signup">Register</Link>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
