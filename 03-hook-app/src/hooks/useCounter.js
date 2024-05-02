import { useState } from 'react';

export const useCounter = (initialValue = 0) => {
	const [counter, setCounter] = useState(initialValue);

	const handleIncremento = () => {
		setCounter(counter + 1);
	};

	const handleDecremento = () => {
		if(counter === 0) return
		setCounter(counter - 1);
	};

	const handleReset = () => {
		setCounter(initialValue);
	};

	return {
		counter,
		handleIncremento,
		handleDecremento,
		handleReset,
	};
};
