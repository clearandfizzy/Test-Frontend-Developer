import React, {createContext} from "react";

export const initialState = [];
export const AppContext = createContext(initialState);

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
	const [state, dispatch] = React.useReducer(reducer, initialState);

	const value = {
		items: state,
		dispatch: dispatch
	};

	return (
		<AppContext.Provider value={value}>
			{children}
		</AppContext.Provider>
	);
}

