import { useDispatch, useSelector } from 'react-redux';
import { onCloseDateModal, onOpenDateModal } from '../store/ui/uiSlice';

export const useUiActions = () => {
	const { isDateModalOpen } = useSelector((state) => state.ui);
	const dispatch = useDispatch();

	const handleOpenDateModal = () => {
		dispatch(onOpenDateModal())
	}

	const handleCloseDateClose = () => {
		dispatch(onCloseDateModal())
	}

	return {
		handleOpenDateModal,
		handleCloseDateClose,
		isDateModalOpen,
	};
};
