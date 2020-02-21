import React from 'react';
// import { StyleSheet, Text, View, Alert } from 'react-native';
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
  Button,
  TouchableNativeFeedback,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DrawerLayoutAndroid} from 'react-native-gesture-handler';
import StudentMenu from '../StudentContainer/studentMenu';

// import * as Yup from 'yup';

export default class CheckResult extends React.Component {
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
    return (
      <View style={styles.invoiceContainer}>
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
            source={require('../../assets/absulogo.png')}
            style={{
              width: 40,
              height: 40,
              alignSelf: 'center',
              marginRight: 20,
            }}
          />
        </View>
        <View style={styles.personalDetailsWrapper}>
          <View style={styles.name}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                backgroundColor: '#ffa94d',
                paddingLeft: 5,
              }}>
              Eke John Doe (400)
            </Text>
          </View>
          <View style={styles.otherDetails}>
            <View style={styles.individualDetails}>
              <Text style={styles.detailsTitle}>Matric Number:</Text>
              <Text> 13/89501</Text>
            </View>
          </View>
        </View>
        <Formik
          initialValues={{matricno: '', course: '', level: ''}}
          onSubmit={values => Alert.alert(JSON.stringify(values))}>
          {({handleChange, handleSubmit, values, errors}) => (
            <ScrollView>
              <View style={styles.formWrapper}>
                <View style={styles.textInputWrapper}>
                  <Text style={styles.textDescriprion}>Matric No</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={handleChange('matricno')}
                    value={values.matricno}
                  />
                </View>
                <View style={styles.textInputWrapper}>
                  <Text style={styles.textDescriprion}>Course of Study</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={handleChange('course')}
                    value={values.course}
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

                <TouchableOpacity
                  style={styles.invoiceButton}
                  onPress={handleSubmit}>
                  <Text style={styles.generateInv}>Check Result</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          )}
        </Formik>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  textInput: {
    borderColor: '#EBEBEB',
    borderWidth: 1,
    backgroundColor: '#EBEBEB',
    borderRadius: 5,
    width: 329,
    height: 36,
  },
  formWrapper: {
    backgroundColor: '#FCF8F5',
    margin: 10,
    flex: 1,
  },
  textDescriprion: {
    marginBottom: 2,
  },
  textInputWrapper: {
    marginBottom: 10,
    alignSelf: 'center',
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
    marginBottom: 15,
  },
  generateInv: {
    textAlign: 'center',
    paddingTop: 5,
    color: 'white',
  },
  post: {
    fontSize: 25,
    alignSelf: 'center',
  },
  invoice: {
    fontSize: 15,
    alignSelf: 'center',
  },

  header: {
    backgroundColor: '#324AB2',
    height: 55,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  personalDetailsWrapper: {
    backgroundColor: '#ffa94d',
  },
  individualDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  detailsTitle: {
    fontWeight: 'bold',
  },
});
