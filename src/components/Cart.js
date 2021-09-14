import React, { useContext, useState } from 'react';
import cartContext from './CartContext';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import { Button, CardContent,CardMedia,Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { collection, addDoc,Timestamp } from "firebase/firestore";
import { getData } from '../firebase';
import { FormControl,TextField } from '@material-ui/core';


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

const getTotal=(cart)=>{
  let total=0;
  cart.forEach(it=>{
    total+=(it.item.price*it.count);
  });
  return total;
}



const Cart = () => {

  const classes = useStyles();
  const { cart,removeItem } = useContext(cartContext);
  const [user,setUser]=useState({});

  const handleBuy= async()=>{
    const db=getData();
    const orderCollection=collection(db,'orders');
    const orderRef=await addDoc(orderCollection,{
      buyer:user,
      items:cart,
      date:Timestamp.fromDate(new Date()),
      total:getTotal(cart)
    });
  }

  const ListCartItems=({list})=>{
    return(list.map(it=>
      <Card>
      <CardContent>
      <List>
        <ListItem><Typography>{it.item.title}</Typography></ListItem>
        <ListItem><Typography>Detalles:{it.item.details}</Typography></ListItem>
        <ListItem>Precio:{it.item.price}</ListItem>
        <ListItem>Cantidad seleccionado:{it.count}</ListItem>
        <ListItem><Button onClick={() => removeItem(it.item.id)}>Borrar del carrito</Button></ListItem>
      </List>
      <CardMedia
      className={classes.cover}
      image={it.item.imgUrl}
      title="Product"/>
      </CardContent>
    </Card>));
  }
  return (
    <>
    {cart.length>0 ? 
    <>
    <ListCartItems list={cart}/>
    <Typography>Total a pagar: {getTotal(cart)}</Typography>
    <Button onClick={handleBuy}>Finalizar Compra</Button>
    </>
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
