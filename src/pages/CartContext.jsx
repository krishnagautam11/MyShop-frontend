import React, {createContext, useContext, useState} from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prev)=> {
            const exists = prev.find((item)=> item.id === product.name);
            return exists ? prev : [...prev, product];
        });
    };

    const removeCart = (productName) => {
        setCart((prev)=> prev.filter((item)=> item.name !== productName));
    };

    return (
        <CartContext.Provider value= {{cart,addToCart, removeCart}}>
            {children}
        </CartContext.Provider>
    );
};