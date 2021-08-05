import { Divider, List, ListItem } from '@material-ui/core';
import { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import ItemList from './ItemList';

function ItemListContainer(props) {

    const [loading, setLoading] = useState(false);
    const [items,setItems]=useState([]);

    useEffect(()=>{

        const task = new Promise((resolve, reject) => {
            /*setLoading(true);*/

            const fetchits={
                data:[
                    {title:'PS5',id:5,price:1200,url:'../images/PS5.jpg'},
                    {title:'PS4',id:4,price:400,url:'../images/PS4.jpg'},
                    {title:'PS3',id:3,price:200,url:'../images/PS3.jpg'},
                    {title:'PS2',id:2,price:100,url:'../images/PS2.jpg'},
                    {title:'PS1',id:1,price:50,url:'../images/PS1.jpg'}
                ],
                status:"200"
            };
            
            if(fetchits.status=="200"){
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
            <ItemList Item={items}/>
        </Grid>
        
    )
}

export default ItemListContainer
