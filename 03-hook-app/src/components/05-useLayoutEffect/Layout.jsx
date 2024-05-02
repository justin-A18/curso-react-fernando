import { useCounter, useFetch } from '../../hooks/index';
import { LoadingQuote, Advice } from '../03-examples/index';
import '../../App.css';

export const Layout = () => {
	const { counter, handleIncremento } = useCounter(1);

	const { data, isLoading } = useFetch(
		`https://api.adviceslip.com/advice/${counter}`
	);

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
