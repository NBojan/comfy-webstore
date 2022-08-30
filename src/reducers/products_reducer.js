import { OPEN_SIDEBAR, CLOSE_SIDEBAR, LOAD_PRODUCTS, BOX_VIEW, FLEX_VIEW, UPDATE_SORT, SORT_PRODUCTS, UPDATE_FILTERS, FILTER_PRODUCTS, CLEAR_FILTERS } from "../actions";

const reducer = (state, action) => {
    if(action.type === OPEN_SIDEBAR){
        return {...state, sidebarOpen: true};
    }
    if(action.type === CLOSE_SIDEBAR){
        return {...state, sidebarOpen: false};
    }
    if(action.type === LOAD_PRODUCTS){
        const maxPrice = action.payload.reduce((accum, item) => {
            if(accum < item.price) accum = item.price;
            return accum;
        }, 0);
        return {...state, products: action.payload, displayed_products: [...action.payload], 
            featured: action.payload.filter(item => item.featured), filters: {...state.filters, max_price: maxPrice, price: maxPrice}};
    }
    if(action.type === BOX_VIEW){
        return {...state, boxView: true};
    }
    if(action.type === FLEX_VIEW){
        return {...state, boxView: false};
    }
    if(action.type === UPDATE_SORT){
        return {...state, sort: action.payload};
    }
    if(action.type === SORT_PRODUCTS){
        if(state.sort === "price-low") return {...state, displayed_products: state.displayed_products.sort((a,b) => a.price - b.price)};
        if(state.sort === "price-high") return {...state, displayed_products: state.displayed_products.sort((a,b) => b.price - a.price)};
        if(state.sort === "name-a") return {...state, displayed_products: state.displayed_products.sort((a,b) => a.name.localeCompare(b.name))};
        if(state.sort === "name-z") return {...state, displayed_products: state.displayed_products.sort((a,b) => b.name.localeCompare(a.name))};
        return state;
    }
    if(action.type === UPDATE_FILTERS){
        const {name, value} = action.payload;
        return {...state, filters: {...state.filters, [name]: value}};
    }
    if(action.type === FILTER_PRODUCTS){
        const { query, category, company, color, price, shipping } = state.filters;
        let tmpArr = [...state.products];
        if(query) tmpArr = tmpArr.filter(item => item.name.includes(query));
        if(category !== "all") tmpArr = tmpArr.filter(item => item.category === category);
        if(company !== "all") tmpArr = tmpArr.filter(item => item.company === company);
        if(color !== "all") tmpArr = tmpArr.filter(item => item.colors.find(c => c === color));
        if(shipping) tmpArr = tmpArr.filter(item => item.shipping);
        tmpArr = tmpArr.filter(item => item.price <= price);
        return {...state, displayed_products: tmpArr}
    }
    if(action.type === CLEAR_FILTERS){
        return {...state, filters: {...state.filters, query: "", category: "all", company: "all", color: "all", price: state.filters.max_price, shipping: false}}
    }
    throw new Error(`There is no matching action type for ${action.type}`);
}
 
export default reducer;