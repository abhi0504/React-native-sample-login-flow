import { View, Text, AsyncStorage,Image,Dimensions,FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import ListComponent from '../../../components/ListComponent';
import { fetchDOrders } from "../../../redux/seller/actions/ordersActions";
import { connect } from 'react-redux';

function deliveredOrders(props) {
    const [ data , setData ] = React.useState([]) 

    let fetchOrders = async () => {
        await props.fetchDOrders();
        // console.log(props.orders.DOrders); 
        setData(props.orders.DOrders)
    } 

    const renderItem = (item) => {
        return(
        <ListComponent item={item} navigation={() => {
            props.navigation.navigate("OrderDetails" , { item: item })
        }}/>
        )
    }

    React.useEffect(() => {
        setData(props.orders.DOrders)
    },[props.orders.DOrders])
 
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
    fetchDOrders
}

export default connect(mapStateToProps , mapDispatchToProps)(deliveredOrders);