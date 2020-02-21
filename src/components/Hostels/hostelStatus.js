import React, {Component} from "react" 
import {View, Text, StyleSheet, ScrollView,TextInput, TouchableOpacity, Image, TouchableNativeFeedback} from "react-native"
import {Formik} from "formik"
import Ionicons from "react-native-vector-icons/Ionicons"

export default class HostelRequest extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
        <TouchableNativeFeedback onPress={()=> this.props.navigation.openDrawer()}>
                <Ionicons name="md-menu" size={32} color="white" style={{marginLeft: 20, alignSelf: "center",}} />
          </TouchableNativeFeedback>
           <Image source={require("../../assets/absulogo.png")} style={{width: 40, height: 40, alignSelf: "center", marginRight: 20}}/>        
        </View>
        <View  style={styles.formik}>
        <Formik
          initialValues={{ confirmorderno: "" }}
          onSubmit={values => Alert.alert(JSON.stringify(values))}
        >
          {
           ({ handleChange, handleSubmit, values, errors }) => (
        <View style={styles.formik1}>

          <View style={styles.headerContainer}>
            <View style={styles.header1}>
              {/* <Image source={require()}/> */}
              <Text style={styles.hostelTitle}>Hostel Fees</Text>
              <View style={styles.lineRule}>

              </View>
              <Text style={styles.hostelRequest} >Please enter your Hostel Fee Confirmation Order Number in the box below to print your Hostel Slip</Text>
           </View>
            
          </View>

          <ScrollView contentContainerStyle={{flexGrow:1}}>
          <View style={styles.formWrapper}>
            <View style={styles.textInputWrapper}>

              <Text style={styles.textDescriprion}>Confirm Order</Text>
              <TextInput style={styles.textInput} onChangeText={handleChange("confirmorderno")} value={values.confirmorderno} placeholder="Confirmation Order Number"/>

             
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitText} >Submit</Text>
            </TouchableOpacity>
            </View>
          
          </View>
        </ScrollView>
              </View>
            )
          }
        </Formik>
        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#324AB2",
         height: 55,
         display: "flex",
         flexDirection: "row",
         justifyContent: "space-between",
      
  },
 formik: {
   display: "flex",
   justifyContent: "flex-start",
   margin: 10,
   backgroundColor: "white"
 },
 container: {
   backgroundColor: "#ffa94d",
   flex: 1
 },
 formik1: {
   margin: 10
 },
 hostelTitle: {
   fontSize: 20,
   marginBottom: 20
 },
 hostelRequest: {
   marginBottom: 18,

 },
 lineRule:{
   borderWidth: 0.3,
   marginBottom: 15
 },
 textInput: {
   borderWidth: 0.5,
   borderColor: "gray",
   marginTop: 5
},
submitButton: {
  backgroundColor: "#1F5EFD",
  width: 100,
  marginTop: 15,
  height: 30
},
submitText: {
  textAlign: "center",
  color: "white",
  paddingTop: 5
}
})