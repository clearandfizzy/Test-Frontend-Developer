import React, {useContext} from 'react';
import {ToDoItem} from "./ToDoItem";
import {AppContext} from "../StateProvider";
import {List} from "@mui/material";

export const ToDoList = () => {
    const {items} = useContext(AppContext);

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
