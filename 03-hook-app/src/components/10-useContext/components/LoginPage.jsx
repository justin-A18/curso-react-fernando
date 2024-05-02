import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export const LoginPage = () => {
	const { user, loginUser } = useContext(UserContext);

	const newUser = {
		id: 123,
		name: 'Justin Vargas',
		email: 'justin.hv@gmail.com',
	};

	return (
		<>
			<h1>LoginPage</h1>
			<hr />

			<pre aria-label='code'>{JSON.stringify(user)}</pre>
			<button onClick={() => loginUser(newUser)}>Set user</button>
		</>
	);
};
