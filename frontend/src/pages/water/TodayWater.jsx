import './Water.css';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Button,
} from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';

const TodayWater = () => {
	const { getUserId } = useAuth();
	const [waterEntries, setWaterEntries] = useState([]);

	useEffect(() => {
		getWaterEntries();
	}, []);

	const userId = getUserId();

	const getWaterEntries = async () => {
		try {
			const response = await axios.get(
				`http://localhost:3005/api/v1/diary/water/${userId}`
			);
			setWaterEntries(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const deleteWaterEntry = async (id) => {
		const confirm = window.confirm(
			'Are you sure you want to delete this entry?'
		);

		if (!confirm) return;

		const newWaterEntries = waterEntries.filter(
			(entry) => entry._id !== id
		);

		try {
			await axios.put(
				`http://localhost:3005/api/v1/diary/water/delete/${userId}`,
				{ water: newWaterEntries }
			);
			getWaterEntries();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			{waterEntries.length > 0 ? (
				<TableContainer
					sx={{
						maxWidth: '800px',
						marginInline: 'auto',
						marginTop: '3rem',
					}}
				>
					<Table
						aria-label="today water entries"
						size="small"
						stickyHeader={true}
						className="water__table"
					>
						<TableHead>
							<TableRow>
								<TableCell>Time</TableCell>
								<TableCell>Quantity</TableCell>
								<TableCell>Delete</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{waterEntries.map((data) => (
								<TableRow key={data._id}>
									<TableCell
										component="th"
										scope="row"
									>
										{data.time}
									</TableCell>
									<TableCell>{`${data.quantity} ml`}</TableCell>
									<TableCell>
										<Button
											type="button"
											variant="text"
											sx={{
												color: 'crimson',
												minWidth: 'min-content',
											}}
											onClick={() =>
												deleteWaterEntry(data._id)
											}
										>
											<RiDeleteBin6Line />
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			) : (
				<p style={{ textAlign: 'center' }}>No data entries</p>
			)}
		</>
	);
};

export default TodayWater;
