import { SET_CART_ITEMS } from "../types";

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
        default:
            return state
    }
}