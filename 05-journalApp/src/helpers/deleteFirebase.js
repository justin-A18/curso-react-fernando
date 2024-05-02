import { collection, deleteDoc, getDocs } from 'firebase/firestore/lite';
import { firebaseDB } from '../firebase/config';

export const deleteFirebase = async (uuid) => {
	//Borrar Firebase
	const collectionRef = collection(firebaseDB, `${uuid}/journal/notes`);
	const docs = await getDocs(collectionRef);
	const deletePromises = [];

	docs.forEach((doc) => deletePromises.push(deleteDoc(doc.ref)));

	await Promise.all(deletePromises);
};
