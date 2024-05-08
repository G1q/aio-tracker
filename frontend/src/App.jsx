import { Routes, Route } from 'react-router-dom';
import Measurements from './pages/measurements/Measurements';

function App() {
	return (
		<Routes>
			<Route
				path="/"
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
				path="*"
				element={<h1>Page not found</h1>}
			/>
		</Routes>
	);
}

export default App;
