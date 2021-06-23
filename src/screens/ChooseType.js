import axios from 'axios';
import * as React from 'react';
import { View, Text,Button,FlatList,ActivityIndicator,Dimensions,Image } from 'react-native';
import StyleButton from '../components/Button';

const {height,width} = Dimensions.get('window')
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function ChooseType(props) {
    return (
        <View style={{flex:1,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:25,marginBottom:20 , fontFamily: "Montserrat-ExtraBold"}}>Describe Yourself ?
            </Text>
            <StyleButton image={<Image
                    style={{
                        height: windowHeight*0.15      ,
                        width: windowHeight*0.15 ,
                        borderRadius: 100,
                        marginTop: 20
                    }}
                    source={require('../images/consumer.png')}
                />} onPressButton={() => props.navigation.push("ConsumerSignin")} color='white' fontSize={21} height={height*0.3} width={height*0.3} backgroundColor='#20b2aa' borderRadius={200} title='Consumer' />
            <View style={{height:15}}>

            </View>
            <StyleButton image={<Image
                    style={{
                        height: windowHeight*0.15      ,
                        width: windowHeight*0.15 ,
                        marginTop: 20,
                        borderRadius: 100,
                    }}
                    source={require('../images/seller.jpg')}
                />} onPressButton={() => props.navigation.push("SellerSignin")} color='white' fontSize={21} height={height*0.3} width={height*0.3} backgroundColor='#6495ed' borderRadius={200} title='Shop Owner' />
        </View> 
    )
}

export default ChooseType;