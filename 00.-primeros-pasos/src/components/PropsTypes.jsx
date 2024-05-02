import PropTypes from 'prop-types';

export const FirstApp = ({ title, subtitle }) => {
	if (!title) {
		throw new Error('title no existe');
	}

	return (
		<>
			<h1 data-testid="test-title">{title}</h1>
			<p>{subtitle}</p>
		</>
	);
};

//TIPADO
FirstApp.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired
}

//VALORES POR DEFECTO
FirstApp.defaultProps = {
	//title: "No hay title",
	subtitle: "No hay subtitle"
}