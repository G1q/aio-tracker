import Table from '../ui/Table/Table';
import Button from '../ui/Button/Button';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import axios from 'axios';

const WaterEntries = () => {
	const [waterEntries, setWaterEntries] = useState([]);

	useEffect(() => {
		getWaterEntries();
	}, []);

	const getWaterEntries = async () => {
		try {
			const response = await axios.get(
				`http://localhost:3005/api/v1/water`
			);
			setWaterEntries(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const deleteWaterEntry = async (id) => {
		await axios.delete(`http://localhost:3005/api/v1/water/${id}`);
		getWaterEntries();
	};

	return (
		<>
			{waterEntries.length > 0 && (
				<Table headers={['Date', 'Quantity', 'Edit', 'Delete']}>
					{waterEntries.map((data) => (
						<tr key={data._id}>
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
									onClick={() => deleteWaterEntry(data._id)}
								/>
							</td>
						</tr>
					))}
				</Table>
			)}

			<p>Tips</p>
		</>
	);
};

export default WaterEntries;