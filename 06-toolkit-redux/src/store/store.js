import { configureStore } from '@reduxjs/toolkit';
import { counterSlice, pokemonSlice } from './slices';
import { todosApi } from './api';

export const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		pokemons: pokemonSlice.reducer,
		//Propiedad Computada
		[todosApi.reducerPath]: todosApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(todosApi.middleware),
});
