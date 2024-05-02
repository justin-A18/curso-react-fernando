import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters }) => {
	return alter_ego === characters ? (
		<></>
	) : (
		<p className='card-text'>{characters}</p>
	);
};

export const HeroCard = ({
	id,
	superhero,
	alter_ego,
	first_appearance,
	characters,
}) => {
	const imagesURL = `/heroes/${id}.jpg`;

	return (
		<article
			className='col animate__animated animate__fadeIn'
			id={id}>
			<div className='card'>
				<div className='row no-getters'>
					<div className='col-4'>
						<img
							src={imagesURL}
							className='card-img'
							alt={superhero}
						/>
					</div>

					<div className='col-8'>
						<div className='card-body'>
							<h5 className='card-title'>{superhero}</h5>
							<p className='card-text'>{alter_ego}</p>

							<CharactersByHero
								characters={characters}
								alter_ego={alter_ego}
							/>

							<p className='card-text'>
								<small className='text-muted'>{first_appearance}</small>
							</p>

							<Link to={`/hero/${id}`}>Más información</Link>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
};

CharactersByHero.propTypes = {
	alter_ego: PropTypes.string,
	characters: PropTypes.string,
};

HeroCard.propTypes = {
	id: PropTypes.string,
	superhero: PropTypes.string,
	publisher: PropTypes.string,
	alter_ego: PropTypes.string,
	first_appearance: PropTypes.string,
	characters: PropTypes.string,
};
