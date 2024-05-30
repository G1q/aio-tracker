import { useState } from 'react';
import axios from 'axios';

import {
	TextField,
	Button,
	Box,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from '@mui/material';
import {
	LocalizationProvider,
	DatePicker,
	TimePicker,
} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { format, getHours, getMinutes } from 'date-fns';
import { enGB } from 'date-fns/locale';

const AddWater = () => {
	const [openDialog, setOpenDialog] = useState(false);
	const [formData, setFormData] = useState({
		date: new Date(),
		time: new Date(),
		quantity: '',
		unit: '',
	});

	const sendForm = async (e) => {
		e.preventDefault();

		await axios.post(`http://localhost:3005/api/v1/water`, {
			...formData,
			date: format(formData.date, 'dd-MM-yyyy'),
			time: `${getHours(formData.time)
				.toString()
				.padStart(2, 0)}:${getMinutes(formData.time)
				.toString()
				.padStart(2, 0)}`,
		}); // TODO: get user id

		// Reset fields

		// Close modal
		handleCloseDialog();
	};

	const handleCloseDialog = () => setOpenDialog(false);

	const handleChange = (e) => {
		const { value, name } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	return (
		<>
			<Button
				variant="contained"
				color="primary"
				sx={{ mt: 2 }}
				onClick={() => setOpenDialog(true)}
			>
				Add water
			</Button>
			<Dialog
				open={openDialog}
				onClose={handleCloseDialog}
			>
				<DialogTitle
					align="center"
					sx={{ fontSize: '2rem' }}
				>
					Add water
				</DialogTitle>
				<DialogContent>
					<Box
						sx={{
							p: 2,
							backgroundColor: 'white',
							color: '#131313',
						}}
					>
						<form onSubmit={sendForm}>
							<LocalizationProvider
								dateAdapter={AdapterDateFns}
								adapterLocale={enGB}
							>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'space-between',
										gap: 2,
									}}
								>
									<DatePicker
										label="Date"
										value={formData.date}
										onChange={(date) =>
											setFormData({
												...formData,
												date,
											})
										}
									/>
									<TimePicker
										label="Time"
										value={formData.time}
										ampm={false}
										onChange={(time) =>
											setFormData({
												...formData,
												time,
											})
										}
									/>
								</Box>
							</LocalizationProvider>
							<TextField
								label="Quantity (unit)"
								name="quantity"
								type="number"
								variant="outlined"
								fullWidth
								margin="normal"
								required
								value={formData.quantity}
								onChange={handleChange}
							/>
							<Button
								type="submit"
								variant="contained"
								color="primary"
								sx={{ mt: 2 }}
								fullWidth
							>
								Add water
							</Button>
						</form>
					</Box>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseDialog}>Cancel</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default AddWater;
