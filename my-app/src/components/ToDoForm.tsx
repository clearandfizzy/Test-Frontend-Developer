import React, {useState, useContext} from 'react';
import {AppContext} from "../StateProvider";
import {AppState} from "../types/AppState";
import {Button, TextField, Stack, Container} from "@mui/material";

export const ToDoForm = () => {
    const [item, setItem] = useState<AppState.TodoItem>({
        ...{}, // other properties
        dueDate: new Date() // initialize with current date
    } as AppState.TodoItem);
    const {addItem} = useContext(AppContext) as unknown as AppState.StateContext;


    const onChange = (key: string, value: any) => {
        setItem((prevState) => ({
            ...prevState,
            [key]: value
        }));
    }

    const handleClick = () => {
        addItem(item);
        setItem({...{}, dueDate: new Date()} as AppState.TodoItem); // reset with current date
    };

    return (
        <React.Fragment>
            <Container maxWidth={"sm"}>
                <Stack direction={'column'} spacing={2}>
                    <TextField id={'title'}
                               size={'medium'}
                               label={'Title'}
                               value={item?.title ?? ''}
                               onChange={(e) => onChange('title', e.target.value)}/>
                    <TextField id={'description'}
                               size={'medium'}
                               label={'Description'}
                               value={item?.description ?? ''}
                               onChange={(e) => onChange('description', e.target.value)}/>
                    <TextField id={'dueDate'}
                               type="date"
                               size={'medium'}
                               label={'Due Date'}
                               InputLabelProps={{
                                   shrink: true,
                               }}
                               value={item.dueDate.toISOString().split('T')[0]}
                               onChange={(e) => onChange('dueDate', new Date(e.target.value))}
                    />
                    <Button id={'button'}
                            size={'large'}
                            color={"success"}
                            variant={"contained"}
                            onClick={() => handleClick()}>Add Task</Button>
                </Stack>
            </Container>
        </React.Fragment>
    );
}