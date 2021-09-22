import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CartWidget from './CartWidget';
import SlideMenu from './SlideMenu';
import { NavLink } from 'react-router-dom';
import userContext from '../contexts/UserContext';
import tienda from '../images/Tienda.png';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 7,
    width:45,
  }
}));

const NavBar=()=>{
  const classes = useStyles();
  const {userLogin}=useContext(userContext);
  console.log(userLogin);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={6}>
          <Grid item xs={1}>
            <SlideMenu />
            </Grid>
          <Grid item xs={10}>
            <NavLink to={{ pathname: "/home" }}><img className={classes.title} src={tienda} alt="Tienda Online"/></NavLink>
          </Grid>
          <Grid item xs={1}>
          {(Object.entries(userLogin).length!==0) ?
            <NavLink exact to={"/cart"}>
            <CartWidget />
          </NavLink>
          :
          <>
          </>
          }
          </Grid>
          </Grid>
          
          <div className={classes.alin}>
          
          </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar
