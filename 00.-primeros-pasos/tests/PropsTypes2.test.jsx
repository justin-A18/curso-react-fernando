import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/components/PropsTypes';
import { describe, test, expect } from '@jest/globals';


describe('Pruebas en PropsTypes', () => {
	const title = 'Hola, soy justin';
	const subTitle = 'Tengo 19 años y estoy aprendiendo testing'

	test('debe hace un match con el snapshot', () => {
		const { container } = render(<FirstApp title={title} />);
		expect(container).toMatchSnapshot();
	});

	//Screen es el objeto que nostros renderizamos
	test('Debe mostrar el mensaje Hola, soy justin', () => {
		render(<FirstApp title={title} />);
		expect(screen.getByText(title)).toBeTruthy();
		//screen.debug() devuelve el objeto del componente
	});

	test('Debe mostrar el titulo en un h1', () => {
		render(<FirstApp title={title} />);
		expect(screen.getByRole('heading',{ level: 1 }).innerHTML).toContain(title);
	});

	test('Debemos ver el subtitulo enviado con props',() => {
		render(<FirstApp title={title} subtitle={subTitle}/>);
		expect(screen.getAllByText(subTitle).length).toBe(1);

	});
});
