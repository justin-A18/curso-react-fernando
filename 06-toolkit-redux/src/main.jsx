import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './store';
//import { App } from './App.jsx';
//import { PokemonApp } from './PokemonApp.jsx';
import { TodoApp } from './TodoApp';

import './assets/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			{/*<App />*/}
			{/*<PokemonApp />*/}
			<TodoApp />
		</Provider>
	</React.StrictMode>
);
