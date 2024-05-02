import { useEffect, useState } from 'react';
import { Message } from './Message';
import '../../App.css';

export const SimpleForm = () => {
	const [form, setForm] = useState({
		username: '',
		email: '',
	});

	const { username, email } = form;

	const onInputChange = ({ target }) => {
		const { name, value } = target;

		setForm((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	//PARA DISPARAR EFECTOS SECUNDARIOS
	useEffect(() => {
		//en el RETURN podemos Limpiar el listener o un observer para evitar que siga consuminedo memoria
	}, [form]);

	return (
		<>
			<h1>Simple Form</h1>
			<hr />

			<form>
				<input
					type='text'
					className='form-control mt-2'
					placeholder='Username'
					name='username'
					value={username}
					onChange={onInputChange}
				/>

				<input
					type='email'
					placeholder='example@gmail.com'
					className='form-control mt-2'
					name='email'
					value={email}
					onChange={onInputChange}
				/>
			</form>

			{
				username === "admin123" && <Message /> 
			}
		</>
	);
};
