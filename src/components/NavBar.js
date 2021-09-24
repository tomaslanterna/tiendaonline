import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CartWidget from './CartWidget';
import SlideMenu from './SlideMenu';
import { NavLink } from 'react-router-dom';
import userContext from '../contexts/UserContext';
import tienda from '../images/Tienda.png';
import { Button, Grid } from '@material-ui/core';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom:70
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 7,
    width: 45,
  }
}));

const NavBar = () => {
  const classes = useStyles();
  const { userLogin, Logout } = useContext(userContext);
  const history = useHistory();

  const SignOut = () => {
    Logout();
    return history.push("/");
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container spacing={6}>
            <Grid item xs={1}>
              <SlideMenu />
            </Grid>
            <Grid item xs={9}>
              <NavLink to={{ pathname: "/home" }}><img className={classes.title} src={tienda} alt="Tienda Online" /></NavLink>
            </Grid>
            <Grid item xs={2}>
              {(Object.entries(userLogin).length !== 0) ?
                <>
                  <Button size="small"
                    variant="contained"
                    color="primary"
                    onClick={SignOut}>
                    Logout
                  </Button>
                  <NavLink exact to={"/cart"}>
                    <CartWidget />
                  </NavLink>
                </>
                :
                <>
                </>
              }
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar
