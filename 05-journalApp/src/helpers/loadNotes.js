import { collection, getDocs } from 'firebase/firestore/lite';
import { firebaseDB } from '../firebase/config';

export const loadNotes = async (uuid = '') => {
	if (!uuid) throw new Error('El uuid del usuario no existe');

	const collectionRef = collection(firebaseDB, `${uuid}/journal/notes`);
	const docs = await getDocs(collectionRef);

	const notes = [];

	docs.forEach((doc) => {
		notes.push({
			id: doc.id,
			...doc.data(),
		});
	});

	return notes;
};
