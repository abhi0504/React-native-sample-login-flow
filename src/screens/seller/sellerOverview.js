import * as React from 'react';
import axios from 'axios';
import { View, Text, AsyncStorage,Dimensions , TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../consumer/ConsumerComponents/Header';
import { url } from '../../api/api';

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

    const addProduct = async() => {
        //await uploadImageToFirebase();
        const product = {
            product_name:'new',
            product_price: 10,
            product_quantity: 5, 
            //product_description: description,
            product_image: '',
            product_type: 'packaged'
        }
        var token = await AsyncStorage.getItem('shop_token');
        console.log(token);
        console.log(product);
        axios.post(`${url}/shop/product`,product,{
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            }
        }).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <View style={{flex:1}}>
            <Header backgroundColor='#0ae38c' header='Seller' height={55} width={width} />
            <TouchableOpacity onPress={() => {props.navigation.navigate("AddProducts")}} style={{marginTop: 20 , alignItems: "center"}}>
                <View style={{height: height*0.08 , width: width*0.7 , borderRadius: 200 , backgroundColor: "#0ae38c" , alignItems: "center" , justifyContent: "center"}}>
                    <Text style={{color: "white" , fontFamily: "Montserrat-ExtraBold" , fontSize: height*0.03}}>Add More Products</Text>
                </View>
                {/* List of current products  */}
            </TouchableOpacity>
            <TouchableOpacity onPress={addProduct}>
                <Text>Call</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SellerScreen;