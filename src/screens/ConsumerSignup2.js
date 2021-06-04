import axios from 'axios';
import * as React from 'react';
import { View,ScrollView,ImageBackground,TouchableOpacity, Text,Button,FlatList,ActivityIndicator,Platform,Dimensions,Image,TextInput,StyleSheet,KeyboardAvoidingView } from 'react-native';
import StyleButton from '../components/Button';
import { Header } from '@react-navigation/stack';
import GetLocation from 'react-native-get-location'

const {height,width} = Dimensions.get('window')
//<Image source={require('../images/bg1.jpg')} resizeMode="cover" style={{height:height/1.75,width:width}} />
function ConsumerSignup2(props) {
    const [flat,setFlat] = React.useState('');
    const [area,setArea] = React.useState('');
    const [landmark,setLandmark] = React.useState('');
    const [town,setTown] = React.useState('');
    const [latitude,setLatitude] = React.useState(null);
    const [longitude,setLongitude] = React.useState(null);
    const [cll,setCll] = React.useState(false);
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 40

    const completeSignup = async() => {
        setCll(true);
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
        .then(location => {
            console.log(location);
            setCll(false)
        })
        .catch(error => {
            const { code, message } = error;
            console.warn(code, message);
            setCll(false);
        })
    }

    return (
        <KeyboardAvoidingView keyboardVerticalOffset={-500} behavior="padding" enabled style={{flex:1,backgroundColor:'white'}}>
            <ScrollView style={{flex:1}}>
            <ImageBackground source={require('../images/bg1.jpg')} resizeMode="cover" style={{height:height/2.75,width:width,justifyContent:'center'}} >
                <Text style={{color:'white',fontSize:29,fontWeight:'600',alignSelf:'center'}}>Add Your Address</Text>
                </ImageBackground>
                <View style={{flexDirection:'row'}}>
                    <TextInput style={styles.input} value={flat} placeholder="Flat" onChangeText={(val) => setFlat(val)} />
                </View>
                <View style={{flexDirection:'row'}}>
                    <TextInput style={styles.input} value={area} placeholder="Area" onChangeText={(val) => setArea(val)} />
                </View>
                <View style={{flexDirection:'row'}}>
                    <TextInput style={styles.input} value={landmark} placeholder="Landmark" onChangeText={(val) => setLandmark(val)} />
                </View>
                <View style={{flexDirection:'row'}}>
                    <TextInput style={styles.input} value={town} placeholder="Town" onChangeText={(val) => setTown(val)} />
                </View>
                <View>
                    <TouchableOpacity onPress={completeSignup} style={{width:width-75,alignItems:'center',marginTop:25,borderRadius:9,height:50,backgroundColor:'#ff4500',alignSelf:'center',justifyContent:'center'}}>
                        <View>
                        {
                            !cll?
                            <Text style={{color:'white',fontSize:21}}>Complete Signup</Text>
                            :
                            <ActivityIndicator color="white" size="large" />
                        }
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    input:{
        flex:1,
        marginLeft:15,
        marginRight:15,
        fontSize:19,
        borderBottomWidth:1,
        borderColor:'#ff4500',
        marginTop:15,
        paddingBottom:5,
        color:'#101010'
    }
})

export default ConsumerSignup2;