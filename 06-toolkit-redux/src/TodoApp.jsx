import { useState } from 'react';
import './assets/App.css';
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/api';

export const TodoApp = () => {
	const [todoId, setTodoId] = useState(1);

	//const { isLoading, data: todos = [] } = useGetTodosQuery();
	const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);

	const nextTodo = () => {
		setTodoId((prev) => prev + 1);
	};

	const prevTodo = () => {
		if (todoId === 1) return;
		setTodoId((prev) => prev - 1);
	};

	return (
		<>
			<h1>Todo - RTK Query</h1>
			<hr />
			{isLoading ? <p>isLoading...</p> : ''}
			<pre>{JSON.stringify(todo)}</pre>
			<button onClick={prevTodo}>Prev todo</button>
			<button onClick={nextTodo}>Next todo</button>

			{/*
				<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<p>
							<strong>{todo.completed ? 'done' : 'pending'}</strong>{' '}
							{todo.title}
						</p>
					</li>
				))}
				</ul>
			*/}
		</>
	);
};
