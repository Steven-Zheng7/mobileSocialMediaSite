import React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import Login from './components/logIn';
import SignIn from './components/signin';
import Main from './components/main';
import Setting from './components/Setting';
import Party from './components/party';
import Friend from './components/Friend';
import Message from './components/Message';
import Create from './components/create';
import Reizo from './components/profileReizo'

const Stack= createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Login} />
        <Stack.Screen name="Sign In" component={SignIn} />
        <Stack.Screen name="Profile" component={Main} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Party" component={Party} />
        <Stack.Screen name="Friend List" component={Friend} />
        <Stack.Screen name="Messages" component={Message} />
        <Stack.Screen name="Create Account" component={Create} />
        <Stack.Screen name="Reizo" component={Reizo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



