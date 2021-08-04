import { Divider, List, ListItem } from '@material-ui/core';
import React from 'react';
import Grid from '@material-ui/core/Grid';

function ItemListContainer(props) {
    return (
        <Grid>
            <List>
            <ListItem>{props.nombre}</ListItem>
            <Divider/>
            <ListItem>{props.apellido}</ListItem>
            <Divider/>
            <ListItem alignItems='center'>
            </ListItem>
        </List>
        </Grid>
        
    )
}

export default ItemListContainer
