import * as React from 'react';
import { View, Text, AsyncStorage,Image,Dimensions,FlatList, TouchableOpacity } from 'react-native';

function deliveredOrders() {
    return(
        <View>
            <TouchableOpacity onPress={() => {
                AsyncStorage.clear()
            }}>
                <View style={{height: 100 , width: 100 , backgroundColor: "orange"}}>
                    <Text>deliveredOrders</Text>
                </View>
            </TouchableOpacity>
            
        </View>
        
    )
}

export default deliveredOrders