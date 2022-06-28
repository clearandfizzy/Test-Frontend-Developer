import React from 'react';
import { render, screen } from '@testing-library/react';
import {ToDoItem} from "../../components/ToDoItem";

const config = {
	items: [
		{id: 1, title: 'example 1 Title', description: 'example 1 Description', status: 1, created: new Date()},
		{id: 2, title: 'example 2 Title', description: 'example 2 Description', status: 0, created: new Date()},
		{id: 3, title: 'example 3 Title', description: 'example 3 Description', status: 1, created: new Date()},
		{id: 4, title: 'example 4 Title', description: 'example 4 Description', status: 1, created: new Date()}
	]
}

describe('Renders a Todo list Item Title and Description', () => {
	it('should pass', async () => {
		const item = config.items[0];
		render(
			<ToDoItem item={item} />
		);
		const e = screen.getAllByText(item.title + ' - ' + item.description);
		expect(e[0]).toBeInTheDocument();
	});
});

describe('Renders a Todo list Item Date', () => {
	it('should pass', async () => {
		const item = config.items[0];
		render(
			<ToDoItem item={item}  />
		);
		const e = screen.getAllByText( new Date(item.created.toString()).toLocaleDateString());
		expect(e[0]).toBeInTheDocument();
	});
});

