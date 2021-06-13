import * as React from 'react';
import axios from 'axios';
import { View, Text, AsyncStorage,Dimensions , TouchableOpacity , ActivityIndicator , FlatList , StyleSheet ,Image } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 

const {height,width} = Dimensions.get('window')

function productsList({item , navigation}) {
    // console.log(item);
    return(
        <View>
            <TouchableOpacity onPress={navigation}>
                <View style={styles.renderItem}>
                    <View style={styles.upper}>
                        <View style={{}}>
                            <Image
                                style={{height: height*0.15 , width: width*0.3 , marginLeft: 10}}
                                source={{uri: item.item.product_image}}
                            />
                        </View>
                    </View>
                    <View style={styles.mid}>
                        <View style={{justifyContent: "center" , marginLeft: 10}}>
                            <Text style={styles.text}>Name : {item.item.product_name}</Text>
                            <Text style={styles.text}>Price : {item.item.product_price}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
        )
}

const styles = StyleSheet.create({
    renderItem: {
        flex: 1,
        height: height*0.2 , 
        width: width*0.95 ,  
        margin: 8 , 
        backgroundColor: "white",
        borderRadius: 20 ,
        borderWidth: 1.5 , 
        borderColor: "#0ae38c" ,
        flexDirection: "row"
    },
    upper: {
        flex: 0.5,
        // backgroundColor: "orange",
        borderRadius: 20,
        justifyContent: "center",

    },
    text: {
        fontFamily: "Montserrat-Bold",
        color: "white"
    },
    mid: {
        flex: 0.5,
        flexDirection: "row",
        borderRadius: 20,
        backgroundColor: "#0ae38c",
        borderColor: "black",
        borderWidth: 1
    },
    bottom: {
        flex: 0.4,
        justifyContent: "center",
        alignItems: "center"
    }
  });

export default productsList;