import { DELIVERED, OUT_FOR_DELIVERY, SET_CURRENT_ORDERS } from "../types";

const initialState = {
    current:[],
    outForDelivery:[],
    delivered:[]
}

export default function(state=initialState,action) {
    switch (action.type){
        case SET_CURRENT_ORDERS:
            return {
                ...state,
                current:action.currentOrders
            }
        case OUT_FOR_DELIVERY:
            return {
                ...state,
                outForDelivery:action.outForDelivery
            }
        case DELIVERED:
            return {
                ...state,
                delivered:action.delivered
            }
        default:
            return state
    }
}