import { useState, useEffect, useContext } from 'react';
import userContext from '../contexts/UserContext';
import {Button,ButtonGroup,Popover,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    flexDirection: 'row',
    height: 25
  },
  pop:{
    padding:5
  },
  butt:{
    justifyContent:'start'
  }


}));

const ItemCount = ({ stock, onAdd }) => {
  const classes = useStyles();
  const [cont, setCont] = useState(0);
  const stock1 = parseInt(stock);
  const { userLogin } = useContext(userContext);
  const [anchorEl,setanchorEl]=useState(null);


  useEffect(() => {
    setCont(0);
  }, []);

  const handleOpen=(event)=>{
    setanchorEl(event.currentTarget);
  }

  const handleClose=()=>{
    setanchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (

    <div className={classes.root}>
      <span>{cont}</span>
      <ButtonGroup className="ms-2" size="small" disableElevation variant="outlined" color="primary">
        {(cont === 0) ? <Button disabled="true">-</Button> : <Button onClick={() => setCont(cont - 1)}>-</Button>}
        {(cont === stock1) ?
          <ButtonGroup className={classes.butt} size="small" disableElevation variant="outlined" color="primary">
            <Button  onClick={handleOpen}>+</Button>
            <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}>
              <Typography className={classes.pop}>No hay mas stock</Typography>
            </Popover>
          </ButtonGroup>
          :
          <Button onClick={() => setCont(cont + 1)}>+</Button>}
      </ButtonGroup>
      {(Object.entries(userLogin).length !== 0) ?
        <Button size="small" variant="contained" color="primary" onClick={() => onAdd(cont)}>Agregar al Carrito</Button>
        :
        <Button size="small" variant="contained" color="primary" disabled="true">Agregar al Carrito</Button>
      }


    </div>

  );
}

export default ItemCount
