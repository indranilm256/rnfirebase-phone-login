import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet
} from 'react-native';

import firebase from 'react-native-firebase';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      phone: '',
      confirm: null,
      code: ''
    }
  }

  signInWithPhoneNumber = () => {
    firebase
    .auth()
    .signInWithPhoneNumber(this.state.phone)
    .then(confirm => {
      this.setState({confirm})
    })
    .catch(error => {
      alert(error.message)
      console.log(error)
    })
  }

  confirmCode =  () => {
    this.state.confirm
    .confirm(this.state.code)
    .then(success => {
      alert("you are successfully logged in")
    })
    .catch(error => {
      alert(error.message)
      console.log(error)
    })
  }

  render() {
    const {confirm, code, phone} = this.state;
    return(
      <View
      style={{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>
          Hello
        </Text>
        {!confirm && 
          <>
            <TextInput 
            keyboardType={'phone-pad'} 
            style={styles.numpad} 
            value={phone} 
            placeholder={'Enter phone number'}
            onChangeText={text => this.setState({phone: text})} />
            <Button
              title="Phone Number Sign In"
              onPress={() => this.signInWithPhoneNumber()}
            />
          </>
        }
        {confirm && 
          <>
            <TextInput 
            keyboardType={'number-pad'} 
            style={styles.numpad} 
            value={code} 
            placeholder={'Enter SMS Code'}
            onChangeText={text => this.setState({code: text})} />
            <Button title="Confirm Code" onPress={() => this.confirmCode()} />
          </>
        }
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  numpad: {
    borderWidth:0.545,
    justifyContent:'center',
    alignItems:'center',
    width:'90%'
  }
});