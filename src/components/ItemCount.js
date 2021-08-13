import { useState, useEffect } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = ((theme) => ({
  buttons: {
    width: 50,
    height: 100
  },
  center: {
    width: 200,
    alignItems: 'center'
  },
  root: {
    display: 'flex',
    flexDirection: 'row'
  }


}));

function ItemCount({ stock, initial, onAdd }) {
  const [cont, setCont] = useState(0);
  const [addCart, setaddCart] = useState({});
  const stock1 = parseInt(stock);
  const inicio = parseInt(initial);
  const classes = useStyles();
  useEffect(() => {
    setCont(inicio);
  }, []);

  /*useEffect(()=>{
    //Consulta para crear el carrito y levantarlo


  },[addCart]);*/




  return (

    <div className={classes.root}>
      <Grid>
        <span>{cont}</span>
        <ButtonGroup className="ms-2"size="small" disableElevation variant="outlined" color="primary">
          {(cont == 0 && cont <= inicio) ? <Button disabled="true">-</Button> : <Button onClick={() => setCont(cont - 1)}>-</Button>}
          {(cont == stock1) ? <Button disabled="true">+</Button> : <Button onClick={() => setCont(cont + 1)}>+</Button>}
        </ButtonGroup>
        <Button size="small" variant="contained" color="primary"/*onClick={setaddCart({cant :cont,prod:"producto" })}*/>Agregar al Carrito</Button>

      </Grid>
    </div>

  );
}

export default ItemCount
