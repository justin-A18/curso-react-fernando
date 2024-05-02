export const initialState = {
	status: 'checking',
	uuid: null,
	email: null,
	photoURL: null,
	displayName: null,
	errorMessage: null,
};

export const authenticatedState = {
	status: 'authenticated',
	uuid: '123ABC',
	email: 'example@gmail.com',
	photoURL: 'http://demo.jpg',
	displayName: 'Demo User',
	errorMessage: null,
};

export const notAuthenticatedState = {
	status: 'not-authenticated',
	uuid: null,
	email: null,
	photoURL: null,
	displayName: null,
	errorMessage: null,
};

export const demoUser = {
	uid: '123ABC',
	email: 'example@gmail.com',
	photoURL: 'http://demo.jpg',
	displayName: 'Demo User',
};
