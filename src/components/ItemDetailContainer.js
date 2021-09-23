import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { collection, getDocs, query} from '@firebase/firestore';
import { getData } from '../firebase';
import Loader from './Loader';

const ItemDetailContainer=()=>{
    const [itemDetail, setitemDetail] = useState({});
    const {idProduct}=useParams();
    const [loading,setLoading]=useState(true);

    useEffect(() => {
        const getItemDetail = async () => {
            const db = getData();
            const itemRef = collection(db, 'products');
            const itemQuery = query(itemRef);
            try {
                const itemSnapshot = await getDocs(itemQuery);
                const items = itemSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}));
                const itemDet=items.find(it=>it.id===idProduct);
                setitemDetail(itemDet);
            } catch(e){
                console.log(e);
            }
            setLoading(false);
        };
        getItemDetail();
    }, [])

    return (
        <div>
            {(Object.entries(itemDetail).length===0)?<Loader condition={loading}/>:<ItemDetail itemDet={itemDetail}/>}
        </div>
    )
}

export default ItemDetailContainer
