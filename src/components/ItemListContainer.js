import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getData } from '../firebase';
import { collection, getDocs, query, where } from '@firebase/firestore';
import { Grid } from '@material-ui/core';

const ItemListContainer=()=>{
    const [category, setCategory] = useState([]);
    const [loading,setLoading]=useState(true);
    const { id } = useParams();
    useEffect(() => {
        const getCategory = async () => {
            const db = getData();
            const categoryRef = collection(db, 'products');
            const categoryQuery = query(categoryRef, where('categoryId', '==', id));
            try {
                const categorySnapshot = await getDocs(categoryQuery);
                const categoryList = categorySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}));
                setCategory(categoryList);
            } catch(e){
                console.log(e);
            }
            setLoading(false);
        };
        getCategory();
    }, []);


    return (
            <ItemList Items={category} condition={loading}/>
    )
}

export default ItemListContainer
