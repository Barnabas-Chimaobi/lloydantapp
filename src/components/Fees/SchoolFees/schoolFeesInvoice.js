import React, {Component} from 'react';
import {Formik} from 'formik';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Picker,
  DrawerLayoutAndroid,
  Dimensions,
  NestedScrollView,
  TouchableNativeFeedback,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StudentMenu from '../../StudentContainer/studentMenu';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';

export default class SchoolFeesInvoice extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableNativeFeedback
            onPress={() => this.props.navigation.openDrawer()}>
            <Ionicons
              name="md-menu"
              size={32}
              color="white"
              style={{marginLeft: 20, alignSelf: 'center'}}
            />
          </TouchableNativeFeedback>
          <Image
            source={require('../../../assets/absulogo.png')}
            style={{
              width: 40,
              height: 40,
              alignSelf: 'center',
              marginRight: 20,
            }}
          />
        </View>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <Formik
            initialValues={{
              session: '',
              program: '',
              course: '',
              surname: '',
              firstname: '',
              othernames: '',
              matricno: '',
              states: '',
              emailaddress: '',
              phoneno: '',
              level: '',
              paymentoption: '',
            }}
            onSubmit={values => Alert.alert(JSON.stringify(values))}>
            {({handleChange, handleSubmit, values, errors}) => (
              <View style={styles.container1}>
                <View style={styles.headerContainer}>
                  <View style={styles.header1}>
                    {/* <Image source={require()}/> */}
                    <Text style={styles.post}>School Fees Invoice</Text>
                    <Text style={styles.invoice}>
                      Provide your Programme, Choosen Course, fill other details
                      and Click Generate.{' '}
                    </Text>
                  </View>
                </View>

                <View style={styles.formWrapper}>
                  <View style={styles.description}>
                    <Text style={{fontSize: 22}}>Choose Programme</Text>
                    <Text style={{fontSize: 15}}>
                      Please enter your Hostel Fee Confirmation Order Number in
                      the box below to print your Hostel Slip
                    </Text>
                  </View>
                  <View style={styles.firstPartition}>
                    <View style={styles.textInputWrapper}>
                      <Text style={styles.textDescriprion}>Programme</Text>
                      <TextInput
                        style={styles.textInput}
                        onChangeText={handleChange('session')}
                        value={values.session}
                      />

                      {/* <Picker
                  style={styles.picker}
                  selectedValue={this.state.newData}
                  onValueChange={ (value) => ( this.setState({newData : value}) )}>
                  { this.dataList() }
              </Picker> */}
                    </View>
                    <View style={styles.textInputWrapper}>
                      <Text style={styles.textDescriprion}>Program</Text>
                      <TextInput
                        style={styles.textInput}
                        onChangeText={handleChange('program')}
                        value={values.program}
                      />
                      {/* <Picker
                  style={styles.picker}
                  selectedValue={this.state.newData}
                  onValueChange={ (value) => ( this.setState({newDepartment : value}) )}>
                  { this.departmentList() }
              </Picker> */}
                    </View>
                    <View style={styles.textInputWrapper}>
                      <Text style={styles.textDescriprion}>Course</Text>
                      <TextInput
                        style={styles.textInput}
                        onChangeText={handleChange('course')}
                        value={values.course}
                      />
                    </View>
                  </View>
                  <View style={styles.lineRule}>
                    <View
                      style={{
                        borderBottomColor: '#979797',
                        borderBottomWidth: 1.5,
                        marginBottom: 25,
                        marginTop: 25,
                      }}
                    />
                    <Text style={{fontSize: 22}}>Personsal Details</Text>
                  </View>

                  <View style={styles.secondPartition}>
                    <View style={styles.textInputWrapper}>
                      <Text style={styles.textDescriprion}>Surname</Text>
                      <TextInput
                        style={styles.textInput}
                        onChangeText={handleChange('surname')}
                        value={values.surname}
                      />
                    </View>
                    <View style={styles.textInputWrapper}>
                      <Text style={styles.textDescriprion}>First Name</Text>
                      <TextInput
                        style={styles.textInput}
                        onChangeText={handleChange('firstname')}
                        value={values.firstname}
                      />
                    </View>
                    <View style={styles.textInputWrapper}>
                      <Text style={styles.textDescriprion}>Other Names</Text>
                      <TextInput
                        style={styles.textInput}
                        onChangeText={handleChange('othernames')}
                        value={values.othernames}
                      />
                    </View>
                    <View style={styles.textInputWrapper}>
                      <Text style={styles.textDescriprion}>Matric Number</Text>
                      <TextInput
                        style={styles.textInput}
                        onChangeText={handleChange('matricno')}
                        value={values.matricno}
                      />
                    </View>

                    <View style={styles.textInputWrapper}>
                      <Text style={styles.textDescriprion}>State</Text>
                      <TextInput
                        style={styles.textInput}
                        onChangeText={handleChange('states')}
                        value={values.states}
                      />
                      {/* <Picker
                    style={styles.picker}
                    selectedValue={this.state.newState}
                    onValueChange={ (value) => ( this.setState({newState : value}) )}>
                    { this.stateList() }
                </Picker> */}
                    </View>
                    <View style={styles.textInputWrapper}>
                      <Text style={styles.textDescriprion}>Email Address</Text>
                      <TextInput
                        style={styles.textInput}
                        onChangeText={handleChange('emailaddress')}
                        value={values.emailaddress}
                      />
                    </View>
                    <View style={styles.textInputWrapper}>
                      <Text style={styles.textDescriprion}>Phone Number</Text>
                      <TextInput
                        style={styles.textInput}
                        onChangeText={handleChange('phoneno')}
                        value={values.phoneno}
                      />
                    </View>
                    <View style={styles.textInputWrapper}>
                      <Text style={styles.textDescriprion}>Level</Text>
                      <TextInput
                        style={styles.textInput}
                        onChangeText={handleChange('level')}
                        value={values.level}
                      />
                    </View>
                    <View style={styles.textInputWrapper}>
                      <Text style={styles.textDescriprion}>Payment Option</Text>
                      <TextInput
                        style={styles.textInput}
                        onChangeText={handleChange('paymentoption')}
                        value={values.paymentoption}
                      />
                      {/* <Picker
                    style={styles.picker}
                    selectedValue={this.state.newState}
                    onValueChange={ (value) => ( this.setState({newState : value}) )}>
                    { this.stateList() }
                </Picker> */}
                    </View>
                  </View>
                  <View>
                    <TouchableOpacity
                      style={styles.invoiceButton}
                      onPress={handleSubmit}>
                      <Text style={styles.generateInv}>Generate Invoice</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          </Formik>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    //  flex: 1,
    backgroundColor: '#ffa94d',
  },
  invoiceContainer: {
    flex: 1,
  },
  post: {
    alignSelf: 'center',
  },
  invoice: {
    alignSelf: 'center',
  },
  header1: {
    margin: 15,
  },

  formWrapper: {
    backgroundColor: '#FCF8F5',
    //  padding: 10,
    flex: 1,
  },
  textDescriprion: {
    marginBottom: 2,
  },
  textInputWrapper: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  textInput: {
    width: '98%',
    height: 36,
    borderColor: '#EAEAEA',
    borderWidth: 1.3,
  },
  invoiceButton: {
    alignSelf: 'flex-start',
    marginTop: 30,
    borderWidth: 1,
    width: 136,
    height: 35,
    borderRadius: 5,
    backgroundColor: '#1B61FF',
    borderColor: '#1B61FF',
    marginBottom: 50,
    marginLeft: 10,
  },
  generateInv: {
    textAlign: 'center',
    paddingTop: 5,
    color: 'white',
  },
  post: {
    fontSize: 25,
    alignSelf: 'flex-start',
  },
  invoice: {
    fontSize: 15,
    alignSelf: 'flex-start',
  },
  picker: {
    marginLeft: 10,
    marginTop: -40,
  },
  header: {
    backgroundColor: '#324AB2',
    height: 55,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container1: {
    margin: 15,
  },
  container: {
    backgroundColor: '#EAEAEA',
  },
  firstPartition: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 5,
  },
  secondPartition: {
    flex: 1,
    marginLeft: 10,
    marginRight: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  description: {
    margin: 10,
  },
  lineRule: {
    marginLeft: 12,
    marginRight: 12,
  },
});
