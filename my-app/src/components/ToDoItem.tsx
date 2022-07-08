import React, {useContext} from 'react';
import {IconButton, ListItem, ListItemText} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import {AppContext} from '../StateProvider';
import {AppState} from "../types/AppState";

export const ToDoItem = (props: {
    item: AppState.TodoItem;
}) => {
    const {item} = props;
    const {solveItem} = useContext(AppContext) as unknown as AppState.StateContext;

    const onClickDeleteButton = () => {
        solveItem(item.id);
    };

    const formattedDate = new Date(item.created.toString()).toLocaleDateString();

    return (
        <React.Fragment>
            <ListItem secondaryAction={
                <IconButton edge="end"
                            aria-label="delete"
                            onClick={() => onClickDeleteButton()}
                            disabled={item.status === AppState.STATUS.solved}>
                    <DeleteIcon/>
                </IconButton>}>
                <ListItemText sx={{textDecoration: item.status === AppState.STATUS.solved ? "line-through" : 'inherit'}}
                              primary={item.title + " - " + item.description}
                              secondary={formattedDate ? formattedDate : ''}/>
            </ListItem>
        </React.Fragment>
    );
}