import { describe, test, expect } from '@jest/globals';
import { todoReducer } from '../../src/components/09-useReducer/todoReducer';

describe('Pruebas en el todo reducer', () => {
	const initialState = [
		{
			id: 1,
			description: 'Demo Todo',
			done: false,
		},
	];

	
	test('debe de regresar el estado inicial', () => {
		const newState = todoReducer(initialState, {});
		expect(newState).toEqual(initialState);
	});

	test('debe de agregar un todo', () => {
		const action = {
			type: '[TODO] add todo',
			payload: {
				id: 2,
				description: 'nuevo todo',
				done: false,
			},
		};

		const newState = todoReducer(initialState, action);
		expect(newState.length).toBe(2);
		expect(newState).toContain(action.payload);
	});

	test('debe de eliminar un TODO', () => {
		const action = {
			type: '[TODO] remove todo',
			payload: 1,
		};

		const newState = todoReducer(initialState, action);
		expect(newState.length).toBe(0);
	});

	test('debe realizar el togle del todo', () => {
		const action = {
			type: '[TODO] toggle todo',
			payload: 1,
		};

		const newState = todoReducer(initialState, action);
		expect(newState[0].done).toBeTruthy();
	});
});
