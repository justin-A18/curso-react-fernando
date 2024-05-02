import { useRef } from 'react';
import '../../App.css';

export const FocusScreen = () => {

	const inputRef = useRef();
	
	const handleClick = () => {
		inputRef.current.select();
	}

	return (
		<>
			<h1>Focus Screen</h1>
			<hr />

			<form onSubmit={(e) => e.preventDefault()}>
				<input
					type='text'
					className='form-control mt-2'
					placeholder='Ingrese su nombre'
					ref={inputRef}
				/>

				<button onClick={handleClick} className='mt-2'>set focus</button>
			</form>
		</>
	);
};
