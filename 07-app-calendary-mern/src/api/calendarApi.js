import axios from 'axios';
import { getEnvVaribles } from '../helpers';

const { VITE_API_URL } = getEnvVaribles();

const calendarApi = axios.create({
	baseURL: VITE_API_URL,
});

//TODO: Configurar inteceptores

calendarApi.interceptors.request.use((config) => {
	config.headers = {
		...config.headers,
		'x-token': localStorage.getItem('__token__'),
	};

	return config;
});

export default calendarApi;
