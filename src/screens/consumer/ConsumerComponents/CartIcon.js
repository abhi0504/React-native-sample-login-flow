import * as React from 'react';
import { View, Text,Dimensions } from 'react-native';
import Icon2 from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

function CartIcon(props) {
    console.log(props.color);
    return(
        <View style={{}}>
            <View style={{backgroundColor:props.color,height:9,position:'absolute',borderRadius:8,top:-12.9,right:0,height:16.75,width:16.75,justifyContent:'center'}}>
                <Text style={{color:'white',fontSize:10.5,alignSelf:'center',lineHeight:14}}>{props.cartItems.number}</Text>
            </View>
            <MaterialCommunityIcons name="cart-outline" color={props.color} size={25} style={{marginTop:0.5}}/>        
        </View>
    )
}

CartIcon.propTypes = {
    cartItems:PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    cartItems:state.cartItems
})

export default connect(mapStateToProps)(CartIcon)

//                <Text style={{backgroundColor:props.color,paddingLeft:5,paddingRight:5,borderTopLeftRadius:9,borderTopRightRadius:9,lineHeight:14,fontSize:12,color:'white'}}>15</Text>
