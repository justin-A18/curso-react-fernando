import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export const Advice = ({ advice, id }) => {
	const pRef = useRef();

	const [boxSize, setBoxSize] = useState({
		width: 0,
		height: 0,
	});

	useLayoutEffect(() => {
		const { width, height } = pRef.current.getBoundingClientRect();

		setBoxSize({
			width: width.toFixed(0),
			height,
		});
	}, [advice]);

	return (
		<>
			<blockquote
				className='blockquote text-end'
				style={{ display: 'flex', flexDirection: 'column' }}>
				<p ref={pRef}>{advice}</p>
				<footer className='blockquote-footer'>Advice #{id}</footer>
			</blockquote>

			<code
				style={{ display: 'block' }}
				className='mt-2 mb-2'>
				{JSON.stringify(boxSize)}
			</code>
		</>
	);
};
