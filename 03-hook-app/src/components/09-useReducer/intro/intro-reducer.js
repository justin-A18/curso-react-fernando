const initialState = [
	{
		id: 1,
		todo: 'Recolectar la piedra del Alma',
		done: false,
	},
];

//RECIBE EL ESTADO ANTERIOR Y ACIONES
const todoReducer = (state = initialState, accion = {}) => {
	if (accion.type === '[TODO] add todo') {
		return [...state, accion.payload];
	}

	return state;
};

let todos = todoReducer();

const newTodo = {
	id: 2,
	todo: 'Recoletar la piedra del Poder',
	done: false,
};

const addTodoAction = {
	type: '[TODO] add todo',
	payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);
console.log(todos);
