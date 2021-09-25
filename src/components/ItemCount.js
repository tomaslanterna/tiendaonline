import { useState, useEffect, useContext } from 'react';
import userContext from '../contexts/UserContext';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';

const useStyles = makeStyles((theme) => ({
  
  root: {
    display: 'flex',
    flexDirection: 'row',
    height:25
  }


}));

const ItemCount=({ stock, onAdd})=>{
  const classes = useStyles();
  const [cont, setCont] = useState(0);
  const stock1 = parseInt(stock);
  const{userLogin}=useContext(userContext);
  
  useEffect(() => {
    setCont(0);
    
  }, []);
  return (

    <div className={classes.root}>
        <span>{cont}</span>
        <ButtonGroup className="ms-2"size="small" disableElevation variant="outlined" color="primary">
          {(cont === 0) ? <Button disabled="true">-</Button> : <Button onClick={() => setCont(cont - 1)}>-</Button>}
          {(cont === stock1) ? <Button disabled="true">No hay mas en stock</Button> : <Button onClick={() => setCont(cont + 1)}>+</Button>}
        </ButtonGroup>
        {(Object.entries(userLogin).length!==0)?
        <Button size="small" variant="contained" color="primary" onClick={()=>onAdd(cont)}>Agregar al Carrito</Button>
        :
        <Button size="small" variant="contained" color="primary" disabled="true">Agregar al Carrito</Button>
        }

        
    </div>

  );
}

export default ItemCount
