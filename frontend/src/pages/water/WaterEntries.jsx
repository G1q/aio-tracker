// import Table from '../../components/ui/Table/Table';
// import Button from '../../components/ui/Button/Button';
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
							{waterEntries.map((data) => (
								<TableRow key={data._id}>
									<TableCell
										component="th"
										scope="row"
									>
										{data.date}
									</TableCell>
									<TableCell>{`${data.quantity} ml`}</TableCell>
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
