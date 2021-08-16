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
    },
    details: {
      display: 'flex',
      flexDirection: 'row',
      width: 1500,
      height:150
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      display: 'flex',
      flexDirection: 'row',
      width: 200,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
  }));

function ItemDetail({itemDet}) {
    const classes = useStyles();
  

  return (

    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {itemDet.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Detalles : {itemDet.details}
          </Typography>
        </CardContent>
        <CardMedia
        className={classes.cover}
        image={itemDet.url}
        title="Product"/>
        <ItemCount stock="4" initial="2"/>
      </div>
      

    </Card>

  );
}

export default ItemDetail
