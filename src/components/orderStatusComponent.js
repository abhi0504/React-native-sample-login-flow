import * as React from 'react';
import axios from 'axios';
import { View, Text, AsyncStorage,Dimensions , TouchableOpacity , ActivityIndicator , FlatList , StyleSheet ,Image } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'; 

const {height,width} = Dimensions.get('window')

function orderStatusComponent({item , navigation}) {
    // console.log(item);
    return(
        <View>
            <TouchableOpacity onPress={navigation}>
                <View style={styles.renderItem}>
                    <View style={styles.upper}>
                        <View style={{flexDirection : "row"}}>
                            <Image
                                style={{height: height*0.065 , width: width*0.13 , marginLeft: 10}}
                                source={require('../images/user.png')}
                            />

                            <View style={[{flexDirection: "column" ,justifyContent: "center" , marginLeft: 5}]}>
                                <Text style={styles.text}>{item.consumer_name}</Text>
                                <Text style={styles.text}>{item.consumer_contact}</Text>
                            </View>
                            
                            <View style={{justifyContent: "center" , marginLeft: width*0.35}}>
                                <Text style={{fontFamily: "Montserrat-ExtraBold"}}>Price: {item.tota}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mid}>
                        <View style={{justifyContent: "center" , marginLeft: 10}}>
                            <View style={{marginBottom: 5}}>

                            <Text style={styles.text}>STATUS : {item.delivery_status}</Text>
                            </View>
                            <Text style={styles.text}>PAYMENT : {item.payment_status}</Text>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <View style={{justifyContent: "center" , marginLeft: 10}}>
                            <Text style={styles.text}>ORDERED ON</Text>
                        </View>
                            <Text style={styles.text}>{item.ordered_time}</Text>
                    </View>
                </View>
            </TouchableOpacity>
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

export default orderStatusComponent;