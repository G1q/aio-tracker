import { useState } from 'react';
import {
	TextField,
	Button,
	Container,
	Typography,
	Box,
	InputAdornment,
	IconButton,
	FormGroup,
	Checkbox,
	FormControlLabel,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = () => {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
	});

	const [terms, setTerms] = useState(false);

	const [errors, setErrors] = useState({
		username: false,
		email: false,
		password: false,
	});

	const [showPassword, setShowPassword] = useState(false);

	const navigate = useNavigate();

	const handleChange = (e) => {
		const { value, name } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});

		// Validate email
		if (name === 'email') {
			const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

			setErrors({
				...errors,
				email: !emailPattern.test(value) && 'Invalid email',
			});
		}

		// Validate password
		if (name === 'password') {
			setErrors({
				...errors,
				password:
					value.length < 8 &&
					'Password must have at least 8 characters',
			});
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (errors.email || errors.password) return;
		if (!terms) return;

		try {
			await axios.post(
				`http://localhost:3005/api/v1/users/register`,
				formData
			);
			navigate('/login');
		} catch (error) {
			console.log(error);
		}
	};

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<Container maxWidth="sm">
			<Box
				sx={{
					my: 4,
					p: 4,
					borderRadius: '10px',
					backgroundColor: 'white',
					color: '#131313',
					boxShadow: '0 0 0 2px rgba(0,0,0,.15)',
				}}
			>
				<Typography
					variant="h4"
					component="h1"
					gutterBottom
				>
					Create your FREE account
				</Typography>
				<form onSubmit={handleSubmit}>
					<TextField
						label="Username"
						name="username"
						type="text"
						variant="outlined"
						fullWidth
						margin="normal"
						required
						value={formData.username}
						onChange={handleChange}
						helperText={errors.username}
						FormHelperTextProps={{
							variant: 'standard',
							sx: {
								color: errors.username
									? 'error.main'
									: 'text.secondary',
							},
						}}
					/>
					<TextField
						label="Email"
						name="email"
						type="email"
						variant="outlined"
						fullWidth
						margin="normal"
						required
						value={formData.email}
						onChange={handleChange}
						helperText={errors.email}
						FormHelperTextProps={{
							variant: 'standard',
							sx: {
								color: errors.email
									? 'error.main'
									: 'text.secondary',
							},
						}}
					/>
					<TextField
						label="Password"
						name="password"
						type={showPassword ? 'text' : 'password'}
						variant="outlined"
						fullWidth
						required
						margin="normal"
						value={formData.password}
						onChange={handleChange}
						helperText={errors.password}
						FormHelperTextProps={{
							variant: 'standard',
							sx: {
								color: errors.password
									? 'error.main'
									: 'text.secondary',
							},
						}}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleShowPassword}
										edge="end"
									>
										{showPassword ? (
											<VisibilityOff />
										) : (
											<Visibility />
										)}
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
					<FormGroup>
						<FormControlLabel
							required
							control={
								<Checkbox onChange={() => setTerms(!terms)} />
							}
							label="I have read and accepted the terms and conditions"
						/>
					</FormGroup>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						sx={{ mt: 2 }}
						fullWidth
					>
						Create new account
					</Button>
				</form>
				<p style={{ marginTop: '3rem', textAlign: 'center' }}>
					Already registered? You can{' '}
					<Link to="/login">login here</Link>
				</p>
			</Box>
		</Container>
	);
};

export default RegisterForm;
