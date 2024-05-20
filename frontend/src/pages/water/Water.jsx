import './Water.css';
import { IoAddCircleOutline } from 'react-icons/io5';
import Button from '../../components/ui/Button/Button';
import Tabs from '../../components/ui/Tabs/Tabs';
import TodayWater from '../../components/Water/TodayWater';
import AddWater from '../../components/Water/AddWater';
import AllDaysWater from '../../components/Water/AllDaysWater';

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
				</div>

				<Tabs
					tabs={[
						{
							label: 'Today',
							element: <TodayWater />,
						},
						{
							label: 'All days',
							element: <AllDaysWater />,
						},
						{ label: 'Stats', element: 'Stats element' },
					]}
				/>
			</section>

			<AddWater id="add-new-water" />
		</>
	);
};

export default Water;
