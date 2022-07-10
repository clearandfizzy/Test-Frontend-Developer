import React from 'react';
import {render, screen, fireEvent, getByTestId} from '@testing-library/react';
import {ToDoForm} from "../../components/ToDoForm";
import {StateProvider} from "../../StateProvider";

describe('Renders the Title input', () => {
	it('should pass', async () => {
		render(
			<ToDoForm/>
		);
		const e = screen.getAllByLabelText('Title');
		expect(e[0]).toBeInTheDocument();
	});
});

describe('Renders the Description input', () => {
	it('should pass', async () => {
		render(
			<ToDoForm/>
		);
		const e = screen.getAllByLabelText('Description');
		expect(e[0]).toBeInTheDocument();
	});
});

describe('Change value of the title input', () => {
	it('should pass', async () => {
		render(
			<ToDoForm/>
		);
		const e = screen.getAllByLabelText('Title');
		const value = 'a new value';
		fireEvent.change(e[0], {target: {value: value}});
		expect(e[0].value).toBe(value);
	})
});

describe('Change value of the description input', () => {
	it('should pass', async () => {
		render(
			<ToDoForm/>
		);
		const e = screen.getAllByLabelText('Description');
		const value = 'a new value';
		fireEvent.change(e[0], {target: {value: value}});
		expect(e[0].value).toBe(value);
	})
});

describe('Submit Form', () => {
	it('should pass', async () => {
		render(
			<StateProvider>
				<ToDoForm/>
			</StateProvider>
		);

		const addTask = screen.getByText('Add Task');
		fireEvent.click(addTask);

		const title = screen.getByLabelText('Title');
		expect(title.value).toBe('');

		const desc = screen.getByLabelText('Description');
		expect(desc.value).toBe('');
	})
});

