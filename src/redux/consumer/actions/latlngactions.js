import { SET_LATLNG } from "../types"

export const setLocation = (latitude, longitude) => dispatch => {
    console.log(latitude, longitude)
    dispatch({type:SET_LATLNG,latitude:latitude,longitude:longitude})
}