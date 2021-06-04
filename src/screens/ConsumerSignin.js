import axios from 'axios';
import * as React from 'react';
import { View, Text,Button,FlatList,ActivityIndicator,Dimensions } from 'react-native';
import StyleButton from '../components/Button';

const {height,width} = Dimensions.get('window')

function ConsumerSignin() {
    return (
        <View style={{flex:1,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
            <Text>Hi</Text>
        </View>
    )
}

export default ConsumerSignin;