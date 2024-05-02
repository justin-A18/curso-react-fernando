import { useCounter } from '../../hooks';
import { useMemo, useState } from 'react';
import '../../App.css';

const heavyStuff = (iterationNumber = 100) => {
	for (let i = 0; i < iterationNumber; i++) {
		console.log('ahi vamos ...');

		return `${iterationNumber} iteraciones realizadas`;
	}
};

export const MemoHook = () => {
	const [show, setShow] = useState(true);
	const { counter, handleIncremento } = useCounter(0);
	const memorizeValue = useMemo(() => heavyStuff(counter), [counter]);

	return (
		<>
			<h1>
				Counter: <small>{counter}</small>
			</h1>

			<hr />

			<h4>{memorizeValue}</h4>

			<button onClick={handleIncremento}>incremento</button>
			<button onClick={() => setShow(!show)}>
				Show / Hide {JSON.stringify(show)}
			</button>
		</>
	);
};
