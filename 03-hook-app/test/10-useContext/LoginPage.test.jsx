import { describe, test, expect, jest, beforeEach } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/components/10-useContext/context/UserContext';
import { LoginPage } from '../../src/components/10-useContext/components/LoginPage';

describe('Pruebas en <LoginPage />', () => {
	const loginUserMock = jest.fn();

	beforeEach(() => jest.clearAllMocks());

	test('Debe de mostrar el componente sin el usuario', () => {
		render(
			<UserContext.Provider value={{ user: null }}>
				<LoginPage />
			</UserContext.Provider>
		);

		const codeTag = screen.getByLabelText('code');
		expect(codeTag.innerHTML).toBe('null');
	});

	test('Debe de llamar al setUser cuando se da click en el btn', () => {
		render(
			<UserContext.Provider value={{ user: null, loginUser: loginUserMock }}>
				<LoginPage />
			</UserContext.Provider>
		);

		const setUserButton = screen.getByRole('button');
		fireEvent.click(setUserButton);

		expect(loginUserMock).toHaveBeenCalledWith({
			id: 123,
			name: 'Justin Vargas',
			email: 'justin.hv@gmail.com',
		});
	});
});
