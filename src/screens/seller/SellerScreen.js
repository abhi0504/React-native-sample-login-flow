import * as React from 'react';
import { View, Text, AsyncStorage,Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../consumer/ConsumerComponents/Header';

const {height,width} = Dimensions.get('window')

function SellerScreen(props) {

    const [t,setT] = React.useState('')


    const getToken = async () => {
        const value = await AsyncStorage.getItem('shop_token');
        setT(value);
    }

    React.useEffect(() => {
        getToken();
    },[])

    return (
        <View style={{flex:1}}>
            <Header backgroundColor='#0ae38c' header='Seller' height={55} width={width} />
            <Text>HI</Text>
            <Text>{t}</Text>
            <Text>Here</Text>
        </View>
    )
}

export default SellerScreen;