import React, { useState, useContext } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ItemCount from './ItemCount';
import cartContext from '../contexts/CartContext';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: 800,
    height: 350,
    margin:10,
    justifyContent:'center'
    
  },
  root2: {
    display: 'flex',
    flexDirection: 'column',
    width: 800,
    height: 150,
    margin: 10,
    justifyContent:'center'
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight:200,
    marginLeft:50
  },
  cover: {
    display: 'flex',
    flexDirection: 'column',
    width: 300,
    height:300
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  align: {
    justifyContent:'center'
  }
}));

const ItemDetail = ({ itemDet }) => {
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

    <Grid container className={classes.align}>
      <Grid container xs={8} className={classes.align}>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {itemDet.title}
              </Typography>
            </CardContent>
            <div>
              <div>
                <CardMedia
                  className={classes.cover}
                  image={itemDet.imgUrl}
                  title="Product" 
                  />
              </div>
              <div>
                <ItemCount onAdd={onAdd} stock={itemDet.stock} />
              </div>
            </div>
          </div>
        </Card>
      </Grid>
      <Grid container xs={8} className={classes.align}>
        <Card className={classes.root2}>
          <Typography variant="subtitle1 h3" color="textSecondary">
            Detalles :
          </Typography>
          <p>{itemDet.details}</p>
        </Card>
      </Grid>
    </Grid>

  );
}

export default ItemDetail
