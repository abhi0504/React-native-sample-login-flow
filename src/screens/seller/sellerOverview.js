import * as React from 'react';
import axios from 'axios';
import { View, Text, AsyncStorage,Dimensions , TouchableOpacity , ActivityIndicator , FlatList , StyleSheet ,Image } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../consumer/ConsumerComponents/Header';
import { url } from '../../api/api';
import ListComponent from '../../components/ListComponent'

const {height,width} = Dimensions.get('window')

function SellerScreen(props) {

    const [t,setT] = React.useState('')
    const [products , setProducts] = React.useState([]);
    const [loading , setLoading] = React.useState(false);


    const getToken = async () => {
        const value = await AsyncStorage.getItem('shop_token');
        setT(value);
    }

    React.useEffect(() => {
        setLoading(true)
        getToken();
        fetchProducts();
        setLoading(false)
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

    const fetchProducts = async() => {
        console.log("HERE");
        var token = await AsyncStorage.getItem('shop_token');
        console.log(token);
        axios.get(`${url}/shop/orders`,{
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            }
        }).then(res => {
            console.log(res.data)
            setProducts(res.data)
        }).catch(err => {
            console.log("error");
            console.log(err)
        })
    }

    const renderItem = (item) => {
        return(
        <ListComponent item={item} navigation={() => {
            props.navigation.navigate("OrderDetails" , { id: item.index })
        }}/>
        )
    }

    return (
        <View style={{flex:1}}>
            <Header backgroundColor='#0ae38c' header='Seller' height={55} width={width} />
            <TouchableOpacity onPress={() => {props.navigation.navigate("AddProducts")}} style={{marginTop: 20 , alignItems: "center"}}>
                <View style={{height: height*0.06 , width: width*0.5 , borderRadius: 200 , backgroundColor: "#0ae38c" , alignItems: "center" , justifyContent: "center"}}>
                    <Text style={{color: "white" , fontFamily: "Montserrat-ExtraBold" , fontSize: height*0.02}}>Add More Products</Text>
                </View>
                {/* List of current products  */}
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={addProduct}>
                <Text>Call</Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity style={{width: 50 , height: 50 , backgroundColor: "orange"}} onPress={fetchProducts}>
                <Text>Fetch Orders</Text>
            </TouchableOpacity> */}
            {loading ?  <ActivityIndicator size="large" color="#00ff00" /> : 
            <View style={{marginTop: 10 , alignItems: "center" , marginBottom : height*0.17}}>
                <FlatList 
                    data={products}
                    renderItem={renderItem}
                    keyExtractor={item => item.order_cart_id}
                />
            </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    renderItem: {
        flex: 1,
        height: height*0.28 , 
        width: width*0.95 ,  
        margin: 8 , 
        backgroundColor: "white",
        borderRadius: 20 ,
        borderWidth: 1.5 , 
        borderColor: "#0ae38c" 
    },
    upper: {
        flex: 0.3,
        // backgroundColor: "orange",
        borderRadius: 20,
        justifyContent: "center"
    },
    text: {
        fontFamily: "Montserrat-Bold"
    },
    mid: {
        flex: 0.3,
        flexDirection: "row",
        borderRadius: 20
    },
    bottom: {
        flex: 0.4,
        justifyContent: "center",
        alignItems: "center"
    }
  });

export default SellerScreen;