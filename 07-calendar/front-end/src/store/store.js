import { configureStore } from '@reduxjs/toolkit';
import { uiSlice } from './ui';
import { calendarSlice } from './calendar';
import { authSlice } from './auth';

export const store = configureStore({
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
	reducer: {
		ui: uiSlice.reducer,
		calendar: calendarSlice.reducer,
		auth: authSlice.reducer,
	},
});
