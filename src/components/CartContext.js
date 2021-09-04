import {React,createContext} from 'react';

const cartContext=createContext({});

const CartContext = ({children}) => {

    const [products, setProducts] = useState(initialState)
    const [cart, setCart] = useState([])

    const addItem=(item)=>{
        setCart();
    }

    return (
    <cartContext.Provider value={{cart,addItem}}>
        {children}
    </cartContext.Provider>
    )
}

export default CartContext
