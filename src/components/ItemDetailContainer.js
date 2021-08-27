import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import productosJson from '../productosJson';

function ItemDetailContainer() {
    const [itemDetail, setitemDetail] = useState({});
    const {idProduct}=useParams();
    const {idCategory}=useParams();
    const categorias=[...productosJson.categorias];

    useEffect(() => {
        const task = new Promise((resolve, reject) => {
                setTimeout(() => (resolve(categorias.find((cat)=>cat.id==idCategory), 2000)));     
        }).then((data)=>setitemDetail(data.productos.find((prod)=>prod.id===idProduct)));
    }, [])

    return (
        <div>
            <ItemDetail itemDet={itemDetail}/>
        </div>
    )
}

export default ItemDetailContainer
