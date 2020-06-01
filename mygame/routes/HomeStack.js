import React from 'react';
import { View, Text,Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home'
import ReviewDetail from '../screens/ReviewDetail'
import Header from '../shared/Header';

const Stack = createStackNavigator()

export default function homeNavigator() {
  return (
      <Stack.Navigator initialRouteName='Home'
            // screenOptions={{
            //   headerStyle: {
            //     backgroundColor: '#bbb',
            //   },
            //   // headerTitleAlign:'center',
            //   headerTintColor: '#fff',
            //   headerTitleStyle: {
            //     fontWeight: 'bold',
            //   },
            // }}
      >
        <Stack.Screen name='Home' component={Home} options={{headerTitle:() => <Header title="GameZone"/>}}/>
        <Stack.Screen 
        
        // screenOptions={{
        //   headerStyle: {
        //     backgroundColor: '#bbb',
        //   },
        //   // headerTitleAlign:'center',
        //   headerTintColor: '#fff',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //   },
        // }}
        
        name='ReviewDetail' component={ReviewDetail} options={({ route }) => ({ title: route.params.title })} />
      </Stack.Navigator>
  );
}
