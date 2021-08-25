import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import productosJson from '../productosJson';

function ItemDetailContainer() {
    const [itemDetail, setitemDetail] = useState({});
    const {idProduct}=useParams();
    const {idCategory}=useParams();

    useEffect(() => {
        const task = new Promise((resolve, reject) => {
                setTimeout(() => (resolve(productosJson.categorias.filter((cat)=>cat.productos.filter((prod)=>prod.id===idProduct)), 2000)));     
        }).then((data)=>setitemDetail(data[0]));
    }, [])

    return (
        <div>
            <ItemDetail itemDet={itemDetail}/>
        </div>
    )
}

export default ItemDetailContainer
