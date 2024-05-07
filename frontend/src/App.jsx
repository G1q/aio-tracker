import { Routes, Route } from 'react-router-dom';

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
