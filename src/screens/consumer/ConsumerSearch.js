import * as React from 'react';
import { View, Text, AsyncStorage,TextInput,Dimensions,Image,FlatList,StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './ConsumerComponents/Header';
import axios from 'axios';
import { url } from '../../api/api';
import ShopCard from '../../components/ShopCard';
import { loadAllProduct } from '../../redux/consumer/actions/productActions';
import ProductCard from './ConsumerComponents/ProductCard';

const {height,width} = Dimensions.get('window')

function ConsumerSearch(props) {

    const [userToken,setUserToken] = React.useState('')
    const [st,setSt] = React.useState('')
    const [ap,setAp] = React.useState([])
    const [fp,setFp] = React.useState([])

    const getData = async() => {
        var token = await AsyncStorage.getItem('user_token');
        setUserToken(token)
        props.loadAllProduct()
    }

    React.useEffect(() => {
        getData()
    },[])

    React.useEffect(() => {
        if(!props.allProducts.ploading){
            setAp(props.allProducts.products)
            setFp(props.allProducts.products)
        }
    },[props.allProducts.ploading])

    React.useEffect(() => {
        if(st.length>0){
            const newData = ap.filter(item => {
                const itemData = item.product_name.toUpperCase();
                const textData = st.toUpperCase();
                return itemData.indexOf(textData) > -1
            });
            setFp(newData)
        } else {
            setFp(ap)
        }
    },[st])

    return (
        <View style={{flex:1}}>
            <StatusBar backgroundColor="#ff6347" />
            <Header backgroundColor='#ff6347' header='Search Products' height={55} width={width} />
            {
                props.allProducts.ploading ?
                <View style={{backgroundColor:'white',flex:1,alignItems:'center',justifyContent:'center'}}>
                    <Image source={require('../../images/l2.gif')} resizeMode='contain' style={{width:width}} />
                </View>
                :
                <View style={{flex:1,backgroundColor:'white'}}>
                    <TextInput onChangeText={(val) => setSt(val)} value={st} style={{borderBottomColor:'#ff6347',paddingLeft:9,fontSize:16.5,borderBottomWidth:1}} placeholder='Search Product' />
                <FlatList
                data={fp}
                renderItem={({item,index}) => <ProductCard item={item} token={userToken} /> }
                />
            </View>
            }
        </View>
    )
}

ConsumerSearch.propTypes = {
    latlng:PropTypes.object.isRequired,
    allProducts:PropTypes.object.isRequired,
    loadAllProduct:PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    latlng:state.latlng,
    allProducts:state.allProducts
})

const mapActionsToProps = {
    loadAllProduct
}

export default connect(mapStateToProps,mapActionsToProps)(ConsumerSearch);