import { Routes, Route } from 'react-router-dom';
import Button from './components/ui/Button/Button';

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<>
						<h1>Homepage</h1>
						<Button
							text="Apasa"
							variant="primary"
						/>
					</>
				}
			/>
			<Route
				path="/about"
				element={<h1>About page</h1>}
			/>
			<Route
				path="*"
				element={<h1>Page not found</h1>}
			/>
		</Routes>
	);
}

export default App;
