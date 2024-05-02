import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { MainApp } from '../../src/components/10-useContext/MainApp';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <MainApp/>', () => {
	test('Debe de mostrar el HomePage', () => {
		render(
			//Similar el browserRouter
			<MemoryRouter>
				<MainApp />
			</MemoryRouter>
		);

		expect(screen.getByText('HomePage')).toBeTruthy();
	});

	test('Debe de mostrar el LoginPage', () => {
		render(
			//Debemos pasarle una prop initial que simule el cambio de ruta
			<MemoryRouter initialEntries={['/login']}>
				<MainApp />
			</MemoryRouter>
		);

		expect(screen.getByText('LoginPage')).toBeTruthy();
	});
});
