import React from "react";
import {ToDoForm} from "./components/ToDoForm";
import {ToDoList} from "./components/ToDoList";
import {StateProvider} from "./StateProvider";
import {Container, Divider} from "@mui/material";
import {CustomAppBar} from "./components/AppBar";

const App = () => {
    return (
        <StateProvider>
            <CustomAppBar />
            <Container maxWidth={"sm"}>
                <h1>Type Script Technical Test (Todo List)</h1>
                <ToDoForm/>
                <Divider sx={{mt: 4, mb: 1}}/>
                <ToDoList/>
            </Container>
        </StateProvider>
    );
}

export default App;
