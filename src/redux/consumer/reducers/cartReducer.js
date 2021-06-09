import { ADD_TO_CART, REMOVE_FROM_CART, SET_CART_ITEMS } from "../types";

const initialState = {
    products:[],
    total:0,
    number:0
}

export default function(state=initialState,action) {
    switch (action.type){
        case SET_CART_ITEMS:
            return {
                ...state,
                products: action.products,
                total:action.total,
                number: action.products.length
            }
        case ADD_TO_CART:
            let index = state.products.findIndex(product => product.product_id === action.product.product_id )
            if(index!==-1){
                console.log('In The Cart')
                console.log(state);
                state.products[index].total=state.products[index].total + action.product.product_price;
                state.products[index].quantity = state.products[index].quantity+1
                state.total = state.total + action.product.product_price;
                console.log(state);
                return {
                    ...state
                }
            } else {
                console.log("Not in cart")
                state.total = state.total + action.product.product_price;
                state.number = state.number+1;
                return {
                    ...state,
                    products:[
                        action.product,
                        ...state.products
                    ]
                }
            }
        case REMOVE_FROM_CART:
            let dindex = state.products.findIndex(product => product.product_id === action.product.product_id )
            console.log(state);
            if(state.products[dindex].quantity===1){
                state.total = state.total - action.product.product_price;
                state.number = state.number-1;
                state.products.splice(dindex,1);
                return {
                    ...state
                }
            } else {
                state.products[dindex].total=state.products[dindex].total - action.product.product_price;
                state.products[dindex].quantity = state.products[dindex].quantity-1
                state.total = state.total - action.product.product_price;
                return {
                    ...state
                }
            }
        default:
            return state
    }
}