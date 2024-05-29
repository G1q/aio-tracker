import './Water.css';
import { IoAddCircleOutline } from 'react-icons/io5';
import Button from '../../components/ui/Button/Button';
import AddWater from '../../components/Water/AddWater';
import { Link, Outlet } from 'react-router-dom';

const Water = () => {
	return (
		<>
			<section>
				<div className="action-btns">
					<Button
						text="Add water"
						icon={<IoAddCircleOutline size={18} />}
						dialogId="add-new-water"
					/>
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

			<AddWater id="add-new-water" />
		</>
	);
};

export default Water;
