import { useCounter, useFetch } from '../../hooks/index';
import { LoadingQuote, Advice } from './index';
//import '../../App.css';

export const MultipleCustomHooks = () => {
	const { counter, handleIncremento } = useCounter(1);

	const { data, isLoading } = useFetch(
		`https://api.adviceslip.com/advice/${counter}`
	);

	//si la data tiene un valor toma la data
	const { id, advice } = !!data && data;

	return (
		<>
			<h1>Advices</h1>
			<hr />

			{isLoading ? (
				<LoadingQuote />
			) : (
				<Advice
					advice={advice}
					id={id}
				/>
			)}

			<button
				onClick={handleIncremento}
				disabled={isLoading}>
				Next Quote
			</button>
		</>
	);
};
