import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import {Table, TableWrapper, Row, Rows} from 'react-native-table-component';
import {Formik} from 'formik';
import {DrawerLayoutAndroid} from 'react-native-gesture-handler';
import StudentMenu from '../StudentContainer/studentMenu';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class ExampleThree extends Component {
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

  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Course Code', 'Course Title', 'Course Unit', 'Course Type'],
      widthArr1: [160, 280, 80, 160],
      tableData: [
        ['131', 'EED', '4', 'Compulsory'],
        ['160', 'MTH', '4', 'Compulsory'],
        ['131', 'GNS', '4', 'Compulsory'],
        ['131', 'GST', '4', 'Compulsory'],
      ],

      tableHeadOne: [
        'Course Code',
        'Course Title',
        'Course Unit',
        'Course Type',
        'Semester',
      ],
      widthArr: [160, 280, 80, 160, 180],
      tableDataOne: [
        ['121', 'EED', '4', 'Compulsory', 'First Semester'],
        ['160', 'MTH', '4', 'Compulsory', 'First Semester'],
      ],
    };
  }

  render() {
    const state = this.state;
    // const tableData = [];
    // for (let i = 0; i < 30; i += 1) {
    //   const rowData = [];
    //   for (let j = 0; j < 9; j += 1) {
    //     rowData.push(`${i}${j}`);
    //   }
    //   tableData.push(rowData);
    // }
    const tableData = [];

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
            <View style={styles.individualDetails}>
              <Text style={styles.detailsTitle}>Program:</Text>
              <Text> Undergraduate Regular</Text>
            </View>
            <View style={styles.individualDetails}>
              <Text style={styles.detailsTitle}>Faculty:</Text>
              <Text> Biological And Physical Sciences</Text>
            </View>
            <View style={styles.individualDetails}>
              <Text style={styles.detailsTitle}>Session:</Text>
              <Text> 20019/2020</Text>
            </View>
            <View style={styles.individualDetails}>
              <Text style={styles.detailsTitle}>Course of Study:</Text>
              <Text> Biochemistry</Text>
            </View>
          </View>
        </View>
        <ScrollView>
          <View style={styles.tableDescription}>
            <View>
              <Text style={styles.title}>First Semester Courses</Text>
            </View>
            <View>
              <Text style={styles.unitCourse}>Sum of Course Unit</Text>
              <Text style={styles.unitCourse}>Min Unit</Text>
              <Text style={styles.unitCourse}>Max Unit</Text>
              <Text style={styles.unitCourse}>Total Course</Text>
            </View>
          </View>
          <ScrollView horizontal={true}>
            <View>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                <Row
                  data={state.tableHead}
                  widthArr={state.widthArr1}
                  style={styles.header}
                  textStyle={styles.text}
                />
              </Table>
              <ScrollView style={styles.dataWrapper}>
                <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                  {/* {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />
                  ))
                } */}
                  <Rows
                    data={state.tableData}
                    widthArr={state.widthArr1}
                    style={[styles.row, {backgroundColor: '#F7F6E7'}]}
                    textStyle={styles.text}
                  />
                </Table>
              </ScrollView>
            </View>
          </ScrollView>

          <View style={styles.tableDescription}>
            <View>
              <Text style={styles.title}>Carry Over Courses</Text>
            </View>
            <View style={styles.unitCarryOverCourse}>
              <Text style={styles.unitCourse1}>Total Unit</Text>
              <Text style={styles.unitCourse1}>Total Course</Text>
            </View>
          </View>
          <ScrollView horizontal={true}>
            <View>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                <Row
                  data={state.tableHeadOne}
                  widthArr={state.widthArr}
                  style={styles.header}
                  textStyle={styles.text}
                />
              </Table>
              <ScrollView style={styles.dataWrapper}>
                <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                  {/* {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />
                  ))
                } */}
                  <Rows
                    data={state.tableDataOne}
                    widthArr={state.widthArr}
                    style={[styles.row, {backgroundColor: '#F7F6E7'}]}
                    textStyle={styles.text}
                  />
                </Table>
              </ScrollView>
            </View>
          </ScrollView>
        </ScrollView>
        <Formik
          initialValues={{
            coursecode: '',
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
                <View style={styles.textInputWrapper}>
                  <Text style={styles.textDescriprion}>
                    Fill in your Course Code respectively to register Course
                  </Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={handleChange('coursecode')}
                    value={values.coursecode}
                  />
                </View>

                <View style={styles.buttonWrapper}>
                  <View>
                    <TouchableOpacity
                      style={styles.invoiceButton}
                      onPress={handleSubmit}>
                      <Text style={styles.generateInv}>Register Course</Text>
                    </TouchableOpacity>
                  </View>

                  <View>
                    <TouchableOpacity
                      style={styles.invoiceButton1}
                      onPress={handleSubmit}>
                      <Text style={styles.generateInv1}>Print Course Form</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: '#fff',
  },
  header: {height: 50, backgroundColor: '#324AB2'},
  text: {textAlign: 'center', fontWeight: '100'},
  dataWrapper: {marginTop: -1},
  row: {height: 40},
  tableDescription: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  title: {
    marginTop: 38,
    fontWeight: 'bold',
  },
  unitCourse: {
    fontWeight: 'bold',
  },
  unitCarryOverCourse: {
    marginTop: 33,
  },
  unitCourse1: {
    fontWeight: 'bold',
  },

  textInput: {
    borderColor: '#DCDAD9',
    borderWidth: 1,
    borderRadius: 3,
    width: 329,
    height: 36,
  },
  formWrapper: {
    // backgroundColor: "#ffa94d",
    marginTop: 15,
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
    //  marginTop: 15,
    borderWidth: 1,
    width: 110,
    height: 35,
    borderRadius: 2,
    backgroundColor: '#324AB2',
    borderColor: '#324AB2',
    marginBottom: 15,
  },
  generateInv: {
    textAlign: 'center',
    paddingTop: 5,
    color: 'white',
  },
  invoiceButton1: {
    alignSelf: 'center',
    // marginTop: 15,
    borderWidth: 1,
    width: 117,
    height: 35,
    borderRadius: 2,
    backgroundColor: '#324AB2',
    borderColor: '#324AB2',
    marginBottom: 15,
  },
  generateInv1: {
    textAlign: 'center',
    paddingTop: 5,
    color: 'white',
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  otherDetails: {
    paddingBottom: 10,
    backgroundColor: '#ffa94d',
    padding: 5,
  },
  individualDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsTitle: {
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: '#324AB2',
    height: 55,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
