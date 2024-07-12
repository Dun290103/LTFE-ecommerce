import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };
    const getCartCount = () => {
        return cartItems.length;
    }
    return (
        <CartContext.Provider value={{ cartItems, addToCart, getCartCount }}>
            {children}
        </CartContext.Provider>
    );
};
