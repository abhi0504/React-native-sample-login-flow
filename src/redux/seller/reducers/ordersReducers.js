import { FETCH_ORDERS , FETCH_OFD_ORDERS } from "../types";

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
        case FETCH_OFD_ORDERS:
            return {
                ...state,
                // HERE RETURN AFTER LOOPING AND SEARCHING
            }
        default:
            return state
    }
}