import { useDispatch, useSelector } from 'react-redux';
import {
	onAddNewEvent,
	onDeleteEvent,
	onLoadEvents,
	onUpdateEvent,
	setActiveEvent,
} from '../store/calendar/calendarSlice';
import calendarApi from '../api/calendarApi';
import { convertEventstoDateEvents } from '../helpers';

export const useCalendarActions = () => {
	const { events, activeEvent } = useSelector((state) => state.calendar);
	const { user } = useSelector((state) => state.auth);

	const dispatch = useDispatch();

	const handleSetActiveEvent = (calendarEvent) => {
		dispatch(setActiveEvent(calendarEvent));
	};

	const startSavingEvent = async (calendarEvent) => {
		try {
			if (calendarEvent.id) {
				//Actualizando

				await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);

				dispatch(onUpdateEvent({ ...calendarEvent, user }));
			} else {
				//Creando
				const { data } = await calendarApi.post('/events', calendarEvent);

				dispatch(onAddNewEvent({ ...calendarEvent, id: data.event.id, user }));
			}
		} catch (error) {
			console.log(error);
		}
	};

	const startDeletingEvent = async () => {
		//TODO: Llegar al backend
		try {
			await calendarApi.delete(`/events/${activeEvent.id}`);

			dispatch(onDeleteEvent());
		} catch (error) {
			console.log(error);
		}
	};

	const startLoadingEvents = async () => {
		try {
			const { data } = await calendarApi.get('/events');

			const events = convertEventstoDateEvents(data.events);

			dispatch(onLoadEvents(events));
		} catch (error) {
			console.log(error);
		}
	};

	return {
		events,
		activeEvent,
		hasEventSelected: !!activeEvent && activeEvent.id,
		startSavingEvent,
		handleSetActiveEvent,
		startDeletingEvent,
		startLoadingEvents,
	};
};
