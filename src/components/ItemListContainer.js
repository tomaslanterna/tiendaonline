import { Divider, List, ListItem } from '@material-ui/core'
import React from 'react'

function ItemListContainer(props) {
    return (
        <List>
            <ListItem>{props.nombre}</ListItem>
            <Divider/>
            <ListItem>{props.apellido}</ListItem>
        </List>
    )
}

export default ItemListContainer
