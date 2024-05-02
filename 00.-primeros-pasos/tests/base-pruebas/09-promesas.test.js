import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';
import { describe, test, expect } from '@jest/globals';

describe('Pruebas en 09-promesas', () => {
	//DONE le dice a jest esperate hasta que este codigo termine y ahi ya lo tenemos
	test('getHeroesByIdAsync debe retornar un heroe', (done) => {
		const id = 1;

		getHeroeByIdAsync(id).then((hero) => {
			expect(hero).toEqual({
				id: 1,
				name: 'Batman',
				owner: 'DC',
			});

			done();
		});
		
	});

	test('getHeroesByIdAsync debe retornar un error cuando el heroe no se encuentre', (done) => {
		const id = 100;

		getHeroeByIdAsync(id).catch((error) => {
			expect(error).toBe(`No se pudo encontrar el héroe con el id ${id}`);
			done();
		});

	});
});
