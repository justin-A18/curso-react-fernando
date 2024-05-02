import { useAuthActions } from '../../hooks/useAuthActions';
import { useForm } from '../../hooks/useForm';

const formField = {
	email: '',
	password: '',
};

export const Login = () => {
	const { email, password, onInputChange } = useForm(formField);

	const { startLogin } = useAuthActions();

	const handleSubmit = (e) => {
		e.preventDefault();

		startLogin(email, password);
	};

	return (
		<div className='col-md-6 login-form-1'>
			<h3>Ingreso</h3>
			<form onSubmit={handleSubmit}>
				<div className='form-group mb-2'>
					<input
						type='text'
						className='form-control'
						placeholder='Correo'
						name='email'
						value={email}
						onChange={onInputChange}
					/>
				</div>
				<div className='form-group mb-2'>
					<input
						type='password'
						className='form-control'
						placeholder='Contraseña'
						name='password'
						value={password}
						onChange={onInputChange}
					/>
				</div>
				<div className='form-group mb-2'>
					<input
						type='submit'
						className='btnSubmit'
						value='Login'
					/>
				</div>
			</form>
		</div>
	);
};
