import React from 'react';
import { render, screen } from '@testing-library/react';
import App from "../App";

describe('Renders the App', () => {
	it('should pass', async () => {
		render(
			<App />
		);
		const e = screen.getAllByText('4C Platform Frontend Technical Test');
		expect(e[0]).toBeInTheDocument();
	});
});
