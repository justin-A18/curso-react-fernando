import { describe, test, expect, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/components/09-useReducer/TodoApp';
import { useTodo } from '../../src/hooks/useTodo';

jest.mock('../../src/hooks/useTodo');
describe('Pruebas en TodoApp', () => {
	useTodo.mockReturnValue({
		todos: [
			{
				id: 1,
				description: 'task 1',
				done: false,
			},
			{
				id: 2,
				description: 'task 2',
				done: false,
			},
		],
		todosCount: 2,
		pendingTodosCount: 1,
		handleNewTodo: jest.fn(),
		handleDeleteTodo: jest.fn(),
		handleToggleTodo: jest.fn(),
	});

	test('debe de mostrar el componente correctamente', () => {
		render(<TodoApp />);
		expect(screen.getByText('task 1')).toBeTruthy();
		expect(screen.getByText('task 2')).toBeTruthy();
		expect(screen.getByRole('textbox')).toBeTruthy();

	});
});
