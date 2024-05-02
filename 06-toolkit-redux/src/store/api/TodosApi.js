import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
	reducerPath: 'todos',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com',
	}),

	//Diferentes funciones que vamos a querer llamar para obtener informacion
	endpoints: (builder) => ({
		getTodos: builder.query({
			query: () => '/todos',
		}),
		getTodoById: builder.query({
			query: (todoId) => `/todos/${todoId}`,
		}),
	}),
});

//Crea custom hooks
export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi;
