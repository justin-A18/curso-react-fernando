import { useCounter } from '../../hooks';
import { useState } from 'react';
import { Small } from './Small';
import '../../App.css';

export const Memorize = () => {
	const { counter, handleIncremento } = useCounter(0);
	const[show,setShow] = useState(true);
	return (
		<>
			<h1>
				Counter: <Small value={counter}/>
			</h1>

			<hr />

			<button onClick={handleIncremento}>incremento</button>
			<button onClick={() => setShow(!show)}>Show / Hide {JSON.stringify(show)}</button>
		</>
	);
};
