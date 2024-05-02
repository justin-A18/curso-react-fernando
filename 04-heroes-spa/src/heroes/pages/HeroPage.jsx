import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers/getHeroById';
import { useMemo } from 'react';

export const HeroPage = () => {
	// Obtén el id de la URL usando useParams
	// Nos sirve para obtener los parametros

	const { id } = useParams();
	//Memorizar valores, Cada que cambie le id
	const hero = useMemo(() => getHeroById(id), [id]);
	const navigate = useNavigate();

	const handleNavigateReturn = () => {
		//Navega al historial anterior
		navigate(-1);
	};

	if (!hero) return <Navigate to='/marvel' />;

	return (
		<div className='row mt-5'>
			<div className='col-4 animate__animated animate__fadeInLeft'>
				<img
					src={`/heroes/${id}.jpg`}
					alt={hero.superhero}
					className='img-thumbnail'
				/>
			</div>

			<div className='col-8 animate__animated animate__fadeInRight'>
				<h3>{hero.superhero}</h3>
				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						Alter Ego: <b>{hero.alter_ego}</b>
					</li>

					<li className='list-group-item'>
						Publisher: <b>{hero.publisher}</b>
					</li>

					<li className='list-group-item'>
						Firts Appearance: <b>{hero.first_appearance}</b>
					</li>
				</ul>

				<h5 className='mt-3'>Characters: {hero.characters}</h5>

				<button
					className='btn btn-primary'
					onClick={handleNavigateReturn}>
					Regresar
				</button>
			</div>
		</div>
	);
};
