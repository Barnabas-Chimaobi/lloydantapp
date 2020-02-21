import React, {Component} from "react" 
import {View, Text, StyleSheet} from "react-native"

export default class DashboardLand extends Component {
  render(){
    return (
      <View style={styles.container}>
         <Text>Logo</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
container: {
backgroundColor: "red"
}
})