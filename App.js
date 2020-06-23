import React from "react";
import { View,Text,StyleSheet,TextInput } from "react-native";
export default class App extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        text: 'Jeslo'
      };
    
  }
render(){
  return(
    <View style= {styles.container}>
      
      <TextInput style = {styles.input}
      placeholderTextColor = '#c1c1c1'
      placeholder = 'Enter the value'
      onChangeText = {(text) => {
        
        this.setState({text});
      }}
      />
      <Text style = {{marginTop: 120, fontSize: 30}}>
        {this.state.text
        .split(' ')
        .map(text => text && "😍")
        .join(' ')}

      </Text>

    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: "center"
    
  },
  input: {
    marginTop: 80,
    height: 50,
    width: 200,
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    borderColor: '#23abab'
  }
})
