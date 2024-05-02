import { useEffect, useReducer } from 'react';
import { todoReducer } from '../components/09-useReducer/todoReducer';

export const useTodo = () => {
	const init = () => {
		const storedData = localStorage.getItem('todos');
		return storedData ? JSON.parse(storedData) : [];
	};

	const [todos, dispatch] = useReducer(todoReducer, [], init);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos) || []);
	}, [todos]);

	const handleNewTodo = (todo) => {
		const action = {
			type: '[TODO] add todo',
			payload: todo,
		};

		dispatch(action);
	};

	const handleDeleteTodo = (id) => {
		const action = {
			type: '[TODO] remove todo',
			payload: id,
		};

		dispatch(action);
	};

	const handleToggleTodo = (id) => {
		const action = {
			type: '[TODO] toggle todo',
			payload: id,
		};

		dispatch(action);
	};

	return {
		todos,
		handleNewTodo,
		handleDeleteTodo,
		handleToggleTodo,
		todosCount: todos.length,
		pendingTodosCount: todos.filter((todo) => !todo.done).length,
	};
};
