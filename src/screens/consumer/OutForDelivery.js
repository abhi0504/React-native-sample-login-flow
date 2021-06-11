import * as React from 'react';
import { View, Text, AsyncStorage,Image,Dimensions } from 'react-native';
import { setOutForDeliveryOrders } from '../../redux/consumer/actions/orders';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

const {height,width} = Dimensions.get('window')

function OutForDelivery(props) {

    const [loading,setLoading] = React.useState(true);
    const [orders,setOrders] = React.useState([])
    const [token,setToken] = React.useState(null)

    const getOrders = async() => {
        setLoading(true)
        var token = await AsyncStorage.getItem('user_token')
        setToken(token);
        props.setOutForDeliveryOrders(token);
        setLoading(false)
    }

    React.useEffect(() => {
        getOrders()
    },[])

    return (
        <View style={{flex:1}}>
            {
                loading ?
                <View style={{backgroundColor:'white',flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Image source={require('../../images/l2.gif')} resizeMode='contain' style={{width:width}} />
                </View>
                :
                <View>
                    <Text>Hi</Text>
                </View>
            }
        </View>
    )
}

OutForDelivery.propTypes = {
    setOutForDeliveryOrders:PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    orders:state.orders
})

const mapActionsToProps = {
    setOutForDeliveryOrders
}

export default connect(mapStateToProps,mapActionsToProps)(OutForDelivery);