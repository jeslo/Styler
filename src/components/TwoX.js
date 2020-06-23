import React from "react";
import { View,Text,StyleSheet, Alert } from "react-native";
export default class App extends React.Component {

render(){
  return(
  <Text>{this.props.name}</Text>
  );
}
}