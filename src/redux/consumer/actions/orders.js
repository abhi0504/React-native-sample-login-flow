import axios from "axios";
import { url } from "../../../api/api";
import { DELIVERED, OUT_FOR_DELIVERY, SET_CURRENT_ORDERS } from "../types";

export const setCurrentOrders = (token) => dispatch => {
    console.log('here')
    axios.get(`${url}/consumer/pending`,{
        headers:{
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        }
    }).then(res => {
        console.log(res.data)
        dispatch({type:SET_CURRENT_ORDERS,currentorders:res.data})
    }).catch(err=> {
        console.log(err);
    })
}

export const setOutForDeliveryOrders = (token) => dispatch => {
    console.log('here out for delivery')
    axios.get(`${url}/consumer/outForDelivery`,{
        headers:{
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        }
    }).then(res => {
        console.log(res.data)
        dispatch({type:OUT_FOR_DELIVERY,outForDelivery:res.data})
    }).catch(err=> {
        console.log(err);
    })
}

export const setDeliveredOrders = (token) => dispatch => {
    console.log('here Delivered')
    axios.get(`${url}/consumer/delivered`,{
        headers:{
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        }
    }).then(res => {
        console.log(res.data)
        dispatch({type:DELIVERED,delivered:res.data})
    }).catch(err=> {
        console.log(err);
    })
}