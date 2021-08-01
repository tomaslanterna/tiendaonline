import React from 'react'
import carrito from '../images/cart4.png'
import { Button } from '@material-ui/core';
import { Badge } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

function CartWidget() {
    return (
        <>
            <Button color="inherit">
                <img src={carrito} alt=""/>
                <StyledBadge badgeContent={4} color="secondary"></StyledBadge>
            </Button>
        </>
    )
}

export default CartWidget
