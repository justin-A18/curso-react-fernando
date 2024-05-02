import { useState } from 'react';
import '../App.css';

export const CounterApp = () => {
	const [{ counter1, counter2, counter3 }, setCounter] = useState({
		counter1: 10,
		counter2: 20,
		counter3: 30,
	});

	const handleClick = () => {
		setCounter((prevCounter) => ({
			...prevCounter,
			counter1: prevCounter.counter1 + 1
		}));
	};

	return (
		<>
			<h1>Counter: {counter1}</h1>
			<h1>Counter: {counter2}</h1>
			<h1>Counter: {counter3}</h1>
			<hr />

			<button onClick={handleClick}>Incrementar</button>
		</>
	);
};
