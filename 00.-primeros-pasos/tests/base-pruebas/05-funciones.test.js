import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';
import { describe, test, expect } from '@jest/globals';


describe('Prueba en 05-funciones', () => {
	test('getUser debe de retornar un obj', () => {
		const testUser = {
			uid: 'ABC123',
			username: 'El_Papi1502',
		};

		const user = getUser();
		expect(testUser).toEqual(user);
	});

	test('getUsuarioActivo debe de retornar un obj', () => {
		const name = 'justin';

		const user = getUsuarioActivo(name);

		const testUser = {
			uid: 'ABC567',
			username: name,
		}

		expect(user).toEqual(testUser);
	});
});
