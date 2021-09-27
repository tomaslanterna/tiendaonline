import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { Badge } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import cartContext from '../contexts/CartContext';

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

const CartWidget=() =>{
    const {cart}=useContext(cartContext);
    return (
        <>
            <Button color="inherit">
                <img src={"https://firebasestorage.googleapis.com/v0/b/tiendaonline-ad1a6.appspot.com/o/cart4.png?alt=media&token=8bd4b699-9210-41ce-a860-b1daaa76f351"} alt="Cart"/>
                <StyledBadge badgeContent={cart.length} color="secondary"></StyledBadge>
            </Button>
        </>
    )
}

export default CartWidget
