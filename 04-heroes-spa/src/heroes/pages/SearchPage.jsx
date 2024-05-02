import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import queryString from 'query-string';
import { getHeroByName } from '../helpers/getHeroByName';
import { HeroCard } from '../components/HeroCard';

export const SearchPage = () => {
	const navigate = useNavigate(); // obtener navegacion
	const location = useLocation(); // obtener la localizacion donde nos encontramos

	//Libreria para simplificar la extraccion de los querys: npm install query-string
	const { q = '' } = queryString.parse(location.search);
	const heroes = getHeroByName(q);

	const showSearch = q.length === 0;
	const showError = q.length > 0 && heroes.length === 0;

	const { searchText, onInputChange } = useForm({
		searchText: q,
	});

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (searchText.trim().length <= 1) return;

		navigate(`?q=${searchText}`);
	};

	return (
		<>
			<h1>Search</h1>
			<hr />

			<div className='row'>
				<div className='col-5'>
					<h4>Searching</h4>
					<hr />

					<form onSubmit={handleFormSubmit} aria-label='form-search'>
						<input
							type='text'
							placeholder='Search a hero'
							className='form-control'
							name='searchText'
							value={searchText}
							onChange={onInputChange}
							autoComplete='off'
						/>

						<button className='btn btn-outline-primary mt-1'>Search</button>
					</form>
				</div>

				<div className='col-7'>
					<h4>Results</h4>
					<hr />

					<div
						className='alert alert-primary'
						style={{ display: showSearch ? '' : 'none' }}
						aria-label='search-hero'>
						Search a hero
					</div>

					<div
						className='alert alert-danger'
						aria-label='alert-danger'
						style={{ display: showError ? '' : 'none' }}>
						No hero with <b>{q}</b>
					</div>

					{heroes.map((heroe) => (
						<HeroCard
							key={heroe.id}
							{...heroe}
						/>
					))}

					{/*<*/}
				</div>
			</div>
		</>
	);
};
