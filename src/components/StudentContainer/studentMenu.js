import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

export default class StudentMenu extends Component {
  render() {
    return (
      <View style={styles.menuContainer}>
        <View style={styles.header}></View>
        <ScrollView>
          <View style={styles.touchables}>
            <View style={{width: 200, height: 40, margin: 7, borderRadius: 20}}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'left',
                    paddingTop: 7,
                    fontSize: 15,
                  }}>
                  Dashboard
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{width: 200, height: 40, margin: 7, borderRadius: 20}}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('ChangePassword');
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'left',
                    paddingTop: 7,
                    fontSize: 15,
                  }}>
                  Change Password
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{width: 200, height: 40, margin: 7, borderRadius: 20}}>
              <TouchableOpacity>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'left',
                    paddingTop: 7,
                    fontSize: 15,
                  }}>
                  Profile
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.touchables}>
            <View style={{width: 200, height: 40, margin: 7, borderRadius: 20}}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('SchoolFeesInvoice');
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'left',
                    paddingTop: 7,
                    fontSize: 15,
                  }}>
                  Invoice
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{width: 200, height: 40, margin: 7, borderRadius: 20}}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('PaySchoolFees');
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'left',
                    paddingTop: 7,
                    fontSize: 15,
                  }}>
                  Fees
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{width: 200, height: 40, margin: 7, borderRadius: 20}}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('AllPayment');
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'left',
                    paddingTop: 7,
                    fontSize: 15,
                  }}>
                  Receipts
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.touchables}>
            <View style={{width: 200, height: 40, margin: 7, borderRadius: 20}}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('CourseRegistration');
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'left',
                    paddingTop: 7,
                    fontSize: 15,
                  }}>
                  Course Registration
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{width: 200, height: 40, margin: 7, borderRadius: 20}}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('HostelRequest');
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'left',
                    paddingTop: 7,
                    fontSize: 15,
                  }}>
                  Hostel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuContainer: {
    backgroundColor: '#ffa94d',
    flex: 1,
  },
  touchables: {
    flex: 0.3,
    display: 'flex',
    alignItems: 'flex-start',
    // justifyContent: "left",
  },
  header: {
    backgroundColor: '#324AB2',
    flex: 1,
  },
});
