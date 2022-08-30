import React, { useContext, useEffect, useReducer } from "react";
import { products_url as url } from "../helpers/constants";
import reducer from "../reducers/products_reducer";
import { OPEN_SIDEBAR, CLOSE_SIDEBAR, LOAD_PRODUCTS, BOX_VIEW, FLEX_VIEW, UPDATE_SORT, SORT_PRODUCTS, UPDATE_FILTERS, FILTER_PRODUCTS, CLEAR_FILTERS } from "../actions";
import useAxios from "../useAxios3";

const ProductsContext = React.createContext();

const initialState = {
    sidebarOpen: false,
    boxView: true,
    sort: "price-low",
    products: [],
    displayed_products: [],
    featured: [],
    filters: {query: "", category: "all", company: "all", color: "all", min_price: 0, price: 0, max_price: 0, shipping: false}
}

const ProductsProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {data, loading, err} = useAxios({method: "get", url});

    useEffect(() => {
        if(data) dispatch({type: LOAD_PRODUCTS, payload: data});   
    }, [data])

    useEffect(() => {
        dispatch({type: FILTER_PRODUCTS});
        dispatch({type: SORT_PRODUCTS});
    }, [data, state.sort, state.filters])

    const openSidebar = () => dispatch({type: OPEN_SIDEBAR});
    const closeSidebar = () => dispatch({type: CLOSE_SIDEBAR});
    const setBoxView = () => dispatch({type: BOX_VIEW});
    const setFlexView = () => dispatch({type: FLEX_VIEW});
    const updateSort = e => dispatch({type: UPDATE_SORT, payload: e.target.value});
    const updateFilters = e => {
        const name = e.target.name;
        let value = e.target.value;
        if(name === "category") value = e.target.textContent;
        if(name === "color") value = e.target.dataset.col;
        if(name === "shipping") value = e.target.checked;
        dispatch({type: UPDATE_FILTERS, payload: {name, value}});
    }
    const clearFilters = () => dispatch({type: CLEAR_FILTERS});

    return (
        <ProductsContext.Provider value={{...state, openSidebar, closeSidebar, loading, err, setBoxView, setFlexView, updateSort, updateFilters, clearFilters}}>
            {children}
        </ProductsContext.Provider>
    )
}

const useProductsContext = () => useContext(ProductsContext);

export {ProductsProvider, useProductsContext};