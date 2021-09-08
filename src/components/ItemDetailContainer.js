import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import productosJson from '../productosJson';
import { collection, getDocs, query, where } from '@firebase/firestore';
import { getData } from '../firebase';

function ItemDetailContainer() {
    const [itemDetail, setitemDetail] = useState({});
    const {idProduct}=useParams();
    const categorias=[...productosJson.categorias];

    useEffect(() => {
        const getItemDetail = async () => {
            const db = getData();
            const itemRef = collection(db, 'products');
            const itemQuery = query(itemRef);
            try {
                const itemSnapshot = await getDocs(itemQuery);
                const items = itemSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}));
                const itemDet=items.find(it=>it.id===idProduct);
                console.log(itemDet);
                setitemDetail(itemDet);
            } catch(e){
                console.log(e);
            }
        };
        getItemDetail();
    }, [])

    return (
        <div>
            <ItemDetail itemDet={itemDetail}/>
        </div>
    )
}

export default ItemDetailContainer
