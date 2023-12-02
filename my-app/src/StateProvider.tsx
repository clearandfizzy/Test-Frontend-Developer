import React, { createContext, useReducer } from "react";
import { AppState } from "./types/AppState";

// Define the initial state based on the AppState.RootObject
const initialState: AppState.RootObject = {
    items: [],
};

// Context creation with initial state
export const AppContext = createContext(initialState);

// Define action type for type safety
type Action =
    | { type: AppState.Actions.ADD_ITEM; item: AppState.TodoItem }
    | { type: AppState.Actions.SOLVED; id: number };

// Reducer function with return type annotation
export const reducer = (state: AppState.RootObject = initialState, action: Action): AppState.RootObject => {
    switch (action.type) {

        case AppState.Actions.ADD_ITEM:
            return {
                ...state,
                [AppState.Keys.items]: [
                    ...state[AppState.Keys.items],
                    {
                        ...action.item,
                        id: state[AppState.Keys.items].length,
                        created: new Date(),
                        status: AppState.STATUS.open,
                        dueDate: action.item.dueDate || new Date()
                    }
                ]
            }

        case AppState.Actions.SOLVED:
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
    state: AppState.RootObject,
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
    const [state, dispatch] = useReducer(reducer, initialState);

    return (<AppContext.Provider value={generateValue(state, dispatch)}>
        {children}
    </AppContext.Provider>);
}
