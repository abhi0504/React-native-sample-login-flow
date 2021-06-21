import { View, Text, AsyncStorage,Image,Dimensions,FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import axios from 'axios';
import ListComponent from '../../../components/ListComponent';
import { url } from '../../../api/api'
import OrderStatusComponent from '../../../components/orderStatusComponent';

function deliveredOrders(props) {
    const [ data , setData ] = React.useState([]) 

    let fetchOrders = async () => {
        console.log("NO PLS NO");
        console.log("NETWORK ERROR");

        var token = await AsyncStorage.getItem('shop_token');
        axios.get(`${url}/orders/delivered`,{
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            }
        }).then(res => {
            console.log(":+:+:++:+:+:+:++:");
            console.log(res.data)
            setData(res.data)
        }).catch(err => {
            console.log("error");
            console.log(err)
        })
    } 

    const renderItem = (item) => {
        return(
        <ListComponent item={item} navigation={() => {
            props.navigation.navigate("OrderDetails" , { item: item })
        }}/>
        )
    }

    React.useEffect(() => {
        fetchOrders()
    },[])
    
        return(
            <View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                />
            </View> 
            
        )
}

export default deliveredOrders