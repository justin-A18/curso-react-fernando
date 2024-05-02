import { useContext } from 'react';
import { AuthContext } from '../auth';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRouter = ({ children }) => {
	const { logged } = useContext(AuthContext);

	//Grabar la pagina donde nos encontramos
	const location = useLocation();
	const { pathname, search } = location;
	const lastPath = pathname + search;

	localStorage.setItem('lastPath', lastPath);

	return logged ? children : <Navigate to='/login' />;
};

PrivateRouter.propTypes = {
	children: PropTypes.node.isRequired,
};
