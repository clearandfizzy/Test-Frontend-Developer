import React from "react";
import {reducer} from '../StateProvider';
import {AppState} from "../types/AppState";

const mockItem = {
    title: 'test',
    description: 'test',
}

describe('Renders a Todo list Item Title and Description', () => {
    it('should pass', async () => {
            const result = reducer(undefined, {type: AppState.Actions.ADD_ITEM, item: mockItem});
            const resultItem = result.items[0];

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