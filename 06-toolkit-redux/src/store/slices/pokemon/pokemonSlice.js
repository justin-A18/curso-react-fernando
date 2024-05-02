import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
	name: 'pokemon',
	initialState: {
		page: 0,
		pokemons: [],
		isLoading: false,
	},
	reducers: {
		
		setPokemons: (state, action) => {
			state.isLoading = false;
			state.page = action.payload.page;
			state.pokemons = action.payload.pokemons;
		},
	},
});

export const { loadingPokemons, setPokemons } = pokemonSlice.actions;
