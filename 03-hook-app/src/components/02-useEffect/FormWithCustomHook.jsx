import { useForm } from '../../hooks/useForm';
import '../../App.css';

export const FormWithCustomHook = () => {
	const { onInputChange, onResetForm, onSubmit, username, password, email } =
		useForm({
			username: '',
			email: '',
			password: '',
		});

	return (
		<>
			<h1>Simple Form with Custom Hook</h1>
			<hr />

			<form onSubmit={onSubmit}>
				<input
					type='text'
					className='form-control mt-2'
					placeholder='admin123'
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

				<input
					type='password'
					placeholder='*****'
					className='form-control mt-2'
					name='password'
					value={password}
					onChange={onInputChange}
				/>

				<button
					onClick={onResetForm}
					className='mt-2'>
					Reset
				</button>
			</form>
		</>
	);
};
