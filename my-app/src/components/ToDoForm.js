import React from 'react';
import styled from "styled-components";


export const ToDoForm = (props) => {

	const Label = styled.label`
	display: block;
`;
	const Input = styled.input`
	padding: 5px;
	margin: 2px;
`;
	const Form = styled.form`
	padding: 5px;
	margin: 2px;
`;
	const FieldSet = styled.fieldset`
	padding: 5px;
	margin: 2px;
	border: 1px solid grey;
`;

	const legend = styled.legend`
`;

	return (
		<React.Fragment>
			<Form>
				<FieldSet>
					<legend>Add ToDo Form</legend>
					<Label htmlFor="title">Title:</Label>
					<Input type="text" id="title" name="title"/>
					<Label htmlFor="description">Description:</Label>
					<Input type="text" id="description" name="description"/>
				</FieldSet>
			</Form>
		</React.Fragment>
	);
}