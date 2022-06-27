import React from "react";
import styled from "styled-components";
import {ToDoForm} from "./components/ToDoForm";
import {ToDoList} from "./components/ToDoList";
import {Provider} from "./provider";

const AppTitle = styled.h1`
	margin: 0 auto;
    width: max-content;
`;

const App = () => {
	return (
		<Provider>
			<AppTitle>4C Platform Frontend Technical Test</AppTitle>
			<ToDoForm/>
			<ToDoList/>
		</Provider>
	);
}

export default App;
