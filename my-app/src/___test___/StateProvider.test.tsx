import React from "react";
import {generateValue, reducer, StateProvider} from '../StateProvider';
import {AppState} from "../types/AppState";

const mockItem = {
    title: 'test',
    description: 'test',
}

describe('Adds Todo list Item Title and Description', () => {
    it('should pass', async () => {
            const state = reducer(undefined, {type: AppState.Actions.ADD_ITEM, item: mockItem});
            const resultItem = state.items[0];

            expect(
                resultItem.id === 0 &&
                resultItem.title === mockItem.title &&
                resultItem.description === mockItem.description &&
                resultItem.created !== undefined &&
                resultItem.status === AppState.STATUS.open
            ).toBe(true);
        }
    )
});

describe('Marks a Todo list item as solved', () => {
    it('should pass', async () => {
            const state = reducer(undefined, {type: AppState.Actions.ADD_ITEM, item: mockItem});
            const result = reducer(state, {type: AppState.Actions.SOLVED, id: 0});
            const resultItem = result.items[0];

            expect(
                resultItem.id === 0 &&
                resultItem.title === mockItem.title &&
                resultItem.description === mockItem.description &&
                resultItem.created !== undefined &&
                resultItem.status === AppState.STATUS.solved
            ).toBe(true);
        }
    )
});

