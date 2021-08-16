import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';

function ItemDetailContainer({ item }) {
    const [itemDetail, setitemDetail] = useState({});

    const getItemDetail = (item) => {
        try {
            /*const response=await fetch("url");
            const data=await response.json(); Esto seria en caso de tener que consumir una api*/
            const data = {
                id: item.id,
                title: item.title,
                url: item.url,
                details: "Increible" + item.title + "ultima generacion, con tecnologia de vanguardia, vamo la ps vamo que vamo, nacional nacional"
            }
            setitemDetail(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const task = new Promise((resolve, reject) => {
                setTimeout(() => (getItemDetail(item)), 2000);
                if(itemDetail==null || itemDetail==0){
                    reject("No se encuentra el item");
                }else{
                    resolve(itemDetail);
                }
        });
    }, [])

    return (
        <div>
            <ItemDetail itemDet={itemDetail}/>
        </div>
    )
}

export default ItemDetailContainer
