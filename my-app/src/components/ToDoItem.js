import React from 'react';
import styled from "styled-components";

export const ToDoItem = (props) => {
	const {item} = props;
	// const [dispatch] = useReducer(reducer, {}, useContext(AppContext));

	const handleClick = () => {
		// dispatch({type: "COMPLETE", id: item.id});
	};

	const Button = styled.button`
	padding: 0.5em;
	margin: 0 1em;
`;

	const Li = styled.li`
	padding: 0.5em;
	margin: 0.25em
`;

	return (
		<React.Fragment>
			<Li>
				<table>
					<tbody>
					<tr>
						<td><Button onClick={() => handleClick()}>Solved</Button></td>
						<td>{new Date(item.date.toString()).toLocaleDateString()}</td>
						<td>{item.title} - {item.description}</td>
					</tr>
					</tbody>
				</table>
			</Li>
		</React.Fragment>
	);
}