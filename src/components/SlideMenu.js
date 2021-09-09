import React from 'react';
import { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AppsIcon from '@material-ui/icons/Apps';
import { NavLink} from 'react-router-dom';

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

function SlideMenu() {
  const classes = useStyles();
  const [path,setPath]=useState('');
  const [swip, setSwipState] = useState([
    { left: false }
  ]);

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
        {['Home', 'Category'].map((text, index) => (
          <NavLink exact to={'/'+text.toLowerCase()}>
          <ListItem button key={text}>
            <ListItemIcon>{index === 0 ? <HomeIcon /> : <AppsIcon/>}</ListItemIcon>
            <ListItemText primary={text} />   
          </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

  return (
    <div>
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