import * as React from 'react';
import { View, Text, AsyncStorage } from 'react-native';

function NearbyShops() {

    const [l,setL] = React.useState(false);
    const [t,setT] = React.useState('')

    const getToken = async() => {
        setL(true);
        var token = await AsyncStorage.getItem('user_token');
        setT(token)
        console.log(token);
        setL(false);
    }

    React.useEffect(() => {
        getToken();
    },[])

    return (
        <View>
            <Text>HI</Text>
            {
                !l &&
                <Text>{t}</Text>
            }
        </View>
    )
}

export default NearbyShops;