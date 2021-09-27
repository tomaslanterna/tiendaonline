import React, { useState,useContext } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import { NavLink} from 'react-router-dom';
import userContext from '../contexts/UserContext';
import { LockOpen,VpnKey } from '@material-ui/icons';

const useStyles = makeStyles((theme)=>({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  align:{
    justifyContent:'start',
    width:100
  }
}));

const SlideMenu=()=>{
  const classes = useStyles();
  const [swip, setSwipState] = useState([
    { left: false }
  ]);
  const {userLogin}=useContext(userContext);

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
   {(Object.entries(userLogin).length!==0) ?
   <List>
   {['Home','Category'].map((text, index) => (
     <NavLink exact to={'/'+text.toLowerCase()}>
     <ListItem button key={text}>
       <ListItemIcon>{index === 0 ? <HomeIcon /> : <AppsIcon/>}</ListItemIcon>
       <ListItemText primary={text} />   
     </ListItem>
     </NavLink>
   ))}
 </List>
   :
   <List>
    {['Home','Category','SignUp','SignIn'].map((text, index) => (
      <NavLink exact to={'/'+text.toLowerCase()}>
      <ListItem button key={text}>
        <ListItemIcon>{index === 0 ? <HomeIcon /> : index === 1 ? <AppsIcon /> :index === 2 ? <VpnKey /> :<LockOpen/>}</ListItemIcon>
        <ListItemText primary={text} />   
      </ListItem>
      </NavLink>
    ))}
  </List> 
   }
    </div>
  );

  return (
    <div className={classes.align}>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </IconButton>
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
    </div>
  );
}

export default SlideMenu