import { useEffect, useMemo, useRef } from 'react';
import { useForm } from '../../hooks/useForm';

import { useDispatch, useSelector } from 'react-redux';

import {
	DeleteOutline,
	SaveOutlined,
	UploadOutlined,
} from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';

import { ImageGallery } from '../components';
import { setActiveNote } from '../../store/journal/journalSlice';
import {
	startDeletingNote,
	startSaveNote,
	startUploadingFile,
} from '../../store/journal/thunks';

import Swal from 'sweetalert2';

export const NoteView = () => {
	const fileRef = useRef();

	const dispatch = useDispatch();
	const {
		active: note,
		messageSave,
		isSaving,
	} = useSelector((state) => state.journal);

	const { title, body, date, onInputChange, formState } = useForm(note);

	const dateString = useMemo(() => {
		return new Date(date).toLocaleDateString();
	}, [date]);

	useEffect(() => {
		dispatch(setActiveNote(formState));
	}, [formState]);

	useEffect(() => {
		if (messageSave.length > 0) {
			Swal.fire({
				title: 'Nota Actualizada',
				text: messageSave,
				icon: 'success',
				confirmButtonText: 'Cerrar',
			});
		}
	}, [messageSave]);

	const onSaveNote = () => {
		dispatch(startSaveNote());
	};

	const onDelete = () => {
		dispatch(startDeletingNote());
	};

	const onFileInputChange = ({ target }) => {
		if (target.files === 0) return;

		dispatch(startUploadingFile(target.files));
	};

	return (
		<Grid
			className='animate__animated animate__fadeIn animate__faster'
			container
			direction='row'
			justifyContent='space-between'
			sx={{ mb: 1 }}>
			<Grid item>
				<Typography
					fontSize={39}
					fontWeight='light'>
					{dateString}
				</Typography>
			</Grid>

			<Grid
				item
				alignItems='center'>
				<input
					type='file'
					multiple
					ref={fileRef}
					onChange={onFileInputChange}
					style={{ display: 'none' }}
				/>

				<IconButton
					color='primary'
					disabled={isSaving}
					onClick={() => fileRef.current.click()}>
					<UploadOutlined />
				</IconButton>

				<Button
					color='primary'
					disabled={isSaving}
					onClick={onSaveNote}>
					<SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
					Guardar
				</Button>
			</Grid>

			<Grid container>
				<TextField
					type='text'
					variant='filled'
					fullWidth
					name='title'
					value={title}
					placeholder='Ingrese un titulo'
					label='Titulo'
					onChange={onInputChange}
					sx={{ border: 'none', mb: 1 }}
				/>

				<TextField
					type='text'
					variant='filled'
					fullWidth
					multiline
					placeholder='¿Que sucedió en el dia de hoy?'
					minRows={5}
					name='body'
					value={body}
					onChange={onInputChange}
					sx={{ border: 'none', mb: 1 }}
				/>
			</Grid>

			<Grid
				container
				onClick={onDelete}
				sx={{ mt: 2 }}
				color={'error'}
				justifyContent='end'>
				<Button>
					<DeleteOutline />
					Borrar
				</Button>
			</Grid>

			<ImageGallery images={note.photoUrls} />
		</Grid>
	);
};
