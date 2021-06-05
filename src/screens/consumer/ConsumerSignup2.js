import axios from 'axios';
import * as React from 'react';
import { View,ScrollView,AsyncStorage,ImageBackground,TouchableOpacity, Text,Button,FlatList,ActivityIndicator,Platform,Dimensions,Image,TextInput,StyleSheet,KeyboardAvoidingView } from 'react-native';
import { Header } from '@react-navigation/stack';
import GetLocation from 'react-native-get-location'
import {url} from '../../api/api'

const {height,width} = Dimensions.get('window')
function ConsumerSignup2(props) {
    const [flat,setFlat] = React.useState('');
    const [area,setArea] = React.useState('');
    const [landmark,setLandmark] = React.useState('');
    const [town,setTown] = React.useState('');
    const [latitude,setLatitude] = React.useState(null);
    const [longitude,setLongitude] = React.useState(null);
    const [cll,setCll] = React.useState(false);
    const [aname,setAname] = React.useState('')
    const [loading,setLoading] = React.useState(false);

    const signup = async() => {
        const email = props.route.params.email
        const password = props.route.params.password
        const name = props.route.params.name
        const contact = props.route.params.contact
        setCll(true);
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        }).then(async(location) => {
            console.log(location);
            setLongitude(location.longitude)
            setLatitude(location.latitude)
            await doSignup(location.latitude,location.longitude)
            addAddress(location.latitude,location.longitude)
        })
        .catch(error => {
            const { code, message } = error;
            console.warn(code, message);
            setCll(false);
        })
    }

    const doSignup = async(longitude,latitude) => {
        const email = props.route.params.email
        const password = props.route.params.password
        const name = props.route.params.name
        const contact = props.route.params.contact
        console.log(longitude,latitude)
        console.log(latitude,longitude)
        var address = flat + ' , ' + area + ' , ' + landmark + ' , ' + town;
        var consumer = {
            consumer_email:email,
            consumer_password:password,
            consumer_contact:contact,
            consumer_address:address,
            consumer_name:name,
            consumer_image:'',
        }
        console.log(consumer)
        console.log(url);
        await axios.post(`${url}/consumer/signup`,consumer, {
            headers: {
            'Content-Type': 'application/json'
            }
        }).then(async(res) => {
            console.log(res.data);
            var token = res.data.token;
            await AsyncStorage.setItem('user_token', token)
        })
    }

    const addAddress = async(latitude,longitude) => {
        var address = flat + ' , ' + area + ' , ' + landmark + ' , ' + town;
        var newAddress = {
            address:address,
            state:town,
            pincode:town,
            latitude:latitude,
            longitude:longitude,
            name:aname
        }
        console.log(newAddress)
        var token = await AsyncStorage.getItem('user_token');
        console.log(token);
        axios.post(`${url}/consumer/address`,newAddress, {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`
        }
        }).then(response => {
            console.log(response.data);
            updateAddress(response.data.addressId)
        })
    }

    const updateAddress = async(addressId) => {
        var token = await AsyncStorage.getItem('user_token');
        console.log(token);
        axios.get(`${url}/consumer/address/update/${addressId}`,{
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(response => {
            console.log(response.data);
            setCll(false);
            props.navigation.reset({
                index: 0,
                routes: [{name: 'Consumer'}],
            });
        })
    }

    return (
        <KeyboardAvoidingView keyboardVerticalOffset={-500} behavior="padding" enabled style={{flex:1,backgroundColor:'white'}}>
            <ScrollView style={{flex:1}}>
            <ImageBackground source={require('../../images/bg1.jpg')} resizeMode="cover" style={{height:height/2.75,width:width,justifyContent:'center'}} >
                <Text style={{color:'white',fontSize:29,fontWeight:'600',alignSelf:'center'}}>Add Your Address</Text>
                </ImageBackground>
                <View style={{flexDirection:'row'}}>
                    <TextInput style={styles.input} value={flat} placeholder="Flat / Building" onChangeText={(val) => setFlat(val)} />
                </View>
                <View style={{flexDirection:'row'}}>
                    <TextInput style={styles.input} value={area} placeholder="Area / Society" onChangeText={(val) => setArea(val)} />
                </View>
                <View style={{flexDirection:'row'}}>
                    <TextInput style={styles.input} value={landmark} placeholder="Landmark" onChangeText={(val) => setLandmark(val)} />
                </View>
                <View style={{flexDirection:'row'}}>
                    <TextInput style={styles.input} value={town} placeholder="Town" onChangeText={(val) => setTown(val)} />
                </View>
                <View style={{flexDirection:'row'}}>
                    <TextInput style={styles.input} value={aname} placeholder="Address Name" onChangeText={(val) => setAname(val)} />
                </View>
                <View>
                    <TouchableOpacity onPress={signup} style={{width:width-75,alignItems:'center',marginTop:25,borderRadius:9,height:50,backgroundColor:'#ff4500',alignSelf:'center',justifyContent:'center'}}>
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