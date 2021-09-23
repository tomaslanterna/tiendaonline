import React, { useContext, useState,useEffect } from 'react';
import cartContext from '../contexts/CartContext';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import { Button, CardContent, CardMedia, Typography } from '@material-ui/core';
import { NavLink, useHistory } from 'react-router-dom';
import { collection, addDoc, Timestamp, getDocs, query, where } from "firebase/firestore";
import { getData } from '../firebase';
import userContext from '../contexts/UserContext';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: 8
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    width: 900,
    height: 250
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    display: 'flex',
    flexDirection: 'row',
    width: 150,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  button: {
    size: "small",
    variant: "contained",
    color: "primary"
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

  const history = useHistory();
  const classes = useStyles();
  const db = getData();
  const { cart, removeItem, cleanCart } = useContext(cartContext);
  const { userLogin } = useContext(userContext);
  const [user] = useState(userLogin);

  useEffect(() => {
    if(Object.entries(userLogin).length===0){
      return history.push("/");
    }
    
  }, [])


  const handleBuy = async () => {

    try {
      const orderCollection = collection(db, 'orders');
      const orderRef = await addDoc(orderCollection, {
        buyer: user.email,
        items: cart,
        date: Timestamp.fromDate(new Date()),
        total: getTotal(cart)
      }).then((order) => {
        alert("El id de la orden es: " + order.id);
      });
      cleanCart();
      return history.push("/");
    } catch (e) {
      console.log(e);
      return alert("Error al realizar la orden.")
    }
  }

  const ListCartItems = ({ list }) => {
    return (list.map(it =>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <List>
              <ListItem><Typography>{it.item.title}</Typography></ListItem>
              <ListItem><Typography>Detalles:{it.item.details}</Typography></ListItem>
              <ListItem>Precio:{it.item.price}</ListItem>
              <ListItem>Cantidad seleccionado:{it.count}</ListItem>
              <ListItem><Button size="small"
                variant="contained"
                color="primary"
                disableElevation
                onClick={() => removeItem(it.item.id)}>
                Borrar del carrito
              </Button>
              </ListItem>
            </List>
          </CardContent>
          <CardMedia
            className={classes.cover}
            image={it.item.imgUrl}
            title="Product" />
        </div>

      </Card>));
  }
  return (
    <>
      <Typography>Estas comprando como {user.email}</Typography>
      {cart.length > 0 ?
        <>
          <ListCartItems list={cart} />
          <Typography>Total a pagar: {getTotal(cart)}</Typography>
          <NavLink to={{ pathname: "/" }}>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={handleBuy}>
              Finalizar Compra
            </Button>
          </NavLink>
        </>
        :
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <List>
                <ListItem><Typography>Carrito Vacio</Typography></ListItem>
                <ListItem><Typography>Su carrito esta vacio debe agregar un item</Typography></ListItem>
                <ListItem><NavLink to={{ pathname: "/home" }}>
                  <Button size="small"
                    variant="contained"
                    color="primary">
                    Volver a comprar
                  </Button>
                </NavLink>
                </ListItem>
              </List>
            </CardContent>
          </div>
        </Card>}
    </>
  )
}

export default Cart
