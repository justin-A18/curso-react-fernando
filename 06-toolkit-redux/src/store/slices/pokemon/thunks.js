import { pokemonApi } from '../../../api/pokemonApi';
import { loadingPokemons, setPokemons } from './pokemonSlice';

export const getPokemons = (page = 0) => {
	return async (dispatch, getState) => {
		dispatch(loadingPokemons());

		const { data } = await pokemonApi.get(`pokemon?limit=10&offset=${page}`);

		const action = {
			pokemons: data.results,
			page: page + 1,
		};

		dispatch(setPokemons(action));
	};
};
