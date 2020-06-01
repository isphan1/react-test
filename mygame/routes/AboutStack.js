import React from 'react';
import { View, Text,Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../shared/Header';
import About from '../screens/About'


const Stack = createStackNavigator()

export default function aboutNavigator() {
  return (
      <Stack.Navigator initialRouteName='About'>
        <Stack.Screen name='About' component={About} options={{headerTitle:() => <Header title="About us"/>}}/>
      </Stack.Navigator>
  );
}
