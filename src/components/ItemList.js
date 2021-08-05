import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Item from './Item';

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
            {(Items==null || Items.length==0)? <ListItem>No hay</ListItem>:Items.map(Item=><ListItem><Item item={Item}/></ListItem>)}
            </List>
            )
}

export default ItemList
