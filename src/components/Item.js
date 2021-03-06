import React, { useState, useContext } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ItemCount from './ItemCount';
import { NavLink } from 'react-router-dom';
import cartContext from '../contexts/CartContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    width: 900,
    height: 150
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    display: 'flex',
    flexDirection: 'row',
    width: 170,
    margin:5
  },
  cover2:{
    width:'100%'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  link:{
    outline:'none',
    textDecoration:'none',
  },
  font:{
    fontFamily:'Stick No Bills',
    color:'black'
  }
}));

const Item=({ item })=>{
  const classes = useStyles();
  const [cant, setCant] = useState(0);
  const { addItem } = useContext(cartContext);



  const onAdd = (cant) => {
    if (cant <= 0) {
      return alert("No se puede agregar item neutro o negativo")
    } else {
      setCant(cant);
      addItem({ count: cant, item: item });
    }
  }


  return (

    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <NavLink className={classes.link} activeClassName="active" to={{ pathname: "/item-details/" + item.id }}>
            <Typography component="h5" variant="h5" className={classes.font}>
              {item.title}
            </Typography>
          </NavLink>
          <Typography variant="subtitle1" color="textSecondary">
            Precio : {item.price}
          </Typography>
          <ItemCount onAdd={onAdd} stock={item.stock}/>
        </CardContent>
        <div className={classes.cover}>
        <img src={item.imgUrl} className={classes.cover2}/>
        </div>
      </div>


    </Card>

  );
}

export default Item
