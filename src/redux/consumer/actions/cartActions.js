import { url } from "../../../api/api"
import axios from "axios"
import { AsyncStorage } from "react-native"
import { ADD_TO_CART, REMOVE_FROM_CART, SET_CART_ITEMS } from "../types"

export const setCartProducts = (token) => dispatch => {
    axios.get(`${url}/consumer/cartItems`,{
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        }
    }).then(res => {
        console.log(res.data);
        var total =0
        res.data.map(product => {
            total +=product.total
        })
        dispatch({type:SET_CART_ITEMS,products:res.data,total:total})
    })
}

export const addToCart = (product) => dispatch => {
    console.log(product);
    dispatch({type:ADD_TO_CART,product:product})
}

export const removeFromCart = (product) => dispatch => {
    console.log(product);
    dispatch({type:REMOVE_FROM_CART,product:product})
}