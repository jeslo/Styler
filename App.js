import React from "react";
import { View,Text,StyleSheet,TextInput } from "react-native";
import Same from './src/components/Same'
import TwoX from './src/components/TwoX'
import ThreeX from './src/components/ThreeX'
export default class App extends React.Component {

state = {
       text: ''
      }

render(){
  return(
    <View>
    <View style = {{
      flexDirection:'row', 
      justifyContent: 'space-between',
     marginTop: 50}}>
      <View style = {{width: 100,height:200,backgroundColor:'red',}}>
      <Same name = {this.state.text}/>

      </View>
      <View style = {{width: 100,height:200,backgroundColor:'green'}}>
      <TwoX name={this.state.text}/>

      </View>
      <View style = {{width: 100,height:200,backgroundColor:'blue'}}>
      <ThreeX name={this.state.text} />

      </View>
    </View>

    {/* <View style={{backgroundColor:'yellow'}}> */}

      <TextInput
      style = {styles.input}
      onChangeText={text => {
        // console.warn('>>>>>text', this.state.text)
        this.setState({text});
      }}/>

      

    {/* </View> */}
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
    
  },
  input: {
    color: '#000000',
    marginTop: 80,
    marginLeft: 50,
    height: 50,
    width: 150,
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#ffffff'
  }
})
