import PropTypes from 'prop-types';

export const ShowIncrement = ({ increment }) => {
	return <button onClick={() => increment(5)}>incrementar</button>;
};

ShowIncrement.propTypes = {
	increment: PropTypes.func.isRequired
};

