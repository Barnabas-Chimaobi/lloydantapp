import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import {Formik} from 'formik';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class StaffLogin extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <AntDesign
            name="left"
            style={{
              fontSize: 25,
              paddingTop: 10,
              marginRight: 50,
              marginLeft: 15,
              color: 'white',
            }}
            onPress={() => {
              this.props.navigation.navigate('Dashboard');
            }}
          />
          <Image
            source={require('../../assets/absulogo.png')}
            style={{
              width: 40,
              height: 40,
              alignSelf: 'center',
              marginRight: 20,
            }}
          />
        </View>
        <ScrollView>
         
          <Formik
            initialValues={{
              regno: '',
              password: '',
            }}
            onSubmit={(values, {setSubmitting}) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
            // onSubmit={values => Alert.alert(JSON.stringify(values))}
          >
            {({handleChange, handleSubmit, values, errors}) => (
              <View style>
                <View style={styles.formWrapper}>
                <View style={styles.titleStyle}>
                 <Text style={{fontSize: 25}}>LOG IN TO YOUR ACCOUNT</Text>
                </View>
                  <View style={styles.textInputWrapper}>
                    <Text style={styles.textDescriprion}>STAFF ID</Text>
                    <TextInput
                      style={styles.textInput}
                      onChangeText={handleChange('regno')}
                      value={values.regno}
                    />
                  </View>
                  <View style={styles.textInputWrapper}>
                    <Text style={styles.textDescriprion}>PASSWORD</Text>
                    <TextInput
                      style={styles.textInput}
                      onChangeText={handleChange('password')}
                      value={values.password}
                    />
                  </View>
                  <View style={styles.password}>
                    <View style={styles.forgotPasswordButton}>
                      <TouchableOpacity
                        style={styles.invoiceButton1}
                        onPress={() => {
                          this.props.navigation.navigate('Password');
                        }}>
                        <Text style={styles.generateInv1}>
                          forgot password?
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View>
                      <TouchableOpacity
                        style={styles.invoiceButton}
                        onPress={handleSubmit}
                        onPress={() => {
                          this.props.navigation.navigate('StudentContainer');
                        }}>
                        <Text style={styles.generateInv}>LOGIN</Text>
                      </TouchableOpacity>
                    </View>
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
  container: {
    backgroundColor: '#ffa94d',
    flex: 1,
  },

  titleStyle: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },

  // headerContainer: {
  //   //  flex: 1,
  //    backgroundColor: '#ffa94d',

  //  },

  header1: {
    margin: 15,
  },
  textInput: {
    borderColor: '#EBEBEB',
    borderWidth: 1,
    backgroundColor: '#EBEBEB',
    borderRadius: 5,
    width: "98%",
    height: 36,
  },
  formWrapper: {
    backgroundColor: 'white',
    margin: 5,
    
  },
  textDescriprion: {
    marginBottom: 2,
  },
  textInputWrapper: {
    width: "100%",
    marginBottom: 10,
    alignSelf: 'center',
    marginLeft: 10
  },
  invoiceButton: {
    alignSelf: 'center',
    marginTop: 30,
    borderWidth: 1,
    width: 136,
    height: 35,
    borderRadius: 5,
    backgroundColor: '#324AB2',
    borderColor: '#324AB2',
    // marginBottom: 15
  },
  generateInv: {
    textAlign: 'center',
    paddingTop: 5,
    color: 'white',
  },
  header: {
    backgroundColor: '#324AB2',
    height: 55,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  password: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  
  },
  invoiceButton1: {
    alignSelf: 'center',
    marginTop: 30,
    width: 136,
    height: 35,

    // marginBottom: 15
  },
  generateInv1: {
    textAlign: 'center',
    paddingTop: 5,
    color: 'black',
  },
});













