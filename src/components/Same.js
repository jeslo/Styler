import React from "react";
import { View,Text,StyleSheet, Alert } from "react-native";
export default class App extends React.Component {
value =this.props.name
render(){
    // console.warn('>>>>same>>',value)
  return(
  <Text>
      {this.props.name}
  </Text>
  );
}
}