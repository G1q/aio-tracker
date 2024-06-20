import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { useAuth } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const Register = () => {
	const { isLoggedIn } = useAuth();

	return <>{!isLoggedIn() ? <RegisterForm /> : <Navigate to="/" />}</>;
};

export default Register;
