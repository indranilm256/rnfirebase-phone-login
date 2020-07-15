import 'react-native-gesture-handler';
import React, {Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './App/Pages/Login'
import HomePage from './App/Pages/HomePage'
import Status from './App/Pages/Status'
const Stack = createStackNavigator();

class App extends Component{
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{title: 'Login'}}
          />
          <Stack.Screen 
            name="HomePage"
            component={HomePage}
            options={{title: 'HomePage'}}
          />
          <Stack.Screen
            name="Status"
            component={Status}
            options={{title: 'Status'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
