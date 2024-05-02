import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';
import { describe, test, expect } from '@jest/globals';

describe('Pruebas en el use counter', () => {
	test('Test debe de retornar los valores por defecto', () => {
		//Para Renderizar un Hook
		const { result } = renderHook(() => useCounter());

		const { counter, handleDecremento, handleIncremento, handleReset } =
			result.current;

		expect(counter).toBe(0);
		expect(handleDecremento).toEqual(expect.any(Function));
		expect(handleIncremento).toEqual(expect.any(Function));
		expect(handleReset).toEqual(expect.any(Function));
	});

	test('Test debe de retornar el counter con el valor de 100', () => {
		const { result } = renderHook(() => useCounter(100));

		const { counter } = result.current;

		expect(counter).toBe(100);
	});

	test('handleIncremento debe de incrementar el valor del counter', () => {
		const { result } = renderHook(() => useCounter());

		const { handleIncremento } = result.current;

		//Cuando se actualiza el estado debemos de usar el act
		act(() => {
			handleIncremento();
		});

		expect(result.current.counter).toBe(1);
	});

	test('handleDecremento debe de decrementar el valor del counter', () => {
		const { result } = renderHook(() => useCounter(101));

		const { handleDecremento } = result.current;

		act(() => {
			handleDecremento();
		});

		expect(result.current.counter).toBe(100);
	});

	test('handleReset debe restablecer el valor definido del counter', () => {
		const { result } = renderHook(() => useCounter(100));
		const { handleReset } = result.current;

		act(() => {
			handleReset();
		});

		expect(result.current.counter).toBe(100);
	});
});
