import axios from 'axios';
import * as React from 'react';
import { View, Text,Button,FlatList,ActivityIndicator } from 'react-native';
import Card from '../components/Card';

function HomeScreen() {

    const [val,setVal] = React.useState(0)
    const [data,setData] = React.useState([])
    const [loading,setLoading] = React.useState(true)

    const getData = async() => {
        setLoading(true)
        axios.get('https://test.extensionceramics.com/api/method/erpnext.accounts.doctype.purchase_invoice.purchase_invoice.tally_integration')
        .then(function(res) {
            console.log(res.data.message)
            setData(res.data.message)
            setLoading(false)
        })
        .catch(err => {
            console.log(err)
        }) 
    }

    React.useEffect(() => {
        //Check if user is logged in using a token
        getData()
    },[])

    return (
        <View style={{flex:1}}>
            {
                !loading ?
                <FlatList
                data={data}
                renderItem={({item,index}) => <Card item={item} /> }
                />
                :
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <ActivityIndicator size="large" color="#6495ed" />
                </View>
            }
        </View>
    )
}

export default HomeScreen;