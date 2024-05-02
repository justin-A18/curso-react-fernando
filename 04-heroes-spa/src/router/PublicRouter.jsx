import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../auth';
import { Navigate } from 'react-router-dom';

const PublicRouter = ({ children }) => {
	const { logged } = useContext(AuthContext);
	return !logged ? children : <Navigate to={'/marvel'} />;
};

PublicRouter.propTypes = {
	children: PropTypes.node.isRequired,
};

export default PublicRouter;
