import { expect, test, describe, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { PrivateRouter } from '../../src/router/PrivateRouter';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <PrivateRouter/>', () => {
	test('Debe Mostrar el children si el usuario esta autenticado', () => {
		Storage.prototype.setItem = jest.fn();

		const contextValue = {
			logged: true,
			user: {
				id: 2020,
				name: 'Justin',
			},
		};

		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={['/search?q=batman']}>
					<PrivateRouter>
						<h1>Private Router</h1>
					</PrivateRouter>
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(screen.getByText('Private Router')).toBeTruthy();
		expect(localStorage.setItem).toHaveBeenCalledWith(
			'lastPath',
			'/search?q=batman'
		);
	});
});
