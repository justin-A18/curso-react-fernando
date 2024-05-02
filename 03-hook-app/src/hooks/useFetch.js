import { useEffect, useState } from 'react';

export const useFetch = (url) => {
	const [status, setStatus] = useState({
		data: null,
		isLoading: true,
	});

	const getFetch = async () => {
		setStatus({
			...status,
			isLoading: true,
		});

		try {
			const response = await fetch(url);
			if (!response.ok) throw new Error('Network response was not ok.');

			const data = await response.json();
			const { slip } = data;

			setStatus({
				data: slip,
				isLoading: false,
			});
		} catch (error) {
			setStatus({
				data: null,
				isLoading: false,
			});
		}
	};

	useEffect(() => {
		getFetch();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [url]);

	return {
		data: status.data,
		isLoading: status.isLoading,
	};
};
