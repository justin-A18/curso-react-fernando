import { describe, test, expect } from '@jest/globals';
import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('Pruebas en el hook useForm', () => {
	test('Debe de regresar los valores por defecto', () => {
		const initialForm = {
			name: 'justin',
			email: 'justin.hv@gmail.com',
		};
		const { result } = renderHook(() => useForm(initialForm));

		expect(result.current).toEqual({
			name: initialForm.name,
			email: initialForm.email,
			onSubmit: expect.any(Function),
			onResetForm: expect.any(Function),
			onInputChange: expect.any(Function),
		});
	});

	test('onInputChange Debe de cambiar el nombre del formulario', () => {
		const initialForm = {
			name: '',
		};

		const target = {
			name: 'name',
			value: 'justin',
		};

		const { result } = renderHook(() => useForm(initialForm));

		const { onInputChange } = result.current;

		act(() => {
			onInputChange({ target });
		});

		expect(result.current.name).toBe('justin');
	});

	test('onResetForm Debe de cambiar el nombre del formulario', () => {
		const initialForm = {
			name: '',
		};

		const target = {
			name: 'name',
			value: 'justin',
		};

		const { result } = renderHook(() => useForm(initialForm));

		const { onResetForm, onInputChange } = result.current;

		act(() => {
			onInputChange({ target });
			onResetForm();
		});

		expect(result.current.name).toBe(initialForm.name);
	});
});
