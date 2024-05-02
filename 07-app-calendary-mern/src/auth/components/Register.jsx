import { useDispatch } from 'react-redux';
import { useAuthActions } from '../../hooks/useAuthActions';
import { useForm } from '../../hooks/useForm';
import { onLogout } from '../../store/auth/authSlice';

const formField = {
	name: '',
	email: '',
	password: '',
	password2: '',
};

export const Register = () => {
	const { name, email, password, password2, onInputChange } =
		useForm(formField);

	const { startRegister } = useAuthActions();
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (password !== password2) {
			dispatch(onLogout('Las contraseñas no coinciden'));
			return;
		}

		startRegister(name, email, password);
	};

	return (
		<div className='col-md-6 login-form-2'>
			<h3>Registro</h3>
			<form onSubmit={handleSubmit}>
				<div className='form-group mb-2'>
					<input
						type='text'
						className='form-control'
						placeholder='Nombre'
						name='name'
						value={name}
						onChange={onInputChange}
					/>
				</div>
				<div className='form-group mb-2'>
					<input
						type='email'
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
						type='password'
						className='form-control'
						placeholder='Repita la contraseña'
						name='password2'
						value={password2}
						onChange={onInputChange}
					/>
				</div>

				<div className='form-group mb-2'>
					<input
						type='submit'
						className='btnSubmit'
						value='Crear cuenta'
					/>
				</div>
			</form>
		</div>
	);
};
