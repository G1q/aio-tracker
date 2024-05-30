import './Water.css';
import AddWater from '../../components/Water/AddWater';
import { Link, Outlet } from 'react-router-dom';

const Water = () => {
	return (
		<section>
			<div className="action-btns">
				<AddWater />
				{/* TODO: Settings button */}
			</div>

			<nav className="water__navigation">
				<ul>
					<li>
						<Link to="/water">Today</Link>
					</li>
					<li>
						<Link to="/water/all">All</Link>
					</li>
					<li>
						<Link to="/water/stats">Stats</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</section>
	);
};

export default Water;
