import { View, Text, AsyncStorage,Image,Dimensions,FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import axios from 'axios';
import ListComponent from '../../../components/ListComponent';
import { fetchOFDOrders } from "../../../redux/seller/actions/ordersActions";
import { connect } from 'react-redux';

function ordersOutForDelivery(props) {

    const [ data , setData ] = React.useState([]) 

    let fetchOrders = async () => {

        await props.fetchOFDOrders();
 
        setData(props.orders.OFDOrders)
    } 

    const renderItem = (item) => {
        return(
        <ListComponent item={item} navigation={() => {
            props.navigation.navigate("OrderDetails" , { item: item })
        }}/>
        )
    }

    React.useEffect(() => {
        setData(props.orders.OFDOrders)
    },[props.orders.OFDOrders])
 
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

    const mapStateToProps = (state) => {
        return{
            orders : state.sorders
        }
    }
    
    const mapDispatchToProps = { 
        fetchOFDOrders
    }
    
    export default connect(mapStateToProps , mapDispatchToProps)(ordersOutForDelivery);
