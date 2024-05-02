import {
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { firebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
	try {
		const result = await signInWithPopup(firebaseAuth, googleProvider);

		const { displayName, photoURL, email, uid } = result.user;

		return {
			ok: true, //Esto Creamos nosotros
			uid,
			email,
			photoURL,
			displayName,
		};
	} catch (error) {
		return {
			ok: false, //esto nosotros lo creamos
			errorMessage: error.message,
		};
	}
};

export const registerUserWithEmailPassword = async ({
	email,
	password,
	displayName,
}) => {
	try {
		const res = await createUserWithEmailAndPassword(
			firebaseAuth,
			email,
			password
		);

		const { uid, photoURL } = res.user;

		//Actualiza el usuario actual
		await updateProfile(firebaseAuth.currentUser, {
			displayName,
		});

		return {
			ok: true,
			uid,
			photoURL,
			displayName,
		};
	} catch (error) {
		return {
			ok: false, //Esto nosotros lo creamos
			errorMessage: error.message,
		};
	}
};

export const loginWithEmailPassword = async ({ email, password }) => {
	try {
		const res = await signInWithEmailAndPassword(firebaseAuth, email, password);

		const { uid, photoURL, displayName } = res.user;

		return {
			ok: true,
			uid,
			photoURL,
			displayName,
		};
	} catch (error) {
		return {
			ok: false,
			errorMessage: error.message,
		};
	}
};

export const logoutFirebase = async () => {
	return await firebaseAuth.signOut();
};
