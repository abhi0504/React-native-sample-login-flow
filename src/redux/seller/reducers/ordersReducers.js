import { FETCH_ORDERS } from "../types";

const initialState = {
    orders:[],
    total:0,
    number:0
}

export default function(state=initialState,action) {

    console.log("ACCESSING THIS REDUCER");

    switch (action.type){
        case FETCH_ORDERS:
            return {
                ...state,
                orders: action.orders
            }
        default:
            return state
    }
}