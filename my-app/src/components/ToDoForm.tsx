import React, {useState, useContext} from 'react';
import {AppContext} from "../StateProvider";
import {AppState} from "../types/AppState";
import {Button, TextField, Stack, Container} from "@mui/material";

export const ToDoForm = () => {
    const [item, setItem] = useState<AppState.TodoItem>({} as AppState.TodoItem);
    const {addItem} = useContext(AppContext) as unknown as AppState.StateContext;

    const onChange = (key: string, value: any) => {
        setItem((prevState) => ({
            ...prevState,
            [key]: value
        }));
    }

    const handleClick = () => {
        addItem(item);
        setItem({} as AppState.TodoItem);
    };

    return (
        <React.Fragment>
            <Container maxWidth={"sm"}>
                <Stack direction={'column'} spacing={2}>
                    <TextField id={'title'}
                               label={'Title'}
                               value={item?.title ?? ''}
                               onChange={(e) => onChange('title', e.target.value)}/>
                    <TextField id={'description'}
                               label={'Description'}
                               value={item?.description ?? ''}
                               onChange={(e) => onChange('description', e.target.value)}/>
                    <Button size={"large"}
                            variant={"contained"}
                            onClick={() => handleClick()}>Add Task</Button>
                </Stack>
            </Container>
        </React.Fragment>
    );
}