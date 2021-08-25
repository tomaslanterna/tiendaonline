import {useEffect,useState} from 'react'
import ItemListContainer from './ItemListContainer';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import productosJson from '../productosJson';
import Carrusel from './Carrusel';
import CategoryType from './CategoryType';
import SportWear from '../images/SportWear.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop:4,
      justifyContent:'center'
    }
  }));
    

function Content() {
    const [loading, setLoading] = useState(false);
    const [items,setItems]=useState([]);
    const classes = useStyles();

    useEffect(()=>{

        const task = new Promise((resolve, reject) => {
            /*setLoading(true);*/

            
            if(productosJson!=null){
                setTimeout(() => (productosJson), 2000);
                setItems(productosJson);
                resolve(productosJson);
            }else{
                reject("No se encontro los productos");
            }
        });
        /*task.then((fetchitsResponse)=>{Esto seria cuando utilicemos el fetch verdadero
            console.log();
            setLoading(false);
            setItems(fetchitsResponse);
        }).catch((error)=>console.log("error",error));*/
    },[])
    return (
        <Grid className={classes.root} alignItems='center'>
            <Carrusel/>
            <CategoryType img={SportWear} id={"1"}/>
            <CategoryType img={SportWear} id={"2"}/>
        </Grid>
    )
}

export default Content
