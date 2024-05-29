import { Routes, Route } from 'react-router-dom';
import Measurements from './pages/measurements/Measurements';
import Water from './pages/water/Water';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import RecoverPassword from './pages/auth/RecoverPassword';
import SimpleHeaderLayout from './layouts/SimpleHeaderLayout';
import MainLayout from './layouts/MainLayout';
import TodayWater from './components/Water/TodayWater';
import WaterEntries from './components/Water/WaterEntries';

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={<MainLayout />}
			>
				<Route
					index
					element={
						<>
							<h1>Homepage</h1>
						</>
					}
				/>
				<Route
					path="/measurements"
					element={<Measurements />}
				/>
				<Route
					path="/water"
					element={<Water />}
				>
					<Route
						index
						element={<TodayWater />}
					/>
					<Route
						path="/water/all"
						element={<WaterEntries />}
					/>
					<Route
						path="/water/stats"
						element={<h1>Stats</h1>}
					/>
				</Route>
			</Route>

			{/* Simple header pages */}
			<Route
				path="/"
				element={<SimpleHeaderLayout />}
			>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/signup"
					element={<Register />}
				/>
				<Route
					path="/recover-password"
					element={<RecoverPassword />}
				/>
			</Route>

			<Route
				path="*"
				element={<h1>Page not found</h1>}
			/>
		</Routes>
	);
}

export default App;
