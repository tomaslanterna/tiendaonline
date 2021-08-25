import React from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ItemCount from './ItemCount';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: 850,
    height: 300,
    marginTop:10
  },
  root2: {
    display: 'flex',
    flexDirection: 'column',
    width: 850,
    height: 150,
    marginTop:10
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  cover: {
    display: 'flex',
    flexDirection: 'column',
    width: 300,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  count: {
    height: 300,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }
}));

function ItemDetail({ itemDet }) {
  const classes = useStyles();


  return (

    <div>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {itemDet.title}
            </Typography>
          </CardContent>
          <CardMedia
            className={classes.cover}
            image={itemDet.url}
            title="Product" />
            <div className={classes.count}>
            <ItemCount stock="4" initial="2" />
            </div>
        </div>
      </Card>
      <Card className={classes.root2}>
        <Typography variant="subtitle1" color="textSecondary">
          <h3>Detalles :</h3>
        </Typography>
        <p>{itemDet.details}</p>
      </Card>
    </div>

  );
}

export default ItemDetail
