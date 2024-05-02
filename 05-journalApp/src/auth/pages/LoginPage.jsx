/* eslint-disable no-extra-boolean-cast */
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import { Google } from '@mui/icons-material';
import {
	Alert,
	Button,
	Grid,
	Link,
	TextField,
	Typography,
} from '@mui/material';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import {
	startGoogleSignIn,
	startLoginWithEmailPassword,
} from '../../store/auth';
import { useMemo } from 'react';

const formData = {
	email: '',
	password: '',
};

export const LoginPage = () => {
	const { email, password, onInputChange } = useForm(formData);
	const { status, errorMessage } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const isAuthenticated = useMemo(() => status === 'checking', [status]);

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(startLoginWithEmailPassword({ email, password }));
	};

	const onGoogleSignIn = () => {
		dispatch(startGoogleSignIn());
	};

	return (
		<AuthLayout title='Login'>
			<form
				aria-label='submit-form'
				onSubmit={handleSubmit}
				className='animate__animated animate__fadeIn animate__faster'>
				<Grid container>
					<Grid
						item
						xs={12}
						sx={{ mt: 2 }}>
						<TextField
							label='correo'
							type='email'
							name='email'
							placeholder='correo@gmail.com'
							inputProps={{
								'data-testid': 'email'
							}}
							fullWidth
							onChange={onInputChange}
						/>
					</Grid>

					<Grid
						item
						xs={12}
						sx={{ mt: 2 }}>
						<TextField
							label='contraseña'
							type='password'
							inputProps={{
								'data-testid': 'password'
							}}
							name='password'
							placeholder='password'
							fullWidth
							onChange={onInputChange}
						/>
					</Grid>

					<Grid
						container
						display={!!errorMessage ? '' : 'none'}
						sx={{ mt: 1 }}>
						<Grid
							item
							xs={12}>
							<Alert severity='error'>{errorMessage}</Alert>
						</Grid>
					</Grid>

					<Grid
						container
						spacing={2}
						alignItems='center'
						sx={{ mt: 1 }}>
						<Grid
							item
							xs={12}
							md={6}>
							<Button
								disabled={isAuthenticated}
								type='submit'
								variant='contained'
								aria-label='login-btn'
								fullWidth>
								Login
							</Button>
						</Grid>

						<Grid
							item
							xs={12}
							md={6}>
							<Button
								disabled={isAuthenticated}
								variant='contained'
								fullWidth
								aria-label='google-btn'
								onClick={onGoogleSignIn}>
								<Google />
								<Typography sx={{ ml: 1 }}>Google</Typography>
							</Button>
						</Grid>
					</Grid>

					<Grid
						container
						justifyContent='end'
						direction='row'
						sx={{ mt: 2 }}>
						<Link
							component={RouterLink}
							color='inherit'
							to='/auth/register'>
							Crea una cuenta
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};
