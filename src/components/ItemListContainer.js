import { Divider, List, ListItem } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import ItemList from './ItemList';
import productosJson from '../productosJson';
import { useParams } from 'react-router-dom';
import { getData } from '../firebase';

function ItemListContainer() {
    const [category, setCategory] = useState([]);
    const {id}=useParams();
    /*useEffect(() => {
        const task = new Promise((resolve, reject) => {
                setTimeout(() => (resolve(productosJson.categorias.find((cat)=>cat.id===id))),2000);     
        }).then((data)=>setCategory(data.productos));
    }, [])*/
    useEffect(() => {
        const getCategory=async()=>{
            const categoryCollection=collection(getData,'products').where('categoryId','==',id);
            const categorySnapshot = await getDocs(categoryCollection);
            const categoryList=categorySnapshot.docs.map(doc=>doc.data());
            console.log(categoryList);
            setCategory(categoryList);
        };
        getCategory();
    }, []);

    
    return (
            <ItemList Items={category} idCategory={id}/> 
    )
}

export default ItemListContainer
