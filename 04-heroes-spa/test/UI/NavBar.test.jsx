import { describe, test, expect, jest, beforeEach } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth';
import { NavBar } from '../../src/UI/components/NavBar';
import { MemoryRouter } from 'react-router-dom';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en el <NavBar/>', () => {
	const contextValue = {
		logged: true,
		user: {
			id: 2020,
			name: 'Justin',
		},
		logout: jest.fn(),
	};

	beforeEach(() => jest.clearAllMocks());

	test('NavBar de mostrar el usuario', () => {
		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter>
					<NavBar />
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(screen.getByText('Justin')).toBeTruthy();
	});

	test('Debe llamar el logout y navigate cuando se haga click al btn', () => {
		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter>
					<NavBar />
				</MemoryRouter>
			</AuthContext.Provider>
		);

		const logoutBtn = screen.getByLabelText('btn-logout');
		fireEvent.click(logoutBtn);

		expect(contextValue.logout).toHaveBeenCalled();
		expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
	});
});
