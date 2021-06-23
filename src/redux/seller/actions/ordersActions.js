import { url } from "../../../api/api"
import axios from "axios"
import { AsyncStorage } from "react-native"
import { FETCH_ORDERS ,  FETCH_OFD_ORDERS } from "../types"

export const fetchOrders = (token) => dispatch => {
    console.log("Comming for redux"); 

    axios.get(`${url}/shop/orders`,{
    headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`
    }
}).then(res => {
    // console.log(res.data)
    dispatch({type:FETCH_ORDERS,orders: res.data})
}).catch(err => {
    console.log("error");
    console.log(err)
})
    
}

export const fetchOFDOrders = () => async dispatch => {
    console.log("OFD");

    dispatch({type:FETCH_OFD_ORDERS})

}

