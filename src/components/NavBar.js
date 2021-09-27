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
import { Button, Grid,IconButton } from '@material-ui/core';
import { useHistory } from 'react-router';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


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
  },
  align:{
    justifyContent:'center'
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
            <Grid item xs={2} justifyContent="start">
              <SlideMenu />
            </Grid>
            <Grid item xs={8} className={classes.align}>
              <NavLink to={{ pathname: "/" }}><img className={classes.title} src={tienda} alt="Tienda Online" /></NavLink>
            </Grid>
            <Grid item xs={2}>
              {(Object.entries(userLogin).length !== 0) ?
                <>
                <IconButton onClick={SignOut}>
                  <ExitToAppIcon/>
                </IconButton>
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
