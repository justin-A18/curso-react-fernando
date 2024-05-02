import { expect, test, describe } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';

describe('Pruebas en <AppRouter/>', () => {
	test('Debe de mostrar el login si no esta autenticado', () => {
		const contextValue = {
			logged: false,
		};

		render(
			<MemoryRouter initialEntries={['/marvel']}>
				<AuthContext.Provider value={contextValue}>
					<AppRouter />
				</AuthContext.Provider>
			</MemoryRouter>
		);

		expect(screen.getAllByText('Login').length).toBe(2);
	});

	test('Debe de mostrar el componente Marvel si no esta autenticado', () => {
		const contextValue = {
			logged: true,
			user: {
				id: 2002,
				name: 'Justin',
			},
		};

		render(
			<MemoryRouter initialEntries={['/marvel']}>
				<AuthContext.Provider value={contextValue}>
					<AppRouter />
				</AuthContext.Provider>
			</MemoryRouter>
		);

		expect(screen.getByText('Marvel Comics')).toBeTruthy();
	});
});
