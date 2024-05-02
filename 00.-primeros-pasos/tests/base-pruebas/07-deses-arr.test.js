import { describe, test, expect } from '@jest/globals';
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {
	test('debe retornar un string y un number', () => {
		const [letters, numbers] = retornaArreglo();
		expect(letters).toBe('ABC');
		expect(numbers).toBe(123);

		//PARA RECIBIR CUALQUIER TIPO DE STRING
		expect(letters).toEqual(expect.any(String));

		//PARA RECIBIR CUALQUIER TIPO DE NUMBER
		expect(numbers).toEqual(expect.any(Number));

	});
});
