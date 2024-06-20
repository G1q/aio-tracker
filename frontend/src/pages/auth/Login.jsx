import LoginForm from '../../components/LoginForm/LoginForm';
import { useAuth } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const Login = () => {
	const { isLoggedIn } = useAuth();

	return (
		<>
			return <>{!isLoggedIn() ? <LoginForm /> : <Navigate to="/" />}</>;
		</>
	);
};

export default Login;
