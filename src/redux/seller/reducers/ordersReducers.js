import { FETCH_ORDERS , FETCH_OFD_ORDERS , FETCH_D_ORDERS } from "../types";

const initialState = {
    orders:[],
    OFDOrders:[],
    DOrders: [],
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
                OFDOrders: action.orders
            }
        case FETCH_D_ORDERS: 
            return{
                ...state,
                DOrders: action.orders
            }
        default:
            return state
    }
}