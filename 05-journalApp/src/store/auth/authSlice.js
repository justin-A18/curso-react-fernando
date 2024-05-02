import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		status: 'not-authenticated', //'not-authenticated','authenticated'
		uuid: null,
		email: null,
		photoURL: null,
		displayName: null,
		errorMessage: null,
	},
	reducers: {
		login: (state, action) => {
			const { uid, email, photoURL, displayName } = action.payload;

			state.status = 'authenticated';
			state.uuid = uid;
			state.email = email;
			state.photoURL = photoURL;
			state.displayName = displayName;
			state.errorMessage = null;
		},
		logout: (state, action) => {
			state.status = 'not-authenticated';
			state.uuid = null;
			state.email = null;
			state.photoURL = null;
			state.displayName = null;
			state.errorMessage = action.payload?.errorMessage;
		},
		chekingCredentials: (state) => {
			state.status = 'checking';
		},
	},
});

export const { login, logout, chekingCredentials } = authSlice.actions;
