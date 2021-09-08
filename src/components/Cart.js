import React, { useContext,useState } from 'react';
import cartContext from './CartContext';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Item from './Item';
import CartWidget from './CartWidget';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme)=>({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    }
  }));


const Cart=()=>{

    const classes = useStyles();
    const {cart}=useContext(cartContext);
    const [swip, setSwipState] = useState([{ left: false }]);
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setSwipState({ ...swip, [anchor]: open });
      };
    
     const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
       
          <List>
            {cart.map((it) => (
              <ListItem>
                  <Item item={it}/>
              </ListItem>
            ))}
          </List>
        </div>
      );

    return (
        <SwipeableDrawer title="Cart">
            {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <SwipeableDrawer
            anchor={anchor}
            open={swip[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
        </SwipeableDrawer>
    )
}

export default Cart
