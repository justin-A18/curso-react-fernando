import 'whatwg-fetch';
import { jest } from '@jest/globals';

// eslint-disable-next-line no-undef
require('dotenv').config({
	path: '.env.test',
});

jest.mock('./src/helpers/getEnvironments', () => ({
	// eslint-disable-next-line no-undef
	getEnviroments: () => ({ ...process.env }),
}));
