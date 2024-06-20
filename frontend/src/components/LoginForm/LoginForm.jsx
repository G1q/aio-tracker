import { useState } from 'react';
import {
	TextField,
	Button,
	Container,
	Typography,
	Box,
	InputAdornment,
	IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';

const LoginForm = () => {
	const { isLoggedIn } = useAuth();
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const [errors, setErrors] = useState({
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

		try {
			const response = await axios.post(
				`http://localhost:3005/api/v1/users/login`,
				formData
			);
			localStorage.setItem('token', response.data.token);
			navigate(0);
		} catch (error) {
			console.log(error);
		}
	};

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<Container maxWidth="xs">
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
					Welcome back
				</Typography>
				<form onSubmit={handleSubmit}>
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
					<Button
						type="submit"
						variant="contained"
						color="primary"
						sx={{ mt: 2 }}
						fullWidth
					>
						Login
					</Button>
				</form>
				<p>
					Lost your password? You can{' '}
					<Link to="/recover-password">recover here</Link>
				</p>
				<p style={{ marginTop: '3rem', textAlign: 'center' }}>
					Not a member yet? <Link to="/signup">Register here</Link>
				</p>
			</Box>
		</Container>
	);
};

export default LoginForm;
