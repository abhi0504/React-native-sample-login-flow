import axios from "axios"
import { AsyncStorage } from "react-native"
import { url } from "../../../api/api"
import { SET_ALL_PRODUCTS } from "../types"

export const loadAllProduct = () => async(dispatch) => {
    var token = await AsyncStorage.getItem('user_token')
    axios.get(`${url}/consumer/allProducts`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then(res => {
        console.log(res.data);
        dispatch({type:SET_ALL_PRODUCTS,products:res.data})
    })
}