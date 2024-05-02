import PropTypes from 'prop-types';
import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { AuthReducer } from '../reducer/AuthReducer';
import { types } from '../types/types';

export const AuthProvider = ({ children }) => {
	const init = () => {
		const user = JSON.parse(localStorage.getItem('user'));
		return {
			logged: !!user,
			user: user,
		};
	};

	const [authState, dispatch] = useReducer(AuthReducer, {}, init);

	const login = (name = '') => {
		const user = {
			id: 1,
			name: name,
		};

		const action = {
			type: types.login,
			payload: user,
		};

		localStorage.setItem('user', JSON.stringify(user));

		dispatch(action);
	};

	const logout = () => {
		const action = {
			type: types.logout,
		};

		localStorage.removeItem('user');
		dispatch(action);
	};

	return (
		<AuthContext.Provider value={{ ...authState, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
