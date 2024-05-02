import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

import { getEnviroments } from '../helpers/getEnvironments';

const {
	VITE_APIKEY,
	VITE_AUTHDOMAIN,
	VITE_PROJECTID,
	VITE_STORAGEBUCKET,
	VITE_MESSAGINGSENDERID,
	VITE_APPID,
} = getEnviroments();


const firebaseConfig = {
	apiKey: VITE_APIKEY,
	authDomain: VITE_AUTHDOMAIN,
	projectId: VITE_PROJECTID,
	storageBucket: VITE_STORAGEBUCKET,
	messagingSenderId: VITE_MESSAGINGSENDERID,
	appId: VITE_APPID,
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
