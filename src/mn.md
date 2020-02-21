import React, {Component} from "react"
import {View, Text, StyleSheet,ImageBackground,TouchableOpacity,TouchableNativeFeedback,DrawerLayoutAndroid} from "react-native"
import SafeAreaView from "react-native-safe-area-context"
import StudentMenu from "./studentMenu"
import Ionicons from "react-native-vector-icons/Ionicons"
import { navigation } from 'react-navigation';


class Landingdex extends Component {
   constructor() {
        super();
        this.openDrawer = this.openDrawer.bind(this);
    }

  static navigationOptions = {
    headerShown: false,
  
  };

  alert = item => {
    alert(item);
  };
  openDrawer = () => {
    this.drawer.openDrawer();
  };

  closeDrawer = () => {
    this.drawer.closeDrawer();
  };
  




  render() {
    return(
    
    <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition= "left"
      renderNavigationView={() => (
        <StudentMenu
          navigation={this.props.navigation}
          closeDrawer={this.closeDrawer}
        />
      )}
      ref={_drawer => {
        this.drawer = _drawer;
      }}

      >
        <View style={styles.container}>
          <View style={styles.headerContainer}>
           
            <View style={styles.header1}>
          
              <TouchableNativeFeedback onPress={()=> this.openDrawer()}>
              <Ionicons name="md-menu" size={32} color="white"  />
              </TouchableNativeFeedback>
  
              <Text style={styles.welcomeLogo}>Welcome To Dashboard</Text>
            </View>
          
          </View>

          <ImageBackground source={require("../../assets/absubackround.png")} style={{width: '100%', height: '100%', opacity: 0.8}}>
           {/* <View style={styles.touchables}>
              <View style={{width: 300, height: 80, backgroundColor: "#ffa94d", margin:7, borderRadius: 20}}>
                  <TouchableOpacity onPress={() => {
                this.props.navigation.navigate("StudentLogin")}}>
                  <Text style={{color:"black", textAlign: "center", paddingTop: 25, fontSize:25}}>New Students </Text>
                </TouchableOpacity >
              </View>
            <View style={{width: 300, height: 80, backgroundColor: "#ffa94d", margin:7, borderRadius: 20}}>
                <TouchableOpacity onPress={() => {
                this.props.navigation.navigate("StudentLogin")}}>
                  <Text style={{color:"black", textAlign: "center", paddingTop: 25, fontSize:25}}>Returning Students</Text>
                </TouchableOpacity>
            </View>
            <View style={{width: 300, height: 80, backgroundColor: "#ffa94d", margin:7, borderRadius: 20 }}>
                <TouchableOpacity onPress={() => {
                this.props.navigation.navigate("StaffLogin")}}>
                  <Text style={{color:"black", textAlign: "center", paddingTop: 25, fontSize:25}}>Staff</Text>
                </TouchableOpacity>
            </View>
          
            </View> */}
          
          </ImageBackground>
        </View>
      </DrawerLayoutAndroid>
    
     
     
    )
  }
}

export default Landingdex




const styles = StyleSheet.create({

  headerContainer: {
    //  flex: 1,
     backgroundColor: '#324AB2',
  
   },
   header1: {
     margin: 15
   },
  absuMobile: {
    alignSelf: "flex-start",
    marginLeft: 20,
    color: "white",
    fontSize: 20
  },
  welcomeLogo: {
    alignSelf: "center",
    color: "white"
  },
  touchables: {
    flex: 0.6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
})










import {createAppContainer} from 'react-navigation'
import {createStackNavigator,CreatDrawerNavigator} from "react-navigation-stack"
import Landingdex from "./src/components/Landing/landingdex"
import StudentLogin from "./src/components/Landing/studentLogin"
import StaffLogin from "./src/components/Landing/staffLogin"
import StudentContainer from "./src/components/StudentContainer/studentContainer"
import HostelRequest from "./src/components/Hostels/hostelRequest"
import SchoolFeesInvoice from "./src/components/Fees/SchoolFees/schoolFeesInvoice"
import CourseRegistration from "./src/components/CourseRegistration/courseRegistration"
import CheckResult from "./src/components/results/checkResults"
import AllPayment from "./src/components/Receipts/allPayment"
import ChangePassword from "./src/components/changepassword/changePassword"
import PaySchoolFees from "./src/components/Fees/SchoolFees/paySchoolFees"
import HostelStatus from "./src/components/Hostels/hostelStatus"
const AppNavigator = createStackNavigator(
{
Landingdex,
StudentContainer,
StudentLogin,
StaffLogin,
HostelRequest,
SchoolFeesInvoice,
CourseRegistration,
CheckResult,
AllPayment,
ChangePassword,
PaySchoolFees,
HostelStatus

},
{
  initialRoutename: "Landingdex"
  // headerMode: "none"
}
)

AppContainer = createAppContainer(AppNavigator);

export default AppContainer;