import React, {useContext} from 'react';
import {ToDoItem} from "./ToDoItem";
import styled from "styled-components";
import {AppContext} from '../context';

export const ToDoList = () => {
	const [appState] = useContext(AppContext);

	if (!appState.listItems instanceof Array)
		return (<React.Fragment>No List Items</React.Fragment>)

	if (appState.listItems.length <= 0)
		return (<React.Fragment>No List Items</React.Fragment>)

	const Ol = styled.ol`
	list-style-type: none;
	`;

	return (
		<React.Fragment>
			<Ol>
				{
					appState.listItems.map((i, index) => {
						return (<ToDoItem key={index} item={i}/>);
					})
				}
			</Ol>
		</React.Fragment>
	);
}