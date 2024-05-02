import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from './components/LoginPage';
import { AboutPage } from './components/AboutPage';
import { HomePage } from './components/HomePage';
import { NavBar } from './components/NavBar';
import { UserProvider } from './context/UserProvider';

export const MainApp = () => {
	return (
		<UserProvider>
			<h1>MainApp</h1>
			<hr />

			<NavBar />

			<Routes>
				<Route
					path='/'
					element={<HomePage />}
				/>

				<Route
					path='/login'
					element={<LoginPage />}
				/>

				<Route
					path='/about'
					element={<AboutPage />}
				/>

				{/*Para redirigir si no existe la ruta*/}

				<Route
					path='/*'
					element={<Navigate to='/about' />}
				/>
			</Routes>
		</UserProvider>
	);
};
