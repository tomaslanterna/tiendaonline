import React,{createContext,useState} from 'react';

const checkItem=(list,itemCart)=>{
    const itemFound=list.find(it=>it.item.id===itemCart.item.id);
    if(itemFound){
        itemFound.count=itemFound.count+itemCart.count;
    }else{
        list.push({
            ...itemCart
        });
    }
    return list;
};

const cartContext=createContext({});

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const addItem=(item)=>{
        const cartDraft=[...cart];
        const cleanCart=checkItem(cartDraft,item)
        setCart(cleanCart);
    }

    const removeItem=(itemId)=>{
        const cartDraft=[...cart];
        const cleanCart=cartDraft.filter(it=>it.item.id!==itemId);
        setCart(cleanCart);
    }

    const cleanCart=()=>{
        setCart([]);
    }

    return (
    <cartContext.Provider value={{cart,addItem,removeItem,cleanCart}}>
        {children}
    </cartContext.Provider>
    )
}

export default cartContext;
