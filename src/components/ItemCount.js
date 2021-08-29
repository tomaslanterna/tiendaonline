import { useState, useEffect } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  
  root: {
    display: 'flex',
    flexDirection: 'row',
    height:25
  }


}));

function ItemCount({ stock, initial, onAdd}) {
  const classes = useStyles();
  const [cont, setCont] = useState(0);
  const stock1 = parseInt(stock);
  const inicio = parseInt(initial);
  
  useEffect(() => {
    setCont(inicio);
  }, []);
  return (

    <div className={classes.root}>
        <span>{cont}</span>
        <ButtonGroup className="ms-2"size="small" disableElevation variant="outlined" color="primary">
          {(cont == 0 && cont <= inicio) ? <Button disabled="true">-</Button> : <Button onClick={() => setCont(cont - 1)}>-</Button>}
          {(cont == stock1) ? <Button disabled="true">+</Button> : <Button onClick={() => setCont(cont + 1)}>+</Button>}
        </ButtonGroup>
        <Button size="small" variant="contained" color="primary" onClick={onAdd}>Agregar al Carrito</Button>
    </div>

  );
}

export default ItemCount
