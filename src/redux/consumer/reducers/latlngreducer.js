import { SET_LATLNG } from "../types";

const initialState = {
    latitude:null,
    longitude:null
}

export default function(state=initialState,action) {
    switch(action.type){
        case SET_LATLNG:
            return {
                ...state,
                latitude:action.latitude,
                longitude:action.longitude
            }
        default:
            return state;
    }
}