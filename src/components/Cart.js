import React, { useContext, useState } from 'react';
import cartContext from './CartContext';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import { Button, CardContent,CardMedia,Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  cover: {
    display: 'flex',
    flexDirection: 'column',
    width: 300,
  }
}));


const Cart = () => {

  const classes = useStyles();
  const { cart,removeItem } = useContext(cartContext);
  return (
    <>
    {cart.length>0 ? cart.map(it=>
    <Card>
    <CardContent>
    <List>
      <ListItem><Typography>{it.item.title}</Typography></ListItem>
      <ListItem><Typography>Detalles:{it.item.details}</Typography></ListItem>
      <ListItem>Precio:{it.item.price}</ListItem>
      <ListItem>Cantidad seleccionado:{it.count}</ListItem>
      <ListItem><Button onClick={() => removeItem(it.item.id)}>Borrar del carrito</Button></ListItem>
    </List>
    </CardContent>
    <CardMedia
    className={classes.cover}
    image={it.item.imgUrl}
    title="Product"/>
  </Card>
  )
  :
    <Card>
    <CardContent>
    <List>
      <ListItem><Typography>Carrito Vacio</Typography></ListItem>
      <ListItem><Typography>Su carrito esta vacio debe agregar un item</Typography></ListItem>
      <ListItem><NavLink to={{pathname:"/home"}}><Button>Volver a comprar</Button></NavLink></ListItem>
    </List>
    </CardContent>
  </Card>}
    </>
  )
}

export default Cart
