import { SET_ALL_PRODUCTS } from "../types";

const initialState = {
    products:[],
    shops:[],
    ploading:true,
}

export default function(state=initialState,action){
    switch(action.type){
        case SET_ALL_PRODUCTS:
            return {
                ...state,
                products:action.products,
                ploading:false
            }
        default:
            return state;
    }
}