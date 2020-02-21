import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TouchableNativeFeedback,
  DrawerLayoutAndroid,
  Button,
  Image,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-context';
import StudentMenu from './studentMenu';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {navigation} from 'react-navigation';

class Landingdex extends Component {
  constructor() {
    super();
    // this.openDrawer = this.openDrawer.bind(this);
  }

  static navigationOptions = {
    headerShown: false,
  };

  alert = item => {
    alert(item);
  };
  // openDrawer = () => {
  //   this.drawer.openDrawer();
  // };

  // closeDrawer = () => {
  //   this.drawer.closeDrawer();
  // };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.header1}>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.openDrawer()}>
              <Ionicons name="md-menu" size={32} color="white" />
            </TouchableNativeFeedback>
            <Image
              source={require('../../assets/absulogo.png')}
              style={{
                width: 40,
                height: 40,
                alignSelf: 'center',
                marginTop: -40,
              }}
            />
            <Text style={styles.welcomeLogo}>Welcome To Dashboard</Text>
          </View>
        </View>

        <ImageBackground
          source={require('../../assets/absubackround.png')}
          style={{
            width: '100%',
            height: '100%',
            opacity: 0.8,
          }}></ImageBackground>
      </View>

      // <View>
      //     <Button
      //     onPress={() => this.props.navigation.navigate('Notifications')}
      //     title="Go to notifications"
      //   > <Text>dhhjgjkkj</Text></Button>

      //   <Button
      //     onPress={() => this.props.navigation.openDrawer()}
      //     title="Drawer"
      //   />
      // </View>
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
    margin: 15,
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
