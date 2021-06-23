import { FETCH_PRODUCTS , ADD_PRODUCTS} from "../types";

const initialState = {
    products:[],
    total:0,
    number:0
}

export default function(state=initialState,action) {

    console.log("ACCESSING THIS REDUCER");

    switch (action.type){
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.products
            }
        case ADD_PRODUCTS:
            return {
                ...state,
                products:[
                    action.product,
                    ...state.products
                ]
            }
        default:
            return state
    }
}