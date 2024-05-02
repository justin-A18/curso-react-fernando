import PropTypes from 'prop-types';

export const TodoItem = ({ todo = {}, onDeleteTodo, onToggleTodo }) => {
	const isDone = todo.done ? 'done' : '';
	const isDoneTodo = todo.done ? 'text-decoration-line-through' : '';

	return (
		<li
			key={todo.id}
			data-id={todo.id}
			className={`list-group-item d-flex align-items-center justify-content-between ${isDone}`}>
			<span
				className={`fs-5 ${isDoneTodo}`}
				onClick={() => onToggleTodo(todo.id)}
				aria-label='span'>
				{todo.description}
			</span>

			<button
				className='btn btn-danger'
				onClick={() => onDeleteTodo(todo.id)}>
				Borrar
			</button>
		</li>
	);
};

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	onDeleteTodo: PropTypes.func.isRequired,
	onToggleTodo: PropTypes.func.isRequired,
};
