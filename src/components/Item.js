import React, { useState,useContext} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PS5 from '../images/PS5.jpg';
import ItemCount from './ItemCount';
import { NavLink } from 'react-router-dom';
import cartContext from './CartContext';

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
    width: 200,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

function Item({ item }) {
  const classes = useStyles();
  const [cant, setCant] = useState(0);
  const {addItem}=useContext(cartContext);
  console.log(item);


  const onAdd=(cant)=>{
    setCant(cant);
    addItem(item);
    }


  return (

    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <NavLink activeClassName="active" to={{ pathname: "/item-details/" + item.id }}>
            <Typography component="h5" variant="h5">
              {item.title}
            </Typography>
          </NavLink>
          <Typography variant="subtitle1" color="textSecondary">
            Precio : {item.price}
          </Typography>
          <ItemCount onAdd={onAdd}/>
        </CardContent>
        <CardMedia
          className={classes.cover}
          image={item.imgUrl}
          title="Product" />
      </div>


    </Card>

  );
}

export default Item
