import React from 'react';
import { render, screen } from '@testing-library/react';
import {ToDoItem} from "../../components/ToDoItem";

const config = {
	item: {
		title: 'Example Title',
		description: 'Example Description',
		date: new Date()
	}
}

describe('Renders a Todo list Item Title', () => {
	it('should pass', async () => {
		render(
			<ToDoItem item={config.item.title} />
		);
		const e = screen.getAllByText(config.title);
		expect(e).toBeInTheDocument();
	});
});

describe('Renders a Todo list Item Description', () => {
	it('should pass', async () => {
		render(
			<ToDoItem item={config.item.description} />
		);
		const e = screen.getAllByText(config.item.description);
		expect(e).toBeInTheDocument();
	});
});

describe('Renders a Todo list Item Date', () => {
	it('should pass', async () => {
		render(
			<ToDoItem item={config.item.date}  />
		);
		const e = screen.getAllByText(config.item.date);
		expect(e).toBeInTheDocument();
	});
});

