import React, { useContext, useState } from 'react';
import cartContext from './CartContext';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import { Button, CardContent, CardMedia, Typography } from '@material-ui/core';
import { NavLink,useHistory } from 'react-router-dom';
import { collection, addDoc, Timestamp, getDocs, query} from "firebase/firestore";
import { getData } from '../firebase';
import { FormControl, TextField } from '@material-ui/core';


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

const getTotal = (cart) => {
  let total = 0;
  cart.forEach(it => {
    total += (it.item.price * it.count);
  });
  return total;
}



const Cart = () => {

  const history=useHistory();
  const classes = useStyles();
  const db = getData();
  const { cart, removeItem,cleanCart } = useContext(cartContext);
  const [user, setUser] = useState({
    name: 'Tomas',
    surname: 'Lanterna',
    email: 'tomaslanterna@gmail.com'
  });


  const getOrderId = async () => {
    const orderRef = collection(db, 'orders');
    const orderQuery = query(orderRef);
    try {
      const orderSnapshot = await getDocs(orderQuery);
      const orders = orderSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      alert("Orden realizada, id :"+orders[0].id);
      return history.push("/");
    } catch (e) {
      console.log(e);
      return alert("Error a realizar la orden");
    }
  }

  const handleBuy = async () => {

    const orderCollection = collection(db, 'orders');
    const orderRef = await addDoc(orderCollection, {
      buyer: user,
      items: cart,
      date: Timestamp.fromDate(new Date()),
      total: getTotal(cart)
    });
    cleanCart();
    getOrderId();
  }

  const ListCartItems = ({ list }) => {
    return (list.map(it =>
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
            title="Product" />
        </CardContent>
      </Card>));
  }
  return (
    <>
      {cart.length > 0 ?
        <>
          <ListCartItems list={cart} />
          <Typography>Total a pagar: {getTotal(cart)}</Typography>
          <NavLink to={{ pathname: "/"}}><Button onClick={handleBuy}>Finalizar Compra</Button></NavLink>
        </>
        :
        <Card>
          <CardContent>
            <List>
              <ListItem><Typography>Carrito Vacio</Typography></ListItem>
              <ListItem><Typography>Su carrito esta vacio debe agregar un item</Typography></ListItem>
              <ListItem><NavLink to={{ pathname: "/home" }}><Button>Volver a comprar</Button></NavLink></ListItem>
            </List>
          </CardContent>
        </Card>}
    </>
  )
}

export default Cart
