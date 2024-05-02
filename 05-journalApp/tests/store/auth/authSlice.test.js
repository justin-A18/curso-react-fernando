import { describe, test, expect } from '@jest/globals';

import {
	authenticatedState,
	demoUser,
	initialState,
	notAuthenticatedState,
} from '../../fixtures/authFixtures';

import {
	authSlice,
	chekingCredentials,
	login,
	logout,
} from '../../../src/store/auth/authSlice';

describe('pruebas en el authSlice', () => {
	test('Debe de llamar el estado inicial y llamarse "auth"', () => {
		const state = authSlice.reducer(initialState, {});

		expect(state.name).toBe('auth');
		expect(state).toEqual(initialState);
	});

	test('Debe de realizar la autenticación', () => {
		const state = authSlice.reducer(initialState, login(demoUser));

		expect(state).toEqual(authenticatedState);
	});

	test('Debe de realizar el logout sin argumentos', () => {
		const errorMessage = null;
		const state = authSlice.reducer(
			authenticatedState,
			logout({ errorMessage })
		);
		expect(state).toEqual(notAuthenticatedState);
	});

	test('Debe de realizar el logout con argumentos', () => {
		const errorMessage = 'credenciales no son correctas';

		const state = authSlice.reducer(
			authenticatedState,
			logout({ errorMessage })
		);
		expect(state).toEqual({
			status: 'not-authenticated',
			uuid: null,
			email: null,
			photoURL: null,
			displayName: null,
			errorMessage: errorMessage,
		});

		expect(state.errorMessage).toBe('credenciales no son correctas');
	});

	test('Debe de cambiar el estado a Checking', () => {
		const state = authSlice.reducer(authenticatedState, chekingCredentials());

		expect(state.status).toBe('checking')
	});
});
