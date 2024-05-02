import { describe, test, expect, jest, beforeEach } from '@jest/globals';

import {
	checkinAuthentication,
	startCreatingUserWithEmailPassword,
	startGoogleSignIn,
	startLoginWithEmailPassword,
	startLogout,
} from '../../../src/store/auth/thunks';

import {
	chekingCredentials,
	login,
	logout,
} from '../../../src/store/auth/authSlice';

import { demoUser } from '../../fixtures/authFixtures';

import {
	loginWithEmailPassword,
	logoutFirebase,
	registerUserWithEmailPassword,
	singInWithGoogle,
} from '../../../src/firebase/providers';

import { clearNotesLogout } from '../../../src/store/journal/journalSlice';

jest.mock('../../../src/firebase/providers');

describe('Pruebas en AuthThunks', () => {
	const dispatch = jest.fn();

	beforeEach(() => jest.clearAllMocks());

	test('Debe invocar el checkinCredencials', async () => {
		await checkinAuthentication()(dispatch);

		expect(dispatch).toHaveBeenCalledWith(chekingCredentials());
	});

	test('StartGoogleSingIn debe de llamar checkingCredentials y login - Exito', async () => {
		const loginData = { ok: true, ...demoUser };

		//le decimos al mock que va se va resolver una promesa con esta data
		await singInWithGoogle.mockResolvedValue(loginData);

		//thunk
		await startGoogleSignIn()(dispatch);

		expect(dispatch).toHaveBeenCalledWith(chekingCredentials());
		expect(dispatch).toHaveBeenCalledWith(login(loginData));
	});

	test('StartGoogleSingIn debe de llamar checkingCredentials y logout - Error', async () => {
		const logoutData = {
			ok: false,
			errorMessage: 'hubo un error',
		};

		//le decimos al mock que va se va resolver una promesa con esta data
		await singInWithGoogle.mockResolvedValue(logoutData);

		//thunk
		await startGoogleSignIn()(dispatch);

		expect(dispatch).toHaveBeenCalledWith(chekingCredentials());
		expect(dispatch).toHaveBeenCalledWith(logout(logoutData.errorMessage));
	});

	test('startCreatingUserWithEmailPassword debe de llamar checkingCredentials y login - Exito', async () => {
		const loginData = {
			ok: true,
			...demoUser,
		};

		const formData = {
			email: demoUser.email,
			password: '123456',
			displayName: demoUser.displayName,
		};

		//le decimos al mock que va se va resolver una promesa con esta data
		await registerUserWithEmailPassword.mockResolvedValue(loginData);

		//thunk
		await startCreatingUserWithEmailPassword(formData)(dispatch);

		expect(dispatch).toHaveBeenCalledWith(chekingCredentials());
		expect(dispatch).toHaveBeenCalledWith(login(loginData));
	});

	test('startCreatingUserWithEmailPassword debe de llamar checkingCredentials y logout - Error', async () => {
		const logoutData = {
			ok: false,
			errorMessage: 'Ocurrio un error',
		};

		const formData = {
			email: demoUser.email,
			password: '123456',
			displayName: demoUser.displayName,
		};

		//le decimos al mock que va se va resolver una promesa con esta data
		await registerUserWithEmailPassword.mockResolvedValue(logoutData);

		//thunk
		await startCreatingUserWithEmailPassword(formData)(dispatch);

		expect(dispatch).toHaveBeenCalledWith(chekingCredentials());
		expect(dispatch).toHaveBeenCalledWith(
			logout({ errorMessage: logoutData.errorMessage })
		);
	});

	test('startLoginWithEmailPassword debe de llamar checkingCredentials y login - Exito', async () => {
		const loginData = {
			ok: true,
			...demoUser,
		};

		const formData = {
			email: loginData.email,
			password: '123456',
		};

		//le decimos al mock que va se va resolver una promesa con esta data
		await loginWithEmailPassword.mockResolvedValue(loginData);

		//thunk
		await startLoginWithEmailPassword(formData)(dispatch);

		expect(dispatch).toHaveBeenCalledWith(chekingCredentials());
		expect(dispatch).toHaveBeenCalledWith(login(loginData));
	});

	test('startLoginWithEmailPassword debe de llamar checkingCredentials y login - Error', async () => {
		const logoutData = {
			ok: false,
			errorMessage: 'Ocurrio un error',
		};

		const formData = {
			email: demoUser.email,
			password: '123456',
		};

		//le decimos al mock que va se va resolver una promesa con esta data
		await loginWithEmailPassword.mockResolvedValue(logoutData);

		//thunk
		await startLoginWithEmailPassword(formData)(dispatch);

		expect(dispatch).toHaveBeenCalledWith(chekingCredentials());
		expect(dispatch).toHaveBeenCalledWith(
			logout({ errorMessage: logoutData.errorMessage })
		);
	});

	test('startLogout debe de llamar clearNotes y logout', async () => {
		//le decimos al mock que va se va resolver una promesa con esta data
		await logoutFirebase;

		//thunk
		await startLogout()(dispatch);

		expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
		expect(dispatch).toHaveBeenCalledWith(logout({ errorMessage: null }));
	});
});
