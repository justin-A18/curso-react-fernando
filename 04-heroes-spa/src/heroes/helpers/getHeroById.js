import { heroes } from '../data/heroes';

export const getHeroById = (id) => {
	if (!id) return;

	return heroes.find((heroe) => heroe.id === id);
};
