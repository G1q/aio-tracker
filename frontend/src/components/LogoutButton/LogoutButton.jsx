import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '@mui/material';

const LogoutButton = () => {
	const { setAuthToken } = useAuth();
	const navigate = useNavigate();

	const handleClick = () => {
		localStorage.removeItem('token');
		setAuthToken(null);
		navigate('/login');
	};

	return (
		<Button
			type="button"
			variant="text"
			color="primary"
			size="small"
			onClick={handleClick}
		>
			Logout
		</Button>
	);
};

export default LogoutButton;
