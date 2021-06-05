import * as React from 'react';
import { View,Image, Text,AsyncStorage ,Dimensions} from 'react-native';

const {height,width} = Dimensions.get('window')

function LoadingScreen(props) {

    const check = async() => {
        var user_token = await AsyncStorage.getItem('user_token')
        if(user_token!==null){
            return props.navigation.reset({
                index: 0,
                routes: [{name: 'Consumer'}],
            });
        }
        props.navigation.replace("ChooseType")
    }

    React.useEffect(() => {
        //Check if user is logged in using a token
        //props.navigation.replace("MainNav",{screen:'Main',screen:'Home'})
        setTimeout(() => {
            check()
        }, 1500);
    },[])

    return (
        <View style={{alignItems:'center'}}>
            <Image source={require('../images/si.gif')} style={{height:width,width:width,resizeMode:'contain'}}/>
            <Image source={require('../images/giphy.gif')} style={{height:width+25,width:width}}/>
        </View>
    )
}

export default LoadingScreen;