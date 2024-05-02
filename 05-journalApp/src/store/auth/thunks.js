import {
	loginWithEmailPassword,
	logoutFirebase,
	registerUserWithEmailPassword,
	singInWithGoogle,
} from '../../firebase/providers';
import { clearNotesLogout } from '../journal/journalSlice';
import { chekingCredentials, login, logout } from './authSlice';

export const checkinAuthentication = () => {
	return async (dispatch) => {
		dispatch(chekingCredentials());
	};
};

export const startGoogleSignIn = () => {
	return async (dispatch) => {
		dispatch(chekingCredentials());

		const result = await singInWithGoogle();

		if (!result.ok) {
			return dispatch(logout(result.errorMessage));
		}

		dispatch(login(result));
	};
};

export const startCreatingUserWithEmailPassword = ({
	displayName,
	email,
	password,
}) => {
	return async (dispatch) => {
		dispatch(chekingCredentials());

		const { ok, uid, photoURL, errorMessage } =
			await registerUserWithEmailPassword({
				email,
				password,
				displayName,
			});

		if (!ok) return dispatch(logout({ errorMessage }));

		dispatch(
			login({
				ok,
				uid,
				email,
				photoURL,
				displayName,
			})
		);
	};
};

export const startLoginWithEmailPassword = ({ email, password }) => {
	return async (dispatch) => {
		dispatch(chekingCredentials());

		const result = await loginWithEmailPassword({
			email,
			password,
		});

		if (!result.ok)
			return dispatch(logout({ errorMessage: result.errorMessage }));

		dispatch(login(result));
	};
};

export const startLogout = () => {
	return async (dispatch) => {
		await logoutFirebase();
		dispatch(clearNotesLogout());
		dispatch(logout({ errorMessage: null }));
	};
};
