import React from "react";
import {AppContext} from "./context";

export const initialState = {
	listItems: []
}

export const reducer = (state = initialState, action) => {
	console.log('action');
	console.log(action);
	switch (action.type) {
		case "ADD":
			state.listItems.push({...state.item, created: new Date()});
			console.log('new state');
			console.log(state);
			return state;
		case "COMPLETE":
			return state.listItems.map((item) => {
				return (item.id === action.id)
					? {...item, completed: true}
					: item;
			});

		default:
			return state;
	}
};

export const Provider = ({children}) => {
	const [appState, dispatch] = React.useReducer(reducer, initialState);

	return (
		<AppContext.Provider value={[appState, dispatch]}>
			{children}
		</AppContext.Provider>
	);
};