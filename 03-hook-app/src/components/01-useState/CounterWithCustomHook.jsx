import '../App.css';
import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {
	const { counter, handleIncremento, handleDecremento, handleReset } =
		useCounter(0);

	return (
		<>
			<h1>Counter With Hook: {counter}</h1>
			<hr />

			<button onClick={handleIncremento}>Incremento</button>
			<button onClick={handleReset}>Reset</button>
			<button onClick={handleDecremento}>Decremento</button>
		</>
	);
};
