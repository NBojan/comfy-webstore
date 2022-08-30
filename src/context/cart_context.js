import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import { ADD_TO_CART, COUNT_TOTALS, CLEAR_CART, REMOVE_ITEM, TOGGLE_AMOUNT } from "../actions";

const CartContext = React.createContext();

const localeCart = localStorage.cart ? JSON.parse(localStorage.cart) : [];
const initialState = {
    cart: localeCart,
    total_cost: 0,
    total_amount: 0,
    shipping: 534 
}

const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, product, color, amount) => dispatch({type: ADD_TO_CART, payload: {id, product, color, amount}});
    const clearCart = () => dispatch({type: CLEAR_CART});
    const removeItem = id => dispatch({type: REMOVE_ITEM, payload: id});
    const toggleAmount = (id, math) => dispatch({type: TOGGLE_AMOUNT, payload: {id, math}});

    useEffect(() => {
        dispatch({type: COUNT_TOTALS});
        localStorage.setItem("cart", JSON.stringify(state.cart));
    }, [state.cart])

    return (
        <CartContext.Provider value={{...state, addToCart, clearCart, removeItem, toggleAmount}}>
            {children}
        </CartContext.Provider>
    )
}

const useCartContext = () => useContext(CartContext);

export {CartProvider, useCartContext};