import * as React from 'react';
import { View, Text,Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'

const {height,width} = Dimensions.get('window')

function HeaderWithButton(props) {
    return (
        <View style={{height: props.height,borderBottomLeftRadius:9,flexDirection:'row',alignItems:'center',borderBottomRightRadius:9,elevation:5,width: props.width,backgroundColor:props.backgroundColor,paddingLeft:15}}>
            <Text style={{color:'white',fontSize:21,fontFamily: "Montserrat-Medium"}}>{props.header}</Text>
            <View style={{flex:1}}>

            </View>
            <TouchableOpacity onPress={props.callback} style={{paddingRight:15}}>
                <Icon name={props.icon} size={25} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderWithButton