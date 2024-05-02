import PropTypes from 'prop-types';
import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from '../helpers';
import { useMemo } from 'react';

export const HeroList = ({ publisher }) => {
	const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
	return (
		<ul className='row rows-cols-1 row-cols-md-3 g-3'>
			{heroes.map((heroe) => (
				<HeroCard
					key={heroe.id}
					{...heroe}
				/>
			))}
		</ul>
	);
};

HeroList.propTypes = {
	publisher: PropTypes.string.isRequired,
};
