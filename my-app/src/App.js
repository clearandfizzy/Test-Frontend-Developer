import React from "react";
import {ToDoForm} from "./components/ToDoForm";
import {ToDoList} from "./components/ToDoList";
import styled from "styled-components";

const App = (props) => {
	const {config} = props;

	const AppTitle = styled.h1`
	margin: 0 auto;
    width: max-content;
`;

	return (
		<React.Fragment>
			<AppTitle>4C Platform Frontend Technical Test</AppTitle>
			<ToDoForm />
			<ToDoList items={config.listItems}/>
		</React.Fragment>
	);
}

export default App;
