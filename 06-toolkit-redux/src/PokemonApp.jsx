import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './assets/App.css';
import { getPokemons } from './store/slices';

export const PokemonApp = () => {
	const { pokemons, isLoading, page } = useSelector((state) => state.pokemons);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPokemons());
	}, [dispatch]);

	return (
		<>
			<h1>Pokemon App</h1>
			<hr />

			{isLoading ? (
				<p>Loading</p>
			) : (
				<ul className='pokemons'>
					{pokemons.map((pokemon) => (
						<li
							className='pokemon'
							key={pokemon.name}>
							{pokemon.name}
						</li>
					))}
				</ul>
			)}

			<button
				disabled={isLoading}
				onClick={() => dispatch(getPokemons(page))}>
				Next
			</button>
		</>
	);
};
