import PropTypes from 'prop-types';
import { useState } from 'react';

export const TodoAdd = ({ onNewTodo }) => {
	const [inputValue, setInputValue] = useState('');

	const handleChangeInput = ({ target }) => {
		const { value } = target;
		setInputValue(value);
	};

	const handleSubmitForm = (e) => {
		e.preventDefault();

		if (inputValue === '') return;

		const newTodo = {
			id: new Date().getTime(),
			description: inputValue,
			done: false,
		};

		onNewTodo(newTodo);
		setInputValue('');
	};

	return (
		<form
			className='gap-2 flex-column d-flex'
			onSubmit={handleSubmitForm}>
			<input
				type='text'
				placeholder='¿Que haremos hoy?'
				className='form-control'
				value={inputValue}
				onChange={handleChangeInput}
			/>

			<button
				type='submit'
				className='btn btn-primary'>
				agregar
			</button>
		</form>
	);
};

TodoAdd.propTypes = {
	onNewTodo: PropTypes.func.isRequired,
};
