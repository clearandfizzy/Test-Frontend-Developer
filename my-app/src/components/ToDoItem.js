import React, {useContext} from 'react';
import styled from "styled-components";
import {AppContext} from '../provider';

const Button = styled.button`
	padding: 0.5em;
	margin: 0 1em;
`;

const Li = styled.li`
	padding: 0.5em;
	margin: 0.25em
`;

const Td = styled.td`
	text-decoration: ${props => props.solved === true ? 'line-through;' : 'none'};
`;

export const ToDoItem = (props) => {
	const {item} = props;

	const {dispatch} = async() => {
		return await useContext(AppContext);
	}

	const handleClick = () => {
		dispatch({type: "SOLVED", id: item.id});
	};

	return (
		<React.Fragment>
			<Li>
				<table>
					<tbody>
					<tr>
						<td><Button onClick={() => handleClick()} disabled={item.status === 1}>Solved</Button></td>
						<Td solved={item.status === 1}>{new Date(item.created.toString()).toLocaleDateString()}</Td>
						<Td solved={item.status === 1}>{item.title} - {item.description}</Td>
					</tr>
					</tbody>
				</table>
			</Li>
		</React.Fragment>
	);
}