import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
//import HooksApp from './HooksApp.jsx'

//<-----UseState----->
//import { CounterApp } from './components/CounterApp.jsx';
//import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook.jsx';

//<-------useEffect------->
//import { SimpleForm } from './components/02-useEffect/SimpleForm';
//import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
//import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';

//<------useRef------>
//import { FocusScreen } from './components/04-useRef/FocusScreen';

//<-------useLayoutEffect------>
//import { Layout } from './components/05-useLayoutEffect/Layout';

//<----Memo METODO DE REACT---->
//import { Memorize } from './components/06-memo/Memorize';

//<-------useMEMO------->
//import { MemoHook } from './components/06-memo/MemoHook';

//<-----------useCallback-------------->
//import { Callback } from './components/07-useCallback/Callback';

//<-----------TAREA------------->
//import { Padre } from './components/08-tarea-memo/Padre';

//<-------------useReducer--------------->
//import './components/09-useReducer/intro-reducer'
//import { TodoApp } from './components/09-useReducer/TodoApp';

//<-------------useContext--------------->
import { MainApp } from './components/10-useContext/MainApp';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<React.StrictMode>
			<MainApp />
		</React.StrictMode>
	</BrowserRouter>
);
