import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ItemCount from './ItemCount';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

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
  const [showButton, setShowButton] = useState(false);

  const onAdd=(cant)=>{
    setShowButton(true);
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
            image={itemDet.url}
            title="Product" />
            {showButton ? <Button><NavLink exact to={"/cart"}>Finalizar Compra</NavLink></Button> :
            <div className={classes.count}>
            <ItemCount stock="4" initial="2" onAdd={onAdd}/>
            </div>}
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
