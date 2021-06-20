import { url } from "../../../api/api"
import axios from "axios"
import { AsyncStorage } from "react-native"
import { FETCH_PRODUCTS } from "../types"

export const fetchProducts = (token) => dispatch => {
    console.log("Comming for redux"); 

    axios.get(`${url}/shop/orders`,{
    headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
    }
}).then(res => {
    // console.log(res.data)
    dispatch({type:FETCH_PRODUCTS,products: res.data})
}).catch(err => {
    console.log("error");
    console.log(err)
})    
}

