import { useDispatch, useSelector } from 'react-redux';
import { onChecking, onLogin, onLogout } from '../store/auth/authSlice';
import calendarApi from '../api/calendarApi';
import { onLogoutCalendar } from '../store/calendar/calendarSlice';

export const useAuthActions = () => {
	const { status, user, errorMessage } = useSelector((state) => state.auth);

	const dispath = useDispatch();

	const startLogin = async (email, password) => {
		try {
			dispath(onChecking());

			const { data } = await calendarApi.post('/auth', {
				email,
				password,
			});

			localStorage.setItem('__token__', data.token);
			localStorage.setItem('__token-init-date__', new Date().getTime());
			dispath(onLogin({ name: data.name, uid: data.uid }));
		} catch (error) {
			dispath(
				onLogout(error.response.data?.errors || error.response.data?.message)
			);
		}
	};

	const startRegister = async (name, email, password) => {
		try {
			dispath(onChecking());

			await calendarApi.post('/auth/new', {
				name,
				email,
				password,
			});
		} catch (error) {
			console.log();
			dispath(
				onLogout(error.response.data?.errors || error.response.data?.message)
			);
		}
	};

	const checkoutToken = async () => {
		const token = localStorage.getItem('__token__');
		if (!token) dispath(onLogout(null));

		try {
			const { data } = await calendarApi.get('/auth/renew');

			localStorage.setItem('__token__', data.token);
			localStorage.setItem('__token-init-date__', new Date().getTime());
			dispath(onLogin({ name: data.name, uid: data.uid }));
		} catch (error) {
			localStorage.clear();
			dispath(onLogout(null));
		}
	};

	const startLogout = () => {
		localStorage.clear();
		dispath(onLogout(null));
		dispath(onLogoutCalendar());
	};

	return {
		user,
		status,
		errorMessage,
		startLogin,
		startRegister,
		checkoutToken,
		startLogout,
	};
};
