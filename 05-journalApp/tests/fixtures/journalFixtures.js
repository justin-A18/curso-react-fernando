export const initialState = {
	isSaving: false,
	messageSave: '',
	notes: [],
	active: null,
};

export const initialStateWithNoteActive = {
	isSaving: false,
	messageSave: '',
	notes: [],
	active: {
		title: 'Note 1',
		body: 'Descripción de la nota 1',
		date: new Date().getTime(),
		photoUrls: [],
	},
};

export const initialStateWithNotes = {
	isSaving: false,
	messageSave: '',
	notes: [
		{
			id:1,
			title: 'Note 1',
			body: 'Descripción de la nota 1',
			date: new Date().getTime(),
			photoUrls: [],
		},
		{
			id:2,
			title: 'Note 2',
			body: 'Descripción de la nota 2',
			date: new Date().getTime(),
			photoUrls: [],
		},
		{
			id:3,
			title: 'Note 3',
			body: 'Descripción de la nota 3',
			date: new Date().getTime(),
			photoUrls: [],
		},
	],
	active: null,
}

export const newNote = {
	id: 1,
	title: 'Hola mundo',
	body: 'Hola mundo esta es una nota de prueba',
	date: new Date().getTime(),
	photoUrls: [],
};

export const notesFirestore = [
	{
		id: 1,
		title: 'Note 1',
		body: 'Descripción de la nota 1',
		date: new Date().getTime(),
		photoUrls: [],
	},
	{
		id: 2,
		title: 'Note 2',
		body: 'Descripción de la nota 2',
		date: new Date().getTime(),
		photoUrls: [],
	},
	{
		id: 3,
		title: 'Note 3',
		body: 'Descripción de la nota 3',
		date: new Date().getTime(),
		photoUrls: [],
	},
];

export const photos = [
  "https://example.com/foto1.jpg",
  "https://example.com/foto2.jpg",
  "https://example.com/foto3.jpg",
  "https://example.com/foto4.jpg",
  "https://example.com/foto5.jpg"
];

export const filesArray = [
  new File(["Contenido de la primera imagen"], "imagen1.jpg", { type: "image/jpeg" }),
  new File(["Contenido de la segunda imagen"], "imagen2.png", { type: "image/png" }),
  new File(["Contenido de la tercera imagen"], "imagen3.gif", { type: "image/gif" })
];