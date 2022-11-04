export namespace AppState {

    export enum Keys {
        items = 'items',
    }

    export interface StateContext {
        appState: RootObject,
        dispatch: any,
        items: RootObject['items'],
        addItem: Function,
        solveItem: Function
    }

    export interface RootObject {
        items: TodoItem[]
    }

    export enum Actions {
        ADD_ITEM = 'ADD_ITEM',
        SOLVED = 'SOLVED',
    }

    export interface TodoItem {
        id: number,
        title: string,
        description: string,
        created: Date,
        status: AppState.STATUS,
    }

    export enum STATUS {
        'open' = '0',
        'solved' = '1'
    }
}

export {}