import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableNativeFeedback,
} from 'react-native';
import {Table, TableWrapper, Row, Rows} from 'react-native-table-component';
import {DrawerLayoutAndroid} from 'react-native-gesture-handler';
import StudentMenu from '../StudentContainer/studentMenu';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class AllPayment extends Component {
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
      tableHead: [
        'Item',
        'Bank',
        'Invoice No',
        'Confirmation Order No',
        'Amount(#)',
      ],
      widthArr1: [120, 180, 180, 160, 160],
      tableData: [
        [
          'School Fees',
          'Microfinance Bank',
          'ab01019362',
          '7348364838933783',
          '30000',
        ],
        ['Hostel Fees', 'GTBank', 'absu8263627', '56352662526262626', '800000'],
        [
          'School Fees',
          'Diamond Bank',
          'absu7382772827272727',
          '26522776',
          '450000',
        ],
        [
          'School Fees',
          'FIrst Bank',
          'absu82382978238',
          '836343737362',
          '94000',
        ],
      ],
    };
  }

  render() {
    const state = this.state;
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
          </View>
        </View>
        <ScrollView>
          <View style={styles.instruction}>
            <View style={{margin: 5}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                All Payment
              </Text>
            </View>
            <View style={{margin: 5}}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                Instructions
              </Text>
              <Text>
                The list of all payment is displayed here on the payment list.
                To print payment receipt or invoice, click on the item (first
                column) on payment list, a pop menu will appear with two links
                (invoice and receipt). Click on any one of your choice to print
                it.
              </Text>
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
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  header: {height: 50, backgroundColor: '#537791'},
  text: {textAlign: 'center', fontWeight: '100'},
  dataWrapper: {marginTop: -1},
  row: {height: 40, backgroundColor: '#E7E6E1'},
  instruction: {
    marginTop: 10,
    marginBottom: 10,
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
  header: {
    backgroundColor: '#324AB2',
    height: 55,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
