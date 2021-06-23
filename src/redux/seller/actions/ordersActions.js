import { url } from "../../../api/api"
import axios from "axios"
import { AsyncStorage } from "react-native"
import { FETCH_ORDERS ,  FETCH_OFD_ORDERS ,  FETCH_D_ORDERS} from "../types"

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
    var token = await AsyncStorage.getItem('shop_token');
        axios.get(`${url}/orders/outForDelivery`,{
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            }
        }).then(res => {
            dispatch({type:FETCH_OFD_ORDERS , orders: res.data})
        }).catch(err => {
            console.log("error");
            console.log(err)
        })
}

export const fetchDOrders = () => async dispatch => {
    console.log("D");
    var token = await AsyncStorage.getItem('shop_token');
    axios.get(`${url}/orders/delivered`,{
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        }
    }).then(res => {
        console.log("Delivered Orders");
        dispatch({type:FETCH_D_ORDERS , orders: res.data})
    }).catch(err => {
        console.log("error");
        console.log(err)
    })
}

