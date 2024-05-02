import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';

export const NavBar = () => {
	//CustomHook de React - Averiguar
	const navigate = useNavigate();

	const { user, logout } = useContext(AuthContext);

	const handleLogout = () => {
		logout();

		navigate('/login', {
			//Reemplaza la ruta en la que me encuentro y evita que pueda regresar al historial anterior
			replace: true,
		});
	};

	return (
		<nav className='navbar navbar-expand-sm navbar-dark bg-dark px-4'>
			<Link
				className='navbar-brand'
				to='/'>
				Asociaciones
			</Link>

			<div className='navbar-collapse'>
				<div className='navbar-nav'>
					<NavLink
						className={({ isActive }) =>
							`nav-item nav-link ${isActive ? 'active' : ''}`
						}
						to='/marvel'>
						Marvel
					</NavLink>

					<NavLink
						className={({ isActive }) =>
							`'nav-item nav-link ${isActive ? 'active' : ''}'`
						}
						to='/dc'>
						DC
					</NavLink>

					<NavLink
						className={({ isActive }) =>
							`'nav-item nav-link ${isActive ? 'active' : ''}'`
						}
						to='/search'>
						Search
					</NavLink>
				</div>
			</div>

			<div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
				<ul className='navbar-nav ml-auto'>
					<span className='nav-item nav-link text-primary'>{user?.name}</span>

					<button
						onClick={handleLogout}
						className='nav-item nav-link btn'
						aria-label='btn-logout'>
						Logout
					</button>
				</ul>
			</div>
		</nav>
	);
};
