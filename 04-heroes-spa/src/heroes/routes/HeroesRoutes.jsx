import { Navigate, Route, Routes } from 'react-router-dom';
import { MarvelPage, DcPage, SearchPage, HeroPage } from '../pages';
import { NavBar } from '../../UI';

export const HeroesRoutes = () => {
	return (
		<>
			<NavBar />

			<Routes>
				<Route
					path='/marvel'
					element={<MarvelPage />}
				/>

				<Route
					path='/dc'
					element={<DcPage />}
				/>

				<Route
					path='/search'
					element={<SearchPage />}
				/>

				<Route
					path='/hero/:id'
					element={<HeroPage />}
				/>

				<Route
					path='/'
					element={<Navigate to='/marvel' />}
				/>
			</Routes>
		</>
	);
};
