import * as React from 'react';
import { View, Text, AsyncStorage,Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './ConsumerComponents/Header';

const {height,width} = Dimensions.get('window')

function NearbyShops(props) {

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
        <View style={{flex:1}}>
            <Header backgroundColor='#ff6347' header='Nearby Shops' height={55} width={width} />
            <Text>HI</Text>
            {
                !l &&
                <Text>{t}</Text>
            }
            <Text>{props.latlng.latitude}</Text>
        </View>
    )
}

NearbyShops.propTypes = {
    latlng:PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    latlng:state.latlng
})

export default connect(mapStateToProps)(NearbyShops);