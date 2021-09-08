import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CartWidget from './CartWidget';
import SlideMenu from './SlideMenu';
import Prueba from './Prueba';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 7,
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <SlideMenu />
          <Typography variant="h6" className={classes.title}>
            <NavLink to={{ pathname: "/home" }}>Tienda Online</NavLink>
          </Typography>
          <NavLink exact to={"/cart"}>
            <CartWidget />
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar
