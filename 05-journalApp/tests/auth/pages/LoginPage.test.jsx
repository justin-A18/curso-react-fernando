import { test, describe, expect, jest, beforeEach } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { LoginPage } from '../../../src/auth/pages/LoginPage';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '../../../src/store/auth';
import { MemoryRouter } from 'react-router-dom';
import { notAuthenticatedState } from '../../fixtures/authFixtures';

const mockStartGoogleSignIn = jest.fn();
const mockStartLoginWithEmailPassword = jest.fn();

jest.mock('../../../src/store/auth/thunks', () => ({
	startGoogleSignIn: () => mockStartGoogleSignIn,
	startLoginWithEmailPassword: ({ email, password }) => {
		return () => mockStartLoginWithEmailPassword(email, password);
	},
}));

jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useDispatch: () => (fn) => fn(),
}));

const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
	},
	//para que el estado inicial sea el estado que estoy esperando.
	preloadedState: {
		auth: notAuthenticatedState,
	},
});

describe('Pruebas en <LoginPage/>', () => {
	beforeEach(() => jest.clearAllMocks());

	test('Debe de mostrar el componente correctamente', () => {
		render(
			<Provider store={store}>
				<MemoryRouter>
					<LoginPage />
				</MemoryRouter>
			</Provider>
		);

		//El length sea mayor o igual a 1
		expect(screen.getByLabelText('login-btn')).toBeTruthy();
	});

	test('Boton de google debe llamar startGoogleSignIn', () => {
		render(
			<Provider store={store}>
				<MemoryRouter>
					<LoginPage />
				</MemoryRouter>
			</Provider>
		);

		const googleBtn = screen.getByLabelText('google-btn');
		fireEvent.click(googleBtn);

		expect(mockStartGoogleSignIn).toHaveBeenCalled();
	});

	test('Submit debe llamar startLoginWithEmailPassword con valores especificos', () => {
		const email = 'example@gmail.com';
		const password = '123456';

		render(
			<Provider store={store}>
				<MemoryRouter>
					<LoginPage />
				</MemoryRouter>
			</Provider>
		);

		const emailField = screen.getByTestId('email');
		fireEvent.change(emailField, {
			target: { name: 'email' },
			value: email,
		});

		const passwordField = screen.getByTestId('password');
		fireEvent.change(passwordField, {
			target: { name: 'password' },
			value: password,
		});

		const loginForm = screen.getByLabelText('submit-form');
		fireEvent.submit(loginForm);

		expect(mockStartLoginWithEmailPassword).toHaveBeenCalledWith({
			email,
			password,
		});
	});
});
