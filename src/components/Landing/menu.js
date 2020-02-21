import React, {Component} from "react"
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"

export default class Menu extends Component {
  render() {
    return(
      <View style={styles.menuContainer}>
        <View style={styles.header}>

        </View>
       <View style={styles.touchables}>
              <View style={{width: 200, height: 40, backgroundColor: '#88c0d0', margin:7, borderRadius: 20}}>
                  <TouchableOpacity>
                  <Text style={{color:"white", textAlign: "center", paddingTop: 7, fontSize:25}}> Students</Text>
                </TouchableOpacity>
              </View>
    
            <View style={{width: 200, height: 40, backgroundColor: '#88c0d0', margin:7, borderRadius: 20 }}>
                <TouchableOpacity>
                  <Text style={{color:"white", textAlign: "center", paddingTop: 7, fontSize:25}}>Staff</Text>
                </TouchableOpacity>
            </View>
          
            </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  menuContainer: {
    backgroundColor: "white",
    flex: 1,
  },
  touchables: {
    flex: 0.3,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#324AB2",
    flex: 0.1
  }
})