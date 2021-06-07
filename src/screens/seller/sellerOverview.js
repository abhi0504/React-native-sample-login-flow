import * as React from 'react';
import { View, Text, AsyncStorage,Dimensions , TouchableOpacity } from 'react-native';
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
            <TouchableOpacity onPress={() => {props.navigation.navigate("AddProducts")}} style={{marginTop: 20 , alignItems: "center"}}>
                <View style={{height: height*0.08 , width: width*0.7 , borderRadius: 200 , backgroundColor: "#0ae38c" , alignItems: "center" , justifyContent: "center"}}>
                    <Text style={{color: "white" , fontFamily: "Montserrat-ExtraBold" , fontSize: height*0.03}}>Add More Products</Text>
                </View>
                {/* List of current products  */}
            </TouchableOpacity>
        </View>
    )
}

export default SellerScreen;