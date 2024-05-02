import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ({ value }) => {
	const [counter, setCounter] = useState(value);

	function handleClick() {
		setCounter(counter + 1);
	}

	function handleDecremento() {
		setCounter(counter - 1);
	}

	function handleReset() {
		setCounter(value);
	}

	return (
		<>
			<h1>CounterApp</h1>
			<h2> {counter} </h2>
			<button onClick={handleDecremento}>decremento</button>
			<button onClick={handleReset}>resetear</button>
			<button onClick={handleClick}>incremento</button>
		</>
	);
};

CounterApp.propTypes = {
	value: PropTypes.number.isRequired,
};
