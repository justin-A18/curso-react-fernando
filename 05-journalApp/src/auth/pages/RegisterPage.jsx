/* eslint-disable no-extra-boolean-cast */
import {
	Alert,
	Button,
	Grid,
	Link,
	TextField,
	Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';

const formData = {
	name: '',
	email: '',
	password: '',
};

const formValidations = {
	name: {
		isValid: (value = '') => value.length >= 1,
		errorMessage: 'El nombre es obligatorio',
	},
	email: {
		isValid: (value = '') => value.includes('@'),
		errorMessage: 'El correo debe tener un arroba',
	},
	password: {
		isValid: (value = '') => value.length >= 6,
		errorMessage: 'la contraseña debe tener minimo 6 caracteres',
	},
};

export const RegisterPage = () => {
	const [formSubmitted, setFormSubmitted] = useState(false);

	const dispatch = useDispatch();
	const { status, errorMessage } = useSelector((state) => state.auth);
	const isCheckingAuthentication = useMemo(
		() => status === 'checking',
		[status]
	);

	const {
		name,
		email,
		password,
		nameValid,
		emailValid,
		isFormValid,
		passwordValid,
		onResetForm,
		onInputChange,
	} = useForm(formData, formValidations);
	const handleSubmit = (e) => {
		e.preventDefault();

		if (!isFormValid) {
			setFormSubmitted(true);
			return;
		}

		setFormSubmitted(false);

		dispatch(
			startCreatingUserWithEmailPassword({ displayName: name, email, password })
		);

		onResetForm();
	};

	return (
		<AuthLayout title='Crear Cuenta'>
			<form
				onSubmit={handleSubmit}
				className='animate__animated animate__fadeIn animate__faster'>
				<Grid container>
					<Grid
						item
						xs={12}
						sx={{ mt: 2 }}>
						<TextField
							fullWidth
							type='text'
							name='name'
							label='Nombre Completo'
							placeholder='Justin Huertas'
							value={name}
							onChange={onInputChange}
							error={!!nameValid && formSubmitted}
							helperText={!!nameValid && formSubmitted ? nameValid : null}
						/>
					</Grid>

					<Grid
						item
						xs={12}
						sx={{ mt: 2 }}>
						<TextField
							fullWidth
							type='email'
							name='email'
							label='Correo'
							placeholder='correo@gmail.com'
							value={email}
							onChange={onInputChange}
							error={!!emailValid && formSubmitted}
							helperText={!!emailValid && formSubmitted ? emailValid : null}
						/>
					</Grid>

					<Grid
						item
						xs={12}
						sx={{ mt: 2 }}>
						<TextField
							fullWidth
							type='password'
							name='password'
							label='Contraseña'
							placeholder='contraseña'
							value={password}
							onChange={onInputChange}
							error={!!passwordValid && formSubmitted}
							helperText={
								!!passwordValid && formSubmitted ? passwordValid : null
							}
						/>
					</Grid>

					<Grid
						container
						spacing={2}
						sx={{ mt: 1 }}>
						<Grid
							item
							xs={12}
							display={!!errorMessage ? '' : 'none'}>
							<Alert severity='error'>{errorMessage}</Alert>
						</Grid>

						<Grid
							item
							xs={12}>
							<Button
								type='submit'
								disabled={isCheckingAuthentication}
								variant='contained'
								fullWidth>
								Crear Cuenta
							</Button>
						</Grid>
					</Grid>

					<Grid
						container
						direction='row'
						justifyContent='end'
						sx={{ mt: 2 }}>
						<Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
						<Link
							component={RouterLink}
							color='inherit'
							to='/auth/login'>
							Ingresar
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};
