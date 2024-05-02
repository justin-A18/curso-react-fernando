import { toast, ToastContainer } from 'react-toastify';
import { useCalendarActions } from '../../hooks/useCalendarActions';
import { useUiActions } from '../../hooks/useUiActions';

export const FabDelete = () => {
	const { isDateModalOpen } = useUiActions();
	const { startDeletingEvent, hasEventSelected, activeEvent } =
		useCalendarActions();

	const handleClickDelete = () => {
		startDeletingEvent();
		toast.error(`Evento ${activeEvent.title} Se ha Eliminado el evento exitosamente`, {
			theme: 'colored',
			delay: 500,
			icon: false,
		});
	};

	return (
		<>
			<button
				className={`btn btn-danger fab-danger ${
					hasEventSelected && !isDateModalOpen ? 'd-block' : 'd-none'
				}`}
				onClick={handleClickDelete}>
				<i className='fas fa-trash-alt'></i>
			</button>

			<ToastContainer />
		</>
	);
};
