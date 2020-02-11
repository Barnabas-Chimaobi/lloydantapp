import React, {Component} from "react"
import {View, Text, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity, Picker} from "react-native"
import AntDesign from "react-native-vector-icons/AntDesign"
// import {Formik} from "Formik"
// import { ScrollView } from "react-native-gesture-handler";

export default class Invoice extends Component {
  state = {
    programme: "",
    course : "",
    jambno: "",
    formtype: "",
    surname: "",
    firstname: "",
    othernames: "",
    states: "",
    mobilephone: "",
    email: ""
  }

  // handleChangeText = ({ target }) => {
  //   const { name, value } = target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  handleChangeText(event) {
    this.setState({ name: event.target.value })
  }



  handleSubmit = (e) => {
    e.preventDefault()
    fetch("api/applicant/Acceptance/GenerateAcceptanceInvoice", {
     method: "POST",
     body: data,

     programme: this.state.programme,
        course : this.state.course,
        jambno: this.state.jambno,
        formtype: this.state.formtype,
        surname: this.state.surname,
        firstname: this.state.firstname,
        othernames: this.state.othernames,
        state: this.state.states,
        mobilephone: this.state.mobilephone,
        email: this.state.email
    }).then(response => {
      this.setState({
        programme: "",
        course : "",
        jambno: "",
        formtype: "",
        surname: "",
        firstname: "",
        othernames: "",
        states: "",
        mobilephone: "",
        email: ""
      })
      console.log(response, "invoice generated successfully")
      return response
    }).catch(err => {
      console.log(err, "an error occured")
      return err
    })
  }
  render () {
    return (
      <View style={styles.invoiceContainer}>
        <View style={styles.headerContainer}>
          <View>
            <AntDesign name="menu" style={{height: 15, width: 15}} />
          </View>
          <View style={styles.header1}>
              {/* <Image source={require()}/> */}
              <Text style={styles.post}>Post UME Appliction</Text>
              <Text style={styles.invoice}>invoice generation</Text>
          </View>
            
        </View>
        <ScrollView>
          <View style={styles.formWrapper}>
            <View style={styles.textInputWrapper}>
              <Text style={styles.textDescriprion}>Programme</Text>
              <TextInput style={styles.textInput} onChangeText={this.handleChangeText} value={this.state.name} name="programme"/>
              <View style={styles.pickdiv}>
                    <Picker
                      selectedValue={this.state.language}
                      style={{ height: 50, width: 225 }}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({ language: itemValue })
                      }
                    >
                      <Picker.Item label="" value="default" color="#041358" />
                      <Picker.Item
                        label="junior staff"
                        value="mf"
                        color="#041358"
                      />
                      <Picker.Item
                        label="senior staff"
                        value="ds"
                        color="#041358"
                      />
                    </Picker>
                  </View>
            </View>
            <View style={styles.textInputWrapper}>
              <Text style={styles.textDescriprion}>Course</Text>
              <TextInput style={styles.textInput} onChangeText={this.handleChangeText} value={this.state.course}/>
            </View>
            <View style={styles.textInputWrapper}>
              <Text style={styles.textDescriprion}>Jamb Number</Text>
              <TextInput style={styles.textInput} onChangeText={this.handleChangeText} value={this.state.jambno}/>
            </View>
            <View style={styles.textInputWrapper}>
              <Text style={styles.textDescriprion}>Form Type</Text>
              <TextInput style={styles.textInput} onChangeText={this.handleChangeText} value={this.state.formtype}/>
            </View>
            <View
                style={{
                  borderBottomColor: '#979797',
                  borderBottomWidth: 1.5,
                  marginBottom: 8,
                  marginTop: 8
                }}
              />

            <View style={styles.textInputWrapper}>
              <Text style={styles.textDescriprion}>Surname</Text>
              <TextInput style={styles.textInput} onChangeText={this.handleChangeText} value={this.state.surname}/>
            </View>
            <View style={styles.textInputWrapper}>
              <Text style={styles.textDescriprion}>First Name</Text>
              <TextInput style={styles.textInput} onChangeText={this.handleChangeText} value={this.state.firstname}/>
            </View>
            <View style={styles.textInputWrapper}>
              <Text style={styles.textDescriprion}>Other Names</Text>
              <TextInput style={styles.textInput} onChangeText={this.handleChangeText} value={this.state.othernames}/>
            </View>
            <View
                style={{
                  borderBottomColor: '#979797',
                  borderBottomWidth: 1.5,
                  marginBottom: 8,
                  marginTop: 8
                }}
              />

            <View style={styles.textInputWrapper}>
              <Text style={styles.textDescriprion}>State</Text>
              <TextInput style={styles.textInput} onChangeText={this.handleChangeText} value={this.state.states}/>
            </View>
            <View style={styles.textInputWrapper}>
              <Text style={styles.textDescriprion}>Mobile Phone</Text>
              <TextInput style={styles.textInput} onChangeText={this.handleChangeText} value={this.state.mobilephone}/>
            </View>
            <View style={styles.textInputWrapper}>
              <Text style={styles.textDescriprion}>Email</Text>
              <TextInput style={styles.textInput} onChangeText={this.handleChangeText} value={this.state.email}/>
            </View>
            <TouchableOpacity style={styles.invoiceButton} onPress={this.handleSubmit}>
              <Text style={styles.generateInv}>Generate Invoice</Text>
              </TouchableOpacity>
          </View>
        </ScrollView>
       

      </View>
    ) 
  }
}

const styles = StyleSheet.create({
 headerContainer: {
  //  flex: 1,
   backgroundColor: '#FCF0E3',

 },
 invoiceContainer: {
  flex: 1
 },
 post: {
   alignSelf: "center"
 },
 invoice: {
   alignSelf: "center",
 },
 header1: {
   margin: 15
 },
 textInput: {
   borderColor: "#EBEBEB",
   borderWidth: 1,
   backgroundColor: "#EBEBEB",
   borderRadius: 18,
   width: 329,
   height: 36
 },
 formWrapper: {
   backgroundColor: "#FCF8F5",
   margin: 10,
   flex: 1,
 },
 textDescriprion: {
   marginBottom: 2
 },
 textInputWrapper: {
   marginBottom: 10,
   alignSelf: "center"
 },
 invoiceButton: {
  alignSelf: "center",
  marginTop: 30,
  borderWidth: 1,
  width: 136 ,
  height: 35,
  borderRadius: 24,
  backgroundColor: "#6433A0",
  borderColor: "#6433A0",
  marginBottom: 15
 },
 generateInv: {
   textAlign: "center",
   paddingTop: 5,
   color: 'white'
 },
 post: {
   fontSize: 25,
   alignSelf: "center",

 },
 invoice: {
   fontSize: 15,
   alignSelf: "center"
 },
 pickdiv: {
  marginLeft: 100,
  marginTop: -50
}

})