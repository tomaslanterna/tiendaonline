import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Accordion from '@material-ui/core/Accordion';
import { Toolbar, IconButton, Typography, Button, MenuItem,Menu } from '@material-ui/core';
import {MenuIcon} from "@material-ui/icons/Menu";
import * as Mui from '@material-ui/core';
import CartWidget from './CartWidget';





function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton>
                    <Menu/>
                </IconButton>
                <Typography variant="h6" /*className={classes.title}*/>
                    Tienda Online
                </Typography>
                <Button color="inherit">Login</Button>
                <Button color="inherit">Catalogo de Productos</Button>
                <Button color="inherit">Mis Compras</Button>
                <CartWidget/>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
