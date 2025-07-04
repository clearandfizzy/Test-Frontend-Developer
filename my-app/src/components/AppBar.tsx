import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

export const CustomAppBar = () => {

    return (<AppBar position="static">
        <Toolbar>
            <IconButton
                size="medium"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{mr: 2}}>
                <MenuIcon/>
            </IconButton>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                Demo
            </Typography>
        </Toolbar>
    </AppBar>);
}