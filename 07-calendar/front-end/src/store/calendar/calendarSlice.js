import { createSlice } from '@reduxjs/toolkit';

export const calendarSlice = createSlice({
	name: 'calendar',
	initialState: {
		events: [],
		activeEvent: null,
	},
	reducers: {
		setActiveEvent: (state, { payload }) => {
			state.activeEvent = payload;
		},
		onAddNewEvent: (state, { payload }) => {
			state.events.push(payload);
			state.activeEvent = null;
		},
		onLoadEvents: (state, { payload }) => {
			state.events = payload;
		},
		onUpdateEvent: (state, { payload }) => {
			state.events = state.events.map((event) => {
				if (event.id === payload.id) {
					return payload;
				}

				return event;
			});
		},
		onDeleteEvent: (state) => {
			state.events = state.events.filter(
				(event) => event.id !== state.activeEvent.id
			);
			state.activeEvent = null;
		},
		onLogoutCalendar: (state) => {
			state.activeEvent = null;
			state.events = [];
		},
	},
});

export const {
	setActiveEvent,
	onAddNewEvent,
	onUpdateEvent,
	onDeleteEvent,
	onLogoutCalendar,
	onLoadEvents,
} = calendarSlice.actions;
