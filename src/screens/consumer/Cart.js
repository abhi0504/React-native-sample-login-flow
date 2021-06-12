import * as React from 'react';
import { View, Text, AsyncStorage,Dimensions,Image,FlatList,StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './ConsumerComponents/Header';
import axios from 'axios';
import { url } from '../../api/api';
import CartProduct from './ConsumerComponents/CartProduct';

const {height,width} = Dimensions.get('window')

function Cart(props) {

    const [loading,setLoading] = React.useState(true);
    const [data,setData] = React.useState([])
    const [total,setTotal] = React.useState(0)
    const [token,setToken] = React.useState(null)

    const getCartItems = async() => {
        setLoading(true);
        var token = await AsyncStorage.getItem('user_token')
        setToken(token)
        axios.get(`${url}/consumer/cartItems`,{
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            }
        }).then(res => {
            console.log(res.data);
            setData(res.data);
            if(res.data.length > 0){
                setTotal(res.data[0].cart_total)
            } 
            setLoading(false);
        }).catch(err => {
            console.log(err);
            setLoading(false);
        })
    }

    const changeTotal = (price,type) => {
        if(type==='inc'){
            setTotal(total+price);
        } else {
            setTotal(total-price)
        }
    }

    const changeData = () => {
        setLoading(true)
        axios.get(`${url}/consumer/cartItems`,{
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            }
        }).then(res => {
            if(res.data!==data){
                setData(res.data)
                setTotal(res.data[0].cart_total)
                setLoading(false)
            }
        })
    }

    React.useEffect(() => {
        getCartItems();
    },[])

    React.useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
          // do something
          console.log('hiiiiiiiiiiiiiiiiiiiiiiii');
          changeData()
        });
    
        return unsubscribe;
      }, [props.navigation]);

    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <Header backgroundColor='#ff6347' header='My Cart' height={55} width={width} />
            {
                loading ?
                <Image source={require('../../images/l2.gif')} resizeMode='contain' style={{width:width}} />
                :
                <View style={{backgroundColor:'white',flex:1}}>
                    <View style={{marginLeft:15,marginTop:9,paddingBottom:9,marginRight:15,borderBottomWidth:0.75,borderColor:'#ff6347'}}>
                        <Text style={{fontSize:21.5}}>Cart Total : Rs {total}</Text>
                    </View>
                    <FlatList
                    showsVerticalScrollIndicator={false}
                        data={data}
                        renderItem={({item,index}) => <CartProduct item={item} token={token} changeTotal={changeTotal} /> }
                    />
                </View>
            }
        </View>
    )
}

export default Cart;