import { useEffect, useState } from 'react';
import axios from 'axios';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';

const WaterEntries = () => {
	const { getUserId } = useAuth();
	const [waterEntries, setWaterEntries] = useState([]);

	useEffect(() => {
		getWaterEntries();
		console.log(waterEntries);
	}, []);

	const userId = getUserId();

	const getWaterEntries = async () => {
		try {
			const response = await axios.get(
				`http://localhost:3005/api/v1/diary/water/grouped/${userId}`
			);
			setWaterEntries(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			{waterEntries.length > 0 ? (
				<TableContainer
					sx={{
						maxWidth: '500px',
						marginInline: 'auto',
						marginTop: '3rem',
					}}
				>
					<Table
						aria-label="all water entries"
						size="small"
						stickyHeader={true}
						className="water__table"
					>
						<TableHead>
							<TableRow>
								<TableCell>Date</TableCell>
								<TableCell>Quantity</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{waterEntries.map((entry) => (
								<TableRow key={entry.date}>
									<TableCell
										component="th"
										scope="row"
									>
										{entry.date}
									</TableCell>
									<TableCell>{`${entry.totalQuantity} ml`}</TableCell>
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

export default WaterEntries;
