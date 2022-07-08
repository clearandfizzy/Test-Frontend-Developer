import React from 'react';
import { render, screen } from '@testing-library/react';
import {ToDoForm} from "../../components/ToDoForm";

describe('Renders the Title input', () => {
	it('should pass', async () => {
		render(
			<ToDoForm />
		);
		const e = screen.getAllByLabelText('Title');
		expect(e[0]).toBeInTheDocument();
	});
});

describe('Renders the Description input', () => {
	it('should pass', async () => {
		render(
			<ToDoForm />
		);
		const e = screen.getAllByLabelText('Description');
		expect(e[0]).toBeInTheDocument();
	});
});
