import React, {createContext} from "react";
import {AppState} from "./types/AppState";
import RootObject = AppState.RootObject;

const initialState: AppState.RootObject = {
    items: [],
};

export const AppContext = createContext(initialState);

export const reducer = (state = initialState, action: any) => {

    switch (action.type) {

        case "ADD_ITEM":
            return {
                ...state,
                [AppState.Keys.items]: [
                    ...state[AppState.Keys.items],
                    {
                        id: state[AppState.Keys.items].length,
                        title: action.item.title,
                        description: action.item.description,
                        status: AppState.STATUS.open,
                        created: new Date()
                    }
                ]
            }

        case "SOLVED":
            return {
                ...state,
                [AppState.Keys.items]: state[AppState.Keys.items].map(item => {
                    return (item.id === action.id)
                        ? {...item, status: AppState.STATUS.solved}
                        : item;
                })
            }

        default:
            return state;

    }
}

export const generateValue = (
    state: RootObject,
    dispatch: Function
) => {
    return {
        items: state[AppState.Keys.items],
        addItem: (item: AppState.TodoItem) => {
            dispatch({type: AppState.Actions.ADD_ITEM, item: item});
        },
        solveItem: (id: number) => {
            dispatch({type: AppState.Actions.SOLVED, id: id});
        }
    };
}

export const StateProvider = ({children}: any) => {
    const [state, dispatch] = React.useReducer(reducer, initialState as never);

    return (<AppContext.Provider value={generateValue(state, dispatch)}>
        {children}
    </AppContext.Provider>);
}
