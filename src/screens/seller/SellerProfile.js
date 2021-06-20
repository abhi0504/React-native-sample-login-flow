import * as React from 'react';
import { View, Text, AsyncStorage,Image,Dimensions,FlatList, TouchableOpacity } from 'react-native';

function SellerProfile() {
    return(
        <View>
            <TouchableOpacity onPress={() => {
                AsyncStorage.clear()
            }}>
                <View style={{height: 100 , width: 100 , backgroundColor: "orange"}}>
                    <Text>LOG OUT</Text>
                </View>
            </TouchableOpacity>
            
        </View>
        
    )
}

export default SellerProfile