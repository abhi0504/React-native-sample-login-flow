import axios from 'axios';
import * as React from 'react';
import { View, Text,Button,FlatList,ActivityIndicator,Dimensions } from 'react-native';
import StyleButton from '../components/Button';

const {height,width} = Dimensions.get('window')

function ChooseType(props) {
    return (
        <View style={{flex:1,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:25,marginBottom:45}}>Describe Yourself ?
            </Text>
            <StyleButton onPressButton={() => props.navigation.push("ConsumerSignin")} color='white' fontSize={21} height={51.5} width={width-50} backgroundColor='#20b2aa' borderRadius={9} title='Consumer' />
            <View style={{height:15}}>

            </View>
            <StyleButton onPressButton={() => props.navigation.push("ConsumerSignin")} color='white' fontSize={21} height={51.5} width={width-50} backgroundColor='#6495ed' borderRadius={9} title='Shop Owner' />
        </View>
    )
}

export default ChooseType;