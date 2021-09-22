import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Carrusel from './Carrusel';
import CategorysContainer from './CategorysContainer';
import { getData } from '../firebase';
import { collection, getDocs, query, where } from '@firebase/firestore';
import Loader from './Loader';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 4,
        justifyContent: 'center'
    }
}));


const Content = () => {
    const classes = useStyles();

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const db = getData();

    useEffect(() => {
        const getProducts = async () => {
            const productsRef = collection(db, 'products');
            const productsQuery = query(productsRef, where('stock', '<=', 3));
            try {
                const productsSnapshot = await getDocs(productsQuery);
                const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setItems(productsList);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        }
        getProducts();
    }, [])

    return (
        <Grid className={classes.root} alignItems='center'>
            {(items===null || items.length===0)?
            <Loader condition={loading}/>
            :
            <>
            <Carrusel itemData={items}/>
            <CategorysContainer />
            </>
            }
        </Grid>
    )
}

export default Content
