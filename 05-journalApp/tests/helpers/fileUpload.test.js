import { describe, test, expect } from '@jest/globals';
import { v2 as cloudinary } from 'cloudinary';

//Eliminar archivos cloudinary
cloudinary.config({
	cloud_name: 'dlmvqmbtj',
	api_key: '743639222915261',
	api_secret: 'AoJLx-2oAZgHY2S2ECBHGgo8aOg',
	secure: true,
});

import { fileUpload } from '../../src/helpers/fileUpload';

describe('Pruebas en fileUpload', () => {
	test('Debe de subir el archivo correctamente a Cloudinary', async () => {
		const imageUrl =
			'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg';

		const res = await fetch(imageUrl);
		const blob = await res.blob();
		const file = new File([blob], 'foto.jpg');

		const url = await fileUpload(file);

		expect(typeof url).toBe('string');

		//Eliminar imagen Cloudinary
		const segment = url.split('/');
		const imageId = segment[segment.length - 1].replace('.jpg', '');

		await cloudinary.api.delete_resources(['journal/' + imageId], {
			resource_type: 'image',
		});
	});

	test('Debe de retornar null', async () => {
		const file = new File([], 'foto.jpg');
		const url = await fileUpload(file);

		expect(url).toBe(null);
	});
});
