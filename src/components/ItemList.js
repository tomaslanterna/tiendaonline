import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Item from './Item';
import { List,ListItem, Grid} from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
      width: 800,
      padding: 0,
      backgroundColor: theme.palette.background.paper,
    },
    scroll:{
      overflow: 'scroll'
    },
  }));

function ItemList({ Items}) {
    const classes = useStyles();
    return (
      
        <List className={classes.root}>
            {(Items==null || Items.length==0)? <ListItem>No hay</ListItem>:Items.map(it=><ListItem><Item item={it}/></ListItem>)}
            </List>
      
            )
}

export default ItemList
