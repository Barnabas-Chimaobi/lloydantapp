
import React from 'react';
// import { StyleSheet, Text, View, Alert } from 'react-native';
import { Formik } from 'formik';
import {View, Text, TextInput, Image, StyleSheet, ScrollView, TouchableOpacity, Picker, Button} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign"
import SearchableDropdown from 'react-native-searchable-dropdown';
import { Dropdown } from 'react-native-material-dropdown';
// import * as Yup from 'yup';

export default class App extends React.Component {

  state = {
       serverData: [],
       newData: null,
       department: [],
       newDepartment: null,
       states: [],
       newState: null

       
  }
    componentDidMount() {
      fetch('http://97.74.6.243/portal_dev/api/Programme')
        .then(response => response.json())
        .then(responseJson => {
          //Successful response from the API Call
          this.setState(prevState=>({
            serverData: prevState.serverData.concat(responseJson)
            //adding the new data in Data Source of the SearchableDropdown
          }));
        })
        .catch(error => {
          console.error(error);
      });

      fetch("http://97.74.6.243/portal_dev/api/ProgrammeDepartment/{programmeId}")
      .then(response =>response.json())
      .then(anotherResponse =>{
        this.setState(prevState=>({
          department: prevState.department.concat(anotherResponse)
        }))
      }).catch(err =>{
        console.log(err)
      })
      // console.log(department)
      
      fetch("http://97.74.6.243/portal_dev/api/State")
      .then(response =>response.json())
      .then(response1 =>{
        this.setState(prevState=>({
          states: prevState.states.concat(response1)
        }))
      }).catch(err =>{
        console.log(err)
      })

    
    }

    dataList = () =>{
      return( this.state.serverData.map( (x, i) => { 
            return( <Picker.Item label={x.name} key={i}  value={x.id}  />)} ));
   }

   departmentList = () => {
     return(this.state.department.map((y, z)=>{
       return(<Picker.Item label={y.departmentName} key={z} value={y.id}/>)
       
     }))
     
    }

    stateList = () => {
      return(this.state.states.map((y, z)=>{
        return(<Picker.Item label={y.name} key={z} value={y.id}/>)
        
      }))
    }
   
    
  render() {
    // const {list} = this.state
    // const gotten = this.state.serverData.map((item)=>{
    //    return item
    // })
    //  console.log(Object.entries(gotten))

    // //  const {list} = this.state
    const got = this.state.department.map((item)=>{
       return item
    })
     console.log(Object.entries(got))

  //    const got = this.state.states.map((item)=>{
  //     return item
  //  })
  //   console.log(Object.entries(got))

    return (
      <View style={styles.invoiceContainer}>
        <Formik
          initialValues={{ programme: "",
          course : "",
          jambno: "",
          formtype: "",
          surname: "",
          firstname: "",
          othernames: "",
          states: "",
          mobilephone: "",
          email: "" }}
          onSubmit={values => Alert.alert(JSON.stringify(values))}
        >
          {
           ({ handleChange, handleSubmit, values, errors }) => (
        <View style>

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

          <ScrollView contentContainerStyle={{flexGrow:1}}>
          <View style={styles.formWrapper}>
            <View style={styles.textInputWrapper}>

              <Text style={styles.textDescriprion}>Programme</Text>
              <TextInput style={styles.textInput} onChangeText={handleChange("programme")} value={values.programme}/>

              <Picker
                    style={styles.picker}
                    selectedValue={this.state.newData}
                    onValueChange={ (value) => ( this.setState({newData : value}) )}>
                    { this.dataList() }
                </Picker>
           
            </View>
            <View style={styles.textInputWrapper}>
              <Text style={styles.textDescriprion}>Department</Text>
              <TextInput style={styles.textInput} onChangeText={handleChange("course")} value={values.course}/>
              <Picker
                    style={styles.picker}
                    selectedValue={this.state.newData}
                    onValueChange={ (value) => ( this.setState({newDepartment : value}) )}>
                    { this.departmentList() }
                </Picker>
           
            </View>
            <View style={styles.textInputWrapper}>
              <Text style={styles.textDescriprion}>Jamb Number</Text>
              <TextInput style={styles.textInput} onChangeText={handleChange("jambno")} value={values.jambno}/>
            </View>
            <View style={styles.textInputWrapper}>
              <Text style={styles.textDescriprion}>Form Type</Text>
              <TextInput style={styles.textInput}onChangeText={handleChange("formtype")} value={values.formtype}/>
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
              <TextInput style={styles.textInput} onChangeText={handleChange("surname")} value={values.surname}/>
            </View>
            <View style={styles.textInputWrapper}>
              <Text style={styles.textDescriprion}>First Name</Text>
              <TextInput style={styles.textInput} onChangeText={handleChange("firstname")} value={values.firstname}/>
            </View>
            <View style={styles.textInputWrapper}>
              <Text style={styles.textDescriprion}>Other Names</Text>
              <TextInput style={styles.textInput} onChangeText={handleChange("othernames")} value={values.othernames}/>
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
              <TextInput style={styles.textInput} onChangeText={handleChange("states")} value={values.states}/>
              <Picker
                    style={styles.picker}
                    selectedValue={this.state.newState}
                    onValueChange={ (value) => ( this.setState({newState : value}) )}>
                    { this.stateList() }
                </Picker>
            </View>
            <View style={styles.textInputWrapper}>
              <Text style={styles.textDescriprion}>Mobile Phone</Text>
              <TextInput style={styles.textInput} onChangeText={handleChange("mobilephone")} value={values.mobilephone}/>
            </View>
            <View style={styles.textInputWrapper}>
              <Text style={styles.textDescriprion}>Email</Text>
              <TextInput style={styles.textInput} onChangeText={handleChange("email")} value={values.email}/>
            </View>
            <View>
            <TouchableOpacity style={styles.invoiceButton} onPress={handleSubmit}>
              <Text style={styles.generateInv} >Generate Invoice</Text>
            </TouchableOpacity>
            </View>
          
          </View>
        </ScrollView>
              </View>
            )
          }
        </Formik>
      </View>
    );
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
   picker: {
    marginLeft: 10,
    marginTop: -40
  }
  
})








