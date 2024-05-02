import { useState } from 'react';

export const useForm = (initialForm = {}) => {
	const [form, setForm] = useState(initialForm);

	const onInputChange = ({ target }) => {
		const { name, value } = target;

		setForm((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const onResetForm = () => {
		setForm(initialForm);
	};

	const onSubmit = (e) => {
		e.preventDefault();
	};

	return {
		...form,
		onSubmit,
		onResetForm,
		onInputChange,
	};
};
