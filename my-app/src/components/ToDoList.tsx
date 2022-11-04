import React, {useContext} from 'react';
import {ToDoItem} from "./ToDoItem";
import {AppContext} from "../StateProvider";
import {List} from "@mui/material";
import {AppState} from "../types/AppState";

export const ToDoList = () => {
    const {items} = useContext(AppContext) as unknown as AppState.StateContext;

    if (items.length < 1)
        return (<React.Fragment></React.Fragment>);

    return (
        <React.Fragment>
            <List>
                {
                    items.map((i, index) => {
                        return (<ToDoItem key={index} item={i}/>);
                    })
                }
            </List>
        </React.Fragment>
    );
}
