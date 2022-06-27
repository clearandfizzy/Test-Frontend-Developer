import React from "react";
import {createContext} from 'react';

export const AppContext = createContext();
export const initialState = [];

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD":
			return [
				...state,
				{
					...action.item,
					id: state.length,
					status: 0,
					created: new Date()
				}
			];


		case "SOLVED":
			return state.map(item => {
				return (item.id === action.id)
					? {...item, status: 1}
					: item;
			})

		default:
			return state;

	}
}

export const Provider = ({children}) => {
	const itemsState = React.useReducer(reducer, initialState);

	return (
		<AppContext.Provider value={{
			items: itemsState[0],
			dispatch: itemsState[1]
		}}>
			{children}
		</AppContext.Provider>
	);
}
