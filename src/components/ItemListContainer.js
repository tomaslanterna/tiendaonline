import { Divider, List, ListItem } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import ItemList from './ItemList';
import productosJson from '../productosJson';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
    const [category, setCategory] = useState([]);
    const {id}=useParams();
    useEffect(() => {
        const task = new Promise((resolve, reject) => {
                setTimeout(() => (resolve(productosJson.categorias.find((cat)=>cat.id===id))),2000);     
        }).then((data)=>setCategory(data.productos));
    }, [])

    
    return (
            <ItemList Items={category} idCategory={id}/> 
    )
}

export default ItemListContainer
