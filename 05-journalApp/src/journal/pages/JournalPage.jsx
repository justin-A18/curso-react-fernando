import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothinSelectedView } from '../views';
import { AddOutlined } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { startNewNote } from '../../store/journal/thunks';

export const JournalPage = () => {
	const dispatch = useDispatch();
	const { isSaving, active } = useSelector((state) => state.journal);

	const onclickNewNote = () => {
		dispatch(startNewNote());
	};

	return (
		<JournalLayout>
			{active ? <NoteView /> : <NothinSelectedView />}

			<IconButton
				onClick={onclickNewNote}
				size='large'
				disabled={isSaving}
				sx={{
					color: 'white',
					backgroundColor: 'error.main',
					':hover': { backgroundColor: 'error.main', opacity: 0.9 },
					':disabled': {
						backgroundColor: 'error.main',
						opacity: 0.9,
						color: 'white',
					},
					position: 'fixed',
					right: 50,
					bottom: 50,
				}}>
				<AddOutlined sx={{ fontSize: 30 }} />
			</IconButton>
		</JournalLayout>
	);
};
