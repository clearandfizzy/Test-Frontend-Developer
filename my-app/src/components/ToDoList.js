import React, {useContext} from 'react';
import styled from "styled-components";
import {ToDoItem} from "./ToDoItem";
import {AppContext} from "../provider";

const Ol = styled.ol`
	list-style-type: none;
	`;

export const ToDoList = () => {
	const {items} = useContext(AppContext);

	return (
		<React.Fragment>
			<h1>test</h1>
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