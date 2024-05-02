import { describe, test, expect } from '@jest/globals';
import {
	addNewEmptyNote,
	clearNotesLogout,
	deleteNoteById,
	journalSlice,
	savingNewNote,
	setActiveNote,
	setNotes,
	setPhotoToActiveNote,
	setSaving,
	updateNote,
} from '../../../src/store/journal/journalSlice';
import {
	initialState,
	initialStateWithNoteActive,
	initialStateWithNotes,
	newNote,
	notesFirestore,
	photos,
} from '../../fixtures/journalFixtures';

describe('Pruebas en JornalSlice', () => {
	test('Debe de llamar el estado inicial y llamarse "journal"', () => {
		const state = journalSlice.reducer(initialState, {});

		expect(journalSlice.name).toBe('journal');
		expect(state).toEqual(initialState);
	});

	test('savingNewNote Debe de cambiar el isSaving a true', () => {
		const state = journalSlice.reducer(initialState, savingNewNote());

		expect(state.isSaving).toBeTruthy();
	});

	test('addNewEmptyNote Debe agregar una nueva nota y cambiar el isSaving a false', () => {
		const state = journalSlice.reducer(
			initialState,
			addNewEmptyNote(newNote),
			savingNewNote()
		);

		expect(state.isSaving).toBeFalsy();
		expect(state.notes).toHaveLength(1);
	});

	test('setActiveNote Debe asignar una nota como activa y no debe tener mensaje de error', () => {
		const state = journalSlice.reducer(initialState, setActiveNote(newNote));

		expect(state.active).toEqual(newNote);
		expect(state.messageSave).toBe('');
	});

	test('setNotes Debe cargar desde el firestore', () => {
		const state = journalSlice.reducer(initialState, setNotes(notesFirestore));
		expect(state.notes).toHaveLength(3);
	});

	test('setSaving debe cambiar el isSaving a true y no recibir mensaje de error', () => {
		const state = journalSlice.reducer(initialState, setSaving());

		expect(state.isSaving).toBeTruthy();
		expect(state.messageSave).toBe('');
	});

	test('setPhotosActiveNote Agregar photos a la nota activa y debe cambiar el isSaving al false', () => {
		const state = journalSlice.reducer(
			initialStateWithNoteActive,
			setPhotoToActiveNote(photos)
		);

		expect(state.active.photoUrls).toHaveLength(5);
		expect(state.isSaving).toBeFalsy();
	});

	test('updateNote Debe Actualizar la nota activa y debe cambiar el isSaving a false y mostrar un mensaje de actualización', () => {
		const state = journalSlice.reducer(
			initialStateWithNotes,
			updateNote(newNote)
		);

		expect(state.notes[0]).toEqual(newNote);
		expect(state.isSaving).toBeFalsy();
		expect(state.messageSave).toBe(
			`${state.notes[0].title} actualizada correctamente`
		);
	});

	test('clearNotesLogout Debe de limpiar las notas cuando el usuario de deslogue', () => {
		const state = journalSlice.reducer(
			initialStateWithNotes,
			clearNotesLogout()
		);

		expect(state).toEqual(initialState);
	});

	test('deleteNoteById Debe de eliminar la nota por Id, cambiar el isSaving a true y el active a null ', () => {
		const state = journalSlice.reducer(
			initialStateWithNotes,
			deleteNoteById(newNote.id)
		);

		expect(state.notes).toHaveLength(2)
	});
});
