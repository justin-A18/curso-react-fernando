import { usContext } from '../../src/base-pruebas/06-deses-obj';
import { describe, test, expect } from '@jest/globals';

describe('Prueba en 06-desestruring', () => {
	test('usContenst debe devolver un obj', () => {
		const edad = 19;
		const rango = 'cabo';
		const nombre = 'justin';
		const clave = 'programadorX';

		const soldado = {
			clave,
			nombre,
			edad,
			rango,
		};

		const testSoldado = usContext(soldado);

		expect(soldado.clave).toBe(testSoldado.nombreClave);
		expect(soldado.edad).toBe(testSoldado.anios);
	});
});
