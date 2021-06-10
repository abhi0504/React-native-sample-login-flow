import * as React from 'react';
import axios from 'axios';
import { View, Text, AsyncStorage,Dimensions , TouchableOpacity , ActivityIndicator , FlatList , StyleSheet ,Image , ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../consumer/ConsumerComponents/Header';
import { url } from '../../api/api';
import ListComponent from '../../components/ListComponent'

const {height,width} = Dimensions.get('window')

function OrderDetails(props) {
    return (
        <ScrollView style={{flex: 1 , backgroundColor: "white"}}>
            <Text style={{marginLeft : width*0.05 , fontFamily: "Montserrat-ExtraBold" , fontSize: width*0.06 , marginTop: height*0.05 , color: "#0ae38c"}}>ORDER SUMMARY</Text>
            
            <View style={{marginLeft: width*0.08 , marginTop: height*0.01}}>
                <Text style={{fontFamily: "Montserrat-ExtraBold" , fontSize: width*0.05 }}>DELIVER TO</Text>   
                <View style={{marginTop: 5}}>
                <Text style={{fontFamily: "Montserrat-Bold" , fontSize: width*0.04 , marginLeft: 5 }}>Abhishek Sharma</Text> 
                <Text style={{fontFamily: "Montserrat-Bold" , fontSize: width*0.04 , marginLeft: 5  }}>New Delhi , Shahdara , India</Text>   
                </View>
            </View>

            <View style={{marginLeft: width*0.08 , marginTop: height*0.04}}>
                <Text style={{fontFamily: "Montserrat-ExtraBold" , fontSize: width*0.05 }}>STATUS</Text> 

                <View style={{justifyContent: "center"}}>
                            <View style={{marginTop: 5 , marginLeft: 5  }}>

                            <Text style={{fontFamily: "Montserrat-Bold" , fontSize: width*0.04}}>STATUS</Text>
                            <View style={{backgroundColor: "#0ae38c" ,width: width*0.5 , alignItems: "center"}}>
                             <Text style={{color :"white" , fontSize: width*0.04, marginLeft: 5 , fontFamily: "Montserrat-Bold"}}>NOT DELIVERD</Text>
                            </View>
                            <Text style={{fontFamily: "Montserrat-Bold" , fontSize: width*0.04}}>PAYMENT</Text>
                            <View style={{backgroundColor: "#0ae38c" ,width: width*0.5 , alignItems: "center"}}>
                             <Text style={{color :"white" , fontSize: width*0.04, marginLeft: 5 ,fontFamily: "Montserrat-Bold" }}>DONE</Text>
                            </View>
                            </View>
                </View> 
            </View>

            <View style={{marginLeft: width*0.08 , marginTop: height*0.04}}>
                <Text style={{fontFamily: "Montserrat-ExtraBold" , fontSize: width*0.05 }}>ORDER</Text> 
                <View style={{flexDirection: "row" , marginTop: 10 , justifyContent: "space-between" , marginRight: width*0.1}}>

                    <View style={{marginLeft: 15 }}>
                        <Text style={{fontFamily: "Montserrat" , fontSize: width*0.04 ,}}>AAM KA AACHAR</Text>
                        <Text style={{fontFamily: "Montserrat" , fontSize: width*0.04 , marginLeft: 5}}> X 1.5 Kg</Text>
                    </View>

                    <View style={{}}>
                        <Text style={{fontFamily: "Montserrat" , fontSize: width*0.04 ,}}>
                        ₹ 599.00
                        </Text>
                    </View>
                    
                </View>

                <View style={{flexDirection: "row" , marginTop: 10 , justifyContent: "space-between" , marginRight: width*0.1}}>

                    <View style={{marginLeft: 15 }}>
                        <Text style={{fontFamily: "Montserrat" , fontSize: width*0.04 ,}}>AAM KA AACHAR</Text>
                        <Text style={{fontFamily: "Montserrat" , fontSize: width*0.04 , marginLeft: 5}}> X 1.5 Kg</Text>
                    </View>

                    <View style={{}}>
                        <Text style={{fontFamily: "Montserrat" , fontSize: width*0.04 ,}}>
                        ₹ 599.00
                        </Text>
                    </View>
                    
                </View>

                <View style={{flexDirection: "row" , marginTop: 10 , justifyContent: "space-between" , marginRight: width*0.1}}>

                    <View style={{marginLeft: 15 }}>
                        <Text style={{fontFamily: "Montserrat" , fontSize: width*0.04 ,}}>AAM KA AACHAR</Text>
                        <Text style={{fontFamily: "Montserrat" , fontSize: width*0.04 , marginLeft: 5}}> X 1.5 Kg</Text>
                    </View>

                    <View style={{}}>
                        <Text style={{fontFamily: "Montserrat" , fontSize: width*0.04 ,}}>
                        ₹ 599.00
                        </Text>
                    </View>
                    
                </View>      
                
            </View>

            <View style={{alignItems: "center" , marginTop: 20}}>
                <View style={{backgroundColor: "#0ae38c" ,width: width*0.8 ,alignItems: "center" , justifyContent: "center" , flexDirection: "row" , justifyContent: "space-between"}}>
                  <Text style={{color :"white" , fontSize: width*0.05, marginLeft: 5 , fontFamily: "Montserrat-Bold"}}>GRAND TOTAL</Text>
                  <Text style={{color :"white" , fontSize: width*0.05, marginRight: 5 , fontFamily: "Montserrat-Bold"}}>₹ 1797.00</Text>
                </View>
            </View>

            <View style={{marginLeft: width*0.1}}>
              <Text style={{fontFamily: "Montserrat-ExtraBold" , fontSize: width*0.05 ,marginTop: 20 }}>MORE DETAILS</Text> 
              <View style={{marginTop: 5}}>
                <Text style={{fontFamily: "Montserrat-Bold" , fontSize: width*0.04 , marginLeft: 5 }}>ORDER ID</Text> 
                <Text style={{fontFamily: "Montserrat" , fontSize: width*0.04 , marginLeft: 15 }}>876787656721234</Text> 
                <Text style={{fontFamily: "Montserrat-Bold" , fontSize: width*0.04 , marginLeft: 5 , marginTop: 3 }}>PAYMENT TYPE</Text> 
                <Text style={{fontFamily: "Montserrat" , fontSize: width*0.04 , marginLeft: 15 }}>ONLINE</Text> 
                <Text style={{fontFamily: "Montserrat-Bold" , fontSize: width*0.04 , marginLeft: 5 , marginTop: 3}}>DATE AND TIME</Text> 
                <Text style={{fontFamily: "Montserrat" , fontSize: width*0.04 , marginLeft: 15 }}>12 AUG 2021 , 09:23 AM</Text> 
                <Text style={{fontFamily: "Montserrat-Bold" , fontSize: width*0.04 , marginLeft: 5 , marginTop: 3 }}>CONTACT NUMBER</Text> 
                <Text style={{fontFamily: "Montserrat" , fontSize: width*0.04 , marginLeft: 15 }}>9975436743</Text> 
              </View>


            </View>





            


        </ScrollView>
    )
}

export default OrderDetails;