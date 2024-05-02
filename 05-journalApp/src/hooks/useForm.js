/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {
	const [formState, setFormState] = useState(initialForm);
	const [formValidation, setFormValidation] = useState({});

	useEffect(() => {
		createValidators();
	}, [formState]);

	useEffect(() => {
		setFormState(initialForm);
	}, [initialForm]);

	const isFormValid = useMemo(() => {
		for (const formValues of Object.keys(formValidation)) {
			if (formValidation[formValues] !== null) return false;
		}

		return true;
	}, [formValidation]);

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	const onResetForm = () => {
		setFormState(initialForm);
	};

	const createValidators = () => {
		const formCheckValues = {};

		for (const formField of Object.keys(formValidations)) {
			const { isValid, errorMessage } = formValidations[formField];

			//Propiedad computada: EJM: nameValid,emailValid,passwordValid
			formCheckValues[`${formField}Valid`] = isValid(formState[formField])
				? null
				: errorMessage;

			setFormValidation(formCheckValues);
		}
	};

	return {
		isFormValid,
		onResetForm,
		...formState,
		formState,
		onInputChange,
		...formValidation,
	};
};
