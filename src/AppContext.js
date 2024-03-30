import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([]);

    const addProductToCart = (product) => {
        const findExistProduct = cartItem.find(item => item.id === product.id)

        if (findExistProduct) {
            setCartItem(cartItem.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
        } else {
            setCartItem([...cartItem,{...product, quantity: 1}])
        }
    }
    const increaseQuantity = (productId) => {
        setCartItem(cartItem.map(item => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item));
    }

    const decreaseQuantity = (productId) => {
        const findExistProduct = cartItem.find(item => item.id === productId)
        
        if (findExistProduct.quantity > 1) {
            setCartItem(cartItem.map(item => item.id === productId ? { ...item, quantity: item.quantity - 1 } : item));
        }            
    }

    const removeItem = (productId) => {
        setCartItem(cartItem.filter(item => item.id !== productId));
    }
    return (
        <AppContext.Provider value={{ cartItem, addProductToCart, increaseQuantity, decreaseQuantity, removeItem }}>
            {children}
        </AppContext.Provider>
    );
}