import { addHours } from 'date-fns';
import { useCalendarActions } from '../../hooks/useCalendarActions';
import { useUiActions } from '../../hooks/useUiActions';

export const FabAddNew = () => {
	const { handleOpenDateModal } = useUiActions();
	const { handleSetActiveEvent } = useCalendarActions();

	const handleClickNewNote = () => {
		handleSetActiveEvent({
			title: '',
			note: '',
			start: new Date(),
			end: addHours(new Date(), 2),
			bgColor: '#fafa',
			user: {
				_id: '123',
				name: 'justin',
			},
		});
		handleOpenDateModal();
	};

	return (
		<button
			className='btn btn-primary fab'
			onClick={handleClickNewNote}>
			<i className='fas fa-plus'></i>
		</button>
	);
};
