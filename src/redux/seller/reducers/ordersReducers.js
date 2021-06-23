import { FETCH_ORDERS , FETCH_OFD_ORDERS , FETCH_D_ORDERS , ORDER_READY_FOR_DELIVERY , ORDER_DELIVERED } from "../types";

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
        case ORDER_READY_FOR_DELIVERY: 
            let newArray = state.orders.filter((obj) => 
            obj.order_cart_id !== action.item.order_cart_id
            )    
            return{
                ...state,
                OFDOrders: [
                    action.item,
                    ...state.OFDOrders 
                ],
                orders: newArray
            }
        case ORDER_DELIVERED: 
            let newArray2 = state.OFDOrders.filter((obj) => 
            obj.order_cart_id !== action.item.order_cart_id
            )    
            return{
                ...state,
                DOrders: [
                    action.item,
                    ...state.DOrders 
                ],
                OFDOrders: newArray2
            }
        default:
            return state
    }
}