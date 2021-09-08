import {React,createContext,useState} from 'react';

const checkItem=(list,item)=>{
    const itemFound=list.find(it=>it.id===item.id);
    if(itemFound){
        itemFound.count++;
    }else{
        list.push({
            ...item,
            count:1
        });
    }
};

const cartContext=createContext({});

export const CartProvider = ({children}) => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const addItem=(item)=>{
        const cartDraft=[...cart];
        const cleanCart=checkItem(cartDraft,item);
        setCart(cleanCart);
        console.log(cleanCart);
    }

    const removeItem=(item)=>{
        const cartDraft=[...cart];
        const cleanCart=cartDraft.filter(it=>it.id!==item.id);
        setCart(cleanCart);
    }

    return (
    <cartContext.Provider value={{cart,addItem,removeItem}}>
        {children}
    </cartContext.Provider>
    )
}

export default cartContext;
