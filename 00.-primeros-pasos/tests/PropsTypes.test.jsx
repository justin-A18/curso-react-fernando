import { render } from '@testing-library/react';
import { FirstApp } from '../src/components/PropsTypes';
import { describe, test, expect } from '@jest/globals';

describe('Pruebas en PropsTypes', () => {
	/*
		test('debe de hacer match con el snapshot', () => {
		const title = 'Hola mi nombre es Justin';
		const { container } = render(<FirstApp title={title} />);
	
		expect(container).toMatchSnapshot();
	});
	*/

	test('Debe mostrar el titulo en el h1', () => {
		const title = 'Hola mi nombre es Justin';
		const { getByTestId } = render(<FirstApp title={title} />);
		expect(getByTestId('test-title').innerHTML).toContain(title);
	});

	test('debe de mandar el subtitulo enviado por props', () => {
		const subTitle = 'Soy un subtitle';
		const title = 'Hola mi nombre es Justin';
		const { getByText } = render(
			<FirstApp
				title={title}
				subtitle={subTitle}
			/>
		);

		expect(getByText(subTitle)).toBeTruthy();
	});
});
