import { useCallback, useState } from 'react';
import '../../App.css';
import { ShowIncrement } from './ShowIncrement';

export const Callback = () => {
	const [counter, setCounter] = useState(0);

	const handleIncrement = useCallback((value) => {
		setCounter(prevState => prevState + value);
	}, []);

	return (
		<>	
			<h1>useCallback hook: {counter}</h1>
			<hr />

			<ShowIncrement increment={handleIncrement} />
		</>
	);
};
