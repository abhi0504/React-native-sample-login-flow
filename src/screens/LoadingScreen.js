import * as React from 'react';
import { View, Text,AsyncStorage } from 'react-native';

function LoadingScreen(props) {

    const check = async() => {
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
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
            <Text style={{fontSize:29,color:'#6495ed'}}>Online For Local</Text>
        </View>
    )
}

export default LoadingScreen;