import React, {useState, useContext} from 'react';
import styled from "styled-components";
import {CustomInput} from "./ToDoForm/CustomInput";
import {AppContext} from "../provider";

const Form = styled.form`
	padding: 5px;
	margin: 2px;
`;

const FieldSet = styled.fieldset`
	padding: 5px;
	margin: 2px;
	border: 1px solid grey;
`;

const Button = styled.button`
	margin: 1em;
	padding: 0.5em 1em;
	display: block;
`;

export const ToDoForm = () => {
	const [item, setItem] = useState({});

	const {dispatch} =  useContext(AppContext);

	const onChange = (key, value) => {
		setItem((prevState) => ({
			...prevState,
			[key]: value
		}));
	}

	const handleClick = () => {
		dispatch({type: "ADD", item: item});
	};

	return (
		<React.Fragment>
			<Form>
				<FieldSet>
					<legend>Add ToDo Form</legend>
					<CustomInput id={'title'} label={'Title'} value={item.title} onChange={onChange}/>
					<CustomInput id={'description'} label={'Description'} value={item.description} onChange={onChange}/>
					<Button type={'button'}
							onClick={() => handleClick()}>Add Todo</Button>
				</FieldSet>
			</Form>
		</React.Fragment>
	);
}