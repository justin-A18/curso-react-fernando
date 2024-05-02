import { getSaludo } from '../../src/base-pruebas/02-template-string';
import { describe, test, expect } from '@jest/globals';


describe('Pruebas en 02-template-string', () => {
	test('getSaludo debe retornar "Hola justin"', () => {
		const name = 'justin';
		const message = getSaludo(name);

		//Valida si son iguales
		expect(message).toBe(`Hola ${name}`)
	});
});
