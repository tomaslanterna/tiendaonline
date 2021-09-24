import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ItemCount from './ItemCount';
import cartContext from '../contexts/CartContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: 850,
    height: 300,
    marginTop: 10
  },
  root2: {
    display: 'flex',
    flexDirection: 'column',
    width: 850,
    height: 150,
    marginTop: 10
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
    marginTop:150
  }
}));

const ItemDetail=({ itemDet })=>{
  const classes = useStyles();
  const [cant, setCant] = useState(0);
  const { addItem } = useContext(cartContext);

  const onAdd = (cant) => {
    if (cant <= 0) {
      return alert("No se puede agregar item neutro o negativo")
    } else {
      setCant(cant);
      addItem({ count: cant, item: itemDet });
    }
  }


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
            image={itemDet.imgUrl}
            title="Product" />
            <div className={classes.count}>
            <ItemCount onAdd={onAdd} stock={itemDet.stock}/>
            </div>
        </div>
      </Card>
      <Card className={classes.root2}>
        <Typography variant="subtitle1 h3" color="textSecondary">
          Detalles :
        </Typography>
        <p>{itemDet.details}</p>
      </Card>
    </div>

  );
}

export default ItemDetail
