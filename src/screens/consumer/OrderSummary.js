import * as React from 'react';
import { View, Text, AsyncStorage,ScrollView,Button,Dimensions,Image,FlatList,StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './ConsumerComponents/Header';
import axios from 'axios';
import { url } from '../../api/api';
import CartProduct from './ConsumerComponents/CartProduct';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import jwtDecode from 'jwt-decode';
import ordersReducer from '../../redux/consumer/reducers/ordersReducer';
import OrderSummaryProduct from './ConsumerComponents/OrderSummaryProduct';
import RNUpiPayment from 'react-native-upi-pay';

const {height,width} = Dimensions.get('window')

function OrderSummary(props) {

    const [order,setOrder] = React.useState([])
    const [total,setTotal] = React.useState(0)
    const [shop,setShop] = React.useState({})
    const [consumer,setConsumer] = React.useState([])
    const [loading,setLoading] = React.useState(true)

    const setData = async() => {
        setLoading(true)
        var token = await AsyncStorage.getItem('user_token')
        var consumer = jwtDecode(token)
        setConsumer(consumer)
        const data = props.route.params.order;
        console.log(data);
        setOrder(data);
        var total =0;
        data.map(or => {
            total += or.total
        })
        setTotal(total)
        setLoading(false)
    }

    React.useEffect(() => {
        setData();
    },[])

    function failureCallback(data){
        console.log(data)
        // in case no action taken
    }
    function successCallback(data){
        //
        console.log(data);
    }

    function makeUpiPayment() {
        RNUpiPayment.initializePayment({
            vpa: 'chaitali.nshah.123@oksbi',  		//your upi address like 12345464896@okhdfcbank
            payeeName: ' Chaitali',   			// payee name 
            amount: '1',				//amount
            transactionNote:'Testing Upi',		//note of transaction
            transactionRef: 'aasf-332-aoei-fn'	//some refs to aknowledge the transaction
        },successCallback,failureCallback);
    }

    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <Header backgroundColor='#ff6347' header='Order Details' height={55} width={width} />
            {
                loading ?
                <Image source={require('../../images/l2.gif')} resizeMode='contain' style={{width:width}} />
                :
                <ScrollView style={{padding:15,flex:1,paddingBottom:55}}>
                    <Text style={{fontSize:21.5}}>Cart Total : Rs {total}</Text>
                <View style={{marginTop:5,marginBottom:5}}>
                <Text style={{fontSize:18,fontFamily: "Montserrat-Bold"}}>DELIVER TO</Text>
                    <Text style={{fontFamily: "Montserrat-Medium",fontSize:16.5}}>{consumer.consumer_name}</Text>
                    <Text style={{fontFamily: "Montserrat-Medium",fontSize:16.5}}>{consumer.consumer_address}</Text>
                <Text style={{fontFamily: "Montserrat-Bold",fontSize:15.5,marginTop:5}}>SHOP NAME</Text>
                    <Text style={{paddingLeft:9,fontFamily: "Montserrat-Medium",fontSize:16.5}}>{order[0].shop_name}</Text>
                    <Text style={{fontFamily: "Montserrat-Bold",fontSize:15.5,marginTop:5}}>SHOP CONTACT</Text>
                    <Text style={{paddingLeft:9,fontFamily: "Montserrat-Medium",fontSize:16.5}}>{order[0].shop_contact}</Text>
                    <Text style={{fontFamily: "Montserrat-Bold",fontSize:15.5,marginTop:5}}>TOTAL ITEMS</Text>
                    <Text style={{paddingLeft:9,fontFamily: "Montserrat-Medium",fontSize:16.5}}>{order.length}</Text>
                    
                </View>
                <View>
                    <FlatList
                    data={order}
                    renderItem={({item,index}) => <OrderSummaryProduct item={item} /> }
                    />
                </View>
                <Text style={{fontSize:22.5,color:'black',fontFamily: "Montserrat-Medium"}}>Payment Method</Text>
                <View>
                    {
                        order[0].shop_upiId!=='undefined' &&
                        <TouchableWithoutFeedback onPress={makeUpiPayment}>
                            <View style={{padding:7.5,alignItems:'center',backgroundColor:"#ff6347",borderRadius:9}}>
                                <Text style={{fontSize:21.5,color:'white',fontFamily: "Montserrat-Medium"}}>Pay Using UPI</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    }
                </View>
                <View style={{marginTop:9}}>
                <TouchableWithoutFeedback>
                    <View style={{padding:7.5,alignItems:'center',marginBottom:25,backgroundColor:"#ff6347",borderRadius:9}}>
                        <Text style={{fontSize:21.5,color:'white',fontFamily: "Montserrat-Medium"}}>Cash On Delivery</Text>
                    </View>
                </TouchableWithoutFeedback>
                </View>
            </ScrollView>
            }
        </View>
    )
}

export default OrderSummary;