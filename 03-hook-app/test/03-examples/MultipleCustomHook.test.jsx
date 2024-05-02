import { describe, test, expect, jest, beforeEach } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHook/>', () => {
	const mockIncrement = jest.fn();
	useCounter.mockReturnValue({
		counter: 1,
		handleIncremento: mockIncrement,
	});

	//Con esto limpiamos cada uno de las pruebas
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('Debe de mostrar el componente por defecto', () => {
		useFetch.mockReturnValue({
			data: null,
			isLoading: true,
		});

		render(<MultipleCustomHooks />);

		expect(screen.getByText('Cargando ...'));
		expect(screen.getByText('Advices'));

		const nextBtn = screen.getByRole('button', { name: 'Next Quote' });
		expect(nextBtn.disabled).toBeTruthy();
	});

	test('Debe de mostrar un Quote', () => {
		useFetch.mockReturnValue({
			data: [{ id: 2, advice: 'Hola mundo' }],
			isLoading: false,
		});

		render(<MultipleCustomHooks />);
	});

	test('Debe llamar la funcion de incrementar', () => {
		useFetch.mockReturnValue({
			data: [{ id: 2, advice: 'Hola mundo' }],
			isLoading: false,
		});

		render(<MultipleCustomHooks />);
		const nextBtn = screen.getByRole('button', { name: 'Next Quote' });
		fireEvent.click(nextBtn);
	});
});
