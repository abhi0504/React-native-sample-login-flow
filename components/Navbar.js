import React, { Component } from 'react';
import { Text , View , Dimensions , StyleSheet , Image} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Navbar extends Component {
  render() {
    return (
        <View>
            <View style={styles.navbar}> 
              <View style={styles.navbarIcon1}>
                <View style={{marginLeft: 5}}>
                  <Text style={{color: "white" , fontFamily: "Montserrat-ExtraBold" , fontSize: windowHeight*0.04}}>SHOPY</Text>
                </View>
                <View  style={{marginRight: 5}}>
                  <Text style={{color: "white" , fontFamily: 'Montserrat-Bold'}}>Home</Text>
                </View>
              </View>
            </View>
        </View>
    );
  }
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

  }
});

export default Navbar;