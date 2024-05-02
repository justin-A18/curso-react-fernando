import { useState } from 'react';
import { UserContext } from './UserContext';
import PropTypes from 'prop-types';

export const UserProvider = ({ children }) => {
	const initialUser = {};
	const [user, setUser] = useState(initialUser);

	const loginUser = (user) => {
		setUser(user);
	};

	return (
		<UserContext.Provider value={{ user, loginUser }}>
			{children}
		</UserContext.Provider>
	);
};

UserProvider.propTypes = {
	children: PropTypes.array.isRequired,
};
