import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import Item from './Item';
import { List, ListItem } from '@material-ui/core';
import Loader from './Loader';



const useStyles = makeStyles((theme) => ({
  root: {
    width: 800,
    padding: 0,
    backgroundColor: theme.palette.background.paper,
  },
  scroll: {
    overflow: 'scroll'
  },
  align:{
    justifyContent:'center'
  }
}));

const ItemList = ({ Items, condition }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.align}>
      <List className={classes.root}>
        {(Items === null || Items.length === 0) ? <Loader loading={condition} /> : Items.map(it => <ListItem><Item item={it} /></ListItem>)}
      </List>
    </Grid>
  )
}

export default ItemList
