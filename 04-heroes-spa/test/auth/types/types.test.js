import { expect, test, describe } from '@jest/globals';
import { types } from '../../../src/auth';

describe('Pruebas en "Types"', () => {
	test('debe de regresar estos Types', () => {
		expect(types).toEqual({
			login: '[Auth] Login',
			logout: '[Auth] Logout',
		});
	});
});
