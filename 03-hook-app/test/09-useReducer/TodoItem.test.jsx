import { describe, test, expect, beforeEach, jest } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/components/09-useReducer/components/TodoItem';

describe('Pruebas en <TodoItem/>', () => {
	const todo = {
		id: 2,
		description: 'Ver anime',
		done: false,
	};

	const onDeleteTodoMock = jest.fn();
	const onToggleTodoMock = jest.fn();

	beforeEach(() => jest.clearAllMocks());

	test('Debe de mostrar el todo pendiente de completar', () => {
		render(
			<TodoItem
				todo={todo}
				onToggleTodo={onToggleTodoMock}
				onDeleteTodo={onDeleteTodoMock}
			/>
		);

		const liElement = screen.getByRole('listitem');
		expect(liElement.className).not.toContain('done');
		expect(liElement.className).toContain(
			'list-group-item d-flex align-items-center justify-content-between'
		);

		const spanElement = screen.getByLabelText('span');
		expect(spanElement.className).toContain('fs-5');
		expect(spanElement.className).not.toContain('text-decoration-line-through');
	});

	test('Debe de mostrar el todo completado', () => {
		todo.done = true;

		render(
			<TodoItem
				todo={todo}
				onToggleTodo={onToggleTodoMock}
				onDeleteTodo={onDeleteTodoMock}
			/>
		);

		const liElement = screen.getByRole('listitem');
		expect(liElement.className).toContain('done');

		const spanElement = screen.getByLabelText('span');
		expect(spanElement.className).toContain('text-decoration-line-through');
	});

	test('Span debe llamar al onToggleTodo', () => {
		render(
			<TodoItem
				todo={todo}
				onToggleTodo={onToggleTodoMock}
				onDeleteTodo={onDeleteTodoMock}
			/>
		);

		const spanElement = screen.getByLabelText('span');
		fireEvent.click(spanElement);

		expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
	});

	test('Button debe llamar al onDeleteTodo', () => {
		render(
			<TodoItem
				todo={todo}
				onToggleTodo={onToggleTodoMock}
				onDeleteTodo={onDeleteTodoMock}
			/>
		);

		const deleteButton = screen.getByRole('button');
		fireEvent.click(deleteButton);

		expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
	});
});
