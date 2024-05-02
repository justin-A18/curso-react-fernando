import { fireEvent, render,screen } from '@testing-library/react';
import { describe, test, expect } from '@jest/globals';
import { CounterApp } from '../src/components/Counter-app';

describe('Pruebas en Counter App', () => {
	const value = 100;

	test('Esto debe hacer un match con el snapshot', () => {
		const { container } = render(<CounterApp value={value} />);
		expect(container).toMatchSnapshot();
	});

	test('Debe mostrar el Valor inicial de 100', () => {
		render(<CounterApp value={value} />);
		//Screen representacion del componente que se esta reenderizando
		expect(screen.getByText(100)).toBeTruthy();
		//expect(screen.getByRole('heading',{level: 2}).innerHTML).toContain('100');
	});

	test('Debe de incrementar con el boton incremento', () => {
		//con FireEvent Le decimos que evento queremos disparar

		render(<CounterApp value={value} />);
		fireEvent.click(screen.getByText('incremento'));
		expect(screen.getByText('101')).toBeTruthy();
	});

	test('Debe de Decrementar con el boton decremento', () => {
		render(<CounterApp value={value} />);
		fireEvent.click(screen.getByText('decremento'));
		expect(screen.getByText('99')).toBeTruthy();
	});


	test('Debe de Resetear con el boton resetear', () => {
		render(<CounterApp value={value} />);
		fireEvent.click(screen.getByText('resetear'));
		expect(screen.getByText('100')).toBeTruthy();
	});
});
