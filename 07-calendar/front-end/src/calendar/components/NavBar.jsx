import { useAuthActions } from '../../hooks/useAuthActions';

export const NavBar = () => {
	const { startLogout } = useAuthActions();


	return (
		<div className='navbar navbar-dark bg-dark mb-4 px-4'>
			<span className='navbar-brand '>
				<i className='fas fa-calendar-alt'></i>
				&nbsp; Justin
			</span>

			<button
				className='btn btn-outline-danger'
				onClick={startLogout}>
				<i className='fas fa-sign-out-alt'></i>
				&nbsp; Salir
			</button>
		</div>
	);
};
