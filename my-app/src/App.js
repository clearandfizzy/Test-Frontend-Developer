import React, {useContext} from "react";
import {ToDoForm} from "./components/ToDoForm";
import {ToDoList} from "./components/ToDoList";
import styled from "styled-components";
import {AppContext} from "./context";
import {Provider} from "./provider";

const AppTitle = styled.h1`
	margin: 0 auto;
    width: max-content;
`;

const App = () => {
	return (
		<React.Fragment>
			<Provider>
				<AppTitle>4C Platform Frontend Technical Test</AppTitle>
				<ToDoForm/>
				<ToDoList/>
			</Provider>
		</React.Fragment>
	);
}

export default App;
