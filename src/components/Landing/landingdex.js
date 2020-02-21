import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  DrawerLayoutAndroid,
  Image,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-context';
import Menu from './menu';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Landingdex extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.header1}>
            <View>
              <Image
                source={require('../../assets/absulogo.png')}
                style={{width: 40, height: 40, alignSelf: 'center'}}
              />
            </View>
            <View>
              <Text style={styles.welcomeLogo}>Welcome To ABSU</Text>
            </View>
          </View>
        </View>

        <ImageBackground
          source={require('../../assets/absubackround.png')}
          style={{width: '100%', height: '100%', opacity: 0.8}}>
          <View style={styles.touchables}>
            <View
              style={{
                width: 300,
                height: 80,
                backgroundColor: '#ffa94d',
                margin: 7,
                borderRadius: 20,
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('StudentLogin');
                }}>
                <Text
                  style={{
                    color: 'black',
                    textAlign: 'center',
                    paddingTop: 25,
                    fontSize: 25,
                  }}>
                  Students
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                width: 300,
                height: 80,
                backgroundColor: '#ffa94d',
                margin: 7,
                borderRadius: 20,
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('StaffLogin');
                }}>
                <Text
                  style={{
                    color: 'black',
                    textAlign: 'center',
                    paddingTop: 25,
                    fontSize: 25,
                  }}>
                  Staff
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Landingdex;

const styles = StyleSheet.create({
  headerContainer: {
    //  flex: 1,
    backgroundColor: '#324AB2',
  },
  header1: {
    margin: 5,
    display: 'flex',
    flexDirection: 'column',
  },
  absuMobile: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    color: 'white',
    fontSize: 20,
  },
  welcomeLogo: {
    alignSelf: 'center',
    color: 'white',
  },
  touchables: {
    flex: 0.6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
