import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Item from './Item';
import { List,ListItem} from '@material-ui/core';
import Loader from './Loader';



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

function ItemList({ Items,condition}) {
    const classes = useStyles();
    return (
      
        <List className={classes.root}>
            {(Items===null || Items.length===0)? <Loader loading={condition}/>:Items.map(it=><ListItem><Item item={it}/></ListItem>)}
            </List>
      
            )
}

export default ItemList
