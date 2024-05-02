import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
	name: 'journal',
	initialState: {
		isSaving: false,
		messageSave: '',
		notes: [],
		active: null,
	},
	reducers: {
		savingNewNote: (state) => {
			state.isSaving = true;
		},
		addNewEmptyNote: (state, action) => {
			state.notes.push(action.payload);
			state.isSaving = false;
		},
		setActiveNote: (state, action) => {
			state.active = action.payload;
			state.messageSave = '';
		},
		setNotes: (state, action) => {
			state.notes = action.payload;
		},
		setSaving: (state) => {
			state.isSaving = true;
			state.messageSave = '';
		},
		setPhotoToActiveNote: (state, action) => {
			state.isSaving = false;
			state.active.photoUrls = [...state.active.photoUrls, ...action.payload];
		},
		updateNote: (state, action) => {
			state.isSaving = false;
			state.notes = state.notes.map((note) => {
				if (note.id === action.payload.id) {
					return action.payload;
				}

				return note;
			});

			state.messageSave = `${action.payload.title} actualizada correctamente`;
		},
		clearNotesLogout: (state) => {
			state.isSaving = false;
			state.messageSave = '';
			state.notes = [];
			state.active = null;
		},
		deleteNoteById: (state, action) => {
			state.isSaving = false;
			state.active = null;
			state.notes = state.notes.filter(note => note.id !== action.payload)
		},
	},
});

export const {
	setNotes,
	setSaving,
	updateNote,
	savingNewNote,
	setActiveNote,
	deleteNoteById,
	clearNotesLogout,
	addNewEmptyNote,
	setPhotoToActiveNote,
} = journalSlice.actions;
