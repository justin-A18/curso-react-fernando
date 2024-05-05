import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Login, Register } from '../components';
import './LoginPage.css';
import { useEffect } from 'react';
import { useAuthActions } from '../../hooks/useAuthActions';

export const LoginPage = () => {
	const { errorMessage } = useAuthActions();

	useEffect(() => {
		if (errorMessage) {
			const err = Object.values(errorMessage);

			if (err.length > 0 && typeof errorMessage !== 'string') {
				for (const iterador of err) {
					toast.error(iterador.msg, {
						theme: 'colored',
					});
				}

				return;
			}

			toast.error(errorMessage, {
				theme: 'colored',
			});
		}
	}, [errorMessage]);

	return (
		<>
			<ToastContainer />
			<div className='container login-container'>
				<div className='row'>
					<Login />
					<Register />
				</div>
			</div>
		</>
	);
};
