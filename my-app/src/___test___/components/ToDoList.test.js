import React from 'react';
import {render, screen} from '@testing-library/react';
import {ToDoList} from "../../components/ToDoList";

const config = {
	listItems: [
		{id: 1, title: 'example 1 Title', description: 'example 1 Description', solved: false, created: new Date()},
		{id: 2, title: 'example 2 Title', description: 'example 2 Description', solved: false, created: new Date()},
		{id: 3, title: 'example 3 Title', description: 'example 3 Description', solved: false, created: new Date()},
		{id: 4, title: 'example 4 Title', description: 'example 4 Description', solved: false, created: new Date()}
	]
}

describe('Renders List Item title', () => {
	it('should pass', async () => {
		render(
			<ToDoList listItems={config.listItems}/>
		);
		const e = screen.getAllByText(config.listItems[0].title);
		expect(e).toBeInTheDocument();
	});
});

describe('Renders List Item Description', () => {
	it('should pass', async () => {
		render(
			<ToDoList listItems={config.listItems}/>
		);
		const e = screen.getAllByText(config.listItems[0].description);
		expect(e).toBeInTheDocument();
	});
});

describe('Renders List Item Date', () => {
	it('should pass', async () => {
		render(
			<ToDoList listItems={config.listItems}/>
		);
		const e = screen.getAllByText(config.listItems[0].created);
		expect(e).toBeInTheDocument();
	});
});



