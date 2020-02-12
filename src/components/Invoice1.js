import React from 'react';
import { Button, TextInput, View, TouchableOpacity, StyleSheet, Text, ScrollView, Picker } from 'react-native';
import { Formik } from 'formik';
import AntDesign from "react-native-vector-icons/AntDesign"

const initialValues ={
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

const handleSubmit = (e) => {
  // e.preventDefault()
  fetch("http://97.74.6.243/portal_dev/api/applicant/Acceptance/GenerateAcceptanceInvoice", {
   method: "POST",
   headers: {
     'Content-Type': 'application/json',
     },
  //  body: data,
  body: JSON.stringify({ 
    "programme": initialValues.programme,
    "course": initialValues,
    "formtype": initialValues
}),

    //  programme: initialValues.programme,
    //   course : initialValues.course,
    //   jambno: initialValues.jambno,
    //   formtype: initialValues.formtype,
    //   surname: initialValues.surname,
    //   firstname: initialValues.firstname,
    //   othernames: initialValues.othernames,
    //   state: initialValues.states,
    //   mobilephone: initialValues.mobilephone,
    //   email: initialValues.email
  }).then(response => {
   console.log(response, "invoice generated successfully")

    return response
  }).catch(err => {
    console.log(err, "an error occured")
    return err
  })
}



const Invoice1 = props => (
  
  <Formik
    initialValues={{initialValues }}
    onSubmit ={handleSubmit}
    // onSubmit={values => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (

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
             <TextInput style={styles.textInput}   onChangeText={handleChange('programme')}
             onBlur={handleBlur('programme')}
             value={values.programme}/>
             
           </View>
           <View style={styles.textInputWrapper}>
             <Text style={styles.textDescriprion}>Course</Text>
             <TextInput style={styles.textInput} onChangeText={handleChange('course')}/>
           </View>
           <View style={styles.textInputWrapper}>
             <Text style={styles.textDescriprion}>Jamb Number</Text>
             <TextInput style={styles.textInput} onChangeText={handleChange('jambno')}/>
           </View>
           <View style={styles.textInputWrapper}>
             <Text style={styles.textDescriprion}>Form Type</Text>
             <TextInput style={styles.textInput} onChangeText={handleChange('formtype')} />
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
             <TextInput style={styles.textInput} onChangeText={handleChange('surname')}/>
           </View>
           <View style={styles.textInputWrapper}>
             <Text style={styles.textDescriprion}>First Name</Text>
             <TextInput style={styles.textInput} onChangeText={handleChange('firstname')} />
           </View>
           <View style={styles.textInputWrapper}>
             <Text style={styles.textDescriprion}>Other Names</Text>
             <TextInput style={styles.textInput} onChangeText={handleChange('othernames')} />
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
             <TextInput style={styles.textInput} onChangeText={handleChange('states')} />
           </View>
           <View style={styles.textInputWrapper}>
             <Text style={styles.textDescriprion}>Mobile Phone</Text>
             <TextInput style={styles.textInput} onChangeText={handleChange('mobilephone')} />
           </View>
           <View style={styles.textInputWrapper}>
             <Text style={styles.textDescriprion}>Email</Text>
             <TextInput style={styles.textInput} onChangeText={handleChange('email')} />
           </View>
           <TouchableOpacity style={styles.invoiceButton} onPress={handleSubmit}>
             <Text style={styles.generateInv}>Generate Invoice</Text>
             </TouchableOpacity>
         </View>
       </ScrollView>
      

     </View>
    )}
  </Formik>
);

export default Invoice1


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
