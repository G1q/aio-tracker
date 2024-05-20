import Table from '../ui/Table/Table';
import Button from '../ui/Button/Button';
import { RiDeleteBin6Line } from 'react-icons/ri';
import TodayStats from './TodayStats';

const WATER_DATA = [
	{
		id: '1',
		date: '17-05-2024',
		time: '8:30',
		quantity: '300',
	},
	{
		id: '2',
		date: '17-05-2024',
		time: '10:30',
		quantity: '400',
	},
	{
		id: '3',
		date: '17-05-2024',
		time: '12:15',
		quantity: '200',
	},
	{
		id: '4',
		date: '17-05-2024',
		time: '15:15',
		quantity: '300',
	},
];

const AllDaysWater = () => {
	const deleteWaterEntry = async (id) => {
		console.log(`Delete item with id ${id}`);
	};

	return (
		<>
			<TodayStats />

			<Table headers={['Date', 'Quantity', 'Edit', 'Delete']}>
				{WATER_DATA.map((data) => (
					<tr key={data.id}>
						<td>{data.date}</td>
						<td>{`${data.quantity} ml`}</td>
						<td>Edit</td>
						<td>
							<Button
								variant="icon"
								icon={<RiDeleteBin6Line />}
								style={{
									padding: 0,
									backgroundColor: 'transparent',
									color: 'crimson',
								}}
								onClick={() => deleteWaterEntry(data.id)}
							/>
						</td>
					</tr>
				))}
			</Table>

			<p>Tips</p>
		</>
	);
};

export default AllDaysWater;
