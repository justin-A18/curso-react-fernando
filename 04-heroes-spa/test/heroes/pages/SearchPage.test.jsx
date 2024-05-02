import { describe, test, expect, jest, beforeEach } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';
import { MemoryRouter } from 'react-router-dom';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en <SearchPage/>', () => {
	beforeEach(() => jest.clearAllMocks());

	test('Debe de mostrarse correctamente con valores por defecto', () => {
		//CRAER EL SNAPSHOT
		const { container } = render(
			<MemoryRouter>
				<SearchPage />
			</MemoryRouter>
		);

		expect(container).toMatchSnapshot();
	});

	test('Debe de mostrar a Batman y el input con el valor del queryString', () => {
		//CRAER EL SNAPSHOT
		render(
			<MemoryRouter initialEntries={['/search?q=batman']}>
				<SearchPage />
			</MemoryRouter>
		);

		const input = screen.getByRole('textbox');
		expect(input.value).toBe('batman');

		const img = screen.getByRole('img');
		expect(img.src).toBe('http://localhost/heroes/dc-batman.jpg');

		const searchDiv = screen.getByLabelText('search-hero');
		expect(searchDiv.style.display).toBe('none');
	});

	test('Debe de mostrar un error si no se encuentra el hero', () => {
		render(
			<MemoryRouter initialEntries={['/search?q=superhero']}>
				<SearchPage />
			</MemoryRouter>
		);

		const alertDanger = screen.getByLabelText('alert-danger');
		expect(alertDanger.style.display).toBe('');
	});

	test('Debe llamar el navigate a la pantalla nueva', () => {
		render(
			<MemoryRouter initialEntries={[`/search`]}>
				<SearchPage />
			</MemoryRouter>
		);

		const inputSearch = screen.getByRole('textbox');
		fireEvent.change(inputSearch, {
			target: { name: 'searchText', value: 'superman' },
		});

		const formSearch = screen.getByLabelText('form-search');
		fireEvent.submit(formSearch);

		expect(mockedUseNavigate).toHaveBeenCalledWith('?q=superman');
	});
});
