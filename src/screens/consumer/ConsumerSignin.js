import axios from 'axios';
import * as React from 'react';
import { View,ScrollView,ImageBackground,TouchableOpacity, Text,Button,FlatList,ActivityIndicator,Platform,Dimensions,Image,TextInput,StyleSheet,KeyboardAvoidingView } from 'react-native';
import StyleButton from '../../components/Button';
import { Header } from '@react-navigation/stack';

const {height,width} = Dimensions.get('window')
function ConsumerSignin(props) {
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 40
    return (
        <KeyboardAvoidingView keyboardVerticalOffset={-500} behavior="padding" enabled style={{flex:1,backgroundColor:'white'}}>
            <ScrollView>
            <ImageBackground source={require('../../images/bg1.jpg')} resizeMode="cover" style={{height:height/1.75,width:width,justifyContent:'center'}} >
                <Text style={{color:'white',fontSize:29,fontWeight:'600',padding:15,paddingBottom:0}}>Support Local</Text>
                <Text style={{color:'white',fontSize:29,fontWeight:'600',paddingLeft:15}}>Buisnesses</Text>
                </ImageBackground>
                <View style={{flexDirection:'row'}}>
                    <TextInput style={styles.input} value={email} placeholder="Email" onChangeText={(val) => setEmail(val)} />
                </View>
                <View style={{flexDirection:'row'}}>
                    <TextInput style={styles.input} value={password} placeholder="Password" onChangeText={(val) => setPassword(val)} />
                </View>
                <View>
                    <TouchableOpacity style={{width:width-75,alignItems:'center',marginTop:25,borderRadius:9,height:50,backgroundColor:'#ff4500',alignSelf:'center',justifyContent:'center'}}>
                        <View>
                        <Text style={{color:'white',fontSize:21}}>Log in</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{alignItems:'center',marginTop:15,marginBottom:15}}>
                        <Text>OR</Text>
                    </View>
                    <TouchableOpacity onPress={() => props.navigation.push('ConsumerSignup1',{email:email,password:password})} style={{width:width-75,alignItems:'center',marginTop:0,borderRadius:9,height:50,backgroundColor:'white',borderWidth:1,borderColor:'gray',alignSelf:'center',justifyContent:'center'}}>
                        <View>
                        <Text style={{color:'gray',fontSize:21}}>Signup</Text>
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

export default ConsumerSignin;