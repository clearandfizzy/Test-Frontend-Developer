import React from 'react';
import styled from "styled-components";

const Label = styled.label`
	display: block;
`;
const Input = styled.input`
	padding: 5px;
	margin: 2px;
`;

export const CustomInput = (props) => {
	const {id, label, value, onChange} = props;

	return (
		<React.Fragment>
			<Label htmlFor={id}>{label}:</Label>
			<Input type="text"
						 id={id}
						 name={id}
						 value={value ?? ''}
						 onChange={(e) => onChange(id, e.target.value)}
			/>
		</React.Fragment>);
}