import axios from 'axios';
import * as React from 'react';
import { View,TouchableOpacity, Text,Button,FlatList,ActivityIndicator } from 'react-native';

function StyleButton(props) {
    return (
        <TouchableOpacity onPress={props.onPressButton} style={{height:props.height,alignItems:'center',justifyContent:'center',width:props.width,borderRadius:props.borderRadius,backgroundColor:props.backgroundColor}}>
            <Text style={{color:props.color,fontSize:props.fontSize}}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default StyleButton;