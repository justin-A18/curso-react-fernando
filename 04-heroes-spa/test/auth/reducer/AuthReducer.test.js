import { describe, test, expect } from '@jest/globals';

import { AuthReducer } from '../../../src/auth/reducer/AuthReducer';
import { types } from '../../../src/auth/types/types';

describe('Pruebas en Auth Reducer', () => {
	const initialState = {
		logged: false,
		user: null,
	};

	test('Debe de retornar el estado por defecto', () => {
		const newState = AuthReducer(initialState, {});
		expect(initialState).toEqual(newState);
	});

	test('Login debe autenticar y establer el user', () => {
		const action = {
			type: types.login,
			payload: {
				id: 2020,
				name: 'Justin',
			},
		};

		const newState = AuthReducer(initialState, action);
		expect(newState).toEqual({
			...initialState,
			logged: true,
			user: action.payload,
		});
	});

	test('Logout Borra debe borrar el nombre del usuario y desautenticar', () => {
		const action = {
			type: types.logout,
		};

		const newState = AuthReducer(initialState, action);
		expect(newState.logged).toBeFalsy();
	});
});
