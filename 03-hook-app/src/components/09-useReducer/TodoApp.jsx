import { TodoList, TodoAdd } from './components/index';
import { useTodo } from '../../hooks/useTodo';

export const TodoApp = () => {
	const {
		todos,
		todosCount,
		pendingTodosCount,
		handleNewTodo,
		handleDeleteTodo,
		handleToggleTodo,
	} = useTodo();

	return (
		<>
			<h1>Todo App</h1>

			<p className='fs-4'>
				tareas: {todosCount}
				<span className='d-block'>Pendientes: {pendingTodosCount}</span>
			</p>

			<hr />

			<div className='row'>
				<div className='col-7'>
					<TodoList
						todos={todos}
						onDeleteTodo={handleDeleteTodo}
						onToggleTodo={handleToggleTodo}
					/>
				</div>

				<div className='col-5 gap-2 flex-column d-flex'>
					<h4>Agregar Todo</h4>
					<TodoAdd onNewTodo={handleNewTodo} />
				</div>
			</div>
		</>
	);
};
