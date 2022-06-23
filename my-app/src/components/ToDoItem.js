import React from 'react';
import styled from "styled-components";

export const ToDoItem = (props) => {
	const {item} = props;

	const handleSolved = () => {

	}

	const Button = styled.button`
	padding: 0.5em;
	margin: 0 1em;
`;

	const Li = styled.li`
	padding: 0.5em;
	margin: 0.25em
`;

	const Td = styled.td`
	`;

	return (
		<React.Fragment>
			<Li>
				<table>
					<tbody>
					<tr>
						<Td><Button onClick={() => handleSolved()}>Solved</Button></Td>
						<Td>{new Date(item.date.toString()).toLocaleDateString()}</Td>
						<Td>{item.title} - {item.description}</Td>
					</tr>
					</tbody>
				</table>
			</Li>
		</React.Fragment>
	);
}