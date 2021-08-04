import React from 'react';
import { useState, useEffect } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function ItemCount({ stock, initial,onAdd}) {
  const [cont, setCont] = useState(0);
  const[addCart,setaddCart]=useState({});
  const stock1 = parseInt(stock);
  const inicio = parseInt(initial);
  useEffect(() => {
    setCont(inicio);
  }, []);

  /*useEffect(()=>{
    //Consulta para crear el carrito y levantarlo


  },[addCart]);*/

  


  return (
        <Grid item xs={12}>
          <Grid>
          <p>{cont}</p>
          <ButtonGroup disableElevation variant="contained" color="primary">
            {(cont == 0 && cont <= inicio) ? <Button disabled="true">-</Button> : <Button onClick={() => setCont(cont - 1)}>-</Button>}
            {(cont == stock1) ? <Button disabled="true">+</Button> : <Button onClick={() => setCont(cont + 1)}>+</Button>}
          </ButtonGroup>
        </Grid>
        <Grid>
        <Button color="primary" variant="outlined" /*onClick={setaddCart({cant :cont,prod:"producto" })}*/>Agregar al Carrito</Button>
        </Grid>
        </Grid>
  );
}

export default ItemCount
