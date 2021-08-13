import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Item from './Item';
import { List,ListItem, Grid} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      /*width: '100%',*/
      maxWidth: 1500,
      backgroundColor: theme.palette.background.paper,
    },
    scroll:{
      overflow: 'scroll'
    },
  }));

function ItemList({ Items }) {
    const classes = useStyles();
    return (
      <Grid item xs={12}>
        <List className={classes.root}>
            {(Items==null || Items.length==0)? <ListItem>No hay</ListItem>:Items.map(it=><ListItem><Item item={it}/></ListItem>)}
            </List>
      </Grid>
            )
}

export default ItemList
