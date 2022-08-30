import { ADD_TO_CART, COUNT_TOTALS, CLEAR_CART, REMOVE_ITEM, TOGGLE_AMOUNT } from "../actions";

const reducer = (state, action) => {
    if(action.type === ADD_TO_CART){
        const { id, product, color, amount } = action.payload;
        const itemExists = state.cart.find(item => item.id === id+color);

        if(itemExists){
            const tmpCart = state.cart.map(item => {
                if(item.id === id+color){
                    let newAmount = item.amount + amount;
                    if(newAmount > item.stock) newAmount = item.stock;
                    return {...item, amount: newAmount};
                } else {
                    return item;
                }
            })
            return {...state, cart: tmpCart}
        } else {
            const newItem = {id: id+color, name: product.name, image: product.images[0].url, stock: product.stock, amount, color, price: product.price};
            return {...state, cart: [...state.cart, newItem]}
        }
    }
    if(action.type === COUNT_TOTALS){
        const {totalAmount, totalCost} = state.cart.reduce((accum, item) => {
            accum.totalAmount += item.amount;
            accum.totalCost += item.amount * item.price;
            return accum;
        }, {totalAmount: 0, totalCost: 0});
        return {...state, total_cost: totalCost, total_amount: totalAmount}
    }
    if(action.type === REMOVE_ITEM){
        return {...state, cart: state.cart.filter(item => item.id !== action.payload)};
    }
    if(action.type === CLEAR_CART){
        return {...state, cart: []};
    }
    if(action.type === TOGGLE_AMOUNT){
        const {id, math} = action.payload;
        const tmpCart = state.cart.map(item => {
            if(item.id === id){
                if(math === "inc"){
                    if(item.amount === item.stock) return item
                    return {...item, amount: item.amount + 1}
                } else if(math === "dec") {
                    if(item.amount === 1) return item
                    return {...item, amount: item.amount - 1}
                }
            } else {
                return item;
            }
        })
        return {...state, cart: tmpCart};
    }
    

    throw new Error(`There is no matching action type for ${action.type}`);
}
 
export default reducer;

