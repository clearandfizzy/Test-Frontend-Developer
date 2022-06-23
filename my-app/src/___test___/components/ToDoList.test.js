import React from 'react';
import { render, screen } from '@testing-library/react';
import {ToDoList} from "../../components/ToDoList";

const config = {
	listItems: [
		{title: 'example 1 Title', description: 'example 1 Description'},
		{title: 'example 2 Title', description: 'example 2 Description'},
		{title: 'example 3 Title', description: 'example 3 Description'},
		{title: 'example 4 Title', description: 'example 4 Description'}
	]
}

describe('Renders a Todo List', () => {
	it('should pass', async () => {
		render(
			<ToDoList listItems={config.listItems} />
		);
		const e = screen.getAllByText(config.listItems[0].title);
		expect(e).toBeInTheDocument();
	});
});

