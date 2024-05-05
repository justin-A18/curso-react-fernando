import { useEffect, useState } from 'react';

import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { useUiActions } from '../../hooks/useUiActions';
import { localizer, getMessagesEs } from '../../helpers';
import { useCalendarActions } from '../../hooks/useCalendarActions';
import {
	NavBar,
	CalendarEvent,
	CalendarModal,
	FabAddNew,
	FabDelete,
} from '../';

const initialStateLastView = localStorage.getItem('lastView') || 'month';

export const CalendarPage = () => {
	const { handleOpenDateModal } = useUiActions();
	const [lastView] = useState(initialStateLastView);
	const { events, handleSetActiveEvent, startLoadingEvents } =
		useCalendarActions();

	useEffect(() => {
		startLoadingEvents();
	}, []);

	const eventStyleGetter = () => {
		//PROPS: event, start, end, isSelected

		const style = {
			backgroundColor: '#347CF7',
			borderRadius: '0px',
			opacity: 0.8,
			color: 'white',
		};

		return {
			style,
		};
	};

	const onDobleClick = () => {
		handleOpenDateModal();
	};

	const onSelect = (event) => {
		handleSetActiveEvent(event);
	};

	const onViewChanged = (event) => {
		localStorage.setItem('lastView', event);
	};

	return (
		<>
			<NavBar />
			<Calendar
				culture='es'
				localizer={localizer}
				defaultView={lastView}
				events={events}
				startAccessor='start'
				endAccessor='end'
				style={{ height: 'calc(100vh - 80px)' }}
				messages={getMessagesEs()}
				eventPropGetter={eventStyleGetter}
				components={{
					event: CalendarEvent,
				}}
				onDoubleClickEvent={onDobleClick}
				onSelectEvent={onSelect}
				onView={onViewChanged}
			/>
			<CalendarModal />

			<FabAddNew />

			<FabDelete />
		</>
	);
};
