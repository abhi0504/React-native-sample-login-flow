import React, { Component , useState } from 'react';
import { Text , View , Dimensions , StyleSheet , Image , TextInput , TouchableOpacity} from 'react-native';
import Navbar from '../../components/Navbar'
import GetLocation from 'react-native-get-location'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function SellerSignUp (props) {
  
  const[location , setLocation] = useState(null)
  
  const submitHandler = () => {
    let sname = props.route.params.sname
    let oname = props.route.params.oname
    let uname = props.route.params.uname
    let pass  = props.route.params.pass
    let rpass = props.route.params.rpass
    let add   = props.route.params.add 
    let num   = props.route.params.num 
    let desc  = props.route.params.desc 
    let time  = props.route.params.time 
    let id    = props.route.params.id 
    let longi = location.longitude
    let lati  = location.latitude
    // console.log(sname);
    // console.log(oname);
    // console.log(uname);
    // console.log(pass );
    // console.log(rpass);
    // console.log(add  );
    // console.log(num  );
    // console.log(desc );
    // console.log(time );
    // console.log(id   );
    // console.log(longi);
    // console.log(lati );
  }

    return (
        <View style={{flex: 1}}>
            <View>
            <Image
              style={{
                height: windowHeight*0.08,
                width: windowHeight*0.08,
                marginTop: -1
              }}
              source={require('../../../assets/loginImages/AngleTopLeft.png')}
            />
            </View>
            <View>

                {/* Add crousal for image and Latitude and Longitude use location */}

                <View style={{marginTop: 20}}>
                <Text style={[styles.labels , {marginLeft: windowWidth*0.1}]}>Provide Location of your Shop/Buisnesses</Text>
                {location ? 
                <View style={{marginTop: 20}}>
                  <Text style={[styles.labels , {marginLeft: windowWidth*0.1}]}>Latitude    : {location.latitude}</Text>
                  <Text style={[styles.labels , {marginLeft: windowWidth*0.1}]}>Longitude : {location.longitude}</Text>
                </View> : <View>
                    <TouchableOpacity style={{alignItems: "center"}} onPress={() => {
                      GetLocation.getCurrentPosition({
                        enableHighAccuracy: true,
                        timeout: 15000,
                    }).then((res) => {
                      console.log(location);
                      setLocation(res);
                    })
                    }}>
                      <View style={{height: windowHeight*0.07 , width: windowWidth*0.5 ,alignItems: "center" , justifyContent: "center", backgroundColor: "#0ae38c" , marginTop: 20 , borderRadius: 20}}>
                        <Text style={{color: "white" , fontFamily: 'Montserrat-Bold' , fontSize: windowHeight*0.025 }}>Press Here</Text>
                      </View>
                    </TouchableOpacity>
                </View> }
                
            </View>
        
           <View style={{alignItems: "center" , marginTop: 25}}>
                <TouchableOpacity style={styles.submit} onPress={() => {
                    submitHandler()
                }}>
                     <Text style={{color: "white" , fontFamily: 'Montserrat-Bold' , fontSize: windowHeight*0.025 }} >
                         Submit
                     </Text>
                </TouchableOpacity>
            </View>      
        </View>

            <View style={{
                flex: 1,
                alignItems: "flex-end",
                justifyContent: "flex-end",
                // marginTop: windowHeight*0.1
                }}>
           
            <Image
              style={{
                height: windowHeight*0.08,
                width: windowHeight*0.08,
                // marginLeft: windowWidth*0.85
              }}
              source={require('../../../assets/loginImages/AngleBottomRight.png')}
            />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
  navbar: {
    width: windowWidth, 
    height: windowHeight*0.1, 
    backgroundColor: "#162239",
    alignItems: "center",
    justifyContent: "center"
  },
  navbarIcon1: {
    width: windowWidth*0.8, 
    height: windowHeight*0.05,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  labels: {
    fontSize: windowWidth*0.035 , fontFamily: "Montserrat-Bold" , color: "#7c7c7c"
  },
  input: {
    height: windowHeight*0.05,
    width: windowWidth*0.8,
    marginLeft: windowWidth*0.1 ,
    marginTop: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#7c7c7c",
    fontFamily: "Montserrat-Light",
    padding: 10
  },
  bootombar: {
    width: windowWidth*0.8, 
    height: windowHeight*0.05,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  submit: {
      width: windowWidth*0.5,
      height: windowHeight*0.06,
      backgroundColor: "#0ae38c",
      borderRadius: 40,
      alignItems: "center",
      justifyContent: "center"
  }
});

export default SellerSignUp;