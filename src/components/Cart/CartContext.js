import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    //xử lý sự kiện thay đổi số lượng sản phẩm trong giỏ hàng
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingProduct = prevItems.find(item => item.id === product.id);
            if (existingProduct) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };
    //phương thức đếm số lượng sản phẩm trong giỏ hàng  
    const getCartCount = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0); // Tính tổng số lượng
    }
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0); // Tính tổng giá trị
    }
    return (
        <CartContext.Provider value={{ cartItems, addToCart, getCartCount, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};
