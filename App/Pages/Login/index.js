import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  SafeAreaView
} from 'react-native';

import firebase from 'react-native-firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Login extends Component{

  constructor(props){
    super(props);
    this.state = {
      phone: '',
      confirm: null,
      code: ''
    }
  }

  navigation = (pageName) => {
    this.props.navigation.navigate(pageName);
  };

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
    const {phone} = this.state;
    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;
    if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                         // this value to authenticate with your backend server, if
                         // you have one. Use User.getToken() instead.
      }
      
    if (user) {
        // User is signed in.
        alert(`${phone} already signed in`)
        this.navigation('HomePage')
      } else {
        // No user is signed in.
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
  }

  render() {
    const {confirm, code, phone} = this.state;
    return(
    <SafeAreaView style={[styles.container, { backgroundColor: '#03a58f' }]}>
      <View style={styles.page}>
          <>
            <TextInput 
            keyboardType={'phone-pad'} 
            style={[styles.numpad, {marginTop: 20}]} 
            value={phone} 
            placeholder={'Phone number with Country code(+YY XXXXXXXXXX)'}
            onChangeText={text => this.setState({phone: text})} />
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.signInWithPhoneNumber()}
            >
                <Text>Phone Number Sign In</Text>
            </TouchableOpacity>
          </>
        {confirm && 
          <>
            <TextInput 
            keyboardType={'number-pad'} 
            style={[styles.numpad, {marginTop: 20}]} 
            value={code} 
            placeholder={'Enter SMS Code'}
            onChangeText={text => this.setState({code: text})} />
            <TouchableOpacity 
            style={styles.button}
            onPress={() => this.confirmCode()}>
                <Text>Verify Code</Text>
            </TouchableOpacity>
          </>
        }
      </View>
      </SafeAreaView>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0325a5'
    },
    page: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
  numpad: {
    borderWidth:0.5,
    marginTop:10,
    width: '90%',
    height: 40,
    borderColor: '#555',
    borderRadius: 5,
    paddingLeft: 10,
    color: '#fff',
    fontSize: 16
  },
  button: {
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0051ff',
    borderColor: '#555',
    borderWidth: 2,
    borderRadius: 5
  },
});