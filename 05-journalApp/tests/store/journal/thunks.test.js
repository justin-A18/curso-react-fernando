import { describe, test, expect, jest, beforeEach } from '@jest/globals';
import {
	startDeletingNote,
	startLoadingNotes,
	startNewNote,
	startSaveNote,
	startUploadingFile,
} from '../../../src/store/journal/thunks';
import {
	addNewEmptyNote,
	deleteNoteById,
	savingNewNote,
	setActiveNote,
	setNotes,
	setPhotoToActiveNote,
	setSaving,
	updateNote,
} from '../../../src/store/journal/journalSlice';
import { deleteFirebase } from '../../../src/helpers/deleteFirebase';
import { loadNotes } from '../../../src/helpers';
import { filesArray, newNote } from '../../fixtures/journalFixtures';

describe('Pruebas en JournalThunks', () => {
	const dispatch = jest.fn();
	const getState = jest.fn();

	beforeEach(() => jest.clearAllMocks());

	test('startNewNote Debe de crear una nueva nota', async () => {
		//mockReturnValue: Inmediatamente cuando se llame va regresar este valor
		const uuid = 'TEST-UUID';

		getState.mockReturnValue({ auth: { uuid } });

		await startNewNote()(dispatch, getState);

		expect(dispatch).toHaveBeenCalledWith(savingNewNote());
		expect(dispatch).toHaveBeenCalledWith(
			addNewEmptyNote({
				body: '',
				title: '',
				id: expect.any(String),
				date: expect.any(Number),
				photoUrls: [],
			})
		);
		expect(dispatch).toHaveBeenCalledWith(
			setActiveNote({
				body: '',
				title: '',
				id: expect.any(String),
				date: expect.any(Number),
				photoUrls: [],
			})
		);

		//Delete firebase
		await deleteFirebase(uuid);
	}, 10000);

	test('startLoadingNote Debe de cargar las notas desde el Firestore', async () => {
		const uuid = '123ABC';

		getState.mockReturnValue({ auth: { uuid } });

		await startLoadingNotes()(dispatch, getState);

		const notes = await loadNotes(uuid);

		expect(dispatch).toHaveBeenCalledWith(setNotes(notes));
	});

	test('startSaveNote Debe actualizar una nueva nota y llamar al setSaving', async () => {
		const value = {
			auth: {
				uuid: 'ABC123',
			},
			journal: {
				active: newNote,
			},
		};

		getState.mockReturnValue(value);

		await startSaveNote()(dispatch, getState);

		expect(dispatch).toHaveBeenCalledWith(setSaving());
		expect(dispatch).toHaveBeenCalledWith(updateNote(newNote));
	});

	test('startUploadingFile debe de subir las imagenes a la nota activa', async () => {
		await startUploadingFile(filesArray)(dispatch);

		expect(dispatch).toHaveBeenCalledWith(
			setPhotoToActiveNote(expect.any(Array))
		);
	});

	test('startDeletingNote debe Eliminar una nota', async () => {
		const value = {
			auth: {
				uuid: '123ABC',
			},
			journal: {
				active: newNote,
			},
		};

		getState.mockReturnValue(value);

		await startDeletingNote()(dispatch, getState);

		dispatch(deleteNoteById(expect.any(String)));
	});
});
