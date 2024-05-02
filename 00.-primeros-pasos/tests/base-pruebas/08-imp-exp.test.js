import { describe, test, expect } from '@jest/globals';
import heroes from '../../src/data/heroes';
import {
	getHeroeById,
	getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp';

describe('Pruebas en 08-imp-exp', () => {
	test('Esto debe encontrar un heroe por Id', () => {
		const id = 1;
		const heroe = getHeroeById(id);

		expect(heroe).toEqual(heroes.find((hero) => hero.id === id));
	});

	test('Esto se debe mostrar cuando sea undefined', () => {
		const id = 100;
		const heroe = getHeroeById(id);

		expect(heroe).toBeFalsy();
	});

	test('Debe retornar un array de 3 posiciones con los heroes de DC ', () => {
		const owner = 'DC';
		const getOwner = getHeroesByOwner(owner);

		expect(getOwner).toEqual(heroes.filter((hero) => hero.owner === owner));
		expect(getOwner.length).toBe(3);
	});

	test('Debe retornar un array de 2 posiciones con los heroes de Marvel', () => {
		const owner = 'Marvel';
		const getOwner = getHeroesByOwner(owner);

		expect(getOwner).toEqual(heroes.filter((hero) => hero.owner === owner));
		expect(getOwner.length).toBe(2);
	});
});
