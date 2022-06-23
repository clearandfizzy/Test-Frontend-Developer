import React from 'react';
import {ToDoItem} from "./ToDoItem";
import styled from "styled-components";

export const ToDoList = (props) => {
	const {items} = props;

	if (!items instanceof Array)
		return (<React.Fragment>No List Items</React.Fragment>)

	if (items.length <= 0)
		return (<React.Fragment>No List Items</React.Fragment>)

	const Ol = styled.ol`
	list-style-type: none;
	`;


	return (
		<React.Fragment>
			<Ol>
				{
					items.map((i, index) => {
						return (<ToDoItem key={index} item={i}/>);
					})
				}
			</Ol>
		</React.Fragment>
	);
}