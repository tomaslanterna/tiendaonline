import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Item from './Item';
import { List,ListItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

function ItemList({ Items }) {
    const classes = useStyles();
    return (
        <List className={classes.root}>
            {(Items==null || Items.length==0)? <ListItem>No hay</ListItem>:Items.map(it=><ListItem><Item item={it}/></ListItem>)}
            </List>
            )
}

export default ItemList
