import React from 'react';
import { render, screen } from '@testing-library/react';
import {ToDoForm} from "../../components/ToDoForm";

describe('Renders the App', () => {
	it('should pass', async () => {
		render(
			<ToDoForm />
		);
		const e = screen.getAllByText('New Todo');
		expect(e[0]).toBeInTheDocument();
	});
});
