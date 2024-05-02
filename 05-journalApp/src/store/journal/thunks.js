import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { firebaseDB } from '../../firebase/config';
import {
	addNewEmptyNote,
	deleteNoteById,
	savingNewNote,
	setActiveNote,
	setNotes,
	setPhotoToActiveNote,
	setSaving,
	updateNote,
} from './journalSlice';
import { fileUpload, loadNotes } from '../../helpers';

export const startNewNote = () => {
	return async (dispatch, getState) => {
		dispatch(savingNewNote());

		console.log('start new note');
		const { uuid } = getState().auth;

		const newNote = {
			title: '',
			body: '',
			date: new Date().getTime(),
			photoUrls: [],
		};

		const newDoc = doc(collection(firebaseDB, `${uuid}/journal/notes`));
		await setDoc(newDoc, newNote);

		newNote.id = newDoc.id;

		dispatch(addNewEmptyNote(newNote));
		dispatch(setActiveNote(newNote));
	};
};

export const startLoadingNotes = () => {
	return async (dispatch, getState) => {
		const { uuid } = getState().auth;

		if (!uuid) throw new Error('El uuid no existe');

		const notes = await loadNotes(uuid);

		dispatch(setNotes(notes));
	};
};

export const startSaveNote = () => {
	return async (dispatch, getState) => {
		dispatch(setSaving());

		const { uuid } = getState().auth;
		const { active: note } = getState().journal;

		const noteToFirestore = { ...note };

		//eliminar una propiedad de un objeto.
		delete noteToFirestore.id;

		const docRef = doc(firebaseDB, `${uuid}/journal/notes/${note.id}`);
		await setDoc(docRef, noteToFirestore, { merge: true });

		dispatch(updateNote(note));
	};
};

export const startUploadingFile = (files = []) => {
	return async (dispatch) => {
		dispatch(setSaving());

		const fileUploadPromises = [];
		for (const file of files) {
			fileUploadPromises.push(fileUpload(file));
		}

		const photoUrls = await Promise.all(fileUploadPromises);

		dispatch(setPhotoToActiveNote(photoUrls));
	};
};

export const startDeletingNote = () => {
	return async (dispatch, getState) => {
		const { uuid } = getState().auth;
		const { active: note } = getState().journal;

		const docRef = doc(firebaseDB, `${uuid}/journal/notes/${note.id}`);
		await deleteDoc(docRef);

		dispatch(deleteNoteById(note.id));
	};
};
