import { Divider, List, ListItem } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import ItemList from './ItemList';
import PS5 from '../images/PS5.jpg';
import PS4 from '../images/PS4.jpg';
import PS3 from '../images/PS3.jpg';
import PS2 from '../images/PS2.jpg';
import PS1 from '../images/PS1.jpg';

function ItemListContainer(props) {

    const [loading, setLoading] = useState(false);
    const [items,setItems]=useState([]);

    useEffect(()=>{

        const task = new Promise((resolve, reject) => {
            /*setLoading(true);*/

            const fetchits={
                data:[
                    {title:'Play Station 5',id:5,price:1200,url:PS5},
                    {title:'Play Station 4',id:4,price:400,url:PS4},
                    {title:'Play Station 3',id:3,price:200,url:PS3},
                    {title:'Play Station 2',id:2,price:100,url:PS2},
                    {title:'Play Station 1',id:1,price:50,url:PS1}
                ],
                status:200
            };
            
            if(fetchits.status==200){
                setTimeout(() => (fetchits), 2000);
                setItems(fetchits.data);
                resolve(fetchits.data);
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
        <Grid>
            <ItemList Items={items}/>
        </Grid>
        
    )
}

export default ItemListContainer
