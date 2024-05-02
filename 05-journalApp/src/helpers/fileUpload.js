export const fileUpload = async (file) => {
	//if (!file) throw new Error('No tenemos un archivo a subir');
	if (!file) return null;

	const cloudURL = 'https://api.cloudinary.com/v1_1/dlmvqmbtj/upload';

	const formData = new FormData();
	formData.append('upload_preset', 'react-journal');
	formData.append('file', file);

	try {
		const res = await fetch(cloudURL, {
			method: 'POST',
			body: formData,
		});

		if (!res.ok) throw new Error('No se pudo subir la imagen');

		const cloudResponse = await res.json();

		return cloudResponse.secure_url;
	} catch (error) {
		//if (!file) throw new Error(error.message);
		return null;
	}
};
