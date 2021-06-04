import React, { useState , useEffect } from 'react';
import { Text , View , Dimensions , StyleSheet , Image , TextInput , TouchableOpacity} from 'react-native';
import Navbar from '../../components/Navbar'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function SellerSignUp (props) {

    let presentSignUp = (
        <View>
            <View style={{marginLeft: windowWidth*0.1 , marginTop: windowHeight*0.04}}>
                <Text style={{fontSize: windowWidth*0.075 , fontFamily: "Montserrat-Bold"}}>New to SHOPY!</Text>
                <Text style={styles.labels}>Register Here</Text>
            </View>
            <View style={{marginTop: 20}}>
                <Text style={[styles.labels , {marginLeft: windowWidth*0.1}]}>Shop Name</Text>
                <View>
                    <TextInput 
                        style={styles.input}
                        onChangeText={() => {}}
                        // value={text}
                        placeholder="Email"
                    />
                </View>
            </View>
            <View style={{marginTop: 20}}>
                <Text style={[styles.labels , {marginLeft: windowWidth*0.1}]}>Owner Name</Text>
                <View>
                    <TextInput 
                        style={styles.input}
                        onChangeText={() => {}}
                        // value={text}
                        placeholder="Password" 
                    /> 
                </View>
            </View>
            <View style={{marginTop: 20}}>
                <Text style={[styles.labels , {marginLeft: windowWidth*0.1}]}>Email/Username</Text>
                <View>
                    <TextInput 
                        style={styles.input}
                        onChangeText={() => {}}
                        // value={text}
                        placeholder="Password" 
                    /> 
                </View>
            </View>
            <View style={{marginTop: 20}}>
                <Text style={[styles.labels , {marginLeft: windowWidth*0.1}]}>Password</Text>
                <View>
                    <TextInput 
                        style={styles.input}
                        onChangeText={() => {}}
                        // value={text}
                        placeholder="Password" 
                    /> 
                </View>
            </View>
            <View style={{marginTop: 20}}>
                <Text style={[styles.labels , {marginLeft: windowWidth*0.1}]}>Repeat Password</Text>
                <View>
                    <TextInput 
                        style={styles.input}
                        onChangeText={() => {}}
                        // value={text}
                        placeholder="Password" 
                    /> 
                </View>
            </View>
           <View style={{alignItems: "center" , marginTop: 15}}>
                <TouchableOpacity style={styles.submit} onPress={() => {
                    setCount(2);
                }}>
                     <Text style={{color: "white" , fontFamily: 'Montserrat-Bold' , fontSize: windowHeight*0.025 }} >
                         Next
                     </Text>
                </TouchableOpacity>
            </View>      
        </View>
    )

    const [count, setCount] = useState(1);

    useEffect(() => {
        console.log("HERE");
        if(count == 2)
        {
            presentSignUp = (
                <View>
                    <View style={{marginTop: 20}}>
                        <Text style={[styles.labels , {marginLeft: windowWidth*0.1}]}>Shop Name</Text>
                        <View>
                            <TextInput 
                                style={styles.input}
                                onChangeText={() => {}}
                                // value={text}
                                placeholder="Email"
                            />
                        </View>
                    </View>
                    <View style={{marginTop: 20}}>
                        <Text style={[styles.labels , {marginLeft: windowWidth*0.1}]}>Owner Name</Text>
                        <View>
                            <TextInput 
                                style={styles.input}
                                onChangeText={() => {}}
                                // value={text}
                                placeholder="Password" 
                            /> 
                        </View>
                    </View>
                    <View style={{marginTop: 20}}>
                        <Text style={[styles.labels , {marginLeft: windowWidth*0.1}]}>Email/Username</Text>
                        <View>
                            <TextInput 
                                style={styles.input}
                                onChangeText={() => {}}
                                // value={text}
                                placeholder="Password" 
                            /> 
                        </View>
                    </View>
                    <View style={{marginTop: 20}}>
                        <Text style={[styles.labels , {marginLeft: windowWidth*0.1}]}>Password</Text>
                        <View>
                            <TextInput 
                                style={styles.input}
                                onChangeText={() => {}}
                                // value={text}
                                placeholder="Password" 
                            /> 
                        </View>
                    </View>
                    <View style={{marginTop: 20}}>
                        <Text style={[styles.labels , {marginLeft: windowWidth*0.1}]}>Repeat Password</Text>
                        <View>
                            <TextInput 
                                style={styles.input}
                                onChangeText={() => {}}
                                // value={text}
                                placeholder="Password" 
                            /> 
                        </View>
                    </View>
                   <View style={{alignItems: "center" , marginTop: 15}}>
                        <TouchableOpacity style={styles.submit} onPress={() => {
        
                        }}>
                             <Text style={{color: "white" , fontFamily: 'Montserrat-Bold' , fontSize: windowHeight*0.025 }} >
                                 Next
                             </Text>
                        </TouchableOpacity>
                    </View>      
                </View>
            )
        }
      } , [count]);

    return (
        <View style={{flex: 1}}>
          <Navbar />
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




              {presentSignUp}





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